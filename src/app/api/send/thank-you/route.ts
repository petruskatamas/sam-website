import { ThankYouEmailTemplate } from '@/components/email-templates/thank-you'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const values = await req.json()
  //@ts-ignore
  const data = await resend.emails.send({
    from: 'SimpleAccounting <noreply@resend.dev>',
    to: `${values.email}`,
    // for testing use below
    // to: 'support@simpleaccounting.hu',
    subject: 'Simple Accounting - Kapcsolatfelvételi értesítés',
    react: ThankYouEmailTemplate({
      company: values.officeName ? values.officeName : values.companyName,
      person: values.officePerson ? values.officePerson : values.companyPerson,
      email: values.email,
      phone: values.phone,
      note: values.note,
      numOfCompanies: values.numOfCompanies ? values.numOfCompanies : undefined,
      usedPrograms: values.usedPrograms ? values.usedPrograms : undefined
    })
  })
  console.log(data)
  return NextResponse.json(data)
}
