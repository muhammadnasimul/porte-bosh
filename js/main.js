const typed = new Typed(".typed-input", {
    strings: ["orte Bosh"],
    typeSpeed: 300,
    showCursor: false,
  });
  function randomImage() {
    const images = [
      "images/image1.jpg",
      "images/image2.jpg",
      "images/image3.jpg",
      "images/image4.jpg",
      "images/image5.jpg",
    ];
    const size = images.length;
    const allInOne = Math.floor(size * Math.random());
    let choosenImage = images[allInOne];
    memes.src = choosenImage;
  }
  document.addEventListener("DOMContentLoaded", randomImage);