import React from 'react'

export default function HomeCrouser() {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container-fluid" style={{backgroundColor: "beige"}}>
          <div class="row align-items-center" style={{height: "100vh"}}>
            <img class="col-sm-3" src="https://cdn.pixabay.com/photo/2022/10/07/09/06/bridge-7504605__340.jpg" alt="..."/>
            <img class="col-sm-3" src="https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894__340.jpg" alt=""/>
            <img class="col-sm-3" src="https://cdn.pixabay.com/photo/2021/03/04/11/37/coast-6067736__340.jpg" alt=""/>
            <img class="col-sm-3" src="https://cdn.pixabay.com/photo/2022/10/15/06/45/danube-river-7522608__340.jpg" alt=""/>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://cdn.pixabay.com/photo/2022/09/24/16/32/bulldog-7476727__340.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://cdn.pixabay.com/photo/2021/03/04/11/37/coast-6067736__340.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
  </div>
  )
}
