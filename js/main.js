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
      "images/post7.jpg",
      "images/post13.jpg",
      "images/meme8.jpg",
      "images/meme9.jpg",
      "images/meme10.jpg",
      "images/meme11.jpg",
      "images/meme12.jpg",
      "images/meme14.jpg",
      "images/meme15.jpg",
      "images/meme16.jpg",
      "images/meme17.jpg",
      "images/meme18.jpg",
      "images/meme19.jpg",
      "images/meme20.jpg",
      "images/meme21.jpg",
      "images/meme22.jpg",
      "images/meme23.jpg",
      "images/meme24.jpg",
      "images/meme25.jpg",
      "images/meme26.jpg",
      "images/meme27.jpg",
      "images/meme28.jpg",
      "images/meme29.jpg",
      "images/meme30.jpg",
      "images/meme31.jpg",
      "images/meme32.jpg",
      "images/meme33.jpg",
      "images/meme34.jpg",
      "images/meme35.jpg",
      "images/meme36.jpg",
      


    ];
    const size = images.length;
    const allInOne = Math.floor(size * Math.random());
    let choosenImage = images[allInOne];
    memes.src = choosenImage;
  }
  document.addEventListener("DOMContentLoaded", randomImage);