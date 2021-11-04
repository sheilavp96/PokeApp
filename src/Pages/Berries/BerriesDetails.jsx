import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';

const BerriesDetails = (props) => {
    const [berry, setBerry] = useState([]);
    const [error, setError] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/berry/${params.item}`)
            .then((res) => {
                console.log(res);
                if (!res.ok)
                    //si response es false ya que normalmente es true
                    throw new Error(`Berrie no encontrada (${res.status})`);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setBerry(data);
            })
            .catch((err) => setError(err.message));
    }, []);

    const back = () => {
        props.history.push('/berries');
    };
    // onClick={() => back()}
    return (
        <div className='container-card container-berrie'>
            <button className='btn btn-berrie' onClick={() => back()}>
                Regresar
            </button>
            {error && <div className='error'>{error}</div>}
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

export default withRouter(BerriesDetails);
