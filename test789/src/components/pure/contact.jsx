import React from 'react';
import PropTypes from 'prop-types';


const Contact = ({ contacto, estado, eliminar, cambiarEstado }) => {
    return (
                <tr>
                <th>
                <span>{contacto.nombre}</span>
                </th>
                <td>
                <button onClick={() => cambiarEstado(contacto)}>{contacto.estado}</button>
                <button onClick={() => eliminar(contacto)}>Eliminar</button>
                </td>
                </tr>
    );
};


Contact.propTypes = {

};


export default Contact;
