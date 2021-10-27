import React from 'react';
import Form from 'react-bootstrap/Form'

const FormCustomer = () => {
    return (
        <>
            <Form className='customerInfo'>
                
                <label>
                    Nombre del cliente:
                    <Form.Control className='input' />
                </label>

                <label>
                    No. Mesa:
                    <Form.Control className='input'/>
                </label>
               
            </Form>
        </>
    
    );
}

export default FormCustomer;