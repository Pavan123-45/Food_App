import { useRouteError } from "react-router-dom"
import Header from "./Header";

const Error =()=>{
    let err=useRouteError()
    console.log(err);
    return(
      <div>
        <Header></Header>
        <h1>Oops!!!</h1>
        <h2>Somthing went wrong</h2>
        <h3>{err.status}  : {err.statusText}</h3>
      
       
      </div>
    )
}
export default Error