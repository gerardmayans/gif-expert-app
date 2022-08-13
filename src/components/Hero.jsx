import "../styles/hero.css";
import doraemon from "../resources/shindo-doraemon.png";
import { Button } from "./Button";

export const Hero = () => {
    return (
        <div className="shindo__hero">
            <div className="shindo__hero-content">
                <h1 className="shindo__hero-title">Doraemon</h1>
                <p className="shindo__hero-text">En Doraemon ho pot fer, de recursos en té molts.</p>
                <Button />
            </div>
            <div className="shindo__hero-img">
                <img src={doraemon} alt="" />
            </div>
        </div>
    )
}