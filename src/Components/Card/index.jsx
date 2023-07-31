import { useContext, useState } from "react"
import { MarketContext } from "../../Context"

const Card = (data) => {
  const context = useContext(MarketContext);
  // Estado para controlar el mensaje de error
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();

    if (context.isLogued) {
      const token = context.token;
      const productId = data.data.id;

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
    <div className='bg-white cursor-pointer w-52 h-60 bottom-4 rounded-lg'>
      <figure className="relative mb-4 w-full h-2/3">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.amount}</span>
        <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={data.data.name} />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h6 rounded-full m-2 p-1"
          onClick={(e) => handleClick(e)}
        >
          +
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
      </figure>
      <p className="flex flex-col items-center">
        <span className="text-lg font-normal">{data.data.name}</span>
        <span className="text-lg font-normal">{data.data.sku}</span>
        <span className="text-lg font-bold">${data.data.price}</span>
      </p>
    </div>
  )
}

export { Card }
