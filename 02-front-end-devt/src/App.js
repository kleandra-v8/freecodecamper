import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h2 className='App-link'>
                    <Link to='/quote-machine'>Random Quote Machine</Link>
                </h2>
                <h2 className='App-link'>
                    <Link to='/markdown-previewer'>Markdown Previewer</Link>
                </h2>
                <h2 className='App-link'>
                    <Link to='/drum-machine'>Drum Machine</Link>
                </h2>
            </header>
        </div>
    );
}

export default App;
