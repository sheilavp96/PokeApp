import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Table } from 'antd';
import { Link, useParams } from 'react-router-dom';

const Machine = () => {
    const [machine, setMachine] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/machine?offset=${offset}&limit=20`)
            .then((res) => res.json())
            .then((data) => {
                setMachine(data.results);
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
        <div>
            <Navbar />
            <div className='table-container'>
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
            </div>
        </div>
    );
};

export default Machine;
