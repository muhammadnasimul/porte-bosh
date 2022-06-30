const typed = new Typed(".typed-input", {
    strings: ["orte Bosh"],
    typeSpeed: 300,
    showCursor: false,
  });
  const secondTyped = new Typed(".dot", {
    strings: ["..."],
    startDelay: 4500,
    typeSpeed: 200,
    showCursor: false,
    loop: true,
    backDelay:700,
    backSpeed:200,
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