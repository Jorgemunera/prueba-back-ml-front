import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Components/Layout";


const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
    } else {
      try {
        const response = await fetch("https://api-ml.fly.dev/api/v1/users", {
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
          setSuccessMessage("Usuario registrado con éxito");
          setIsRegistered(true);
          navigate("/");
        } else if (response.status === 409) {
          setErrorMessage("El usuario ya está registrado");
        } else if (response.status === 400 && data?.message?.includes("\"password\" length must be at least")) {
          setErrorMessage("La contraseña debe tener al menos 8 caracteres");
        } else {
          setErrorMessage("Ha ocurrido un error al registrar el usuario");
        }
      } catch (error) {
        setErrorMessage("Ha ocurrido un error al registrar el usuario");
      }
    }
  };


  return (
    <Layout>
      <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Registro</h2>
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
              <label
                htmlFor="password"
                className="block text-lg font-medium mb-1"
              >
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
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-lg font-medium mb-1"
              >
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 mb-2">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="text-green-500 mb-2">{successMessage}</div>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export { SignIn };



