import React from 'react';
import Sidebar from "../components/Sidebar";

function Dashboard(props) {
    return (
        <div className="App">
            <Sidebar/>
            <div className="content">
                <header className="App-header">
                    <h1>Welcome to TensorFlow.js</h1>
                </header>
                <main>
                    <section id="intro">
                        <h2>Introduction</h2>
                        <p>TensorFlow.js is an open-source hardware-accelerated JavaScript library for training and deploying machine learning models.</p>
                    </section>
                    <section id="features">
                        <h2>Features</h2>
                        <ul>
                            <li>Run existing models: Use off-the-shelf JavaScript models or convert Python TensorFlow models to run in the browser or under Node.js.</li>
                            <li>Retrain existing models: Retrain pre-existing ML models using sensor data connected to the browser or other client-side data.</li>
                            <li>Develop ML models: Develop ML models in JavaScript, and use ML directly in the browser or in Node.js.</li>
                        </ul>
                    </section>
                    <section id="resources">
                        <h2>Resources</h2>
                        <p>Here are some useful links to get you started:</p>
                        <ul>
                            <li><a href="https://www.tensorflow.org/js">TensorFlow.js Official Site</a></li>
                            <li><a href="https://js.tensorflow.org/tutorials/">TensorFlow.js Tutorials</a></li>
                            <li><a href="https://github.com/tensorflow/tfjs">TensorFlow.js GitHub Repository</a></li>
                        </ul>
                    </section>
                </main>
                <footer>
                    <p>&copy; 2024 TensorFlow.js Enthusiasts</p>
                </footer>
            </div>
        </div>
    );
}

export default Dashboard;