import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeroCard = ({ heroe }) => {
  const { id, superhero, alter_ego, first_appearance, characters } = heroe;
  const heroImageUrl = `/assets/hero-image/${id}.jpg`;
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl w-[350px] md:w-[550px] h-auto mt-10 overflow-hidden flex-col xxs:flex-row">
      <figure className="w-full h-[300px] xxs:h-auto xxs:w-[200px] bg-top">
        {!imageLoaded &&  <div className="w-full min-h-[60vh] h-full flex justify-center items-center">
            <div
              className="w-8 h-8 border-4 border-orange rounded-full border-b-gray-200 animate-spin"
              role="status"
            />
            <span className="ml-2 ">Cargando Imagen...</span>
          </div>}
        <img
          className={`bg-contain ${imageLoaded ? '' : 'hidden'}`}
          src={heroImageUrl}
          alt={superhero}
          style={{ objectFit: 'contain' }}
          onLoad={handleImageLoad}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{superhero}</h2>
        <p>{alter_ego}</p>
        {alter_ego !== characters && <p className="w-48">{characters}</p>}
        <p>
          <small>{first_appearance}</small>
        </p>

        <div className="card-actions justify-end">
          <Link
            to={`/hero/${id}`}
            className="py-2 px-4 text-warning font-bold uppercase absolute bottom-2 right-4 hover:border-2 hover:border-warning hover:rounded-md transition-all duration-300 active:scale-110"
          >
            More...
          </Link>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  heroe: PropTypes.object.isRequired,
};

export default HeroCard;
