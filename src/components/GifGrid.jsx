import { useFetchGif } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

import "../styles/gif-grid.css"

export const GifGrid = ({ category }) => {

    //CUSTOM HOOK

    const { images, isLoading } = useFetchGif(category)



    return (
        <div className="gif-grid">
            <h2 className="gifgrid__title">GIFs</h2>
            <p className="gifgrid__subtitle"><b>Download</b> your favourite GIF of Doraemon here!</p>
            {
                isLoading && (<h2> Cargando...</h2>)
            }
            <div className="gifgrid__cards">
                {
                    images.map((image) => (
                        <GifItem key={image.id}
                        {...image}/>
                    ))
                }
            </div>
        </div>
    )
}