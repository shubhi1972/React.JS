import { useRouteError } from "react-router-dom";
import {KITTEN_URL} from "../utils/Constants"

const Error = ()=>{
const err = useRouteError();
console.log(err);

    return(
<div className="error">
    <h1>Oops!!!</h1>
    <h2>Something went Wrong!!</h2>
    <img src={KITTEN_URL} />
    <h3> {err.status} : {err.statusText} </h3>
</div>

    );
}

export default Error;