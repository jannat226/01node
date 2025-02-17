import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes") // Use full backend URL
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  });

  return (
    <>
      <h1>Chai aur Full Stack</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
