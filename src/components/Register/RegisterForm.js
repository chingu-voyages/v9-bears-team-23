import React, { useState } from 'react'
import auth from '../../api/auth-helper'
import { validateRegisterInput } from '../../utils/validate-register'
import { create } from '../../api/api-user'
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function register() {
    const user = {
      name: name || undefined,
      email: email || undefined,
      password: password || undefined
    }
    try {
      const valid = validateRegisterInput(user)
      if (valid) {
        await create(user).then((data) => {
          if (data.error) {
            console.log(data.error)
          } else {
            setName('')
            setEmail('')
            setPassword('')
          }
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Form role="form" >
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-hat-3" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
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
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </InputGroup>
      </FormGroup>
      <div className="text-muted font-italic">
        <small>
          password strength:{" "}
          <span className="text-success font-weight-700">
            strong
                      </span>
        </small>
      </div>
      <Row className="my-4">
        <Col xs="12">
          <div className="custom-control custom-control-alternative custom-checkbox">
            <input
              className="custom-control-input"
              id="customCheckRegister"
              type="checkbox"
            />
            <label
              className="custom-control-label"
              htmlFor="customCheckRegister"
            >
              <span>
                I agree with the{" "}
                <a
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Privacy Policy
                            </a>
              </span>
            </label>
          </div>
        </Col>
      </Row>
      <div className="text-center">
        <Button
          className="mt-4"
          color="primary"
          type="button"
          onClick={register}
        >
          Create account
                    </Button>
      </div>
    </Form>
  )
}
