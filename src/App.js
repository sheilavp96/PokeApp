import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Pokemons from './Pages/Pokemons/Pokemons';
import Items from './Pages/Items/Items';
import Berries from './Pages/Berries/Berries';
import Machine from './Pages/Machine';
import PokemonDetails from './Pages/Pokemons/PokemonDetails/PokemonDetails';
import BerriesDetails from './Pages/Berries/BerriesDetails';
import NotFound from './Pages/NotFound';
import ItemsDetail from './Pages/Items/ItemsDetail';

function App() {
    console.log(window.location.pathname);
    return (
        <Switch>
            <Route path='/pokemons' exact component={Pokemons} />
            <Route path='/items' exact component={Items} />
            <Route path='/berries' exact component={Berries} />
            <Route path='/machine' component={Machine} />
            <Route path='/pokemons/:name' exact component={PokemonDetails} />
            <Route path='/berries/:name' exact component={BerriesDetails} />
            <Route path='/items/:name' exact component={ItemsDetail} />

            <Route path='*' component={NotFound} />
        </Switch>
    );
}

export default App;

//exact hace coincidir a la ruta completa
