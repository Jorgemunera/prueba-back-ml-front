import { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import { Layout } from "../../Components/Layout"
import { MarketContext } from "../../Context";
import { TableRow } from "../../Components/TableRow"
import { CardMessage } from "../../Components/CardMessage";


const Inventory = () => {
  const context = useContext(MarketContext);
  const [showCardMessage, setShowCardMessage] = useState(false)
  const [isResponseNotFound, setIsResponseNotFound] = useState(false)

  useEffect(() => {
    if (context.isLogued) {
      setShowCardMessage(true)
    }
  }, [context.isLogued]);

  useEffect(() => {
    if (context.token) {
      fetch(`http://localhost:3000/api/v1/products/user-id`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${context.token}`
        }
      })
        .then(response => {
          if (response.status === 404) {
            setIsResponseNotFound(true);
          }
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          context.setProductsToSale(data)
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
  }, [context.isLogued])

  if (!context.isLogued) {
    return (
      <CardMessage />
    )
  }
  return (
    <Layout>
      {showCardMessage && isResponseNotFound && <CardMessage />}
      <div>

        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow mb-8">
          <NavLink
            to='/create-product'
          >
            Crear Producto
          </NavLink>
        </button>
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="w-1/6">Image</th>
            <th className="w-1/6">Name</th>
            <th className="w-1/12">SKU</th>
            <th className="w-1/6">Price</th>
            <th className="w-1/12">Amount</th>
            <th className="w-2/6">Action</th>
          </tr>
        </thead>
        <tbody>
          {context.productsToSale?.map((item) => (
            <TableRow data={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export { Inventory };

