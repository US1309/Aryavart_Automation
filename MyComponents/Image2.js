import React from 'react'

export default function Image2(props) {
    const { img, title } = props
  return (
     <div class="card text-bg-dark">
  <img src={img} class="card-img card-img2" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="Imagecard-title">{title}</h5>
  </div>
</div>
  )
}
