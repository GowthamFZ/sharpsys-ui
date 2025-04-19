// import {
//   Button,
//   Dialog,
//   Card,
//   CardBody,
//   CardFooter,
//   Typography,
//   Input,
// } from "@material-tailwind/react";
// import { Formik, Form, Field } from "formik";
// import { withZodSchema } from "formik-validator-zod";
// import { z } from "zod";
// import { toast, Toaster } from "sonner";
// import DropzoneField from "./dropZoneField";
// import { sendEmailWithAttachment } from "@/lib/send-mail";
// import { useContext, useEffect } from "react";
// import { DialogContext } from "@/app/(site)/layout";

// export default function DialogWithForm() {
//   useEffect(() => {
//     console.log("DialogWithForm mounted", Math.random());
//     return () => console.log("DialogWithForm unmounted");
//   }, []);
//   console.log("Rendering DialogWithForm");
//   const MAX_FILE_SIZE = 5000000
//   const RegisterFormSchema = z
//     .object({
//       name: z
//         .string()
//         .min(2, "Name must be at least 2 characters long")
//         .max(50, "Name should be at most 25 characters long"),
//       emailAddress: z
//         .string().email("Invalid Email"),
//       contactNumber: z
//         .string()
//         .min(10, "Invalid Contact Number")
//         .max(10, "Invalid Contact Number")
//         .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Invalid Contact Number"),
//       experience: z
//         .string()
//         .min(2, "Name must be at least 2 characters long")
//         .max(50, "Name should be at most 25 characters long"),
//       file: z
//         .any()
//         // To not allow empty files
//         .refine((files) => files?.length >= 1, { message: 'Please upload a file.' })
//         // To not allow files larger than 5MB
//         .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
//           message: `Max file size is 5MB.`,
//         }),
//     });
//   type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;

//   const initialValues = {
//     name: "",
//     emailAddress: "",
//     contactNumber: "",
//     experience: "",
//     file: [],
//   };

//   const { open, setOpen } = useContext(DialogContext);

//   const handleClose = () => {
//     setOpen(false);
//   };


//   return (
//     <>
//       <Dialog
//         size="lg"
//         open={open}
//         handler={handleClose}
//         dismiss={{
//           outsidePress: false
//         }}
//         className="bg-transparent shadow-none"
//       >
//         {/* <Formik
//           initialValues={initialValues}
//           validate={withZodSchema(RegisterFormSchema)}
//           // innerRef={formikRef}
//           onSubmit={(values) => {
//             console.log("Form submitted:", values);
//             const myPromise = new Promise<{ name: string }>((resolve) => {
//               setTimeout(() => {
//                 resolve({ name: 'Send Request for Demo' });
//                 handleClose();
//               }, 6000);
//             });
//             const files: File[] = [...values.file]
//             toast.promise(sendEmailWithAttachment({ name: values.name, email: values.emailAddress, subject: `${values.name} have applied for a job posting`, message: `${values.name} have applied for a job posting`, file: files }), {
//               loading: 'Loading...',
//               success: (data: { name: string }) => {
//                 return `Your request has been submitted successfully.`;
//               },
//               error: (error: { response: string }) => {
//                 return 'Failed to send your request. Please try after sometime.';
//               },
//             });
//           }}
//         >
//           {({ errors, touched }) => {

//             return (
//               <Form>
//                 <Card id="card" className="m-auto max-w-[42rem] !inset-y-15">

//                   <CardBody className="flex flex-col gap-4 h-96 overflow-y-auto m-4">
//                     <Typography variant="h4" color="blue-gray" className="text-center text-sm">
//                       Submit your Application
//                     </Typography>

//                     <Typography className="text-sm">
//                       Applicant's Name
//                     </Typography>
//                     <Field
//                       as={Input}
//                       name="name"
//                       label="Name"
//                       variant="outlined"
//                       error={!!errors.name && touched.name}
//                     />
//                     {errors.name && touched.name && (
//                       <div className="text-xs text-red-500">
//                         {errors.name}
//                       </div>
//                     )}

