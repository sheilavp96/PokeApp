import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';
const Moves = () => {
    const [moves, setMoves] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/move?offset=${offset}&limit=20`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMoves(data.results);
                setLoading(true);
            });
    }, [offset]);

    const columns = [
        {
            key: 'move',
            title: 'Moves',
            dataIndex: 'name',
            render: (mov) => (
                <>
                    <Link to={`/moves/${mov}`}>{mov}</Link>
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
                        dataSource={moves}
                        size={'small'}
                        pagination={{
                            pageSize: 20,
                            total: 844,
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

export default Moves;
