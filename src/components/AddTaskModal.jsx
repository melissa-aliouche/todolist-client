import React, { useState } from "react";
import "../css/AddTaskModal.css"; 

const AddTaskModal = ({ onClose, categories = [], etats = [], addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateLimite, setDateLimite] = useState("");
  const [categorie, setCategorie] = useState(categories[0] || "");
  const [etat, setEtat] = useState(etats[0] || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !categorie || !etat) return;

    addTask({
      titre: title,
      description,
      dateLimite,
      categorie,
      etat,
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Ajouter une tâche</h3>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            className="input-field"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="input-field"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          />
          <input
            type="date"
            className="input-field"
            value={dateLimite}
            onChange={(e) => setDateLimite(e.target.value)}
          />
          <select
            className="input-field"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            className="input-field"
            value={etat}
            onChange={(e) => setEtat(e.target.value)}
          >
            {etats.map((etat) => (
              <option key={etat} value={etat}>
                {etat}
              </option>
            ))}
          </select>
          <div className="button-container">
            <button
              type="button"
              onClick={onClose}
              className="button close-button"
            >
              Fermer
            </button>
            <button
              type="submit"
              className="button submit-button"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
