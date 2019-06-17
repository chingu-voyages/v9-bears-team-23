import React, { useState, useEffect } from 'react'
import useErrorHandler from '../../utils/custom-hooks'
import { apiRequest, validateLoginForm } from "../../utils/helpers";
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, showError] = useErrorHandler(null);


  const handleSubmit = async e => {
    try {
      setLoading(true);
      const userData = await apiRequest(
        "https://jsonplaceholder.typicode.com/users",
        "post",
        { email: email, password: password }
      );
      const { id, email } = userData;
    } catch (err) {
      setLoading(false);
      showError(err.message);
    }
  }

  return (
    <Form role="form">
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
          onClick={e => handleSubmit(e)}
        >
          Sign in
                          </Button>
      </div>
    </Form>
  )
}
