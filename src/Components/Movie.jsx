import { motion } from 'framer-motion';
import noImg from '../assets/no-img.png'
function Movie({ movie }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-3"
    >
      {movie.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt="TMDB movie photo"
          className="aspect-[16/9] rounded-[1rem] object-cover"
        />
      )}
      {!movie.backdrop_path && <img src={noImg} alt='no img' className="aspect-[16/9] rounded-[1rem] object-cover" />}
      <h1 className="font-semibold">{movie.original_title}</h1>
    </motion.div>
  );
}

export default Movie;
