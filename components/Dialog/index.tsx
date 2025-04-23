import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { z } from 'zod';
import DropzoneField from './dropZoneField';
import { toast, Toaster } from 'sonner';
import { sendEmailWithAttachment } from '@/lib/send-mail';


export default function DialogWithForm({ isOpen, onClose }) {
  if (!isOpen) return null;
  const MAX_FILE_SIZE = 10 * 1024 * 1024

  const initialValues = {
    fullName: '',
    email: '',
    contactnumber: '',
    experience: '',
    resume: null,
  };

  const RegisterFormSchema = z
    .object({
      fullName: z
        .string()
        .min(2, "Name must be at least 2 characters long")
        .max(50, "Name should be at most 25 characters long"),
      email: z
        .string().email("Invalid Email"),
      contactnumber: z
        .string()
        .min(10, "Invalid Contact Number")
        .max(10, "Invalid Contact Number")
        .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Invalid Contact Number"),
      experience: z
        .string()
        .min(2, "Experience must be at least 2 characters long")
        .max(5, "Experience should be at most 5 characters long"),
      resume: z.any()
        // To not allow empty files
        .refine((files) => files?.length >= 1, { message: 'Please upload a file.' })
        // To not allow files larger than 5MB
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
          message: `Max file size is 10MB.`,
        }),
    });
  type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;


  const handleSubmit = (values) => {
    const htmlContent = `
  <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; font-size: 15px; color: #333; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px;">
    <h2 style="color: #2c3e50; text-align: center;">📄 New Job Application</h2>
    
    <p>Hello Hiring Team,</p>

    <p>A new applicant has submitted their job application. Please find the details below:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      <tr>
        <td style="font-weight: bold; padding: 8px; border: 1px solid #eee;">👤 Full Name:</td>
        <td style="padding: 8px; border: 1px solid #eee;">${values.fullName}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 8px; border: 1px solid #eee;">✉️ Email:</td>
        <td style="padding: 8px; border: 1px solid #eee;">${values.email}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 8px; border: 1px solid #eee;">📞 Contact Number:</td>
        <td style="padding: 8px; border: 1px solid #eee;">${values.contactnumber}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 8px; border: 1px solid #eee;">🛠️ Experience:</td>
        <td style="padding: 8px; border: 1px solid #eee;">${values.experience} years</td>
      </tr>
    </table>

    <p>The applicant has also uploaded a resume, which is attached to this email.</p>

    <p style="margin-top: 24px;">Best regards,<br>Sharpsys Website Team</p>
  </div>
`;
    const myPromise = new Promise<{ name: string }>((resolve) => {
      setTimeout(() => {
        resolve({ name: 'Send Request for Demo' });
        onClose();
      }, 6000);
    });
    const files: File[] = [...values.resume]
    toast.promise(sendEmailWithAttachment({ name: values.fullName, email: values.email, subject: `${values.fullName} have applied for a job posting`, message: htmlContent, file: files }), {
      loading: 'Submitting your application...',
      success: (data: { name: string }) => {
        return `Thanks for your Job interest. Our recruting will review your profile and get back to you.`;
      },
      error: (error: { response: string }) => {
        return 'Failed to send your request. Please try after sometime.';
      },
    });
  };

  return (
    <div className="fixed top-8 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50">
      <div className="flex items-center justify-center h-full w-full px-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-lg h-auto md:h-[80vh] overflow-y-auto max-h-[calc(80vh-3rem)]">
          <h2 className="text-xl font-bold mb-4 text-blacktext text-center">Apply for this Position</h2>

          <Formik
            initialValues={initialValues}
            validate={withZodSchema(RegisterFormSchema)}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blacktext">Full Name</label>
                  <Field
                    type="text"
                    name="fullName"
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blacktext">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blacktext">Contact Number</label>
                  <Field
                    type="contactnumber"
                    name="contactnumber"
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                  <ErrorMessage name="contactnumber" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blacktext">Experience</label>
                  <Field
                    type="experience"
                    name="experience"
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                  <ErrorMessage name="experience" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blacktext">Resume</label>
                  {/* <DropzoneField name="resume" /> */}
                  <Field
                    name="resume"
                    component={DropzoneField}
                    variant="outlined"
                  />
                  <ErrorMessage name="resume" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="focus:outline-none text-white buttoncolor-bg rounded-lg !font-normal text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="focus:outline-none text-white buttoncolor-bg rounded-lg !font-normal text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <Toaster position="bottom-right" duration={5000} richColors={true} visibleToasts={1} />
        </div>
      </div>
    </div>
  );
}
