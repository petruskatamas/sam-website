'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneRegex = /^\+3620|^\+3630|^\+3670|^\+361|^\+3631/

const CompanyFormComponent = () => {
  const companyFormSchema = z.object({
    email: z.string().refine((data) => emailRegex.test(data), {
      message: 'Invalid e-mail cím!'
    }),
    phone: z.string().refine((data) => phoneRegex.test(data), {
      message: 'Invalid telefonszám!'
    }),
    companyName: z.string(),
    companyPerson: z.string()
  })
  const form = useForm<z.infer<typeof companyFormSchema>>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      email: '',
      phone: '',
      companyPerson: '',
      companyName: ''
    }
  })
  const onSubmit = (values: z.infer<typeof companyFormSchema>) => {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

const PricingTabs = () => {
  return (
    <Tabs
      defaultValue="company"
      className="w-full h-full flex flex-col justify-start items-center gap-6"
    >
      <TabsList>
        <TabsTrigger value="company">CÉGEK RÉSZÉRE</TabsTrigger>
        <TabsTrigger value="office">KÖNYVELŐIRODÁK RÉSZÉRE</TabsTrigger>
      </TabsList>
      <TabsContent value="company" className="w-full">
        <CompanyFormComponent />
      </TabsContent>
      <TabsContent value="office">Change your password here.</TabsContent>
    </Tabs>
  )
}

export const MainPagePricing = () => {
  return (
    <div className="w-full py-32 bg-white">
      <div className="w-full h-full max-w-screen-lg mx-auto flex flex-row justify-between gap-24 items-center">
        <div className="w-1/3 h-full flex flex-col justify-center gap-6">
          <h2 className="border-b border-primary-orange pb-6">Árak</h2>
          <p>
            Mind a könyvelőirodák, mind pedig a szolgáltatást használó cégek részére mérethez
            igazított előfizetési díjat biztosítunk. Ezzel is elősegítve a felesleges kiadások
            csökkentését.
          </p>
          <p>
            A személyre szabott díjak a rendszer használatát, és a feltöltött dokumentumok tárolását
            is magukban foglalják. Ezáltal kiváltható minden olyan infrastrukturális, vagy
            szolgáltatói platform, melyek eddig a keletkezett dokumentumok tárolására szolgáltak.
          </p>
        </div>
        <div className="w-2/3 h-full">
          <PricingTabs />
        </div>
      </div>
    </div>
  )
}
