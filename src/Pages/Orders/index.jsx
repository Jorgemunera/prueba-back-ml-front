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
    // Verificamos si el token está disponible en el contexto
    if (context.token) {
      // Configuramos la petición con el token bearer
      fetch(`http://localhost:3000/api/v1/orders/user`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${context.token}`
        }
      })
        .then(response => {
          console.log("response---------", response)
          if(response.status === 404){
            setIsResponseNotFound(true);
          }
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          console.log("data---------", data)
          context.setProductsComprados(data)})
        .catch(error => {
          console.error("Error fetching data:", error);
          // Aquí puedes manejar el error de acuerdo a tus necesidades
        });
    }
  }, [context.isLogued])

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


{/*
        si el usuario no se ha logueado entonces debe mostrar un pagina diciendo inicie sesion para poder comprar productos, mostrar boton de iniciar sesion o registrar
        si si esta logueado entonces no mostrar nada (la cantidad de productos que tiene)
        */}
