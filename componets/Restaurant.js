import { useState,useEffect } from "react"

const restDetails="https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
console.log(`iam linked from Api`,restDetails)
const Restaurant=()=>{
    const [res,setuser] = useState([])
    const useHandler =async()=>{
        const response = await fetch(restDetails)
        const newData = await response.json();
        const restaurants=newData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        console.log(restaurants);
        setuser([...restaurants]);
    };
    useEffect(()=>{
         useHandler();
    },[]);

   return <div style={{display:"flex" ,gap:"100px" ,flexWrap:"wrap",marginRight:"10px",backgroundColor:"white",}}>
    {res.map((item,index) => {
        const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.info.cloudinaryImageId;
        return (
        <div key={index}>
            <h1 style={{ margin: "10px 0 5px", fontSize: "1.1em" }}>{item.info.name}</h1>
            <img
              src={url}
              alt={name}
              style={{ width: "300px", height: "280px", borderRadius: "6px",alignContent:"space-between" }}
            />  
             <h3>{item.info.id}</h3>
            <h3>{item.info.location}</h3>
            <h3>{item.info.areaName}</h3>
            <h1  style={{ fontWeight: "bold" }}>{item.info.costForTwo}</h1>
            
        </div>)
    })}
   </div>
    
};
export default Restaurant 