import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ category }) => {

    const { data } = useFetchGifs( category );

    
    return (
        <div>
            <div className="alert alert-info" role="alert">
                { category }
            </div>
            <div className="card-columns">
            {
            data.map( img => (
            <GifGridItem 
                key={img.id}
                { ...img }
            />
            ))
            }
            </div>
        </div>
        

    )
}
