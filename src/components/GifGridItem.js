import React from 'react';
import PropTypes from 'prop-types'



export const GifGridItem = ( { title, url } ) => {
    
    return (
        <div className="card">
            <img className="card-img-top" src={ url } alt={ title } />
            <div className="card-body">
                <p className="card-text">{ title }</p>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
