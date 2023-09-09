document.addEventListener('DOMContentLoaded', function () {
    // Get elements by data-testid
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // Update the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const currentDay = daysOfWeek[today.getUTCDay()];
    currentDayElement.textContent = currentDay;

    // Update the current UTC time in milliseconds
    const currentUTCTime = Date.now();
    currentUTCTimeElement.textContent = currentUTCTime;
});