//                     <Typography className="text-sm">
//                       Email Address
//                     </Typography>
//                     <Field
//                       as={Input}
//                       name="emailAddress"
//                       label="Email Address"
//                       variant="outlined"
//                       error={!!errors.emailAddress && touched.emailAddress}
//                     />
//                     {errors.emailAddress && touched.emailAddress && (
//                       <div className="text-xs text-red-500">
//                         {errors.emailAddress}
//                       </div>
//                     )}

//                     <Typography className="text-sm">
//                       Contact Number
//                     </Typography>
//                     <Field
//                       as={Input}
//                       name="contactNumber"
//                       label="Contact Number"
//                       variant="outlined"
//                       error={!!errors.contactNumber && touched.contactNumber}
//                     />
//                     {errors.contactNumber && touched.contactNumber && (
//                       <div className="text-xs text-red-500">
//                         {errors.contactNumber}
//                       </div>
//                     )}

//                     <Typography className="text-sm">
//                       Years of Exprience
//                     </Typography>
//                     <Field
//                       as={Input}
//                       name="experience"
//                       label="Experience"
//                       variant="outlined"
//                       error={!!errors.experience && touched.experience}
//                     />
//                     {errors.experience && touched.experience && (
//                       <div className="text-xs text-red-500">
//                         {errors.experience}
//                       </div>
//                     )}


//                     <Typography className="text-sm">
//                       Upload Resume
//                     </Typography>
//                     <Field
//                       name="file"
//                       component={DropzoneField}
//                       variant="outlined"
//                       error={!!errors.file && touched.file}
//                     />
//                     {errors.file && typeof errors.file === 'string' && (
//                       <div className="text-xs text-red-500">{errors.file}</div>
//                     )}
//                   </CardBody>
//                   <CardFooter className="pt-0 text-right">
//                     <Button aria-label="send message" type="submit" className="focus:outline-none text-white buttoncolor-bg rounded-lg !font-normal text-sm px-5 py-2.5 me-2 mb-2">
//                       Submit
//                     </Button>
//                     <Button variant="gradient" onClick={handleClose} className="focus:outline-none text-white buttoncolor-bg rounded-lg !font-normal text-sm px-5 py-2.5 me-2 mb-2">
//                       Cancel
//                     </Button>
//                   </CardFooter>

//                 </Card>
//               </Form>
//             );
//           }}
//         </Formik> */}
//         <Card id="card" className="m-auto max-w-[42rem] !inset-y-15">

// <CardBody className="flex flex-col gap-4 h-96 overflow-y-auto m-4">
//   <Typography variant="h4" color="blue-gray" className="text-center text-sm">
//     Submit your Application
//   </Typography>

//   <Typography className="text-sm">
//     Applicant's Name
//   </Typography>



//   <Typography className="text-sm">
//     Email Address
//   </Typography>



//   <Typography className="text-sm">
//     Contact Number
//   </Typography>


//   <Typography className="text-sm">
//     Years of Exprience
//   </Typography>


// </CardBody>
// <CardFooter className="pt-0 text-right">
//   <Button aria-label="send message" onClick={handleClose}  className="focus:outline-none text-white buttoncolor-bg rounded-lg !font-normal text-sm px-5 py-2.5 me-2 mb-2">
//     Submit
//   </Button>
//   <Button variant="gradient" onClick={handleClose} className="focus:outline-none text-white buttoncolor-bg rounded-lg !font-normal text-sm px-5 py-2.5 me-2 mb-2">
//     Cancel
//   </Button>
// </CardFooter>

// </Card>
//         <Toaster position="bottom-right" duration={5000} richColors={true} visibleToasts={1} />
//       </Dialog>
//     </>
//   );
// }

import { Dialog, Card, CardBody, CardFooter, Button, Typography } from "@material-tailwind/react";
import { useCallback, useEffect } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
}

const DialogWithForm = ({ open, onClose }: DialogProps) => {
  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);
  console.log("DialogWithForm rendered");
  console.log("Open changes in Dialog"+open);
  const handleClose = useCallback(() => {
    if (open) onClose;
  }, [open]);
  return (
    <Dialog size="lg" open={open} handler={handleClose}>
      <Card>
        <CardBody>
          {/* Your form content */}
          <Typography className="text-sm">
    Email Address
  </Typography>

        </CardBody>
        <CardFooter>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={() => console.log("Form submitted")}>Submit</Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default DialogWithForm;