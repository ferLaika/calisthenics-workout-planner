import React, { useState } from 'react';
import generateWorkout from '../services/WorkoutGenerator';

function WorkoutBuilder() {
  const [difficulty, setDifficulty] = useState('Beginner');
  const [workout, setWorkout] = useState([]);

  const handleGenerateWorkout = () => {
    const newWorkout = generateWorkout({ difficulty });
    setWorkout(newWorkout);
  };

  return (
    <div>
      <h2>Workout Builder</h2>
      <label>
        Select Difficulty:
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </label>
      <button onClick={handleGenerateWorkout}>Generate Workout</button>
      {workout.length > 0 && (
        <div>
          <h3>Your Workout:</h3>
          <ul>
            {workout.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WorkoutBuilder;
