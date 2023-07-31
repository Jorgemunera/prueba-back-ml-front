import { useContext } from 'react'
import { MarketContext } from '../../Context'
import './styles.css'

const FilterAdminPanel = () => {
  const context = useContext(MarketContext);
  if (!context.items) {
    return null;
  }

  // Usamos reduce para contar la cantidad de veces que aparece cada userId
  const userIdCounts = context.items.reduce((acc, item) => {
    acc[item.userId] = (acc[item.userId] || 0) + 1;
    return acc;
  }, {});

  return (
    <aside className="filter-panel flex flex-col fixed left-0 border border-black bg-white p-4">
      <h1 className="font-bold">Administrador</h1>
      <h2 className="font-bold">Filtros</h2>
      <h3 className="font-thin">Proveedor</h3>
      <div className="checkbox-list space-y-2">
        {Object.entries(userIdCounts).map(([userId, count]) => (
          <label key={userId} className="flex items-center">
            <input type="checkbox" value={userId} className="mr-2" />
            User {userId}
          </label>
        ))}
      </div>
    </aside>
  );
}

export { FilterAdminPanel }
