import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import HeroCard from "./HeroCard";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import PropTypes from "prop-types";

const HeroList = ({ publisher }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  const filterHeros = getHeroesByName(heroes, q);
 
  return (
    <>
      {
        filterHeros.length > 0 ? (  <div className="flex gap-2 justify-center items-center flex-wrap">
        {filterHeros.map((heroe) => (
          <HeroCard key={heroe.id} heroe={heroe} />
        ))}
      </div>) : 
      <div className="mt-20 w-full flex gap-4 justify-center items-center">
        <p className="text-white text-3xl">No Hero With</p> <span className="text-warning text-3xl border-b-2 border-warning">{q}</span>
      </div>
      }
    </>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};

export default HeroList;
