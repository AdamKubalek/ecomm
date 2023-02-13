import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import ItemsList from "../components/ItemsList";
import Pagination from "../components/Pagination";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const allItems = api.example.getAllItems.useQuery();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allItems.data?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen flex-col items-stretch">
      <Layout>
        <main className="flex grow flex-col items-center justify-between  ">
          <h1 className="text-4xl font-bold text-purple-900 p-4">Current Items</h1>
          <div className="text-center">
            {currentItems && <ItemsList items={currentItems} />}
          </div>
          {allItems.data?.length && (
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={allItems.data?.length}
              paginate={paginate}
            />
          )}
        </main>
      </Layout>
    </div>
  );
};

export default Home;
