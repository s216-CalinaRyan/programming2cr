"use client";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
export default function ButtonThing() {
  const router = useRouter();
  return (
    <main className="font-mono -mono text-blue-600 font-bold">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
          router.refresh();
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}