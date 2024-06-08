import { useState, useEffect } from "react";
import ItemService from "../../services/item";
import ItemCreate from "@/components/item/create";
import HyperHeader from "@/components/ui/hyperui/header";
import HyperFooter from "@/components/ui/hyperui/footer";

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
  return (
    <>
      <HyperHeader />
      <div className="container max-w-screen-lg mx-auto">
        <ItemCreate onDataAdded={handleDataAdded} />
      </div>
      <HyperFooter />
    </>
  );
};
export default ItemCreate;
