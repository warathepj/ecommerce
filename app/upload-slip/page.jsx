// app/upload-slip/page.jsx
import Link from 'next/link';
import Upload from "../components/(icon)/Upload";

export default function UploadSlip() {
    return (
    <div>
      <h1>UploadSlip</h1>
      <pre>--------DEBUG start---------</pre>
      {/* //when click app/upload-slip/page.jsx */}
<Link href="/delivery"> 
      <Upload className="cursor-pointer" />

      </Link>
      {/* go to /delivery */}
      {/* <pre>Name: {name}</pre>
      <pre>Address: {address}</pre> */}
      <pre>--------DEBUG end---------</pre>
    </div>
  );
}