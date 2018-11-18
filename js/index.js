const dots = document.getElementsByClassName("dot");
const slide = document.getElementById("slide");

const updateActive = (number, checkRange) => {
  const activeDot = document.getElementsByClassName("active")[0];
  activeDot.className = activeDot.className.replace(' active', '');
  let activeNumber = number;

  if (checkRange) {
    const newNumber = parseInt(activeDot.id) + number;
    activeNumber = newNumber < 1
      ? dots.length
      : newNumber > dots.length ? 1 : newNumber;
  }

  dots[activeNumber - 1].className += " active";
  slide.style.backgroundImage = "url('images/" + activeNumber + ".jpg')";
};
