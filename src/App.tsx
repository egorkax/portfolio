import React from 'react';
import './App.scss';
import {Header} from "./header/Header";
import {Content} from "./content/Content";
import ParticleBackground from "./content/main/ParticleBackground";

function App() {
  return (
    <div className="App">
      <ParticleBackground/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
