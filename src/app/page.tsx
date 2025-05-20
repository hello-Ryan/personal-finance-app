import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Button from "~/components/ui/Button";
import DashboardButton from "~/components/ui/DashboardButton";

export default async function HomePage() {
  const { userId } = auth();

  return (
    <div className="flex min-h-screen w-screen flex-col bg-white px-80 font-medium text-black">
      <nav className="sticky flex w-full flex-row items-center justify-between gap-5 py-5">
        <div className="basis-1/3">
          <p>Finances Simplified</p>
        </div>
        <div className="flex flex-row gap-4">
          <SignInButton>
            <div className="duration-400 rounded-3xl px-4 py-2 transition hover:cursor-pointer hover:bg-gray-200">
              Log in{" "}
            </div>
          </SignInButton>

          <SignUpButton>
            <div className="rounded-3xl bg-green-400 px-4 py-2 transition hover:cursor-pointer hover:bg-green-400/80">
              Register
            </div>
          </SignUpButton>
        </div>
      </nav>

      <div className="mb-36 flex h-full flex-grow flex-col items-center justify-center gap-3 px-40">
        <p className="text-center text-5xl">
          Track every dollar, set smart budgets, and build your financial
          future.
        </p>
        <p className="text-gray-600">An all in one simple dashboard</p>

        <div>
          {userId && (
            <DashboardButton/>
          )}
        </div>
      </div>
    </div>
  );
}
