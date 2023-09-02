import React from 'react';

function CastList({ cast }) {
  return (
    <div className="castList">
      {cast.map(actor => (
        <div key={actor.id} className="castItem">
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={`${actor.name} profile`}
            className="castImage"
          />
          <p className="castName">{actor.name}</p>
          <p className="castCharacter">Character: {actor.character}</p>
        </div>
      ))}
    </div>
  );
}

export default CastList;
