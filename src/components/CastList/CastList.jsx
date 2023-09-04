import React from 'react';
import noImg from '../../resources/noImg.png';
import styles from './CastList.module/CastList.module.css'

function CastList({ cast }) {
  return (
    <div className="castList">
      {cast.map(actor => (
        <div key={actor.id} className="castItem">
          <img
            src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : noImg}
            alt={`${actor.name} profile`}
            className={styles.castImage}
          />
          <p className="castName">{actor.name}</p>
          <p className="castCharacter">Character: {actor.character}</p>
        </div>
      ))}
    </div>
  );
}

export default CastList;
