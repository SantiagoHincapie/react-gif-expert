import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Ponch'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        //console.log("Valorant");
        //* Solucion del profe
        setCategories([newCategory, ...categories]);

        //*Solucion del profe
        //setCategories(cat=>[...cat,'Valorant'])

        //*Mi solucion 
        //setCategories(categories.concat("Valorant"))
    };
    return <>


        <h1>GifExpertApp</h1>

        <AddCategory

            onNewCategory={onAddCategory}
        />
        {
            categories.map(category =>
            (
                <GifGrid key={category} category={category} />
            ))
        }



    </>
};
