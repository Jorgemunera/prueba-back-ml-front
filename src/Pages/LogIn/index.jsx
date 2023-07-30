import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MarketContext } from "../../Context";
import { Layout } from "../../Components/Layout";

const LogIn = () => {
  const context = useContext(MarketContext);
  const navigate = useNavigate();

  // Estado del formulario y mensajes de error
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Función para manejar el cambio en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reiniciar el mensaje de error antes de enviar la solicitud
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Si la autenticación es exitosa, almacenar el token en el contexto
        context.setToken(data.token);
        console.log('token: ',context.token)
        // Redirigir al usuario a la página de inicio
        navigate("/");
      } else if (response.status === 401) {
        // Si la autenticación falla, mostrar mensaje de error
        setErrorMessage("No se ha podido iniciar sesión. Verifica tus credenciales.");
      } else {
        // Si hay otro error, mostrar mensaje de error genérico
        setErrorMessage("Ha ocurrido un error al iniciar sesión.");
      }
    } catch (error) {
      // Si hay un error de conexión, mostrar mensaje de error genérico
      setErrorMessage("Ha ocurrido un error al iniciar sesión.");
    }
  };

  return (
    <Layout>
      <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Inicia Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-lg font-medium mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export { LogIn };
