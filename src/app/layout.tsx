import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import {ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (

    <ClerkProvider>
    <html lang="en">
      <body>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {children}
      </body>
    </html>
  </ClerkProvider>

    /*<html lang="en" >
      <body className={`${GeistSans.variable}`}>
      <div className="bg-blue-50 text-5xl text-blue-600">Images</div>
      <br></br>

      <button className="btn">Button</button>
      <br></br>      
      <br></br>

      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://utfs.io/f/a7be56e5-6c74-44f5-b920-72f89d205b88-oihici.jpg"
           />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-600">Cute Cat!</h2>
          <p className="text-blue-600">If you saw the owner carrying this cat in a cat purse down the street, you would say: What a cute cat!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Like Cats?!</button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

        {children}

      </body>
    </html>*/
  );
}
