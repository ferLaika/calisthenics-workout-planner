import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseLibrary from './pages/ExerciseLibrary';
import WorkoutBuilder from './pages/WorkoutBuilder';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<ExerciseLibrary />} />
          <Route path="/workout-builder" element={<WorkoutBuilder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

