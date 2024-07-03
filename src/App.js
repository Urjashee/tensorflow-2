import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import SentimentAnalysis from "./pages/SentimentAnalysis";
import SpeechCommandRecognition from "./pages/SpeechCommandRecognition";

import "../src/assets/css/styles.css"

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/sentiment" element={<SentimentAnalysis/>}/>
                <Route path="/speech" element={<SpeechCommandRecognition/>}/>
            </Routes>
        </Router>
    );
}

export default App;
