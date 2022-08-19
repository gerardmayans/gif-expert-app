import { useFetchGif } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { HiOutlineTrash } from "react-icons/hi"
import "../styles/gif-grid.css"
import { useState } from "react";

export const GifGrid = ({ category, categories, setCategories }) => {

    //CUSTOM HOOK

    const { images, isLoading } = useFetchGif(category)

    const eliminar = () => {
        categories = categories.filter(e => e !== category);
        setCategories(categories)
    }


    return (
        <div className="gif-grid">
            <h2>{category} <HiOutlineTrash onClick={eliminar} className="trash-icon" /></h2>
            {
                isLoading && (<h2> Cargando...</h2>)
            }
            <p>Descubre los GIFs más increíbles de <b>{category}</b><br /> gracias a esta aplicación ¡Encuéntralos todos!</p>
            <div className="card-grid-wrapper">
                <div className="card-grid">
                    {
                        images.map((image) => (
                            <GifItem key={image.id}
                                {...image} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}