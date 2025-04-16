import { useDropzone } from 'react-dropzone';

export default function DropzoneField({ field, form }) {
  const onDrop = (acceptedFiles) => {
    form.setFieldValue(field.name, acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const files = field.value;

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed p-6 text-center cursor-pointer rounded-lg ${
        isDragActive ? 'bg-blue-100' : 'bg-white'
      }`}
    >
      <input {...getInputProps()} />
      <p className="text-sm">
        {isDragActive ? 'Drop the file here ...' : 'Drag and drop a file here, or click to select'}
      </p>

      {files && files.length > 0 && (
        <div className="mt-2 text-sm text-gray-600">
          <strong>Selected:</strong> {files[0].name}
        </div>
      )}
    </div>
  );
}