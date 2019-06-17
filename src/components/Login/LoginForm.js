import React, { useState } from 'react'
import { signin } from '../../api/api-auth';
import auth from '../../api/auth-helper'
import { validateLoginInput } from '../../utils/validate-login'
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    const user = {
      email: email || undefined,
      password: password || undefined
    }
    try {
      const valid = validateLoginInput(user)
      if (valid) {
        await signin(user).then((data) => {
          if (data.error) {
            console.log(data.error)
          } else {
            auth.authenticate(data, () => {
              setEmail('')
              setPassword('')
            })
          }
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Form role="form" onSubmit={e => e.preventDefault() && false}>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
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
          onClick={login}
        >
          Sign in
                          </Button>
      </div>
    </Form>
  )
}
