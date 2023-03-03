import { getSession, signIn } from "next-auth/react";
import { useRef, useState } from "react";
import Layout from "../components/Layout";

const Login = () => {
  console.log("### Refreshing");
  const input = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.current) {
      const email = input.current.elements[0] as HTMLInputElement;
      const password = input.current.elements[1] as HTMLInputElement;

      const response = await signIn("credentials", {
        email: email.value,
        password: password.value,
        callbackUrl: "http://localhost:3000/",
      });

      if (response?.error) {
        setError(response.error);
      }

      console.log({ response });
      const session = await getSession();
      console.log({ session });
    }
  };

  return (
    <div className="flex h-screen flex-col items-stretch">
      <Layout>
        <div className="flex grow items-center justify-center">
          <div className="w-full max-w-xs">
            <form
              className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
              ref={input}
              onSubmit={handleSubmit}
            >
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
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                {error && (
                  <p className="text-xs italic text-red-500">
                    Please write correct email and password.
                  </p>
                )}
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
      </Layout>
    </div>
  );
};

export default Login;
