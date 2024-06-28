import { InternalCompanyEmailTemplate } from '@/components/email-templates/internal-company'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_dP4gzB2v_C5zF1fjEitmfjnPkosMm49EQ')

export async function sendCompanyForm(values: any) {
  //@ts-ignore
  const data = await resend.emails.send({
    from: 'SimpleAccounting <noreply@resend.dev>',
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
