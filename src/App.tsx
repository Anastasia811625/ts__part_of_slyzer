import React, { FC } from 'react';
import { Routes } from './Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App: FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes />
      </Router>
    </DndProvider>
  );
}

export default App;
