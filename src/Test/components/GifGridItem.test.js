// const { shallow } = require("enzyme")
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem'


describe('Pruebas en <GifGridItem />', () => {
    const title = 'Titulo';
    const url = 'http://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> )

    test('Debe mostrar el componente correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe tener un parrafo con el title ', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title )
    })
    
    
})
