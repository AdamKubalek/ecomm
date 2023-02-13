import { useSession } from "next-auth/react";
import Link from "next/link";
import SignInButton from "./SignInButton";

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <header className="flex w-screen items-center justify-around rounded border-b-8 border-r-8  border-black bg-orange-500">
      <p className="text-center text-2xl text-white">
        {session && <span>Hi {session.user?.name}!</span>}
      </p>
      <h1 className="text-2xl font-bold text-white">
        Header: Next.js + tRPC + NextAuth.js E-shop
      </h1>
      <div className="flex gap-5">
        {status === "unauthenticated" && (
          <Link href="/registration">
            <button className="text-whiteno-underline rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20">
              Registration
            </button>
          </Link>
        )}
        <SignInButton />
      </div>
    </header>
  );
};

export default Header;
