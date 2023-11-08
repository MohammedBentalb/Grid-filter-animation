const fetchMovies = async (url, signal) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APIACCESS}`,
    },
  };
  const response = await fetch(url, { ...options, signal });
  if (!response.ok) throw new Error('response is not ok');

  return response.json();
};
export default fetchMovies;
