import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import fetchMovies from '../functions/fetchmovies';
import Navbar from '../Components/Navbar';
import { useSearchParams } from 'react-router-dom';
import Movie from '../Components/Movie';
import NavFilter from '../Components/Filter';
import { motion } from 'framer-motion';
import Skeleton from '../Components/skeleton';

function Home() {
  const [filtered, setFiltered] = useState([]);
  const [genre, setGenre] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams({
    page: '1',
  });
  const page =
    parseInt(searchParams.get('page')) > 1
      ? parseInt(searchParams.get('page'))
      : 1;
  const { data, isLoading, error } = useQuery(['movies', page], ({ signal }) =>
    fetchMovies(
      `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${
        import.meta.env.VITE_APIKEY
      }`,
      signal
    )
  );

  const handlePrev = useCallback(
    (e) => {
      e.preventDefault();
      if (page > 1) setSearchParams({ page: page - 1 });
      if (page <= 1) setSearchParams({ page: 1 });
    },
    [setSearchParams, page]
  );
  const handleNext = useCallback(
    (e) => {
      e.preventDefault();

      if (page < 400) setSearchParams({ page: page + 1 });
      if (page >= 400) setSearchParams({ page: 400 });
    },
    [page, setSearchParams]
  );

  useEffect(() => {
    if (genre === 0) {
      setFiltered(data?.results);
      return;
    }
    const newVal = data?.results.filter((movie) => {
      return movie.genre_ids.includes(genre);
    });
    setFiltered(newVal);
  }, [data, genre]);

  return (
    <>
      <Navbar />
      <NavFilter
        handleNext={handleNext}
        handlePrev={handlePrev}
        page={page}
        genre={genre}
        setGenre={setGenre}
        searchParams={setSearchParams}
      />
      {error && (
        <h1 className="text-center text-[25px] font-semibold">
          {' '}
          Error happening with API
        </h1>
      )}
       {isLoading && <Skeleton />}
      {filtered && (
        <motion.section className="container">
          {filtered?.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </motion.section>
      )}
    </>
  );
}

export default Home;
