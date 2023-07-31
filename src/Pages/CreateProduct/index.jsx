import { useContext, useState } from "react";
import { MarketContext } from "../../Context";
import { Layout } from "../../Components/Layout";

const CreateProduct = () => {
  const context = useContext(MarketContext);
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    amount: "",
    price: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!context.isLogued) {
      setErrorMessage("Debes estar logueado para agregar un producto.");
      return;
    }

    const token = context.token;

    try {
      const response = await fetch("http://localhost:3000/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Producto creado con éxito");
      } else {
        if (data?.message) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage("Ha ocurrido un error al crear el producto");
        }
      }
    } catch (error) {
      setErrorMessage("Ha ocurrido un error al crear el producto");
    }
  };

  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-bold mb-4">Crear Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sku" className="block text-lg font-medium mb-1">
              SKU
            </label>
            <input
              type="text"
              id="sku"
              name="sku"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={formData.sku}
              onChange={handleChange}
              placeholder="SKU"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-lg font-medium mb-1">
              Cantidad
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Cantidad"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-lg font-medium mb-1">
              Precio
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={formData.price}
              onChange={handleChange}
              placeholder="Precio"
              required
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 mb-2">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="text-green-500 mb-2">{successMessage}</div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Crear Producto
          </button>
        </form>
      </div>
    </Layout>
  );
};

export { CreateProduct };
