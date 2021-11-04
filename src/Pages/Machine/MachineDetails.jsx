import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router';
import './machine.css';

const MachineDetails = (props) => {
    const [machine, setMachine] = useState([]);
    const [error, setError] = useState(null);

    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/machine/${params.item}`)
            .then((res) => {
                if (!res.ok) throw new Error(`Machine no encontrado (${res.status})`);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setMachine(data);
            })
            .catch((err) => setError(err.message));
    }, []);

    const back = () => {
        props.history.push('/machine');
    };
    return (
        <div className='container-card container-machine'>
            <button className='btn btn-machine' onClick={() => back()}>
                Regresar
            </button>
            {error && <div className='error'>{error}</div>}

            <div className='card card-machine'>
                <p className='datos-machine'>Id: {machine.id}</p>
                {machine.move ? <p className='datos-machine'>Move: {machine.move.name}</p> : null}
                {machine.move ? <p className='datos-machine'>Version group: {machine.version_group.name}</p> : null}
            </div>
        </div>
    );
};

export default withRouter(MachineDetails);
