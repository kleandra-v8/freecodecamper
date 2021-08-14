import './styles/app.css';
import DrumMachine from './DrumMachine';
import Footer from './Footer';

function App() {
    return (
        <main id='app'>
            <h1 style={{ color: '#000d' }}>Drum Machine</h1>
            <DrumMachine />
            <Footer />
        </main>
    );
}

export default App;
