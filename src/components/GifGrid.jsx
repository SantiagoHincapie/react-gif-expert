import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs.js";
import { useFetchGifs } from "../hooks/useFetchGifs.js";
import { GifItem } from "./GifItem.jsx";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    /**/

    return (
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>Cagrgando....</h2>)}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
