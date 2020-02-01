import React from 'react';
import { Container } from 'semantic-ui-react';
import Skills from './skills'
import './App.css';


function App() {
  return (
    <div className='App'>
      <div className='Title'>
        <span class="Title-white">Team</span><span class="Title-accent">RU</span>
      </div>
      <Container style={{ margin: 40 }}>S
        Select Skills
        <Skills />
      </Container>
    </div>
    
  );
}

export default App;
