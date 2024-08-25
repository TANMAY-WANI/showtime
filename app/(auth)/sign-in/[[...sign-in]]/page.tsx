import { SignIn } from '@clerk/nextjs'

export default function Page() {

  return <SignIn
  appearance={{
    variables: {
        colorBackground: "#000000",
    }
  }}
  forceRedirectUrl="/save-user" 
  />
}