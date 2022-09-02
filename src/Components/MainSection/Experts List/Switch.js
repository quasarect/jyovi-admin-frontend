import React from 'react'
import Form from 'react-bootstrap/Form';

const Switch = () => {
    return (
        <Form>
          <Form.Check 
            type="switch"
            id="custom-switch"
          />
        </Form>
      );
}

export default Switch