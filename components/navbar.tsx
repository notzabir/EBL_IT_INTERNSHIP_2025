"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
export function Navbar() {
  const router = useRouter()

  const handleAuthClick = () => {
    // Mock redirect to dashboard instead of actual auth
    router.push("/dashboard")
  }

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/ebl-logo.png" alt="EBL Bank" width={200} height={40} className="h-8 w-auto" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
                {/* ✅ Dashboard Link - visible only when signed in */}
                <SignedIn>
                  <Link href="./dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                    Dashboard
                  </Link>
                </SignedIn>
              </div>
            </div>

          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button onClick={handleAuthClick} className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
    </ClerkProvider>
  )
}
