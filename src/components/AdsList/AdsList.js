import React from 'react'

import AdCard from './AdCard'
// reactstrap components
import {
  Row,
  Col,
  Container

} from "reactstrap";

export default function AdsList() {
  return (
    <Container>
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
