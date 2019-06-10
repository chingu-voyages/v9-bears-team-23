import React from 'react'
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button

} from "reactstrap";

export default function AdCard() {
  return (
    <Card>
      <CardBody>
        <section className="d-flex flex-row align-items-center">
          <CardImg className="rounded-circle" style={{ width: "70px", height: "70px" }} src="https://via.placeholder.com/50" alt="Card image cap" />
          <CardTitle className="mt-3 px-3">Sam Smith</CardTitle>
        </section>
        <section className="details-page pt-3">
          <Link to="/ads/:id">Ad type <i class="ni ni-bold-right"></i></Link>
        </section>
        <section className="ad-info d-flex flex-row">
          <div className="location px-1">
            <span>Mumbai</span><span><i class="fa fa-map-marker"></i></span>
          </div>
          <div className="price px-1">
            <span>&#x00024;</span><span>82</span>
          </div>
        </section>
      </CardBody>
    </Card>
  )
}
