
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/** Funcional Component */
export const PublicRoute = ({
    isAuthenticated,                        //  Propiedad definida esperada
    component: Component,                   //  Propiedad definida esperada
    ...rest                                 //  Propiedades indefinidas esperadas
}) => {
    return (
        <Route
            { ...rest }                                 //  Pasa path para definir la ruta
            component={ props => (          
                ( isAuthenticated )                     //  Condiciona el componente a pasar a la ruta 
                    ?   <Redirect to="/" />             //  Redirecciona en caso de no tener acceso permitido
                    :   <Component { ...props } />      //  Pasa los props requeridos por el componente
            )}
        />
    )
}

/** Implementamos PropTypes para manejar errores de implementación */
PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}