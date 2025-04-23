'use client';

import { sendEmail } from "@/lib/send-mail";
import { useRef } from "react";
import { toast, Toaster } from "sonner";

export default function ClientButton() {
  const emailRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    const emailValue = emailRef.current?.value;
    const htmlContent = `
    <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; background-color: #ffffff; border-radius: 8px; padding: 24px; color: #333; border: 1px solid #eaeaea;">
  
      <!-- Title -->
      <h2 style="text-align: center; color: #2c3e50;">🎉 You're Now Subscribed to Sharpsys Software!</h2>
  
      <p>Hello There,</p>
  
      <p>Thanks for subscribing to our newsletter! You'll now receive:</p>
      <ul style="padding-left: 20px;">
        <li>✨ Exclusive updates</li>
        <li>📦 Product announcements</li>
        <li>📰 Curated content & tips</li>
      </ul>
  
      <p>We’re excited to have you on board!</p>
  
      <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />
  
      <p style="text-align: center; font-size: 13px; color: #888;">
        Don't want updates? <a href="https://yourdomain.com/unsubscribe" style="color: #007BFF; text-decoration: none;">Unsubscribe here</a>.
      </p>
  
      <p style="text-align: center; font-size: 12px; color: #aaa; margin-top: 16px;">
        &copy; ${new Date().getFullYear()} Sharpsys Software Solutions [l] Pvt. Ltd., All rights reserved.
      </p>
    </div>
  `;

    const myPromise = new Promise<{ name: string }>((resolve) => {
      setTimeout(() => {
        resolve({ name: 'Send Request for Demo' });
      }, 3000);
    });

    toast.promise(sendEmail({ name: emailValue, email: emailValue, subject: `${emailValue} has subscribed for newsletter.`, message: htmlContent }), {
      loading: 'Sending your request...',
      success: (data: { name: string }) => {
        return `Thanks for your interest. Our sales team will get back to you soon.`;
      },
      error: (error: { response: string }) => {
        return 'Failed to send your request. Please try after sometime.';
      },
    });
  };

  return (
    <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
      <button
        className="!absolute right-1 top-1 z-10 select-none rounded buttoncolor-bg py-2 px-1 text-center align-middle text-xs uppercase text-white transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
        type="button"
        data-ripple-light="true"
        onClick={handleClick}
      >
        Subscribe
      </button>
      <input
        type="email"
        ref={emailRef}
        className="peer h-full w-full rounded-[7px] border border-buttoncolor-bg bg-slate-50 px-3 py-2.5 pr-20 text-sm font-normal text-blacktext outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-buttoncolor-bg placeholder-shown:border-t-buttoncolor-bg focus:border-2 focus:buttoncolor-bg focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:buttoncolor-bg"
        placeholder=" "
        required
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blacktext transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blacktext peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
        Email Address
      </label>
      <Toaster position="top-center" duration={5000} richColors={true} visibleToasts={1} />
    </div>
  );
}
