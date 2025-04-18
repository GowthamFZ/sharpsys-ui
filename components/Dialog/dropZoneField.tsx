// import { useDropzone } from 'react-dropzone';

// export default function DropzoneField({ field, form }) {
//   const onDrop = (acceptedFiles) => {
//     form.setFieldValue(field.name, acceptedFiles);
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     multiple: false,
//   });

//   const files = field.value;

//   return (
//     <div
//       {...getRootProps()}
//       className={`border-2 border-dashed p-6 text-center cursor-pointer rounded-lg ${
//         isDragActive ? 'bg-blue-100' : 'bg-white'
//       }`}
//     >
//       <input {...getInputProps()} />
//       <p className="text-sm">
//         {isDragActive ? 'Drop the file here ...' : 'Drag and drop a file here, or click to select'}
//       </p>

//       {files && files.length > 0 && (
//         <div className="mt-2 text-sm text-gray-600">
//           <strong>Selected:</strong> {files[0].name}
//         </div>
//       )}
//     </div>
//   );
// }

import React from 'react';
import { useDropzone } from 'react-dropzone';

const DropzoneField = ({ field, form, ...props }) => {
  const { setFieldValue } = form;

  // onDrop handler to set the file in Formik field
  const onDrop = (acceptedFiles) => {
    setFieldValue(field.name, acceptedFiles); // Set files to Formik field
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple:false,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="text-center p-4 border border-dashed">
        Drag and drop a file, or click to select
      </div>
    </div>
  );
};

export default DropzoneField;
