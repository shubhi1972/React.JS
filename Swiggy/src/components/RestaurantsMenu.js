import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { MENU_URL, MENU_API } from "../utils/Constants";
import { useParams } from "react-router-dom";


const RestaurantMenu = ()=>{
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
        }, []);


const fetchMenu = async ()=>{
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json)
    setResInfo(json.data);
};


if(resInfo===null)return<Shimmer/>;

    const {name, cuisines, costForTwo, avgRating} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards
        } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
        console.log(itemCards);
        // console.log("hello");

    return(
    <div className="menuDiv">
        <div className="upperRow">
            <div>
                <h1>{name}</h1>
                <h3>{cuisines.join(", ")}</h3>
                <h3> Rs. {costForTwo/100}</h3>
            </div>
            <div className="rating">
                <h1>{avgRating}</h1>
            </div>
        </div>
       


  {itemCards && itemCards.map(item => ( 
        <div key={item.card.info.id} className="lowerRow">
               <div className="menuName">
                <h1>{item.card.info.name}</h1>
                <p> Rs. { item.card.info.price/100|| item.card.info.defaultPrice/100} /-</p>
                </div> 
                
            
            <div className="rec-image">
            <img src={MENU_URL+ item.card.info.imageId}/>
            </div>
        </div>
        ))}

    </div>
    
  );
}


export default RestaurantMenu;