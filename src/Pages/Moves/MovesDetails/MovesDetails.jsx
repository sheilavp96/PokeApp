import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import Spiner from '../../../components/Spiner/Spiner';
import Error404 from '../../404/Error404';
import './moves.css';

const MovesDetails = (props) => {
    const [move, setMove] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        const getMove = async () => {
            fetch(`https://pokeapi.co/api/v2/move/${params.item}`)
                .then((res) => {
                    if (res.status === 404) throw new Error(`Move no encontrado (${res.status})`);
                    if (!res.ok) throw new Error(`something when wrong`);
                    return res.json();
                })
                .then((data) => {
                    setMove(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        };
        getMove();
    }, []);
    console.log(move);

    const back = () => {
        props.history.push('/moves');
    };

    if (loading) {
        return (
            <div className='container-card'>
                <button className='btn btn-move' onClick={() => back()}>
                    Regresar
                </button>
                <Spiner />
            </div>
        );
    }
    if (error) {
        return <Error404 message={'Move no encontrado'} />;
    }
    return (
        <div className='container-card'>
            <button className='btn btn-move' onClick={() => back()}>
                Regresar
            </button>
            {/* {error && <div className='error'>{error}</div>} */}

            <div className='card card-moves'>
                <h1 className='name name-move'> {move.name}</h1>
                <div className='container-datos'>
                    <p className='datos'>Precisión: {move.accuracy}</p>
                    <p className='datos'> Id: {move.id}</p>
                    <p className='datos'> Poder: {move.power}</p>
                    <p className='datos'> PP: {move.pp}</p>
                    <p className='datos'> Prioridad: {move.priority}</p>
                    <p className='datos'> Daño: {move.damage_class.name}</p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(MovesDetails);
