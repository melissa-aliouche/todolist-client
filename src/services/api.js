import axios from "axios";

const BASE_URL = "http://localhost:8080/api/taches";

// Récupérer les tâches avec une catégorie spécifique
export const fetchTaches = async (categorie = "ALL") => {
  const url =
    categorie === "ALL"
      ? BASE_URL
      : `${BASE_URL}/categorie/${categorie.toUpperCase()}`;
  const response = await axios.get(url);
  return response.data;
};

// Créer une nouvelle tâche
export const createTache = async (task) => {
  const response = await axios.post(BASE_URL, task);
  return response.data;
};

// Mettre à jour une tâche existante
export const updateTache = async (id, updatedTask) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedTask);
  return response.data;
};

// Supprimer une tâche
export const deleteTache = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
