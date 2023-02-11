import { useRef, useEffect } from "react";
import React from "react";

import Card from "../components/CardLogReg";
import { api } from "../utils/api";

const Registration = () => {
  console.log("### Refreshing");

  const fullNameInputElement = useRef<HTMLInputElement | null>(null);
  const emailInputElement = useRef<HTMLInputElement | null>(null);
  const passwordInputElement = useRef<HTMLInputElement | null>(null);
  const passwordConfirmationInputElement = useRef<HTMLInputElement | null>(
    null
  );

  const createNewUser = api.example.createNewUser.useMutation();

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      name: fullNameInputElement.current?.value,
      email: emailInputElement.current?.value,
      password: passwordInputElement.current?.value,
      passwordConfirmation: passwordConfirmationInputElement.current?.value,
    };

    console.log(data);
    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.passwordConfirmation === ""
    ) {
      alert("Please fill all the fields");
      return;
    } else if (data.password !== data.passwordConfirmation) {
      alert("Password and password confirmation must be the same");
      return;
    } else if (data.password?.length! < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (data.name && data.email && data.password && data.passwordConfirmation) {
      createNewUser.mutate({
        name: data.name,
        email: data.email,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
      });
    }
  };

  useEffect(() => {
    fullNameInputElement.current?.focus();
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
      <Card>
        <h1 className="text-3xl">Signup</h1>
        <form className="mt-4" onSubmit={formHandler}>
          <div className="mb-4 flex flex-col">
            <label
              className="mb-2 text-sm font-bold text-gray-700"
              htmlFor="full_name"
            >
              Full name
            </label>
            <input
              ref={fullNameInputElement}
              id="full_name"
              placeholder="Full name"
              type="text"
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              className="mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              ref={emailInputElement}
              id="email"
              placeholder="Email"
              type="email"
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              className="mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              ref={passwordInputElement}
              id="password"
              placeholder="Password"
              type="password"
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              className="mb-2 text-sm font-bold text-gray-700"
              htmlFor="password_confirmation"
            >
              Password Confirmation
            </label>
            <input
              ref={passwordConfirmationInputElement}
              id="password_confirmation"
              placeholder="Password Confirmation"
              type="password"
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          <button
            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Registration;
