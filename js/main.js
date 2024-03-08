/**
 * The JavaScript code for implementing the inclusive component is sourced from @tediko's solution
 * https://github.com/tediko/blog-preview-card/
 * and this article
 * https://inclusive-components.design/cards/
 */
const card = document.querySelector('.card');
const link = document.querySelector('card__link');


let mousePressedPoint, mouseReleasePoint;
const threshold = 200;
card.style.cursor = 'pointer';

card.onmousedown = () => {
  mouseReleasePoint = new Date();
}

// Detect how long user is taking between mousedown and mouseup
// -- If releaseTime is less than threshold value and event.target isn't link element then fire click() method on link.
// -- If releaseTime is more than threshold - nothing happens.
// -- If link is clicked directly - performs normal anchor behaviour.
card.onmouseup = (event) => {
  mousePressedPoint = new Date();
  let releaseTime = mousePressedPoint - mouseReleasePoint;

  if (releaseTime < threshold) {
    if (link !== event.target) {
      link.click();
      // console.log('card clicked! Fired click() method on link');
    } else if (link === event.target) {
      // console.log('link clicked! Prevented event from firing twice');
    }
  } else {
    // console.log('likely to be selecting text. Nothing happens');
  }
}