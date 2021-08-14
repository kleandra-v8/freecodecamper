import DrumMachine from './DrumMachine';
import Footer from './Footer';
import './styles/app.scss';
import HomeButton from '../HomeButton';

function App() {
    return (
        <div id='drumsAppWrapper'>
            <main id='app'>
                <HomeButton />
                <h1 style={{ color: '#000d' }}>Drum Machine</h1>
                <DrumMachine />
                <Footer />
            </main>
        </div>
    );
}

export default App;
