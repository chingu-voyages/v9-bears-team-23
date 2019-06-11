import React from 'react'

export default function Star({ selected = false, onClick = f => f }) {
  return (
    <div className={selected ? "star selected" : "star"} onClick={onClick} />
  );
}
