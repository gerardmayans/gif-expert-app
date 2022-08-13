import { useState } from "react";
import { About } from "./About";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
import { Header } from "./Header";
import { Hero } from "./Hero";


export const ShinDoApp = () => {

  const [categories, setCategories] = useState([ "Doraemon"]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <div className="shindo__app">

      <Header />
      <Hero />

      <GifGrid category = "doraemon"/>

       <About/>
      {/* <h1>Hola, mundillo.</h1>

      <AddCategory
      // setCategories = { setCategories }
      onNewCategory = {(event => onAddCategory (event))}
      />
        {
          categories.map((category) => (
            <GifGrid key={category} category = {category}/>
          ))
        } */}
    </div>
  )
}