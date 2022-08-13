import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ "Doraemon"]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Hola, mundillo.</h1>

      <AddCategory 
      // setCategories = { setCategories }
      onNewCategory = {(event => onAddCategory (event))}
      />
        {
          categories.map((category) => (
            <GifGrid key={category} category = {category}/>
          ))
        }
    </>
  )
}