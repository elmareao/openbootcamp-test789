import React, { useState} from 'react';
import { Contacto } from '../../models/contact.class';
import Contact from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';


const ContactList = ({ titulo }) => {

const defaultContact1 = new Contacto("Jose", "Conectado");
const defaultContact2 = new Contacto("Pepe", "Desconectado");
const defaultContact3 = new Contacto("Martin", "Conectado");

//cambiar estado de contactos
const [contacto_use, setContacto] = useState([defaultContact1,defaultContact2,defaultContact3]);


function deleteContact(contact){
    const index = contacto_use.indexOf(contact);
    const tempConctact = [...contacto_use];
    tempConctact.splice(index,1);
    setContacto(tempConctact);
}

function updateContactState(contact){
    const index = contacto_use.indexOf(contact);
    const tempConctact = [...contacto_use];
    if(tempConctact[index].estado === "Conectado"){
        tempConctact[index].estado = "Desconectado"
    } else {
         tempConctact[index].estado = "Conectado";
    }
        
    setContacto(tempConctact);
    
}

function addContact(contact){
    const tempConctact = [...contacto_use];
    tempConctact.push(contact);
    setContacto(tempConctact);
}


    return (
        <div>
            <h1>{titulo}</h1>
            <table>
                <th>
                <span>Nombre</span>
                </th>
                <td>
                <span>Estado</span>
                </td>
                <tbody>
                { contacto_use.map((contacto, index) => {
                    return (
                            <Contact 
                                contacto = {contacto}
                                key = {index} 
                                estado = {contacto} 
                                eliminar = {deleteContact}
                                cambiarEstado = {updateContactState}
                            >
                            </Contact>
                        )
                    }
                )}
                </tbody>
            </table>
            <h5 style={{background: 'grey', padding: '2px'}}>Añadir nuevo contacto</h5>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
};



export default ContactList;
