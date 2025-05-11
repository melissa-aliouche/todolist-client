import React, { useState } from "react";
import TaskColumn from "./TaskColumn";
import { CATEGORIES, ETATS } from "../utils/constants";
import "../css/TaskBoard.css"; 
import { Clock, ListTodo, CheckCircle, PauseCircle } from "lucide-react"; 
import { PlusCircle } from "lucide-react"; 
import AddTaskModal from "./AddTaskModal"; 
import EditTaskModal from "./EditTaskModal";


export const ETAT_LABELS = {
  A_FAIRE: "À faire",
  EN_COURS: "En cours",
  TERMINE: "Terminé",
  EN_PAUSE: "En pause",
};

export const ETAT_ICONS = {
  A_FAIRE: <ListTodo className="inline" size={18} />,
  EN_COURS: <Clock className="inline" size={18} />,
  TERMINE: <CheckCircle className="inline" size={18} />,
  EN_PAUSE: <PauseCircle className="inline" size={18} />,
};

const TaskBoard = ({ tasksByEtat, onEdit, onDelete, onAddTask, onEditTask }) => {
  const [showAddModal, setShowAddModal] = useState(false); // Affichage modal ajout
  const [showEditModal, setShowEditModal] = useState(false); // Affichage modal édition
  const [selectedTask, setSelectedTask] = useState(null); // Tâche sélectionnée pour l'édition

  // Fonction pour ouvrir le modal d'ajout
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  // Fonction pour fermer le modal d'ajout
  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  // Fonction pour fermer le modal d'édition
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  // Fonction pour ouvrir le modal d'édition
  const handleEditClick = (task) => {
    setSelectedTask(task);
    setShowEditModal(true);
  };

  // Fonction pour ajouter une tâche via le parent (Dashboard)
  const handleAddTask = async (task) => {
    await onAddTask(task); // Appel de la fonction d'ajout de tâche
    setShowAddModal(false); // Fermer le modal après l'ajout
  };

  // Fonction pour modifier une tâche
  const handleUpdateTask = async (updatedTask) => {
    await onEditTask(updatedTask); // Appel de la fonction de mise à jour de tâche
    setShowEditModal(false); // Fermer le modal après la modification
  };

  return (
    <div className="task-board">
      <h2 className="titre">Tableau des tâches</h2> {/* Titre du tableau */}

      <div className="task-columns-container"> {/* Conteneur des colonnes */}
        {ETATS.map((etat) => (
          <TaskColumn
            key={etat}
            title={
              <span className={`etat-title ${etat.toLowerCase()}`}>
                {ETAT_ICONS[etat]} {/* Affichage de l'icône */}
                {ETAT_LABELS[etat]} {/* Affichage du label de l'état */}
              </span>
            }
            tasks={tasksByEtat[etat] || []}
            onEdit={handleEditClick} // Passer la fonction d'édition de tâche
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* Bouton flottant pour ajouter une tâche */}
      <button
        onClick={handleAddClick}
        className="add-task-button"
      >
        <PlusCircle size={20} />
      </button>

      {/* Modal d'ajout de tâche */}
      {showAddModal && (
        <AddTaskModal
          onClose={handleCloseAddModal}
          categories={CATEGORIES}
          etats={ETATS}
          addTask={handleAddTask}
        />
      )}

      {/* Modal de modification de tâche */}
      {showEditModal && selectedTask && (
        <EditTaskModal
          task={selectedTask}
          onClose={handleCloseEditModal}
          categories={CATEGORIES}
          etats={ETATS}
          editTask={handleUpdateTask}
        />
      )}
    </div>
  );
};

export default TaskBoard;
