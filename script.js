document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const scooty = document.getElementById('scooty').value;
  const days = document.getElementById('days').value;

  const result = `Thank you, ${name}! Your ${scooty} is booked for ${days} day(s).`;
  document.getElementById('bookingResult').textContent = result;

  this.reset();
});
