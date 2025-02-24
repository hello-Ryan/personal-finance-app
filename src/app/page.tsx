"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-gray-800 text-white">
      <nav className="flex w-screen flex-row-reverse items-center px-2 py-1">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>

      <div className="flex h-max w-full items-center justify-center text-black">
        <Link href="dashboard" className="rounded-md bg-gray-600 p-3">
          To Dashboard
        </Link>
      </div>
    </div>
  );
}
