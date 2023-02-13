import { useSession } from "next-auth/react";
import React from "react";
import ItemsList from "../../components/ItemsList";
import Layout from "../../components/Layout";
import { api } from "../../utils/api";

const Items = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = "/login"
    },
  })
  
  const allItems = api.example.getAllItems.useQuery();
  return (
    <Layout>
      <div className="mr-40 ml-40">
        {allItems.data && <ItemsList items={allItems.data} />}
      </div>
    </Layout>
  );
};

export default Items;
