const API_URL = 'http://localhost:5000/api/jobs';

export const fetchJobs = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
