import React, { useState, useEffect } from 'react'
import axios from "axios";

// import SearchPanel from '../../common/AdCard/SearchPanel';
import AdFilters from '../../common/AdFilters/AdFilters'

// reactstrap components
import {
  Row,
  Col,
  Container

} from "reactstrap";
import TutorCard from "../../common/TutorCard/TutorCard";

export default function TutorsList() {
  const [tutors,setTutors] = useState([]);
  useEffect(async () => {
    const result = await axios(
      'http://0.0.0.0:3005/tutor/',
    );
    setTutors(result.data.data);
  }, []);
  // const [tutors,setTutors] = useState([]);
  // useEffect(() => {
  //   axios.get('http://0.0.0.0:3005/tutor/')
  //     .then(resp => {
  //       setTutors(resp.data.data);
  //     });
  // }, []);

  return (
    <Container className="container py-5">
      {/*<Row>*/}
      {/*  <Col sm="8">*/}
      {/*    <AdFilters />*/}
      {/*  </Col>*/}
      {/*</Row>*/}
      {/*<Row>*/}
      {/*  <Col sm="12">*/}
      {/*    <h1>Hello</h1>*/}
      {/*    /!*<SearchPanel />*!/*/}
      {/*  </Col>*/}
      {/*</Row>*/}
      <Row>
        { tutors.map(tutor => <TutorCard tutor={tutor} />) }
      </Row>
    </Container>
  )
}
