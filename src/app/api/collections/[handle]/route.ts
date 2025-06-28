import { getCollectionProducts } from '@/lib/fourthwall';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
  handle: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  const resolvedParams = await params;
  const handle = resolvedParams.handle;
  const searchParams = request.nextUrl.searchParams;
  const currency = searchParams.get('currency') || 'USD';

  try {
    // Fetch products with a high limit to ensure we get all products
    const products = await getCollectionProducts({
      collection: handle,
      currency,
      limit: 100 // Set a high limit to get all products
    });

    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error fetching collection products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch collection products' },
      { status: 500 }
    );
  }
}
