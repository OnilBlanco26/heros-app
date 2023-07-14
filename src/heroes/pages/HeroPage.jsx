import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

const HeroPage = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();

  const heroe = useMemo(() => getHeroById(heroId), [heroId]);

  const handleNavigateBack = () => {
    if (heroe.publisher === "Marvel Comics") {
      navigate("/marvel");
    } else {
      navigate("/dc");
    }
  };

  if (!heroe) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <div className=" w-full flex flex-col md:flex-row justify-center items-center md:items-start mt-20 gap-2">
      <div className="avatar w-[90%] md:w-[45%] h-[300px] md:h-[600px] flex justify-center">
        <div className="animate__animated animate__fadeInLeft">
          <img
            className="rounded-lg bg-contain"
            src={`/assets/hero-image/${heroId}.jpg`}
            alt=""
          />
        </div>
      </div>
      <div className="w-[90%] md:w-[55%]">
        <h3 className="text-4xl md:text-6xl font-bold text-white text-center md:text-start">
          {heroe.superhero}
        </h3>
        <hr className="mt-4 h-3" />
        <ul className="mx-2">
          <li>
            <b>Alter ego: </b> {heroe.alter_ego}
          </li>
          <li>
            <b>Publisher: </b> {heroe.publisher}
          </li>
          <li>
            <b>First appearance: </b> {heroe.first_appearance}
          </li>
        </ul>
        <hr className="mt-4 h-3" />
        <h4 className="mx-2 text-2xl text-white font-bold">Characters</h4>
        <p className="mx-4 ">{heroe.characters}</p>
        <hr className="mt-4 h-3" />
        <h4 className="mx-2 text-2xl text-white font-bold">Description</h4>
        <p className="mx-4 ">{heroe.description}</p>
        <hr className="mt-4 h-3" />
        <h4 className="mx-2 text-2xl text-white font-bold">Powers</h4>
        <ul className="mx-4 ">
          {heroe.powers.map((power) => (
            <li key={power}>{power}</li>
          ))}
        </ul>
            <hr className="mt-4 h-3" />
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col justify-center items-center">
            <h4 className="mx-2 text-2xl text-white font-bold text-center">
              Team Afiliations
            </h4>
            <ul className="mx-4 ">
              {heroe.team_affiliations.map((team) => (
                <li key={team}>{team}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="mx-2 text-2xl text-white font-bold text-center">
              Allies
            </h4>
            <ul className="mx-4 text-center">
              {heroe.allies.map((allie) => (
                <li key={allie}>{allie}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="mx-2 text-2xl text-white font-bold text-center">
              Archie Enemies
            </h4>
            <ul className="mx-4 ">
              {heroe.arch_enemies.map((enemy) => (
                <li key={enemy}>{enemy}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="absolute top-24 right-8"
          onClick={handleNavigateBack}
        >
          <i className="bx bxs-arrow-to-left text-4xl text-warning hover:scale-125 transition-transform duration-300"></i>
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
