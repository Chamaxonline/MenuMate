import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ItemService from "../../services/item";
import ApiHandler from "../../services/menucategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

const ItemCreate = ({ onDataAdded }) => {
  const router = useRouter();
  const [apiData, setApiData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    active: false,
  });

  const [api] = useState(new ItemService());
  const [menuService] = useState(new ApiHandler());
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setCode();
  }, []);

  useEffect(() => {
    fetchData();
  }, [menuService]);

  const fetchData = async () => {
    // setLoading(true);
    try {
      const data = await menuService.getAll();
      setApiData(data.filter(x=> x.active == true));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    //  setLoading(false);
  };

  const generateCode = async () => {
    return `ITM-${(await getIndexCount()) + 1}`;
  };

  const setCode = async () => {
    const code = await generateCode();
    setFormData((prevData) => ({
      ...prevData,
      code: code,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const notify = () => toast.success("Message sent!");

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      api.createData(formData).then((createdData) => {
        toast.success("Menu Category Created!");
        onDataAdded();
        handleReset();
        setCode();
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const getIndexCount = async () => {
    try {
      const data = await api.getLastId();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      code: "",
      active: false,
    });
    setErrors({});
    setCode();
  };

  return (
    <>
      <div className="container max-w-screen-lg mx-auto">
        <ToastContainer />
        <div className="bg-white border border-1 rounded-lg shadow relative m-10">
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">Create Item</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="product-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="code"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Code
                </label>
                <input
                  type="text"
                  name="code"
                  id="code"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Apple Imac 27”"
                  required=""
                  value={formData.code}
                  onChange={handleChange}
                  readOnly={true}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Name"
                  required=""
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="category"
                  class="block text-gray-700 font-medium mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  {apiData.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="animal-dog"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  <input
                    checked
                    type="checkbox"
                    name="active"
                    id="active"
                    className="mr-2"
                    value={formData.active}
                    onChange={handleChange}
                  />
                  Active
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-6 border-t border-gray-200 rounded-b">
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemCreate;
