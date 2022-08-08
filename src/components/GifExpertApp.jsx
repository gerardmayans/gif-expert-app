import { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Shinnosuke Nohara", "Doraemon"]);

  const onAddCategory = () => {
    setCategories(["Valorant", ...categories])
  }

  return (
    <>
      <h1>Hola, mundillo.</h1>

      <AddCategory />
      <button onClick={onAddCategory}> Agregar </button>
      <ol>
        {
          categories.map(category => {
            return <li key={category}> {category} </li>
          })
        }
      </ol>
    </>
  )
}