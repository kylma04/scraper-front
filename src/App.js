import React, { useEffect, useState } from 'react';
import JobList from './components/JobList';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(response => response.json())
      .then(data => {
        console.log('Jobs fetched:', data);  // Vérifier dans la console si les données sont récupérées
        setJobs(data);
      })
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);
  

  return (
    <div className="App">
      <h1 class="Theh1">Liste des Offres d'Emploi</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
