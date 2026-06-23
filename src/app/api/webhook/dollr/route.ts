import { NextRequest, NextResponse } from 'next/server'
import { getAdminDb } from '@/lib/firebase-admin'
import { createClient } from '@supabase/supabase-js'
import { Timestamp } from 'firebase-admin/firestore'

function getSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

  if (!url || !serviceKey) {
    throw new Error(
      'Supabase configuration missing: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY required'
    )
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

/**
 * POST /api/donations/webhook/dollr
 * Webhook endpoint for Dollr payment notifications
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json()
    console.log('[Webhook] Received Dollr webhook:', JSON.stringify(body, null, 2))

    // Validate webhook signature (if Dollr requires it)
    // TODO: Implement signature verification with Dollr

    const { event, data } = body

    // Handle different event types
    switch (event) {
      case 'execution.completed':
      case 'payment.completed':
        return handlePaymentCompleted(data)
      case 'execution.failed':
      case 'payment.failed':
        return handlePaymentFailed(data)
      default:
        console.log('[Webhook] Unknown event type:', event)
        return NextResponse.json({ success: true }, { status: 200 })
    }
  } catch (error) {
    console.error('[Webhook] Error processing webhook:', error)
    return NextResponse.json(
      { success: false, error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handlePaymentCompleted(data: any): Promise<NextResponse> {
  try {
    const referenceId = data.reference_id || data.id
    console.log('[Webhook] Payment completed for reference:', referenceId)

    // Update Firestore
    const db = getAdminDb()
    const donationQuery = await db
      .collection('donations')
      .where('referenceId', '==', referenceId)
      .limit(1)
      .get()

    if (!donationQuery.empty) {
      const donationDoc = donationQuery.docs[0]
      await donationDoc.ref.update({
        status: 'completed',
        dollrStatus: data.status || 'completed',
        transactionDate: Timestamp.now(),
        updatedAt: Timestamp.now(),
        completedAt: Timestamp.now(),
      })
      console.log('[Webhook] Updated Firestore donation:', donationDoc.id)
    }

    // Update Supabase
    const supabase = getSupabaseAdminClient()
    const { error: supabaseError } = await supabase
      .from('donations')
      .update({
        status: 'completed',
        dollr_status: data.status || 'completed',
        transaction_date: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        completed_at: new Date().toISOString(),
      })
      .eq('reference_id', referenceId)

    if (supabaseError) {
      console.error('[Webhook] Supabase update error:', supabaseError)
    } else {
      console.log('[Webhook] Updated Supabase donation for reference:', referenceId)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[Webhook] Error handling payment completed:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to handle payment completion' },
      { status: 500 }
    )
  }
}

async function handlePaymentFailed(data: any): Promise<NextResponse> {
  try {
    const referenceId = data.reference_id || data.id
    console.log('[Webhook] Payment failed for reference:', referenceId)

    // Update Firestore
    const db = getAdminDb()
    const donationQuery = await db
      .collection('donations')
      .where('referenceId', '==', referenceId)
      .limit(1)
      .get()

    if (!donationQuery.empty) {
      const donationDoc = donationQuery.docs[0]
      await donationDoc.ref.update({
        status: 'failed',
        dollrStatus: data.status || 'failed',
        notes: data.error_message || 'Payment failed',
        updatedAt: Timestamp.now(),
      })
      console.log('[Webhook] Updated Firestore donation to failed:', donationDoc.id)
    }

    // Update Supabase
    const supabase = getSupabaseAdminClient()
    const { error: supabaseError } = await supabase
      .from('donations')
      .update({
        status: 'failed',
        dollr_status: data.status || 'failed',
        admin_notes: data.error_message || 'Payment failed',
        updated_at: new Date().toISOString(),
      })
      .eq('reference_id', referenceId)

    if (supabaseError) {
      console.error('[Webhook] Supabase update error:', supabaseError)
    } else {
      console.log('[Webhook] Updated Supabase donation to failed for reference:', referenceId)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[Webhook] Error handling payment failed:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to handle payment failure' },
      { status: 500 }
    )
  }
}
