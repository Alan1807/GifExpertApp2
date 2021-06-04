import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async() => {

        const url = 'http://api.giphy.com/v1/gifs/search?q=overwatch&limit=10&api_key=s9ZS5ZPLVZPArudQK2Vdt1dk90wECtch';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        });

        console.log(gifs);
        setImages( gifs );
    }

    return (
        <>        
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map(( img ) => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } />
                    ))
                }
            </div>
        </>
    )
}
