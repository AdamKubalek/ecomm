import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Component() {
  const { status } = useSession();

  return (
    <div>
      <button
        onClick={status === "authenticated" ? () => signOut() : () => signIn()}
        className="text-whiteno-underline rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        {status === "authenticated" ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
