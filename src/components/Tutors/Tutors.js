import React from 'react'
import AdFilters from '../common/AdFilters/AdFilters';
import FilterSearch from './FilterSearch/FilterSearch'
// reactstrap components
import {
  Row,
  Col,
  Container

} from "reactstrap";

export default function Tutors() {
  return (
    <Container className="container py-5">
      <Row>
        <Col sm="8">
          <AdFilters />
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <FilterSearch />
        </Col>
      </Row>
    </Container>
  )
}
