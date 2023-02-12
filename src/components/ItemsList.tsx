import { useState } from "react";
import { api } from "../utils/api";
import Image from "next/image";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const allItems = api.example.getAllItems.useQuery();
  console.log(allItems.data);

  const itemList = allItems.data?.map((item) => {
    return (
      <>
        <div className="max-w-sm">
          <div
            className="flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l]"
            title="Woman holding a mug"
          ></div>
          <div className="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
            <div className="mb-8">
              <p className="flex items-center text-sm text-gray-600">
                <svg
                  className="mr-2 h-3 w-3 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="mb-2 text-xl font-bold text-gray-900">
                {item.name}
              </div>
              <Image src={`/${item.image}.jpeg`} width={300} height={100} alt= ""></Image>
              <p className="text-base text-gray-700">{item.description}</p>
            </div>
            <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="mr-4 h-10 w-10 rounded-full"
                src="/img/jonathan.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="leading-none text-gray-900">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
            <div className="text-sm">
              <p>&#36;{item.price}</p>
            </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="flex">
      {itemList}
    </div>
  );
};

export default ItemsList;
