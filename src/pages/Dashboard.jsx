import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import TaskBoard from "../components/TaskBoard"; 
import { ETATS } from "../utils/constants";
import { fetchTaches, createTache, updateTache, deleteTache } from "../services/api";

const Dashboard = () => {
  const [category, setCategory] = useState("ALL");
  const [taches, setTaches] = useState([]);

  const refreshTaches = useCallback(() => {
    fetchTaches(category).then(setTaches);
  }, [category]);

  useEffect(() => {
    refreshTaches();
  }, [refreshTaches]);

  const grouped = ETATS.reduce((acc, etat) => {
    acc[etat] = taches.filter((t) => t.etat === etat);
    return acc;
  }, {});

  
  const handleAddTask = async (task) => {
    await createTache(task);
    refreshTaches();
  };

  const handleEditTask = async (updatedTask) => {
    await updateTache(updatedTask.id, updatedTask);
    refreshTaches();
  };

  const handleDeleteTask = async (id) => {
    await deleteTache(id);
    refreshTaches();
  };

  return (
    <div className="flex h-screen">
      <Sidebar currentCategory={category} setCategory={setCategory} />
      <main className="flex-1 p-4 overflow-y-auto">
        {/* Passer la fonction onAddTask et onEditTask à TaskBoard */}
        <TaskBoard
          tasksByEtat={grouped}
          onEdit={handleEditTask}  // Passer la fonction de modification de tâche
          onDelete={handleDeleteTask}
          onAddTask={handleAddTask}  // Passer la fonction pour ajouter la tâche
          onEditTask={handleEditTask}  // Passer la fonction de modification de tâche
        />
      </main>
    </div>
  );
};

export default Dashboard;
