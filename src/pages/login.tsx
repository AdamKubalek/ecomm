import { signIn, signOut, useSession } from "next-auth/react";
import { useRef, useState } from "react";
import Card from "../components/CardLogReg";
import { api } from "../utils/api";

const login = () => {
  console.log("### Refreshing");
  const [error, setError] = useState("");
  const input = useRef<HTMLFormElement>(null);
  const { data: sessionData } = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (input.current) {
      const email = input.current.elements[0] as HTMLInputElement;
      const password = input.current.elements[1] as HTMLInputElement;

      const response = await signIn('credentials', {
        email: email.value,
        password: password.value,
        redirect: false,
        callbackUrl: 'http://localhost:3000',
      })

      if (response?.error) {
        setError(response.error)
      }
      console.log(response)
    }
  };

  

  // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

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
            {error && <p className="text-red-500 pb-4">{error}</p>}
            <div className="mb-4 flex flex-col">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
          </form>
          <div className="flex justify-around">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              onClick={handleSubmit}
              type="submit"
            >
              Sign in with Credentials
            </button>
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              onClick={sessionData ? () => signOut() : () => signIn("discord", { callbackUrl: "http://localhost:3000" })}
            >
              Sign in with Discord
            </button>
          </div>
        </Card>
      </main>
    </>
  );
};

export default login;
