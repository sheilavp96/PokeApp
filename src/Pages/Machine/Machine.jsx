import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Table } from 'antd';
import { Link, useParams } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';

const Machine = () => {
    const [machine, setMachine] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/machine?offset=${offset}&limit=20`)
            .then((res) => res.json())
            .then((data) => {
                setMachine(data.results);
                setLoading(true);
            })
            .catch((err) => console.log(err));
    }, [offset]);

    const columns = [
        {
            key: '4',
            title: 'Machine',
            dataIndex: 'url',
            render: (machine) => <Link to={`/machine/${machine.split('/').at(-2)}`}> Machine: {machine.split('/').at(-2)}</Link>,

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
                        dataSource={machine}
                        size={'small'}
                        pagination={{
                            pageSize: 20,
                            total: 1442,
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

export default Machine;
