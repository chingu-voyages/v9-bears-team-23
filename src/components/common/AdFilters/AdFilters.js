import React, { useState } from 'react'

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

import './style.scss'

export default function AdFilters() {
  return (
    <section className="filter-section d-flex flex-row align-items-center">
      <section className="sort-by">
        <form className="form-inline d-flex flex-row align-items-start">
          <h6 className="filter">Sort By:</h6>
          <p className="px-1">
            <input type="radio" id="rating" name="radio-group" checked />
            <label htmlFor="rating">Rating</label>
          </p>
          <p className="px-1">
            <input type="radio" id="price" name="radio-group" />
            <label htmlFor="price">Price</label>
          </p>
        </form>
      </section>
      <section className="order-by pl-4">
        <form className="form-inline d-flex flex-row align-items-start">
          <h6 className="filter">Order By:</h6>
          <p className="px-1">
            <input type="radio" id="desc" name="radio-group" checked />
            <label htmlFor="desc">Descending</label>
          </p>
          <p className="px-1">
            <input type="radio" id="asc" name="radio-group" />
            <label htmlFor="asc">Ascending</label>
          </p>
        </form>
      </section>
    </section>
  )
}
