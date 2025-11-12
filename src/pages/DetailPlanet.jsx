import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DetailPlanet = () => {
    const { uid } = useParams()

    const [planet, setPlanet] = useState(null)
    function detailPlanet() {
        fetch("https://www.swapi.tech/api/planet/" + uid)
            .then(res => res.json())
            .then(data => setPlanet(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detailPlanet()
    }, [uid])

    return (
        <div>
            <h1>DetailPlanet</h1>
            <div className="container">
                <p>Name: {planet?.name}</p>
                <div class="card" style={{width: "18rem"}}>
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} style={{width: "18rem", height: '100rem'}} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                </div>
                
            </div>

        </div>
    )
}

export default DetailPlanet