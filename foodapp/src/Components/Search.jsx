import {useEffect, useState} from "react"
import styles from "./Search.module.css"
import FoodList from "./FoodList"
const url="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="87efb69cc91d443f95f7204c6b99df54"
export default function search({foodData,setFoodData})
{
    const [query,setQuery]=useState("pizza")
    useEffect(()=>{
        async function fetchFood()
        {
            const res= await fetch(`${url}?query=${query}&apiKey=${API_KEY}`)
            const data=await res.json()
            console.log(data.results)
            setFoodData(data.results)
        
        }
        fetchFood()
        function demo(){
            
            console.log("demo function executed")
        }
        demo()
    },[query])
    return(
        <div className={styles.searchContainer}>
            <input className={styles.input}value={query} onChange={(e)=>setQuery(e.target.value)} type="text"/>
          
        </div>
    )
}