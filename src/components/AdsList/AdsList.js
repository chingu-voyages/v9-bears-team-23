import React from 'react'

import AdCard from '../common/AdCard/AdCard'
import SearchPanel from './SearchPanel';

// reactstrap components
import {
  Row,
  Col,
  Container

} from "reactstrap";

export default function AdsList() {
  return (
    <Container className="container py-5">
      <Row>
        <Col sm="12">
          <SearchPanel />
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <AdCard />
        </Col>
        <Col sm="4">
          <AdCard />
        </Col>
        <Col sm="4">
          <AdCard />
        </Col>

      </Row>
    </Container>
  )
}
