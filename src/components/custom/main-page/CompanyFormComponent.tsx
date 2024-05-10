'use client'
import React, { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { SendHorizonalIcon } from 'lucide-react'
import Link from 'next/link'
import { useToast } from '@/components/ui/use-toast'

export const phoneRegex = /^\+3620|^\+3630|^\+3670|^\+361|^\+3631/

const companyFormSchema = z.object({
  email: z.string().email({
    message: 'Érvénytelen e-mail cím!'
  }),
  phone: z.string().refine((data) => phoneRegex.test(data), {
    message: 'Érvénytelen telefonszám!'
  }),
  companyName: z.string(),
  companyPerson: z.string(),
  note: z
    .string()
    .max(200, {
      message: 'Megjegyzés maximum hossza 200 karakter'
    })
    .optional(),
  terms: z.boolean().refine((data) => data, {
    message: 'Kötelező!'
  }),
  newsletter: z.boolean().optional()
})

const CompanyFormComponent = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof companyFormSchema>>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      email: '',
      phone: '',
      companyPerson: '',
      companyName: '',
      note: '',
      terms: false,
      newsletter: false
    }
  })

  const onCompanySubmit = async (values: z.infer<typeof companyFormSchema>) => {
    try {
      const result = await fetch('/api/send/internal/company', {
        method: 'POST',
        body: JSON.stringify(values)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          return fetch('/api/send/thank-you', {
            method: 'POST',
            body: JSON.stringify(values)
          }).then((res) => res.json())
        })
      return result
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Váratlan hiba!',
        description: 'Kérjük próbálja újra később.'
      })
    }
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset(form.formState.defaultValues)
      toast({
        variant: 'success',
        title: 'Elküldve!',
        description: 'Köszönjük érdeklődését!'
      })
    }
  }, [form.formState.isSubmitSuccessful, form, toast])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onCompanySubmit)}
        className="space-y-3 py-4 px-6 shadow-lg rounded-lg border-slate-200/50 border"
      >
        <div className="flex flex-row gap-3 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Telefonszám" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Cég neve" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyPerson"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Kapcsolattartó neve" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Megjegyzés érdeklődésével kapcsolatban"
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex flex-col gap-3 pt-3">
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row gap-2 h-5 items-center">
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-[12px] font-normal leading-3 text-slate-500 pb-[6px]">
                  Elfogadom az{' '}
                  <Link href={'/'} className="underline">
                    ÁSZF
                  </Link>
                  * tartalmát
                </FormLabel>
                <FormMessage className="text-[12px] font-normal leading-3 pb-[6px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem className="flex flex-row h-5 gap-2 items-center">
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-[12px] font-normal text-slate-500 pb-[6px]">
                  Feliratkozom a hírlevélre
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full h-fit pt-6">
          <Button
            type="submit"
            variant="secondary"
            className="w-full flex flex-row items-center gap-4 text-lg shadow-md"
          >
            Küldés <SendHorizonalIcon className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default CompanyFormComponent
