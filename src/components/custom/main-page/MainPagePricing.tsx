'use client'
import React, { useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
import Image from 'next/image'
import samLogo from '@/images/sam-logo-small.svg'

// TODO: Add toast popup for feedback

const phoneRegex = /^\+3620|^\+3630|^\+3670|^\+361|^\+3631/

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
  const form = useForm<z.infer<typeof companyFormSchema>>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      email: '',
      phone: '',
      companyPerson: '',
      companyName: '',
      terms: false,
      newsletter: false
    }
  })

  const onCompanySubmit = async (values: z.infer<typeof companyFormSchema>) => {
    try {
      const response = await fetch('/api/send/thank-you', {
        method: 'POST',
        body: JSON.stringify(values)
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    form.formState.isSubmitSuccessful && form.reset(form.formState.defaultValues)
  }, [form.formState.isSubmitSuccessful, form])

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
      const response = await fetch('/api/send/thank-you', {
        method: 'POST',
        body: JSON.stringify(values)
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    form.formState.isSubmitSuccessful && form.reset(form.formState.defaultValues)
  }, [form.formState.isSubmitSuccessful, form])

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

const PricingTabs = () => {
  return (
    <div className="w-full h-fit">
      <Tabs
        defaultValue="company"
        className="w-full h-full flex flex-col justify-between items-center gap-6"
      >
        <TabsList>
          <TabsTrigger value="office">KÖNYVELŐIRODÁK RÉSZÉRE</TabsTrigger>
          <TabsTrigger value="company">CÉGEK RÉSZÉRE</TabsTrigger>
        </TabsList>
        <TabsContent value="company" className="w-full">
          <CompanyFormComponent />
        </TabsContent>
        <TabsContent value="office" className="w-full">
          <OfficeFormComponent />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export const MainPagePricing = () => {
  return (
    <div className="w-full h-fit lg:h-[800px] py-16 lg:py-32 bg-white px-4 md:px-8 lg:px-0">
      <div className="w-full h-full max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-24 items-start">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-6">
          <h2 className="border-b border-primary-orange pb-6">Árak</h2>
          <div className="w-full flex flex-col pt-6 gap-6">
            <p>
              Mind a könyvelőirodák, mind pedig a szolgáltatást használó cégek részére mérethez
              igazított előfizetési díjat biztosítunk. Ezzel is elősegítve a felesleges kiadások
              csökkentését.
            </p>
            <p>
              A személyre szabott díjak a rendszer használatát, és a feltöltött dokumentumok
              tárolását is magukban foglalják. Ezáltal kiváltható minden olyan infrastrukturális,
              vagy szolgáltatói platform, melyek eddig a keletkezett dokumentumok tárolására
              szolgáltak.
            </p>
          </div>
          <div className="flex flex-row justify-between gap-4 items-center">
            <div className="w-full h-[1px] bg-primary-orange" />
            <Image
              src={samLogo}
              alt="SAM Logo"
              className="w-16 h-16 group-hover:-translate-y-1 transition-all ease-in-out duration-300"
            />
            <div className="w-full h-[1px] bg-primary-orange" />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <PricingTabs />
        </div>
      </div>
    </div>
  )
}
