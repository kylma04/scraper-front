import React from 'react';
import '../JobItem.css'; // Importer le fichier CSS pour styliser le tableau

function JobItem({ job }) {
  return (
    <tr className="job-item">  {/* Ajouter une ligne de tableau */}
      <td>{job.title}</td>  {/* Titre de l'emploi */}
      <td>{job.company || 'Non spécifiée'}</td>  {/* Nom de l'entreprise */}
      <td>{job.location || 'Non spécifié'}</td>  {/* Lieu de l'emploi */}
      <td>
        <a href={job.link} target="_blank" rel="noopener noreferrer">
          Voir l'offre
        </a>
      </td>  {/* Lien vers l'offre */}
    </tr>
  );
}

export default JobItem;
