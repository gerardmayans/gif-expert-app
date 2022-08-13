import logo from "../resources/shindo-logo.png"
import '../styles/header.css';

export const Header = () => {
    return (
        <div className="shindo__header">
            <div className="shindo__header-wrapper">
                <img src={logo} alt="" className="shindo__logo" />
                <div>
                    <ul className="shindo__links">
                        <li>ShinChan</li>
                        <li>Doraemon</li>
                        <li>Search your own!</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}