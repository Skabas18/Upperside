import React from 'react'

function BreadCrumbs({ path }) {
  return (
    <div className="breadcrumbs">
      {path.map((item, index) => (
        <span key={index}>
          {item}
          {index < path.length - 1 && <span className="separator"> / </span>}
        </span>
      ))}
    </div>
  )
}

export default BreadCrumbs