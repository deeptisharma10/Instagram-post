

const clickArea = document.body.querySelector('.inner-div');
// const clickCount = docuument.querySelector('.heart-icon')

const showHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart');
    clickArea.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 800);
    document.querySelector('#like').classList.toggle("liked");
};

clickArea.addEventListener('dblclick', (e) => {
    showHeart(e);
});


// Get the necessary elements
const colorInput = document.getElementById('colorInput');
const colorText = document.getElementById('colorText');

// Add an event listener to the color input
colorInput.addEventListener('input', function() {
  // Get the selected color value
  const selectedColor = colorInput.value;

  // Update the text color
  colorText.style.color = selectedColor;
  
  // Add a class to the text based on the color
  if (selectedColor === '#ff0000') {
    colorText.classList.add('red');
  } else {
    colorText.classList.remove('red');
  }
});

