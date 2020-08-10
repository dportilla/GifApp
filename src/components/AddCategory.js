import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 1) {
            setCategories( cats => [ inputValue, ...cats])
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                    type="text"
                    placeholder="Escribe algo..."
                    value={inputValue}
                    className="form-control"
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-primary btn-block my-1 mb-5">Enviar</button>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}