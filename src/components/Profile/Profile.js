import React from 'react'
import './style.scss'
import StarRating from '../common/StarRating/StarRating'
import { Button } from 'reactstrap'

export default function Profile() {
  return (
    <div className="section">
      <section className="profile-info">
        <div className="img-wrapper py-2">
          <i className="fa fa-user fa-5x"></i>
        </div>
        <p className="user-name">John Doe</p>
        <div className="rating pb-3">
          <StarRating
            totalStars={5}
          />
        </div>
        <Button className="btn-icon btn-3" size="lg" color="primary" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-email-83" />
          </span>
          <span className="btn-inner--text">Send Message</span>
        </Button>
      </section>
      <section className="profile-details">
        <div className="user-ads">
          <h3 className="sub-heading">User Ads</h3>
          <p className="user-info">Seems like this user has not added any ads yet.</p>
        </div>
        <div className="user-ratings">
          <h3 className="sub-heading">User Ratings</h3>
          <p className="user-info">Seems like this user has no any reputation yet..</p>
        </div>
      </section>
    </div>
  )
}
