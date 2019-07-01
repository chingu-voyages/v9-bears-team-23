import React from 'react'
import { Link } from 'react-router-dom';


// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,

} from "reactstrap";
import './style.scss'

class Skill extends React.Component {

  render(){
    const {name} = this.props.skill;
    return (
      <div className="skill text-black-50 px-1 d-flex flex-row justify-content-center align-items-center">
        <span className="pr-2">{name}</span><span><i className="fa fa-graduation-cap"></i></span>
      </div>
    )
  }
}
export default Skill;
