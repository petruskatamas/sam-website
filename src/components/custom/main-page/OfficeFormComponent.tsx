'use client'
import { phoneRegex } from './CompanyFormComponent'
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

const officeFormSchema = z.object({
  email: z.string().email({
    message: 'Érvénytelen e-mail cím!'
  }),
  phone: z.string().refine((data) => phoneRegex.test(data), {
    message: 'Érvénytelen telefonszám!'
  }),
  officeName: z.string(),
  officePerson: z.string(),
  numOfCompanies: z.string(),
  usedPrograms: z.string(),
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

const OfficeFormComponent = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof officeFormSchema>>({
    resolver: zodResolver(officeFormSchema),
    defaultValues: {
      email: '',
      phone: '',
      officePerson: '',
      officeName: '',
      numOfCompanies: '',
      usedPrograms: '',
      note: '',
      terms: false,
      newsletter: false
    }
  })

  const onOfficeSubmit = async (values: z.infer<typeof officeFormSchema>) => {
    try {
      const result = await fetch('/api/send/internal/office', {
        method: 'POST',
        body: JSON.stringify(values)
      })
        .then((res) => res.json())
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          return fetch('/api/send/thank-you', {
            method: 'POST',
            body: JSON.stringify(values)
          }).then((res) => res.json())
        })
      return result
    } catch (error) {
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
        onSubmit={form.handleSubmit(onOfficeSubmit)}
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
          name="officeName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Könyvelőiroda neve" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="officePerson"
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
          name="numOfCompanies"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Kezelt cégek száma" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="usedPrograms"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Használt könyvelési szoftverek" {...field} />
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
                  rows={4}
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

export default OfficeFormComponent
