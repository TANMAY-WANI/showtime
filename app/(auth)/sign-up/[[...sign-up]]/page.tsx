import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp
  appearance={{
    variables: {
        colorBackground: "#000000",
    }
   }}
   forceRedirectUrl="/save-user"
    />
}