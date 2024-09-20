import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "~/components/ui/navigation-menu";

const menuItems: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function TopNav() {
  return (
    <nav className="flex w-full flex-row justify-between p-5 text-white">
      <div>LOGO</div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map(({ title, href }) => (
              <Link href={href} key={title} passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-black`}
                  key={title}
                >
                  {title}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
