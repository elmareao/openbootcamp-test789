import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Contact from '../contact';
import { Contacto } from '../../../models/contact.class';


const ContactForm = ({ add }) => {

    function agregarContacto(e){
        e.preventDefault();
        const nuevoContacto = new Contacto(
            nombreRef.current.value,
            estadoRef.current.value    
        );
        add(nuevoContacto);
    
    }
    
    const nombreRef = useRef('');
    const estadoRef = useRef('');

    return (
    <form onSubmit={agregarContacto}>
        <input ref={nombreRef} required autoFocus placeholder='Nombre'></input>
        <select ref={estadoRef} required defaultValue={'False'}>
             <option value={'Desconectado'}>
                Desconectado
            </option>
            <option value={'Conectado'}>
                Conectado
            </option>

        </select>
        <button type='submit'>
            Añadir contacto
        </button>
    </form>
    );
};


ContactForm.propTypes = {

};


export default ContactForm;
