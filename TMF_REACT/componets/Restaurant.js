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

   return <div style={{display:"flex" ,gap:"50px" ,flexWrap:"wrap"}}>
    {res.map((item,index) => {
        const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.info.cloudinaryImageId;
        return (
        <div key={index}>
            
            <h1  style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "220px",
              padding: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              backgroundColor: "#fff"
            }}>{item.info.id}</h1>
            <h1 style={{ margin: "10px 0 5px", fontSize: "1.1em" }}>{item.info.name}</h1>
            <img
              src={url}
              alt={name}
              style={{ width: "200px", height: "220px", borderRadius: "6px" }}
            />  
            <h3>{item.info.location}</h3>
            <h3>{item.info.areaName}</h3>
            <h1  style={{ fontWeight: "bold" }}>{item.info.costForTwo}</h1>
            
        </div>)
    })}
   </div>
    
};
export default Restaurant 
