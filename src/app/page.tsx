import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, UserProfile } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return <div className="bg-gray-800 min-h-screen w-screen text-white">
    
  <nav className="px-2 py-1 flex w-screen items-center flex-row-reverse">
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
  </nav>

  <div className="h-max w-full flex items-center justify-center text-white">
    <Link href="dashboard" className="bg-gray-600 p-3 rounded-md">
      To Dashboard
    </Link>
  </div>


  </div>;
}
