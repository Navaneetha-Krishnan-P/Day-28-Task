import React,{useContext,useState} from 'react'
import data from './Products.json'
import { Products } from './Products'


export const Home = () => {
    const[card,setCard]=useState(data)
  return (
    <div className="cards">
    {data.map((product,key)=>(
        <Products key={key} product={product}/>
    ))}

    </div>
  )
}