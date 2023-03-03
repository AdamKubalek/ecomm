import { useState, FormEvent } from "react";
import { api } from "../utils/api";
import Card from "./CardLogReg";
import { useSession } from "next-auth/react";

const AddItem = () => {
  const { data: sessionData } = useSession();
  const createNewItem = api.example.createNewItem.useMutation();
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    userId: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sessionData?.user?.id) {
      console.log(newItem);
      createNewItem.mutate({ ...newItem, userId: sessionData?.user?.id });
    }
    setNewItem({
      name: "",
      description: "",
      price: "",
      image: "",
      userId: "",
    });
  };

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-500">
      <Card>
        <h1 className="text-3xl">Create New Item</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
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
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
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
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="mb-2 text-sm font-bold text-gray-700">
              Price
            </label>
            <input
              type="text"
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="mb-2 text-sm font-bold text-gray-700">
              Image
            </label>
            <input
              type="text"
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              value={newItem.image}
              onChange={(e) =>
                setNewItem({ ...newItem, image: e.target.value })
              }
            />
          </div>

          <div className="flex justify-around">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </Card>
    </main>
  );
};

export default AddItem;
