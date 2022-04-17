import { useLocation } from "react-router-dom";

function Success(){
    const location  =useLocation();
    console.log(location);
    return(
        <div>
            successfull 
        </div>
    )
}
export default Success;