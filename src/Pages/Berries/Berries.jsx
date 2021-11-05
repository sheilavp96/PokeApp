import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BerriesDetails/berriesDetails.css';
import Spiner from '../../components/Spiner/Spiner';

const Berries = () => {
    const [berrys, setBerrys] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/berry?offset=${offset}&limit=20`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setBerrys(data.results);
                setLoading(true);
            })
            .catch((err) => console.log(err));
    }, [offset]);

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
        <div className='global-container'>
            <Navbar />

            <div className='table-container'>
                {loading ? (
                    <Table
                        columns={columns}
                        dataSource={berrys}
                        size={'small'}
                        pagination={{
                            pageSize: 20,
                            total: 64,
                            onChange: (page, pageSize) => {
                                let newOffSet = (page - 1) * 20;
                                setOffset(newOffSet);
                            },
                        }}
                    />
                ) : (
                    <div className='spin-container'>
                        <Spiner />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Berries;
