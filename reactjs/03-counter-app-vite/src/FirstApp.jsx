import { Fragment } from "react";
import PropTypes from 'prop-types';

// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Luis'
// };



// title = 'Hola, soy Luis' cuando se necesita un  valor por detault
export const FirstApp = ( {title,subTitle, name } )=> {
  
    return (
        <>        
        {/* <h1>{ title }</h1> */}
        <h1 data-testid="test-title">{ title }</h1>
        <p>{ subTitle }</p>
        <p>{ subTitle }</p>
        <p>{ name }</p>
        </>
       
    );
}

FirstApp.propTypes = {
    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string.isRequired
}

//valores por defectos 
FirstApp.defaultProps = {
    title:'No hay titulo',
    subTitle: '123',
    name:'Luis Vargas'
}