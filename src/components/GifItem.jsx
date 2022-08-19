import "../styles/grid-item.css";
import { IoExpandOutline } from "react-icons/io5";
export const GifItem = ({ id, url, title }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <div className="icon-wrapper">
                <a href={url} target="_blank" download>
                    <IoExpandOutline
                        className="download-icon" />
                </a>
            </div>
        </div>
    )
}