import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseLibrary from './pages/ExerciseLibrary';
import WorkoutBuilder from './pages/WorkoutBuilder';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/exercises" component={ExerciseLibrary} />
          <Route path="/workout-builder" component={WorkoutBuilder} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;

