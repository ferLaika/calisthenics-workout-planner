function generateWorkout(preferences) {
    // Mock AI logic: Generate a simple workout based on difficulty
    const easyWorkout = ['Push-up', 'Plank'];
    const mediumWorkout = ['Push-up', 'Pull-up', 'Squat'];
    const hardWorkout = ['Pull-up', 'Muscle-up', 'Handstand Push-up'];
  
    if (preferences.difficulty === 'Beginner') return easyWorkout;
    if (preferences.difficulty === 'Intermediate') return mediumWorkout;
    return hardWorkout;
  }
  
  export default generateWorkout;
  