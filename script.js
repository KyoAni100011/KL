document.addEventListener("DOMContentLoaded", function () {
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const yesBtn = document.querySelector(".yes-btn");
  const bankDetails = document.querySelector(".bank-details");

  yesBtn.addEventListener("click", function () {
    question.textContent = "Hura I love you <3";
    gif.src = "./imgs/tonton-tonton-friends.gif";
    bankDetails.style.display = "block";
  });

  const moveNoButton = () => {
    const noBtn = document.querySelector(".no-btn");
    noBtn.style.left = "0px";
    noBtn.style.top = "0px";

    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  };

  const noBtn = document.querySelector(".no-btn");
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("touchstart", moveNoButton);
});
