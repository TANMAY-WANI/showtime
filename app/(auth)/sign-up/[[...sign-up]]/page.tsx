"use client"
import { SignUp } from '@clerk/nextjs'
import { useEffect } from 'react';
import { useSignUp } from '@clerk/nextjs';


export default function Page() {
  const {signUp, isLoaded} = useSignUp();
  
  const handleSignUpComplete = async (user) => {
    if (!isLoaded) {
      return;
    }

    try {
      // Set metadata after signup is complete
      await signUp.update({
        publicMetadata: {
          role: "user",
        },
      });

      console.log("Metadata added successfully");
    } catch (error) {
      console.error("Failed to set metadata:", error);
    }
  };
  
  return <SignUp
  appearance={{
    variables: {
        colorBackground: "#000000",
    }
   }}
    // routing='path'
    // redirectUrl="/set-metadata"  // Redirect to a custom page after signup
    />
}