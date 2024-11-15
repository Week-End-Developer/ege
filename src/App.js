import './App.css';
import ReactPageScroller from 'react-page-scroller';
import { useRef } from 'react';
import DigitalPlatform from './components/digital-platform/DigitalPlatform';
import HomePage from './components/home-page/HomePage';
import VideosPage from './components/videos-page/VideosPage';

function App() {
    const pageScrollerRef = useRef(null);
    return (
        <div className="App">
            <div className='home-page-body'>
                <ReactPageScroller ref={pageScrollerRef}>
                   <DigitalPlatform />
                   <VideosPage />
                   <div>5</div>
                   <div>6</div>
                </ReactPageScroller>
            </div>
        </div>
    );
}

export default App;
