import React from 'react'

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

export default function LoginForm() {
  return (
    <Form role="form">
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Email" type="email" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-lock-circle-open" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Password"
            type="password"
            autoComplete="off"
          />
        </InputGroup>
      </FormGroup>
      <div className="custom-control custom-control-alternative custom-checkbox">
        <input
          className="custom-control-input"
          id=" customCheckLogin"
          type="checkbox"
        />
        <label
          className="custom-control-label"
          htmlFor=" customCheckLogin"
        >
          <span>Remember me</span>
        </label>
      </div>
      <div className="text-center">
        <Button
          className="my-4"
          color="primary"
          type="button"
        >
          Sign in
                          </Button>
      </div>
    </Form>
  )
}
