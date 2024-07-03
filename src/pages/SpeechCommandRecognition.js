import React, {useRef, useState, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs"
import * as speech from '@tensorflow-models/speech-commands';
import Sidebar from "../components/Sidebar";

function SpeechCommandRecognition(props) {
    const [model, setModel] = useState(null)
    const [action, setAction] = useState(null)
    const [labels, setLabels] = useState(null)

    const getModel = async () => {
        const recognizer = await speech.create("BROWSER_FFT");
        console.log("Model Loaded");
        await recognizer.ensureModelLoaded();
        console.log(recognizer.wordLabels());
        setModel(recognizer)
        setLabels(recognizer.wordLabels())
    }

    function argMaxVal(arr) {
        return arr.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1]
    }

    useEffect(() => {
        getModel()
    }, []);
    const predictCommand = async () => {
        console.log("Listening to commnad")
        model.listen(res => {
            console.log(labels[argMaxVal(Object.values(res.scores))]);
            setAction(labels[argMaxVal(Object.values(res.scores))])
        }, {includeSpectrogram: true, probabilityThreshold: 0.9})

        setTimeout(() => model.stopListening(), 9e3)
    }

    return (
        <div className="App">
            <Sidebar/>
            <div className="content">
                <header className="App-header">
                    <h1>Speech command recognition </h1>
                </header>
                <button onClick={predictCommand}>Get Prediction</button>
                {action ? <div>{action}</div> : <div>No Command Detected</div>}
            </div>
        </div>
    );
}

export default SpeechCommandRecognition;