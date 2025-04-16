export async function sendEmailWithAttachment({
  name,
  email,
  subject,
  message,
  file,
}: {
  name: string;
  email?: string;
  subject: string;
  message: string;
  file: File[];
}) {
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result); // it's safe to treat it as a string now
          console.log("File reader::::" + reader.result)
        } else {
          reject(new Error('FileReader result is not a string'));
          console.log("File reader Error ::::")
        }
      };
      reader.onerror = (error) => reject(error);
    });

  const uploadedFile = file[0];
  const base64 = await toBase64(uploadedFile);
  console.log("Uploaded File::::" + uploadedFile);
  let response;
  response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, subject, message, attachments: { filename: uploadedFile.name, content: base64.split(',')[1] }, }),
  });

  if (response.ok) {
    return response.status;
  } else {
    console.error('Failed to send your request');
    throw Error(response.status)
  }
}

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email?: string;
  subject: string;
  message: string;
}) {
  let response;
  response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, subject, message }),
  });

  if (response.ok) {
    return response.status;
  } else {
    console.error('Failed to send your request');
    throw Error(response.status)
  }
}
