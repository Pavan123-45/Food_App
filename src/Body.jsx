import { useState } from "react";
import style from "./header.module.css";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard"
import Shimmer  from "./Shimmer";
const Body=()=>{

    let [listofRestaurant,setListofRestaurant] = useState([])
    let[filterdRestaurant, setFilterdRestaurant] = useState([])
    let [searchText,setSearchText]= useState("")
    useEffect(()=>{
       fetchData();
    },[])
    let fetchData = async ()=>{
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let json= await data.json();
        let resList = json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
        setListofRestaurant(resList)
        setFilterdRestaurant(resList)
           }
    let trrbtn=()=>{
          setFilterdRestaurant(listofRestaurant.filter((res) => res?.info?.avgRating >4))
         }
    if(listofRestaurant.length===0){
 
         return <Shimmer/>
   }
   let searchbutton=(e)=>{
      setSearchText(e.target.value)
   }
   let searchData=()=>{
    let filterData = listofRestaurant.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilterdRestaurant(filterData)
    
}
 
    return(
        <div className={style.body}>
            <div className={style.search}>
                <input type="search" value={searchText} onChange={searchbutton} placeholder="Enter hotel name" />
                <button className={style.searchbutton} onClick={searchData}>Search</button>
                <button className={style.trrbtn} onClick={trrbtn}>Top Rated Restaurant</button>
                
                <div className={style.card_container}>
                <RestaurantCard data={filterdRestaurant}></RestaurantCard>
                </div>

           </div>
        </div>
    )
}

export default Body