import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return (

        <>
            <h2>GifExpertApp</h2>  
            <AddCategory/>
            <hr />            
        
            <lo>
                {
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </lo>
        </>

    );
}

export default GifExpertApp;