import React from 'react';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pokemons.css';
import Navbar from '../../components/Navbar/Navbar';
const Pokemons = () => {
    const [currentPage, setCurrentPage] = useState([]);
    // const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextPage, setNextPage] = useState();
    const [prevPage, setprevPage] = useState();
    // const [pokeName, setPokeName] = useState('');

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                let pokeList = data.results;

                setprevPage(data.previous);
                setNextPage(data.next);
                setCurrentPage(pokeList);
            })
            .catch((err) => console.log(err));
    }, []);

    /* dataSource.map((e) => {
        console.log(e.name);
    }); */

    // <Link to={`pokemons/detail/${dataSource.name}`}>{fila}</Link>
    const columns = [
        {
            key: '1',
            title: 'Pokemon',
            dataIndex: 'name',
            render: (fila) => (
                <>
                    <Link to={`/pokemons/${fila}`}>{fila}</Link>
                </>
            ),
            className: 'table',
        },
    ];

    //previous page
    /* const previousPage = () => {
        setCurrentPage(prevPage);
    }; */

    return (
        <div>
            <Navbar />
            <div className='table-container'>
                <Table columns={columns} dataSource={currentPage} size={'small'}></Table>
            </div>
        </div>
    );
};

export default Pokemons;
