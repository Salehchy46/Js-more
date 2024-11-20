let intervalId; // To store the interval ID for clearing it later

function start() {
  const timeStart = document.getElementById('start-count');
  let time = parseInt(timeStart.innerText); // Parse the current value as an integer

  if (isNaN(time)) {
    console.error("Invalid time value");
    return; // Exit if the value is not a number
  }

  // Prevent multiple intervals from running
  if (intervalId) {
    clearInterval(intervalId); // Clear the previous interval before starting a new one
  }

  // Start the interval
  intervalId = setInterval(() => {
    time++; // Increment the time
    timeStart.innerText = time; // Update the displayed time
  }, 1000);
}

function stop() {
  if (intervalId) {
    clearInterval(intervalId); // Stop the interval
    intervalId = null; // Reset the interval ID
  }
}

function clearTime() {
  const timeStart = document.getElementById('start-count');
  timeStart.innerText = "0"; // Reset the displayed time to 0
  stop(); // Stop the interval if it's running
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.btn-primary');
  const stopButton = document.querySelector('.btn-secondary');
  const clearButton = document.querySelector('.btn-accent');

  startButton.addEventListener('click', start);
  stopButton.addEventListener('click', stop);
  clearButton.addEventListener('click', clearTime);
});

