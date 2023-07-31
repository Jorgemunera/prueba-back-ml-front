import { useState, useEffect, useContext } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { MarketContext } from "../../Context"
import { FilterAdminPanel } from "../../Components/FilterAdminPanel"

const Home = () => {
  const context = useContext(MarketContext);
  const renderView = () => {
    if (context.searchByName?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (context.filteredItems?.map((item) => (
          <Card
            data={item}
            key={item.id}
          />
        )))
      } else {
        return (
          <div>No hay coincidencias :(</div>
        )
      }
    } else {
      return (context.items?.map((item) => (
        <Card
          data={item}
          key={item.id}
        />
      )))
    }
  }

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products')
      .then(response => response.json())
      .then(data => context.setItems(data))
  }, [])

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Productos</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByName(event.target.value)}
      />
      <div className="grid gap-4 gap-y-12 gap-x-4 grid-cols-4 max-w-screen-lg">
        {renderView()}
      </div>
      {context.isAdministrator && <FilterAdminPanel />}
    </Layout>
  )
}

export { Home }
