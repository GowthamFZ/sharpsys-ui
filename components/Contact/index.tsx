"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { withZodSchema } from "formik-validator-zod";
import { z } from "zod";
import { sendEmail } from "@/lib/send-mail";
import { Toaster, toast } from "sonner";

const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name should be at most 25 characters long"),
    emailAddress: z
      .string().email("Invalid Email"),
    description: z
      .string()
      .min(2, "Message must be at least 2 characters long")
      .max(200, "Message should be at most 200 characters long")

  });
type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      emailAddress: "",
      description: "",
    },
    onSubmit: async (values) => {
      const mailText = `Name: ${values.name}\n  Email: ${values.emailAddress}\nMessage: ${values.description}`;
      console.log(mailText);
      const myPromise = new Promise<{ name: string }>((resolve) => {
        setTimeout(() => {
          resolve({ name: 'Send Request for Demo' });
        }, 3000);
      });

      toast.promise(sendEmail({ name: values.name, email: values.emailAddress, subject: `${values.name} requested for demo`, message: values.description }), {
        loading: 'Loading...',
        success: (data: { name: string }) => {
          return `Your request has been submitted successfully.`;
        },
        error: (error: { response: string }) => {
          return 'Failed to send your request. Please try after sometime.';
        },
      });
    },
    validate: withZodSchema(RegisterFormSchema),
  });

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="salesContact" className="mt-4 commonBackground">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-1 lg:gap-32.5">
            <div className="animate_left relative mx-auto hidden md:block md:w-1/2">
              <h4 className="relative mb-6 text-sectiontitle4 font-bold text-blacktext dark:text-white lg:text-sectiontitle4">
                Get expert advice—fill out the <span className="textStartGradient"> form for your</span><span className="textLastGradient"> free consultation.</span>
              </h4>
            </div>
            <div className="animate_right relative mx-auto hidden md:block md:w-1/2 w-1/4">
              <p className="relative mb-6 text-slate-400 text-sm p-0 dark:text-white sm:text-sm">
                Fill out the form below to schedule a free consultation and receive personalized advice tailored
                to your specific needs. Take your business to the next level with our expertise.
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black">
              <h2 className="mb-7 text-2xl font-semibold text-black dark:text-white xl:text-3xl">Reach us out</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="w-full">
                    <input id="name" placeholder="Full name" className={`w-full pb-2 pl-1  pt-2  rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-full ${(formik.errors.name && formik.touched.name) ? 'border-red-500 placeholder:text-red-500' : ''}`}
                      type="name" {...formik.getFieldProps("name")}
                    />
                    {formik.errors.name && formik.touched.name && (
                      <div className="text-sm text-red-500">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                  <div className="w-full">
                    <input id="emailAddress" placeholder="Email address" className={`w-full pb-2 pl-1 pt-2  rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-full ${(formik.errors.emailAddress && formik.touched.emailAddress) ? 'border-red-500 placeholder:text-red-500' : ''}`} type="email"
                      {...formik.getFieldProps("emailAddress")}
                    />
                    {formik.errors.emailAddress && formik.touched.emailAddress && (
                      <div className="text-sm text-red-500">
                        {formik.errors.emailAddress}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-11.5">
                  <textarea id="description" placeholder="Message" rows={4} className={`w-full border rounded-lg pl-1 bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white1 ${(formik.errors.description && formik.touched.description) ? 'border-red-500 placeholder:text-red-500' : ''}`}
                    {...formik.getFieldProps("description")}
                  ></textarea>

                  {formik.errors.description && formik.touched.description && (
                    <div className="text-sm text-red-500">
                      {formik.errors.description}

                    </div>

                  )}
                </div>
                <div className="flex flex-wrap gap-4 xl:justify-center ">
                  <button aria-label="send message" className="inline-flex items-center gap-2.5 rounded-lg buttoncolor-bg px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark">
                    Request a Demo
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
        <Toaster position="top-center" duration={5000} richColors={true} visibleToasts={1} />
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
