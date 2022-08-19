import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Doraemon", "Shin Chan", "Dragon ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <div className="title-container">
        <h1 className="gif-app__title">Crea tus propias colecciones de Gifs.</h1>
        <h3 className="gif-app__subtitle">Utiliza el buscador para añadir más y más gifs. ¡Qué emoción!</h3>
      </div>

      <AddCategory
        // setCategories = { setCategories }
        onNewCategory={(event => onAddCategory(event))}
      />
      {
        categories.map((category) => (
          <GifGrid key={category} category={category} categories={categories} setCategories={setCategories} />
        ))
      }
    </>
  )
}