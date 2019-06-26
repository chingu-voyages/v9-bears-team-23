import React, { useState, useEffect } from 'react'
import axios from "axios";
import AdCard from '../../common/AdCard/AdCard'
// import SearchPanel from '../../common/AdCard/SearchPanel';
import AdFilters from '../../common/AdFilters/AdFilters'

// reactstrap components
import {
  Row,
  Col,
  Container

} from "reactstrap";

export default function TutorsList() {
  const [tutors,setTutors] = useState([]);
  // useEffect(() => {
  //   fetch(`http://0.0.0.0:3005/tutor/`)
  //     .then(results => results.json())
  //     .then(setTutors(results.data))
  //
  // }, []);

  useEffect(async () => {
    const result = await axios(
      'http://0.0.0.0:3005/tutor/',
    );

    setTutors(result.data);
  }, []);


  return (

    <Container className="container py-5">
      <pre>{JSON.stringify(tutors, null, 2)}</pre>
      <Row>
        <Col sm="8">
          <AdFilters />
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <h1>Hello</h1>
          {/*<SearchPanel />*/}
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
