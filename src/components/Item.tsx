import { Item } from "@prisma/client";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { api } from "../utils/api";
import Image from "next/image";

const Item = ({ item }: { item: Item }) => {
  const truncatedDescription =
    item.description.length > 100
      ? item.description.substring(0, 100)
      : item.description;

  const itemOwner = api.example.getItemOwner.useQuery({
    userId: item.userId,
  });
  const formatedUpdatedAt = moment(item.updatedAt).format("DD/MM/YYYY");

  return (
    <li
      key={item.id}
      className="border-grey h-full max-w-sm rounded-2xl border-8 bg-gradient-to-b"
    >
      <div className="flex w-full flex-col items-center justify-around overflow-hidden p-4 leading-normal">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-2 text-xl font-bold text-black">{item.name}</div>
          <div className="relative h-[112.5px] w-[200px] border">
            <Image src={`/${item.image}.jpeg`} fill alt="" />
          </div>
          <p className="text-base text-black">
            {truncatedDescription}
            <Link href="/">
              ... <u>more</u>
            </Link>
          </p>
        </div>
        <div className="flex w-full items-center justify-around text-gray-400">
          <div className="text-sm">
            <p className="leading-none">{itemOwner.data?.name}</p>
            <p className="text-gray-400">{formatedUpdatedAt}</p>
          </div>
          <div className="text-sm">
            <p>&#36;{item.price}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
