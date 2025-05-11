import React from "react";
import { CATEGORIES } from "../utils/constants";
import "../css/Sidebar.css"; 
import { Home, FileText, Briefcase, Coffee, Grid, List } from "lucide-react"; 


const CATEGORY_ICONS = {
  TRAVAIL: <Briefcase size={20} />,
  ETUDES: <FileText size={20} />,
  PROJETS: <Grid size={20} />,
  PERSONNEL: <Home size={20} />,
  DIVERS: <Coffee size={20} />,
};

const Sidebar = ({ currentCategory, setCategory }) => {
  return (
    <div className="sidebar">
      <ul>
        {/* Option pour "Toutes mes taches" */}
        <li
          key="toutes-mes-taches"
          className={`menu-item ${currentCategory === "Toutes mes taches" ? "active" : ""}`}
          onClick={() => setCategory("ALL")}
        >
          <span className="icon"><List size={20} /></span> {/* Icône de liste pour "Toutes mes taches" */}
          <span>Toutes mes tâches</span>
        </li>

        {/* Liste des catégories */}
        {CATEGORIES.map((cat) => (
          <li
            key={cat}
            className={`menu-item ${currentCategory === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {/* Affichage de l'icône de chaque catégorie */}
            <span className="icon">{CATEGORY_ICONS[cat]}</span>
            <span>{cat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
