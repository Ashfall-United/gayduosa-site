import { NextRequest, NextResponse } from 'next/server'
import { dollr } from '@/lib/donation/dollr'

/**
 * GET /api/donations/detect-provider?phone=...
 * Detects the mobile money provider (MTN, Orange, etc.) from a phone number using Dollr API
 */
export async function GET(req: NextRequest) {
  try {
    const phone = req.nextUrl.searchParams.get('phone')

    if (!phone) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      )
    }

    // Call Dollr predictions API to detect provider
    try {
      console.log('[Detect Provider] Getting token...')
      const token = await dollr.getAccessToken()
      console.log('[Detect Provider] Token obtained, calling Dollr API with phone:', phone)

      const response = await fetch(
        `https://api.heydollr.app/v1/predictions/mmo-provider-info?phone=${encodeURIComponent(phone)}&operation_type=COLLECTION`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      console.log('[Detect Provider] Dollr response status:', response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Dollr prediction error:', response.status, response.statusText, errorText)
        return NextResponse.json(
          { error: `Failed to detect provider: ${response.status} ${response.statusText}`, details: errorText },
          { status: response.status }
        )
      }

      const data = await response.json()
      console.log('[Detect Provider] Dollr API response:', JSON.stringify(data, null, 2))

      return NextResponse.json({
        provider: data.payment_method,
        method: data.payment_method,
      })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.error('Dollr API error:', errorMessage, error)
      return NextResponse.json(
        { error: 'Failed to detect provider', details: errorMessage },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Provider detection error:', error)
    return NextResponse.json(
      { error: 'Failed to detect provider' },
      { status: 500 }
    )
  }
}
