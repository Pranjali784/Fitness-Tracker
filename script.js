// script.js
let workouts = [];
let goal = null;

function logWorkout() {
  const exercise = document.getElementById('exercise').value;
  const duration = parseInt(document.getElementById('duration').value);
  const intensity = document.getElementById('intensity').value;

  if (exercise && !isNaN(duration) && intensity) {
    workouts.push({ exercise, duration, intensity });
    updateWorkoutRecords();
    updateProgress();
    alert('Workout logged successfully!');
  } else {
    alert('Please fill out all fields correctly.');
  }
}

function setGoal() {
  const target = document.getElementById('target').value;
  const frequency = parseInt(document.getElementById('frequency').value);

  if (target && !isNaN(frequency)) {
    goal = { target, frequency };
    updateProgress();
    alert('Goal set successfully!');
  } else {
    alert('Please fill out all fields correctly.');
  }
}

function updateProgress() {
  const progressElement = document.getElementById('goal-progress');
  
  if (goal === null) {
    progressElement.textContent = 'No goals set';
    return;
  }

  let completedWorkouts = 0;
  workouts.forEach(workout => {
    if (workout.intensity === 'high') {
      completedWorkouts++;
    }
  });

  const percentComplete = Math.round((completedWorkouts / goal.frequency) * 100);
  progressElement.textContent = `Goal: ${goal.target}, Progress: ${percentComplete}%`;
}

function updateWorkoutRecords() {
  const workoutListElement = document.getElementById('workout-list');
  workoutListElement.innerHTML = '';

  workouts.forEach((workout, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Workout ${index + 1}: ${workout.exercise} (${workout.duration} mins, ${workout.intensity})`;
    workoutListElement.appendChild(listItem);
  });
}

function resetForm(type) {
  if (type === 'log') {
    document.getElementById('exercise').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('intensity').value = '';
  } else if (type === 'goal') {
    document.getElementById('target').value = '';
    document.getElementById('frequency').value = '';
  }
}
