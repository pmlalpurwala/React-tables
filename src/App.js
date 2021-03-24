import Screen1 from "./components/Screen1";
import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [person, setPerson] = useState([
    {
      name: "Rajat1",
      age: 24,
      friends: "ricky",
    },
    {
      name: "Rajat2",
      age: 34,
      friends: "ricky",
    },
    {
      name: "Rajat3",
      age: 34,
      friends: "ricky",
    },
  ]);

  const [currentScreen, setCurrentScreen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("data") != null) {
      setPerson(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(person));
  }, [person]);
  return (
    <div className="App">
      <Screen1
        person={person}
        setPerson={setPerson}
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
    </div>
  );
}

export default App;
