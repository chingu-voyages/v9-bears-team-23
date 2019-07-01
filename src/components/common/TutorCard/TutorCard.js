import React from 'react'
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating'

// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  CardTitle, Row,

} from "reactstrap";
import './style.scss'
import Language from "./Language";
import Skill from "./Skill";

class TutorCard extends React.Component {

  render(){
    const {firstName, lastName, rating, language, skill} = this.props.tutor;
    return (
      <Card className="card" >
        <CardBody>
          <section className="d-flex flex-row align-items-center">
            <CardImg className="rounded-circle" style={{ width: "70px", height: "70px" }} src="https://via.placeholder.com/50" alt="Card image cap" />
            <CardTitle className="mt-3 pl-5 card-title">{firstName} {lastName}</CardTitle>
          </section>
          <section className="star-rating d-flex flex-row justify-content-start pt-4">
            <StarRating
              totalStars={rating} />
          </section>
          <section className="details-page pt-5 pb-3">
            <Link className="detail-link" style={{ color: 'white' }} to="/ads/:id">Ad type <i class="ni ni-bold-right"></i></Link>
          </section>
          <section className="ad-info d-flex flex-row">
            <div className="location text-white px-1 d-flex flex-row justify-content-center align-items-center">
              <span className="pr-2">Mumbai</span><span><i className="fa fa-map-marker"></i></span>
            </div>
            {language.map(lang => <Language lang={lang}/>)}
          </section>
          <section className="ad-info d-flex flex-row">
            {/*<div className="location text-white px-1 d-flex flex-row justify-content-center align-items-center">*/}
            {/*  <span className="pr-2">Mumbai</span><span><i className="fa fa-map-marker"></i></span>*/}
            {/*</div>*/}
            {skill.map(skill => <Skill skill={skill}/>)}
          </section>

        </CardBody>
      </Card>
    )
  }
}
export default TutorCard;
