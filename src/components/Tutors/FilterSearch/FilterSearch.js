import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function FilterSearch() {
  return (
    <Row className="pt-2 pb-5">
      <Col md={12}>
        <Select
          options={options}
          className="basic-single"
        />
      </Col>
    </Row>
  )
}
