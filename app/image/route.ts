import { Transformer } from '@napi-rs/image'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const imageArrayBuffer = await req.arrayBuffer()
  const buffer = Buffer.from(imageArrayBuffer)
  const transformer = new Transformer(buffer)
  const metadata = await transformer.metadata()
  return NextResponse.json(metadata)
}