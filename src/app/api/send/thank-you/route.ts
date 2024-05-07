import { ThankYouEmailTemplate } from '@/components/email-templates/thank-you'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const values = await req.json()
  try {
    const data = await resend.emails.send({
      from: 'SimpleAccounting <noreply@simpleaccounting.hu>',
      to: values.email,
      subject: 'Kapcsolatfelvételi értesítés',
      react: ThankYouEmailTemplate({ company: values.company, person: values.person }),
      text: ''
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
