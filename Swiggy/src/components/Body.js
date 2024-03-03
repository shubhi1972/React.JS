
import Restrocards from "./Restrocards";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";


// whenever, state variable updates, react triggered the reconciliation cycle (Re-renders the React component)

const Body =() => {

  const [ListOfRestro, setListOfRestro] = useState([]);
  const [filteredRestraunts, setFilterRestraunts] = useState([]);
  const [seacrhText, setSearchText]= useState("");


  useEffect(()=>{
    fetchData();
  }, []);

  
   const fetchData = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN");

    const json = await data.json();
    console.log(json);
    setListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  if(ListOfRestro.length === 0){
    return <h1><Shimmer/></h1>
  }

    return(
       <div className="body">
        <div className="filter">
          <button className="filter-btn" 
            onClick={()=>{
              const filterList = ListOfRestro.filter(
                (res)=> res.info.avgRating > 4
              );
              setListOfRestro(filterList);
            }} >
            Top  Rated  Resaurant
          </button>
        </div>
         <div className="search">
          <input  type="text" className="placeholder" value={seacrhText} 
           onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />
          <button className="searchBtn" onClick={()=>{

            console.log(seacrhText);  
            const filterRestro = ListOfRestro.filter((res) =>
            res.info.name.toLowerCase().includes(seacrhText.toLowerCase())
          );
          setFilterRestraunts(filterRestro); 
        }}>
            Search
            </button>
          </div> 
        
        
         <div className="res-container">
         {filteredRestraunts.map((restaurant) => (
         <Link key={restaurant?.info.id} to={"restaurants/"+restaurant.info.id} className="bodyLink"> 
              <Restrocards resData={restaurant}/>
              </Link>
             ))}
              </div>
       </div>
    );
    };

    
    export default Body;