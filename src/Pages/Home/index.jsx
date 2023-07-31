import { useState, useEffect, useContext } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { MarketContext } from "../../Context"
import { FilterAdminPanel } from "../../Components/FilterAdminPanel"

const Home = () => {
    const context = useContext(MarketContext);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/products')
            .then(response => response.json())
            .then(data => context.setItems(data))
    }, [])

    return (
        <Layout>
            <div className="grid gap-4 gap-y-12 gap-x-4 grid-cols-4 max-w-screen-lg">
                    {context.items?.map((item) => (
                        <Card
                            data={item}
                            key={item.id}
                        />
                    ))}
            </div>
            {context.isAdministrator && <FilterAdminPanel />}
        </Layout>
    )
}

export { Home }
