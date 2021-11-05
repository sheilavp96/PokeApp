import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import Spiner from '../../../components/Spiner/Spiner';
import Error404 from '../../404/Error404';
import './pokemon.css';

const PokemonDetails = (props) => {
    const [pokemon, setPokemon] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = async () => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.item}`);
            if (res.status === 404) throw new Error(`Pokemon no encontrado (${res.status})`);
            if (!res.ok) throw new Error(`something when wrong`);
            const data = await res.json();
            setPokemon(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const back = () => {
        props.history.push('/pokemons');
    };

    if (loading) {
        return (
            <div className='container-card container-pokemon'>
                <button className='btn' onClick={() => back()}>
                    Regresar
                </button>
                <Spiner />
            </div>
        );
    }
    if (error) {
        return <Error404 message={'Pokemon no encontrado'} />;
    }
    return (
        <div className='container-card container-pokemon'>
            <button className='btn' onClick={() => back()}>
                Regresar
            </button>
            {/* {error && <div className='error'>{error}</div>} */}
            <div className='card'>
                {pokemon.sprites ? <img className='img-pokemon' src={pokemon.sprites.other.dream_world.front_default} /> : null}
                <h1 className='name'>{pokemon.name}</h1>
                <div className='datos-container'>
                    <p className='id'> Id: {pokemon.id}</p>
                    <p className='order'> Order: {pokemon.order}</p>
                    <p className='weight'> Weight: {pokemon.weight}</p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(PokemonDetails);
