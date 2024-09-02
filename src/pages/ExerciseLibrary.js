import React from 'react';
import exercises from '../services/ExerciseData';

function ExerciseLibrary() {
  return (
    <div>
      <h2>Exercise Library</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <p>Difficulty: {exercise.difficulty}</p>
            <p>Target Muscle: {exercise.targetMuscle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseLibrary;
