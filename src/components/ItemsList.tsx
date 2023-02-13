import { Item } from "@prisma/client";
import OneItem from "./Item";

const ItemsList = ({ items }: { items: Item[] }) => {
  return (
    <ul className="grid grid-cols-3 gap-1 ">
      {items && items.map((item) => ( 
        <OneItem key={item.id} item={item} />
        ))
      }
    </ul>
  );
};

export default ItemsList;
