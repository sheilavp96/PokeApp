import { useHistory, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Berries from '../Pages/Berries/Berries';
import Pokemons from '../Pages/Pokemons/Pokemons';
import Machine from '../Pages/Machine/Machine';
import Moves from '../Pages/Moves/Moves';
import Items from '../Pages/Items/Items';
import Error404 from '../Pages/404/Error404';

const Templates = (props) => {
    const route = props.location.pathname;
    console.log(route);

    if (route.includes('berries')) {
        console.log('hola berries');
        return <Berries />;
    }
    if (route.includes('pokemons')) {
        console.log('hola pokemons');
        return <Pokemons />;
    }
    if (route.includes('items')) {
        console.log('hola items');
        return <Items />;
    }
    if (route.includes('moves')) {
        console.log('hola moves');
        return <Moves />;
    }

    if (route.includes('machine')) {
        console.log('hola machine');
        return <Machine />;
    }

    return <Error404 />;
};

export default Templates;
