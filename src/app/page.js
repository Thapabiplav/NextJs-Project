'use client'
import Card from "./component/Card";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const  fetchRecipe= async ()=>{
    const response= await axios.get('http://localhost:3000/api/recipe')
  }
  useEffect(()=>{
    fetchRecipe()
  },[])
  return (
   <div className="flex flex-wrap justify-center items-center">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   </div>
  );
}
