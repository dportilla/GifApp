import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState(['naruto']);


    return (
        <div className="container">
            <h1 className="text-center m-5">Gif-App</h1>
            
            <AddCategory setCategories={setCategories}/>
            
            <div>
                {
                    categories.map( category => 
                        <GifGrid category={ category } key={ category }/>
                    )
                }
            </div>
        </div>
    )
}
