import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';

const BerriesDetails = (props) => {
    const [berry, setBerry] = useState([]);
    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/berry/${params.name}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBerry(data);
            });
    }, []);

    const back = () => {
        props.history.push('/berries');
    };

    return (
        <div className='container-card container-berrie'>
            <button className='btn btn-berrie' onClick={() => back()}>
                Regresar
            </button>
            <div className='card card-berrie'>
                {/*  {pokemon.sprites ? <img className='img-pokemon' src={pokemon.sprites.other.dream_world.front_default} /> : null} */}
                <h1 className='name'>{berry.name}</h1>

                <div className='container-datos'>
                    <p className='datos'> Id: {berry.id}</p>
                    <p className='datos'> Size: {berry.size}</p>
                    <p className='datos'> Smoothness: {berry.smoothness}</p>
                    <p className='datos'> Gift Power: {berry.natural_gift_power}</p>
                    <p className='datos'> Growth Time: {berry.growth_time}</p>
                </div>
            </div>
        </div>
    );
};

export default BerriesDetails;
