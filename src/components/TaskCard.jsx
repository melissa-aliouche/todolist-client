import React from "react";
import { Pencil, Trash } from "lucide-react";
import '../css/TaskCard.css'; 

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task-card">
      {/* Conteneur du titre et des boutons d'action */}
      <div className="task-header">
        {/* Titre de la tâche */}
        <h4>{task.titre}</h4>
        {/* Conteneur des actions (modification et suppression) */}
        <div className="task-actions">
          <button className="edit" onClick={onEdit}>
            <Pencil size={16} />
          </button>
          <button className="delete" onClick={() => onDelete(task.id)}>
            <Trash size={16} />
          </button>
        </div>
      </div>

      {/* Description de la tâche */}
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
