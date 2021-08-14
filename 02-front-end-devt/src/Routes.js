import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import RandomQuotes from './components/quotes/App';
import MarkdownPreviewer from './components/previewer/App';
import DrumMachine from './components/drums/App';
import Calculator from './components/calculator/App';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/quote-machine' component={RandomQuotes} exact />
                <Route
                    path='/markdown-previewer'
                    component={MarkdownPreviewer}
                    exact
                />
                <Route path='/drum-machine' component={DrumMachine} exact />
                <Route path='/calculator' component={Calculator} exact />
                <Route path='/' component={App} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
