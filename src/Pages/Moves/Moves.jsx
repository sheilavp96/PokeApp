import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const Moves = () => {
    const [moves, setMoves] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/move?offset=${offset}&limit=20`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMoves(data.results);
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
        <div>
            <Navbar />
            <div className='table-container'>
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
            </div>
        </div>
    );
};

export default Moves;
