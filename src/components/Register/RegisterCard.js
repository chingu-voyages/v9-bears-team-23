import React from 'react'


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

import RegisterForm from './RegisterForm'

export default function RegisterCard() {
  return (
    <Card className="bg-secondary shadow border-0">
      <CardHeader className="bg-white pb-5">
        <div className="text-muted text-center mb-3">
          <small>Sign up with</small>
        </div>
        <div className="text-center">
          <Button
            className="btn-neutral btn-icon mr-4"
            color="default"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            <span className="btn-inner--icon mr-1">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </span>
            <span className="btn-inner--text">Facebook</span>
          </Button>
          <Button
            className="btn-neutral btn-icon ml-1"
            color="default"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            <span className="btn-inner--icon mr-1">
              <i class="fa fa-google" aria-hidden="true"></i>
            </span>
            <span className="btn-inner--text">Google</span>
          </Button>
        </div>
      </CardHeader>
      <CardBody className="px-lg-5 py-lg-5">
        <div className="text-center text-muted mb-4">
          <small>Or sign up with credentials</small>
        </div>
        <RegisterForm />
      </CardBody>
    </Card>
  )
}
