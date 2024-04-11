import { useState } from "react";
import "./App.css";

function App() {
  // El formulario debe ir en login.jsx (todo lo que hay en app por ahora)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username + " " + password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Auth</h1>
        <label>
          <input
            type="text"
            value={username}
            name="Usuario"
            placeholder="Usuario"
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            name="Contraseña"
            placeholder="Contraseña"
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <input type="submit" value="Iniciar sesión" />
      </form>
    </>
  );
}

export default App;
