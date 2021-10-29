import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './berriesDetails.css';

const Berries = () => {
    const [berrys, setBerrys] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/berry')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setBerrys(data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    const columns = [
        {
            key: 'berri',
            title: 'Berry',
            dataIndex: 'name',
            render: (berry) => (
                <>
                    <Link to={`/berries/${berry}`}>{berry}</Link>
                </>
            ),
            className: 'table',
        },
    ];

    return (
        <div>
            <Navbar />
            <div className='table-container'>
                <Table columns={columns} dataSource={berrys} size={'small'} />
            </div>
        </div>
    );
};

export default Berries;
