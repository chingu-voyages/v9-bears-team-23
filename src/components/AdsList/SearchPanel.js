import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function SearchPanel() {
  return (
    <Row>
      <Col md={6}>
        <Select
          options={options}
          className="basic-single"
        />
      </Col>
      <Col md={6}>
        <Select options={options} />
      </Col>
    </Row>
  )
}
