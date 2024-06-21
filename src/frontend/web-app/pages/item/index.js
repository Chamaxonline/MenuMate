import { useState, useEffect } from "react";
import ItemService from "../../services/item";
import ItemCreate from "@/components/item/create";
import HyperHeader from "@/components/ui/hyperui/header";
import HyperFooter from "@/components/ui/hyperui/footer";
import DataTable from "react-data-table-component";

const ItemCreatePage = () => {
  const [api] = useState(new ItemService());
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDataAdded = () => {
    fetchData(); // Refresh data after new data is added
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await api.getAll();
      setApiData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [api]);

  const handleModalClose = () => {
    setIsEditModalOpen(false);
   // setSelectedCategory(null);
  };

  const columns = [
    { name: "Code", selector: (row) => row.code },
    { name: "Name", selector: (row) => row.name },
    {
      name: "Actions",
      cell: (row) => (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleEdit(row)}
        >
          Edit
        </button>
      ),
    },
  ];

  
  return (
    <>
      <HyperHeader />
      <div className="container max-w-screen-lg mx-auto">
        <ItemCreate onDataAdded={handleDataAdded} />
        <div className="bg-white border border-1 rounded-lg shadow relative m-10">
          <DataTable
            columns={columns}
            data={apiData}
            pagination
            progressPending={loading}
            progressComponent={
              <div class="w-36 h-36 border-8 rounded-full border-t-lime-400 animate-spin" />
            }
          />
        </div>
      </div>
      <HyperFooter />
    </>
  );
};
export default ItemCreatePage;
