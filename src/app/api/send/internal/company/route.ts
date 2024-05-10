import { InternalCompanyEmailTemplate } from '@/components/email-templates/internal-company'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const values = await req.json()
  //@ts-ignore
  const data = await resend.emails.send({
    from: 'SimpleAccounting <noreply@resend.dev>',
    // to: `${values.email}`,
    to: 'support@simpleaccounting.hu',
    subject: 'Simple Accounting - Kapcsolatfelvételi értesítés',
    react: InternalCompanyEmailTemplate({
      companyPerson: values.companyPerson,
      companyName: values.companyName,
      email: values.email,
      phone: values.phone,
      note: values.note
    })
  })
  console.log(data)
  return NextResponse.json(data)
}
