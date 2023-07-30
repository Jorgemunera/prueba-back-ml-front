import { useState, useEffect, useContext } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { MarketContext } from "../../Context"

const Home = () => {
    const context = useContext(MarketContext);
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <Layout>
            <div className="container mx-auto">
                <div className="grid gap-4 gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {items?.map((item) => (
                        <Card
                            data={item}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export { Home }
