import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
    // Buscar que es un hook

    const onAddCategory = ( newCategory ) =>{
        
        if(categories.includes(newCategory)) return;

         setCategories([newCategory,...categories]);//hace una copia del elemento o arreglo e inserta el nuevo valor

        // setCategories(cat => [...cat,'Valorant']);


        // setCategories(categories.concat('Valorant'))
    }

    return(
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {/* Listado de Gifs */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                }) }
                {/* <li>ABC</li> */}
            </ol>
                {/* Gif Item */}
        </>
    )
}