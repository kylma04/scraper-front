import React from 'react';
import JobItem from './JobItem';
import '../JobList.css';  // Importer le fichier CSS pour le tableau global

function JobList({ jobs }) {
  return (
    <table className="job-table">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Entreprise</th>
          <th>Lieu</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <JobItem key={index} job={job} />
        ))}
      </tbody>
    </table>
  );
}

export default JobList;
