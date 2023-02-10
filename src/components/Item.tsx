import { useState, FormEvent } from "react";
import Card from "./CardLogReg";

const item = () => {
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(newItem);
  };
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-500">
      <Card>
        <h1 className="text-3xl">Create New Item</h1>
        <form className="mt-4" >
          <div className="mb-4 flex flex-col">
            <label
              className="mb-2 text-sm font-bold text-gray-700"
              htmlFor="floatingInput"
            >
              Name
            </label>
            <input
              type="text"
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="floatingInput"
              placeholder=""
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              className="mb-2 text-sm font-bold text-gray-700"
              htmlFor="floatingPassword"
            >
              Description
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="floatingPassword"
              placeholder=""
            />
          </div>
        </form>
        <div className="flex justify-around">
          <button
            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Create
          </button>
        
        </div>
      </Card>
    </main>
  );
};

export default item;
