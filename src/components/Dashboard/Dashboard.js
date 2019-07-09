import React from 'react'
import ButtonPrimary from '../common/ButtonPrimary/ButtonPrimary'
import StarRating from '../common/StarRating/StarRating'
import './style.scss';

export default function Dashboard() {
  return (
    <div className="container py-5">
      <div className="info-left">
        <div className="img-wrapper py-2">
          <i className="fa fa-user fa-5x"></i>
        </div>
        <p className="user-name">John Doe</p>
        <div className="rating pb-3">
          <StarRating
            totalStars={5}
          />
        </div>
        <div className="btn-wrapper py-2">
          <ButtonPrimary>
            Your ratings
          </ButtonPrimary>
        </div>
        <div className="btn-wrapper py-2">
          <ButtonPrimary>
            Your ratings
          </ButtonPrimary>
        </div>
        <div className="btn-wrapper py-2">
          <ButtonPrimary>
            Your ratings
          </ButtonPrimary>
        </div>
        <div className="btn-wrapper py-2">
          <ButtonPrimary>
            Your ratings
          </ButtonPrimary>
        </div>
      </div>
      <div className="info-right">
        <h3 className="heading-primary">Profile info</h3>
        <div className="form-wrapper">
          <form>
            <label htmlFor="firstName">First Name:</label>
            <div className="form-inline py-2">
              <input id="firstName" type="text" />
              <div className="btn-wrapper pl-3">
                <button className="btn btn-info">
                  Edit
                </button>
                <button className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
            <label htmlFor="lastName">Last Name:</label>
            <div className="form-inline py-2">
              <input id="lastName" type="text" />
              <div className="btn-wrapper pl-3">
                <button className="btn btn-info">
                  Edit
                </button>
                <button className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
            <label htmlFor="email">Email:</label>
            <div className="form-inline py-2">
              <input id="email" type="email" />
              <div className="btn-wrapper pl-3">
                <button className="btn btn-info">
                  Edit
                </button>
                <button className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
