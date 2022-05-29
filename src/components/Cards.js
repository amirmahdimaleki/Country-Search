import React,{ useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";



 const Cards = ({api}) => {

  const [mode, setMode] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(
    '<i class="far fa-sun"></i> Light Mode'
  );

  const { state } = useLocation();

  const history = useNavigate();

  const goHomeBtn = () => {
    history("/");
  };         
    
  return (

     <div className="country">
      <div className="countryTitle">
        <button onClick={goHomeBtn}>Back</button>
        <h2>{state.name.common}</h2>
        <img src={state.flags.png} alt={state.name.common} />

        <button>
          <a href={state.maps.googleMaps}>View on map</a>
        </button>
      </div>
      <div className="countryInfo">
        <p>
          Population: <span>{state.population}</span>
        </p>
        <p>
          Region: <span>{state.region}</span>
        </p>
        <p>
          Sub Region: <span>{state.subregion}</span>
        </p>
        <p>
          Capital: <span>{state.capital}</span>
        </p>
      </div>
    </div>
  );
};
  

export default Cards;
