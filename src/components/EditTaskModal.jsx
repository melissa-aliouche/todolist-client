import React, { useState } from "react";

const EditTaskModal = ({ task, onClose, categories, etats, editTask }) => {
  const [title, setTitle] = useState(task.titre);
  const [description, setDescription] = useState(task.description);
  const [dateLimite, setDateLimite] = useState(task.dateLimite);
  const [categorie, setCategorie] = useState(task.categorie);
  const [etat, setEtat] = useState(task.etat);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      titre: title,
      description: description,
      dateLimite: dateLimite,
      categorie: categorie,
      etat: etat,
    };
    editTask(updatedTask);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Modifier la tâche</h3>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label className="form-label">Titre</label>
            <input
              type="text"
              className="input-field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="input-field"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Date limite</label>
            <input
              type="date"
              className="input-field"
              value={dateLimite}
              onChange={(e) => setDateLimite(e.target.value)}
            />
          </div>
          <div className="form-group">
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
          </div>
          <div className="form-group">
            <select
              className="input-field"
              value={etat}
              onChange={(e) => setEtat(e.target.value)}
            >
              {etats.map((etatOption) => (
                <option key={etatOption} value={etatOption}>
                  {etatOption}
                </option>
              ))}
            </select>
          </div>
          <div className="button-container">
            <button
          onClick={onClose}
          className="button close-button"
        >
          Fermer
        </button>
            <button
              type="submit"
              className="button submit-button"
            >
              Sauvegarder
            </button>
          
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default EditTaskModal;
