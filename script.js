function flipCard(cardBox) {
    cardBox.querySelector('.card').classList.toggle('flipped');
  }  

document.addEventListener('DOMContentLoaded', function() {
  const urls = [
    "https://www.bowlero.com/location/bowlero-cary",
    "https://theboxcarbar.com/raleigh/"
  ];

  const randomButton = document.getElementById('randomButton');

  randomButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomUrl = urls[randomIndex];
    window.location.href = randomUrl;
  });
});