import { memo } from 'react';
function Filter({ handlePrev, handleNext, page, genre, setGenre }) {
  return (
    <nav
      aria-roledescription="pages/filter nav"
      className="mx-auto my-5 flex max-w-[1440px] flex-wrap justify-between gap-3 px-5"
    >
      <div className="flex gap-1">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`rounded-full border-2 px-5 ${
            page === 1
              ? `border-gray-200 text-slate-200`
              : `border-gray-400  text-slate-400`
          }`}
        >
          prev
        </button>
        <button
          onClick={handleNext}
          disabled={page === 400}
          className={`rounded-full border-2 px-5 ${
            page === 400
              ? `border-gray-200 text-slate-200`
              : `border-gray-400  text-slate-400`
          }`}
        >
          next
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          className={`rounded-full border-2 px-5 ${
            genre === 0
              ? 'border-blue-400 text-blue-400'
              : 'border-blue-200   text-blue-200'
          }`}
          onClick={() => {
            setGenre(0);
          }}
        >
          all
        </button>
        <button
          className={`rounded-full border-2 px-5 ${
            genre === 28
              ? 'border-blue-400 text-blue-400'
              : 'border-blue-200   text-blue-200'
          }`}
          onClick={() => {
            setGenre(28);
          }}
        >
          action
        </button>
        <button
          className={`rounded-full border-2 px-5 ${
            genre === 35
              ? 'border-blue-400 text-blue-400'
              : 'border-blue-200   text-blue-200'
          }`}
          onClick={() => {
            setGenre(35);
          }}
        >
          comedy
        </button>
      </div>
    </nav>
  );
}
const NavFilter = memo(Filter);
export default NavFilter;
