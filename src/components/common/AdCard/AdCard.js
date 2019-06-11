import React from 'react'
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating'

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
import './style.scss'

export default function AdCard() {
  return (
    <Card className="card">
      <CardBody>
        <section className="d-flex flex-row align-items-center">
          <CardImg className="rounded-circle" style={{ width: "70px", height: "70px" }} src="https://via.placeholder.com/50" alt="Card image cap" />
          <CardTitle className="mt-3 pl-5 card-title">Sam Smith</CardTitle>
        </section>
        <section className="star-rating d-flex flex-row justify-content-start pt-4">
          <StarRating
            totalStars={5} />
        </section>
        <section className="details-page pt-5 pb-3">
          <Link className="detail-link" style={{ color: 'white' }} to="/ads/:id">Ad type <i class="ni ni-bold-right"></i></Link>
        </section>
        <section className="ad-info d-flex flex-row">
          <div className="location text-white px-1 d-flex flex-row justify-content-center align-items-center">
            <span className="pr-2">Mumbai</span><span><i class="fa fa-map-marker"></i></span>
          </div>
          <div className="price text-white px-1 d-flex flex-row justify-content-center align-items-center">
            <span>&#x00024;</span><span>82</span>
          </div>
        </section>
      </CardBody>
    </Card>
  )
}
