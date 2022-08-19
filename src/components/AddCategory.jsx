import { useState } from "react";

import '../styles/add-category.css';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue("");
    }

    return (

        <form className="add-category__form" onSubmit={onSubmit}>
            <input
                className="add-category__input"
                type="text"
                placeholder="Busca y añade GIFs..."
                value={inputValue}
                onChange={onInputChange}
            />
            <button className="add-category__button">Añadir</button>
        </form>
    );
}