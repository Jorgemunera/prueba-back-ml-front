import { useContext, useEffect, useState } from "react";
import { Layout } from "../../Components/Layout"
import { MarketContext } from "../../Context";
import { Card } from "../../Components/Card"
import { CardMessage } from "../../Components/CardMessage";


const Orders = () => {
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
      fetch(`http://localhost:3000/api/v1/orders/user`, {
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
          context.setProductsComprados(data)
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
      <div className="grid gap-4 gap-y-12 gap-x-4 grid-cols-4 max-w-screen-lg">
        {context.productsComprados?.map((item) => (
          <Card
            data={item}
            key={item.id}
          />
        ))}
      </div>
    </Layout>
  )
}

export { Orders }

