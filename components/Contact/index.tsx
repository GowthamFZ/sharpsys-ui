"use client";
import React from "react";
import { useFormik } from "formik";
import { withZodSchema } from "formik-validator-zod";
import { z } from "zod";
import { sendEmail } from "@/lib/send-mail";
import { Toaster, toast } from "sonner";
import ContactForm from "../ContactForm";

// const RegisterFormSchema = z
//   .object({
//     name: z
//       .string()
//       .min(2, "Name must be at least 2 characters long")
//       .max(50, "Name should be at most 25 characters long"),
//     emailAddress: z
//       .string().email("Invalid Email"),
//       phoneNumber: z
//         .string()
//         .min(10, "Invalid Contact Number")
//         .max(10, "Invalid Contact Number")
//         .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Invalid Contact Number"),
//     description: z
//       .string()
//       .min(2, "Message must be at least 2 characters long")
//       .max(200, "Message should be at most 200 characters long")

//   });
// type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;

const Contact = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       emailAddress: "",
//       phoneNumber: "",
//       description: "",
//     },
//     onSubmit: async (values, {resetForm}) => {
//       const htmlContent = `
//   <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px; color: #333;">
//     <h2 style="color: #007BFF; text-align: center;">New Demo Request</h2>

//     <p>Hello Team,</p>

//     <p>A new user has requested a demo. Here are the details:</p>

//     <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
//       <tr>
//         <td style="font-weight: bold; padding: 8px; border: 1px solid #eee;">👤 Name:</td>
//         <td style="padding: 8px; border: 1px solid #eee;">${values.name}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold; padding: 8px; border: 1px solid #eee;">📧 Email:</td>
//         <td style="padding: 8px; border: 1px solid #eee;">${values.emailAddress}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold; padding: 8px; border: 1px solid #eee;">📧 Email:</td>
//         <td style="padding: 8px; border: 1px solid #eee;">${values.phoneNumber}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold; padding: 8px; border: 1px solid #eee;">📝 Message:</td>
//         <td style="padding: 8px; border: 1px solid #eee;">${values.description || 'No message provided.'}</td>
//       </tr>
//     </table>

//     <p style="margin-top: 20px;">You can follow up with the user to schedule a live demo.</p>

//     <div style="margin-top: 32px; text-align: center;">
//       <a href="mailto:${values.emailAddress}" style="background-color: #007BFF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px;">Reply to ${values.name}</a>
//     </div>

//     <p style="margin-top: 40px; font-size: 13px; color: #777;">This message was automatically generated from your website's demo request form.</p>
//   </div>
// `;

//       const myPromise = new Promise<{ name: string }>((resolve) => {
//         setTimeout(() => {
//           resolve({ name: 'Send Request for Demo' });
//         }, 3000);
//       });

//       toast.promise(sendEmail({ name: values.name, email: values.emailAddress, subject: `${values.name} has requested for demo`, message: htmlContent }), {
//         loading: 'Sending your request...',
//         success: (data: { name: string }) => {
//           resetForm();
//           return `Thanks for your interest. Our sales team will get back to you soon.`;
//         },
//         error: (error: { response: string }) => {
//           return 'Failed to send your request. Please try after sometime.';
//         },
//       });
//     },
//     validate: withZodSchema(RegisterFormSchema),
//   });

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
             {/*  <form onSubmit={formik.handleSubmit}>
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
                  <div className="w-full">
                    <input name="phoneNumber" type="tel" id="phoneNumber" placeholder="Contact Number" className={`w-full pb-2 pl-1 pt-2  rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-full ${(formik.errors.phoneNumber && formik.touched.phoneNumber) ? 'border-red-500 placeholder:text-red-500' : ''}`}
                      {...formik.getFieldProps("phoneNumber")}
                    />
                    {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                      <div className="text-sm text-red-500">
                        {formik.errors.phoneNumber}
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
                  <button type="submit" aria-label="send message" className="inline-flex items-center gap-2.5 rounded-lg buttoncolor-bg px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark">
                    Request a Demo
                  </button>
                </div>
              </form>*/}
              <ContactForm />
            </div>

          </div> 
          
        </div>
        {/* <Toaster position="top-center" duration={5000} richColors={true} visibleToasts={1} /> */}
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
