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

class Language extends React.Component {

  render(){
    const {name} = this.props.lang;
    return (
      <div className="location text-white px-1 d-flex flex-row justify-content-center align-items-center">
        <span className="pr-2">{name}</span><span><i className="fa fa-language"></i></span>
      </div>
    )
  }
}
export default Language;
