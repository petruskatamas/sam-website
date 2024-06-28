import { InternalOfficeEmailTemplate } from '@/components/email-templates/internal-office'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendOfficeForm(values: any) {
  //@ts-ignore
  const data = await resend.emails.send({
    from: 'SimpleAccounting <noreply@resend.dev>',
    to: 'support@simpleaccounting.hu',
    subject: 'Simple Accounting - Kapcsolatfelvételi értesítés',
    react: InternalOfficeEmailTemplate({
      officePerson: values.officePerson,
      officeName: values.officeName,
      numOfCompanies: values.numOfCompanies,
      usedPrograms: values.usedPrograms,
      email: values.email,
      phone: values.phone,
      note: values.note
    })
  })
  console.log(data)
  return data
}
