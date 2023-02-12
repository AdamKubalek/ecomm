import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useRef, useEffect, useState } from "react";
import Card from "../components/CardLogReg";
import { api } from "../utils/api";

const Login = () => {
  console.log("### Refreshing");
  const [error, setError] = useState("");
  const input = useRef<HTMLFormElement>(null);
  const { data: sessionData } = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (input.current) {
      const email = input.current.elements[0] as HTMLInputElement;
      const password = input.current.elements[1] as HTMLInputElement;

      const response = await signIn("credentials", {
        email: email.value,
        password: password.value,
        callbackUrl: "http://localhost:3000/",
        redirect: false,
      });

      // if (response?.error) {
      //   setError(response.error)
      // }
      console.log({ response });
      const session = await getSession();
      console.log({ session });
    }
  };

  // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

  // useEffect(() => {
  //   fullNameInputElement.current?.focus();
  // }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-xs">
        <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md" ref={input} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="text"
              placeholder="jane.doe@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-xs italic text-red-500">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-xs text-gray-500">
          &copy;2023 Stsaffp Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
