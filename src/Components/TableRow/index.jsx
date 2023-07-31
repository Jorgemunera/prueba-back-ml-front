import { useContext, useState } from "react";
import { MarketContext } from "../../Context";

const TableRow = ({ data }) => {
  const context = useContext(MarketContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();

    if (context.isLogued) {
      const token = context.token;
      const productId = data.id;

      try {
        const response = await fetch("http://localhost:3000/api/v1/orders/add-item", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productId }),
        });

        if (response.ok) {
          const newItem = await response.json();
          console.log("Nuevo item agregado:", newItem);
        } else {
          console.error("Error al agregar el item:", response.status);
        }
      } catch (error) {
        console.error("Error de red:", error);
      }
    } else {
      setErrorMessage("Debes estar logueado para agregar un item.");
    }
  };

  return (
    <tr>
      <td>
        <img
          className="w-16 h-16 object-cover rounded-lg"
          src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={data.name}
        />
      </td>
      <td>{data.name}</td>
      <td>{data.sku}</td>
      <td>${data.price}</td>
      <td>{data.amount}</td>
      <td>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleClick}
        >
          Add to Cart
        </button>
        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
      </td>
    </tr>
  );
};

export { TableRow };
