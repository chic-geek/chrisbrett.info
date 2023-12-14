const PRESET_CONTENT_HEIGHT = 105;

const PRESET_HIGHLIGHT_COLORS = [
  '251, 191, 36',  // amber   [400]
  '16, 185, 129',  // emerald [500]
  '59, 130, 246',  // blue    [500]
  '232, 121, 249', // fuscia  [400]
  '251, 113, 133', // rose    [400]
];

const App = (() => {
  const contractedStyles = {
    maskImage: `linear-gradient(to bottom, black 0%, transparent 100%)`,
    maxHeight: `${PRESET_CONTENT_HEIGHT}px`,
    overflow: `hidden`,
  };

  const expandedStyles = {
    maskImage: `none`,
    maxHeight: `100%`,
    overflow: `visible`,
  };

  const setInitialStyles = (containerElem) => {
    Object.assign(containerElem.style, contractedStyles);
  };

  const createAndAppendButton = (containerElem) => {
    const buttonElem = document.createElement(`button`);
    buttonElem.classList.add(`history-item-expand-button`);
    buttonElem.textContent = `Show more`;
    buttonElem.setAttribute('aria-hidden', true);

    containerElem.parentElement.appendChild(buttonElem);

    return buttonElem;
  };

  const handleButtonClick = (containerElem, buttonElem) => {
    buttonElem.addEventListener(`click`, () => {
      if (containerElem.classList.contains(`expanded`)) {
        Object.assign(containerElem.style, contractedStyles);
        containerElem.classList.remove(`expanded`);
        buttonElem.textContent = 'Show more';
      } else {
        Object.assign(containerElem.style, expandedStyles);
        containerElem.classList.add(`expanded`);
        buttonElem.textContent = 'Show less';
      }
    });
  };

  const toggleHistoryItem = () => {
    const containerElems = document.querySelectorAll(`.history-item-body ul`);

    containerElems.forEach((containerElem) => {
      setInitialStyles(containerElem);

      const containerElemHeight = containerElem.offsetHeight;

      if (containerElemHeight === PRESET_CONTENT_HEIGHT) {
        const buttonElem = createAndAppendButton(containerElem);
        handleButtonClick(containerElem, buttonElem);
      }
    });
  };

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
      toggleHistoryItem();
    });
  };

  return {
    initialise: initialise,
  };
})();

App.initialise();
