import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function AnimalList() {
  const [tiere, setTiere] = useState([]);

  useEffect(() => {
    getAllTiere();
  }, [tiere]);

  async function getAllTiere() {
    const response = await axios.get("http://localhost:3000/tiere");
    setTiere(response.data);

  }
  return (
    <div className="animal-list">
      <h2>Alle Tiere</h2>
      <input type="text" placeholder="Tiere Suchen.."></input>

      <ul>
        <li>
          Rudolfo (Hund): Fieber, 01.01.2020, 3.2kg
          <Link to="/editAnimal">Bearbeiten</Link>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default AnimalList;
