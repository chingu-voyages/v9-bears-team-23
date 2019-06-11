import React, { useState } from 'react'
import Star from '../Star/Star'
import './style.scss'

export default function StarRating({ totalStars }) {
  const [starsSelected, selectStar] = useState(1);
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => selectStar(i + 1)}
        />
      ))}
    </div>
  )
}
