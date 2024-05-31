import React from 'react'


export default function Image_Text(props) {
  const { img, title } = props
  return (
    <div className="card text-bg-dark ImgTxt ">
      <img src={img} className="card-img2" alt="..." />
      <div className="card-img-overlay cardImage">
        <h5 className="card-title1">{title}</h5>
      </div>
    </div>
  )
}
