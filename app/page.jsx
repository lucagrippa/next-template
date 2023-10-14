import Image from 'next/image'
import { CreateAccount } from '@/components/create-account'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <CreateAccount />
    </main>
  )
}
