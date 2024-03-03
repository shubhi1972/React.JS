import {CDN_URL} from "../utils/Constants";

const Restrocards = (props) =>{
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla }=resData?.info;
    
    return (
        <div className="restroCards">
          <img src={ CDN_URL + cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.slaString}</h4>

        </div>
    )
}


export default Restrocards;