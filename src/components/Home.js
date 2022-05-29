import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import Card from "./Card";


const Home = () => {
    const [country, setCountry] = useState([]);
    const [mode, setMode] = useState(true);
    const [toggleBtn, setToggleBtn] = useState(
      '<i class="far fa-sun"></i> Light Mode'
    );

    
  //  general api url
   const api = "https://restcountries.com/v3.1/all";
    
  
   useEffect(()=>{
     const fetcher = async()=>{
       try {
         const res = await fetch(api)
         const data = await res.json()
         setCountry(data)
         console.log(data)
       } catch (error) {
         console.log(error);
       }
     }
     fetcher()
   },[])

//     theme button
   const toggleDarkMode = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
      setToggleBtn('<i class="fas fa-moon"></i> Dark Mode');
      setMode((current) => (current = !current));
    }
    if (!mode) {
      document.documentElement.classList.remove("dark");
      setToggleBtn('<i class="far fa-sun"></i> Light Mode');
      setMode((current) => (current = !current));
    }
  };


//    search functionality
  const search = async(e)=> {
    if(e.length<3 || e === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/name/${e}`);
    const data = await res.json();
    await setCountry(data);
  }

// filter functionality 
  const filter = async(e)=> {
      if(e==="")return;
      const res = await fetch(`https://restcountries.com/v3.1/region/${e}`);
      const data = await res.json();
      await setCountry(data)
  }



    return(
        
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-900 dark:text-white mb-16">
        <div className="flex container mx-auto ">
          <h1 className="font-bold text-xl">Where in the world?</h1>
          <div className="ml-auto font-medium">
            <button
              onClick={() => toggleDarkMode()}
              dangerouslySetInnerHTML={{ __html: toggleBtn }}
            ></button>
          </div>
        </div>
      </div>
      <div className="flex container mx-auto mb-16">
        <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
        <input
          type="text"
          placeholder="Search"
          className="pl-10 p-1.5 shadow-md rounded-md w-1/3 dark:bg-gray-700"
          onChange={(e) => search(e.target.value)}
        />
        <select
          className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700"
          onChange={(e) => filter(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="container grid grid-cols-4 gap-16 mx-auto ">
       {country.map((country, index)=>(
           
        
           <Link to={`/country/${country.name.common}`} state={country} key={index}>
          <Card 
           name={country.name.common}
           capital={country.capital}
           image={country.flags.png}
           region={country.region}
           population={country.population}
           topLevelDomain={country.topLevelDomain}
           subregion={country.subregion}
           languages={country.languages}
           currencies={country.currencies}
          
          />
          </Link>
         ))}
      </div>
   </div>
 );
}

export default Home;