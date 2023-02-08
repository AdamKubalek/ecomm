import { useRef } from "react";
import Card from "./CardLogReg";
import { signIn, signOut, useSession } from "next-auth/react";

const SignIn = () => {
  console.log("### Refreshing");
  const input = useRef<HTMLFormElement>(null);
  const { data: sessionData } = useSession();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input.current) {
      const email = input.current.elements[0] as HTMLInputElement;
      const password = input.current.elements[1] as HTMLInputElement;
      console.log(email.value, password.value);
    }
  };

  return (
    <>
      <main className="flex h-screen w-screen items-center justify-center bg-gray-500">
        <Card>
          <h1 className="text-3xl">Please sign in</h1>
          <form className="mt-4" ref={input}>
            <div className="mb-4 flex flex-col">
              <label
                className="mb-2 text-sm font-bold text-gray-700"
                htmlFor="floatingInput"
              >
                Email address
              </label>
              <input
                type="email"
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                id="floatingInput"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label
                className="mb-2 text-sm font-bold text-gray-700"
                htmlFor="floatingPassword"
              >
                Password
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="password"
                id="floatingPassword"
                placeholder="Password"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <div className="flex justify-around">
              <button
                className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                onClick={handleSubmit}
                type="submit"
              >
                Sign in
              </button>
              <button
                className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                onClick={
                  sessionData ? () => void signOut() : () => void signIn()
                }
              >
                Discord
              </button>
            </div>
          </form>
        </Card>
      </main>
    </>
  );
};

export default SignIn;
