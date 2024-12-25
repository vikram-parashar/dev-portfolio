"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useState } from "react"
import { Loader } from "lucide-react"
import { handleMail } from "@/lib/actions"

const FormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string({ required_error: "Message is required" }),
})

export default function Contact() {
  const [pending, setPending] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    setPending(true);
    try {
      new Promise((resolve) => setTimeout(resolve, 2000));
      await handleMail('Mail from dev folio',` 
                 <p>Name: ${data.name}</p>
                 <p>Email: ${data.email}</p>
                 <p>Message: ${data.message}</p>
                 `);
      alert("Message sent");
      form.reset();
    } catch (error) {
      alert("An error occurred");
    } finally {
      setPending(false);
    }
  }


  return (
    <div
      id="contactSection"
      className="container mx-auto flex min-h-screen flex-col justify-center px-5 md:flex-row md:items-center"
    >
      {/* Mobile */}
      <div className="mb-2 md:hidden">
        <div className="flex justify-center text-4xl font-black uppercase lg:text-6xl">
          <span className="mr-2">Let&apos;s</span>
          <span className="mr-2">Talk</span>
        </div>
      </div>
      {/* Desktop */}
      <div className="relative hidden h-[70vh] md:block md:w-1/3">
        <p className="absolute -translate-x-[15rem] translate-y-[15rem] rotate-90 text-[130px] font-black text-gray-300 dark:text-gray-800">
          CONTACT
        </p>
        <div className="absolute text-5xl font-black uppercase lg:text-6xl">
          Let&apos;s
          <br /> Talk
        </div>
      </div>

      {/* Circles */}
      <div className="w-full">
        <h1 className="text-3xl font-bold md:text-6xl">
          Have an awesome idea? Let&apos;s bring it to life.
        </h1>
        <p className="mt-0 text-xl md:mt-5 md:text-2xl">
          I am looking for freelance opportunities or internships.
        </p>
        <Form {...form}>
          <form className="mt-5" onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="flex flex-col items-end md:flex-row md:space-x-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative mt-5 w-full">
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border-b border-black bg-gray-200 p-0 text-xl dark:border-gray-200 dark:bg-gray-900"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative mt-5 w-full">
                    <FormControl>
                      <div className="relative mt-5 w-full">
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full border-b border-black bg-gray-200 pb-0 text-xl dark:border-gray-200 dark:bg-gray-900"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="relative mt-5 w-full">
                  <FormControl>
                    <div className="relative mt-5 w-full">
                      <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="mt-10 w-full border-b border-black bg-gray-200 pb-1 text-xl dark:border-gray-200 dark:bg-gray-900"
                        {...field}
                      ></textarea>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="group mx-auto mt-5 flex items-center pl-10 text-left text-xl font-bold md:mx-0 md:mt-10"
            >
                 <div className="dark:bg-gray-200 aspect-square w-12 rounded-full bg-black md:scale-125"></div>
              {pending ?
                <Loader className="text-white animate-spin relative right-9" /> :
                (<>
                  <span className="dark:text-gray-200 relative -left-6 z-10 text-gray-200 mix-blend-difference">Send Message</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.0}
                    stroke="currentColor"
                    className="relative -left-3 h-6 w-20 transition-transform group-hover:translate-x-[12.5%] hover:scale-x-125"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M 17.25 8.25 L 21 12 m 0 0 l -3.75 3.75 M 21 12 H -50"
                    />
                  </svg>
                </>)
              }
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}
