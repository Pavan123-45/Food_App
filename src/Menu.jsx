import { useState, useEffect } from "react"

const Menu = () =>{
    let [menuData,setmenuData] = useState()

    useEffect(()=>{
    fetchData()
    },[])
    
    let fetchData = async ()=>{
        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=682268&catalog_qa=undefined&submitAction=ENTER")
        let json = await data.json();
        let dataList = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        setmenuData(menuData)
        }
   
    return (
         <div>   
           
             {/* {
                menuData.map((res)=>{
                    return (
                        <ul key={res?.itemCards?.card?.info?.id}>
                            <li>{res?.card?.info?.name}</li>
                        </ul>
                        
                    )
                    
                })
             }  */}
         </div>
    )
}

export default Menu