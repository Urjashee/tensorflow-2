import React, {useRef, useState, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs"
import * as toxicity from '@tensorflow-models/toxicity';
import Sidebar from "../components/Sidebar";

function SentimentAnalysis(props) {
    const [model, setModel] = useState(null);
    const [inputText, setInputText] = useState('');
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        // Load the toxicity model
        const loadModel = async () => {
            const model = await toxicity.load(0.9);
            setModel(model);
        };

        loadModel();
    }, []);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const checkToxicity = async () => {
        if (model) {
            const predictions = await model.classify([inputText]);
            setPredictions(predictions);
        }
    }
    return (
        <div className="App">
            <Sidebar/>
            <div className="content">
                <header className="App-header">
                    <h1>Sentiment analysis</h1>
                </header>
                <h1>Toxicity Checker</h1>
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    rows="4"
                    cols="50"
                    placeholder="You suck"
                />
                <br />
                <button onClick={checkToxicity}>Check Text</button>
                {predictions.length > 0 && (
                    <div>
                        <h2>Predictions:</h2>
                        <ul>
                            {predictions.map((prediction, index) => (
                                <li key={index}>
                                    <strong>{prediction.label}</strong>: {prediction.results[0].match ? 'Yes' : 'No'}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SentimentAnalysis;