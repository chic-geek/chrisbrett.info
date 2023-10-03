const PRESET_HIGHLIGHT_COLORS = [
  '251, 191, 36',  // amber   [400]
  '16, 185, 129',  // emerald [500]
  '59, 130, 246',  // blue    [500]
  '232, 121, 249', // fuscia  [400]
  '251, 113, 133', // rose    [400]
];

const App = (() => {
  const animateContent = () => {
    const mainElement = document.querySelector(`main`);
    mainElement.classList.add('animate');
  };

  const getRandomColor = (colors) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const changeHighlightColor = (color) => {
    document.documentElement.style.setProperty('--dark-hightlight-color', color);
  };
  
  const initialise = () => {    
    document.addEventListener(`DOMContentLoaded`, () => {
      const randomColor = getRandomColor(PRESET_HIGHLIGHT_COLORS);

      changeHighlightColor(randomColor);
      animateContent();
    });
  };

  return {
    initialise: initialise,
  };
})();

App.initialise();
