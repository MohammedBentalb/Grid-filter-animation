import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
     setTimeout(() => {
      navigate('/Grid-filter-animation/');
    }, 1500); 
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-[3rem] font-bold">not found</h1>
      <h2 className="text-lg">you&apos;ll be redirected</h2>
    </section>
  );
}

export default NotFound;
