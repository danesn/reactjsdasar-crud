import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'

// class component menggunakan this.props
// functional component tidak menggunakan this.props
const FormTest = ({ nama, deskripsi, harga, handleChange, handleSubmit }) => {
    return (
        <div className="mt-5">
            <Row>
                <Col>
                    <h4>Tambah data makanan</h4>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group controlId="nama">
                            <Form.Label>Nama makanan</Form.Label>
                            <Form.Control
                             type="text" name="nama" 
                             value={nama} 
                             onChange={ (event) => handleChange(event) } />
                        </Form.Group>

                        <Form.Group controlId="deskripsi">
                            <Form.Label>Deskripsi makanan</Form.Label>
                            <Form.Control
                             as="textarea"
                             rows={3}
                             name="deskripsi"
                             value={deskripsi}
                             onChange={ (event) => handleChange(event) } />
                        </Form.Group>

                        <Form.Group controlId="harga">
                            <Form.Label>Harga makanan</Form.Label>
                            <Form.Control
                             type="number"
                             name="harga"
                             value={harga}
                             onChange={ (event) => handleChange(event) } />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default FormTest
