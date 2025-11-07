import React from 'react'

const Card = ({information}) => {
  return (
    <div>
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{information.name}</h5>
    <p class="card-text">{information.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default Card