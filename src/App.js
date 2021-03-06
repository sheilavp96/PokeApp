import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import TemplateItem from './Templates/TemplateItem';
import Templates from './Templates/Templates';

function App() {
    return (
        <Switch>
            <Route path='/:seccion/:item' exact component={TemplateItem} />
            <Route path='/:seccion' exact component={Templates} />
            <Redirect path='/*' to='/pokemons' />
        </Switch>
    );
}

export default App;

//exact hace coincidir a la ruta completa
