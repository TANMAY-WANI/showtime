import { SignIn } from '@clerk/nextjs'
import { color } from 'framer-motion'

export default function Page() {
  return <SignIn
  appearance={{
    variables: {
        colorBackground: "#000000",
    }
  }} />
}