import MenuCategoryCreate from "../../components/menucategory/create";
import { useState, useEffect } from "react";
import ApiHandler from "../../services/menucategory";

import DataTable from "react-data-table-component";
import UpdateCategory from "@/components/menucategory/update";
import HyperHeader from "@/components/ui/hyperui/header";
import HyperFooter from "@/components/ui/hyperui/footer";

const MenuCategoryPage = () => {
  const [api] = useState(new ApiHandler());
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await api.getAll();
      setApiData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
  useEffect(() => {
    fetchData();
  }, [api]);

  const handleDataAdded = () => {
    fetchData(); // Refresh data after new data is added
  };

  const handleEdit = (row) => {
    // Handle the edit action, e.g., open a modal with the form to edit the row
    console.log("Edit row:", row);
  };
  return (
    <>
    <HyperHeader/>
    <div class="container max-w-screen-lg mx-auto">
        
       <MenuCategoryCreate onDataAdded={handleDataAdded} /> 
       <div className="bg-white border border-1 rounded-lg shadow relative m-10">
      <DataTable columns={columns} data={apiData} pagination />
      </div>
      </div>
      <HyperFooter/>
    </>
  );
};

export default MenuCategoryPage;
