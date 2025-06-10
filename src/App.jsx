import "bootstrap/dist/css/bootstrap.min.css";
import HolaMyFriends from "./components/HolaMyFriends";

function App() {
  const saludo = "My Friends";
  return (
    <>
      <h1>Ejercicio 02</h1>
      <HolaMyFriends saludo={saludo} />
    </>
  );
}

export default App;
