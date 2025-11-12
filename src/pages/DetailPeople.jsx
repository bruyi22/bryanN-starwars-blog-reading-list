import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailPeople = () => {
    const { uid } = useParams();
    //necesito estado local 
    const [character, setCharacter] = useState(null)

    function detailPeople() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detailPeople()
    }, [uid])



    return (

        <div>
            <h1 className="text-danger ms-5">DetailPlanet</h1>
            <div className="mx-5 mb-3 ">
                <div className=" mx-5 row g-0 p-4 border-bottom border-danger">
                    <div className=" mx-5 col-md-3">
                        <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title d-flex justify-content-center mb-5">Name: {character?.name}</h1>
                            <p className="card-text mx-auto text-wrap text-center" style={{width: '38rem'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem ullam ratione aliquam possimus laborum! Laboriosam expedita, velit perspiciatis similique inventore quasi fugiat eaque accusantium enim. Recusandae, magnam! Voluptates, fuga.</p>
                        </div>
                    </div>
                </div>
                <div className="container text-danger">
                    <div className="d-flex flex-row mx-5 mb-3 justify-content-evenly">
                        <div className="text-center">
                            <p>Name</p>
                            <h5 className="p-2">{character?.name}</h5>
                        </div>
                        <div className="text-center">
                            <p>Height</p>
                            <h5 className="p-2">{character?.height}</h5>
                        </div>
                        <div className="text-center">
                            <p>Hair Color</p>
                            <h5 className="p-2">{character?.hair_color}</h5>
                        </div>
                        <div className="text-center">
                            <p>Eyes Color</p>
                            <h5 className="p-2">{character?.eye_color}</h5>
                        </div>
                        <div className="text-center">
                            <p>Birth Year</p>
                            <h5 className="p-2">{character?.birth_year}</h5>
                        </div>
                        <div className="text-center">
                            <p>Gender</p>
                            <h5 className="p-2">{character?.gender}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};