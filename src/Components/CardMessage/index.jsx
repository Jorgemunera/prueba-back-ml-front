import { Layout } from "../Layout";
import { NavLink } from 'react-router-dom'

const CardMessage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md">
            <NavLink
              to='/'
            >
              Comprar
            </NavLink>
          </button>
        <img
          src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Card Image"
          className="w-96 h-56 object-cover rounded-md shadow-lg mt-8"
        />
        <p className="mt-4 text-center text-gray-600">
          Regístrate para poder comprar y vender.
        </p>
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md">
            <NavLink
              to='/sign-in'
            >
              Registrarse
            </NavLink>
          </button>
          <button className="px-4 py-2 bg-green-400 text-white rounded-md shadow-md">
            <NavLink
              to='/log-in'
            >
              Iniciar Sesión
            </NavLink>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export { CardMessage };
