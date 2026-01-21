import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DetailVehicle = () => {
    const { uid } = useParams()

    const [vehicle, setVehicle] = useState(null)
    function detailVehicle() {
        fetch("https://www.swapi.tech/api/vehicles/" + uid)
            .then(res => res.json())
            .then(data => setVehicle(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detailVehicle()
    }, [uid])

    return (
        <div>
            <div className="mx-5 mb-3 ">
                <div className=" mx-5 row g-0 p-4 border-bottom border-danger">
                    <div className=" mx-5 col-md-3">
                        <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title d-flex justify-content-center mb-5">Name: {vehicle?.name}</h1>
                            <p className="card-text mx-auto text-wrap text-center" style={{width: '38rem'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut eligendi id eius magni. Repellendus quod tempora iste architecto hic. Numquam non sit magni praesentium qui similique ea officiis quos nulla ipsa! Quis repellendus dolores incidunt reprehenderit odit exercitationem debitis illum a rerum impedit, cumque architecto aliquid sit ipsum sed ut pariatur excepturi laudantium ipsam officia voluptatibus eos? Maxime maiores facilis deserunt sapiente sit quam vero, consequuntur quasi. Saepe accusamus provident at officiis non molestias esse cumque dignissimos vel illum delectus, commodi praesentium et, sit dolorum soluta assumenda a tenetur ad. Odit doloribus facere sapiente vitae quo sed accusantium nemo!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container text-danger">
                    <div className="d-flex flex-row mx-5 mb-3 justify-content-evenly">
                        <div className="text-center">
                            <p>Name</p>
                            <h5 className="p-2">{vehicle?.name}</h5>
                        </div>
                        <div className="text-center">
                            <p>Model</p>
                            <h5 className="p-2">{vehicle?.model}</h5>
                        </div>
                        <div className="text-center">
                            <p>Passengers</p>
                            <h5 className="p-2">{vehicle?.passengers}</h5>
                        </div>
                        <div className="text-center">
                            <p>Population</p>
                            <h5 className="p-2">{vehicle?.population}</h5>
                        </div>
                        <div className="text-center">
                            <p>Manufacturer</p>
                            <h5 className="p-2">{vehicle?.manufacturer}</h5>
                        </div>
                        <div className="text-center">
                            <p>Cargo Capacity</p>
                            <h5 className="p-2">{vehicle?.cargo_capacity}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailVehicle