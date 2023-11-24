import { Link } from "react-router-dom";
import { imgUrl } from "./config";
import style from "./header.module.css"
import React from 'react'

const RestaurantCard = (prop) => {
    return (
   <div className={style.card_container}>
      {prop.data.map((res)=>{
        return (
          <Link to={"/menu"} key={res.info.id} style={{ textDecoration: 'none' }}>
          <div key={res.info.id} className={style.cards}>
            <img src = {imgUrl+res?.info?.cloudinaryImageId} style={{width:"100%"}} alt="" />
                    <h3>Name : {res?.info?.name}</h3>
                    <h3>Ratings :{res.info?.avgRating}*</h3> 
                   <h3>Cuisins :{res?.info?.cuisines.join(", ")}</h3>
          </div>
          </Link>
          )
     })
     }

   </div>
  )
}

export default RestaurantCard

