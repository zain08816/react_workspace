import React from 'react';
import { Container, Header, List} from 'semantic-ui-react';
import Skills from './skills'
import './App.css';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


function App() {
  return (
    <div className='App'>
      <h1 className='Text-accent'>
        TeamRU
      </h1>
      <Container style={{ margin: 80 }}>
        Select Skills
        <Skills />
      </Container>
    </div>
    
  );
}

export default App;
