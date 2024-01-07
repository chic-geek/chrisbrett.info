const PRESET_HIGHLIGHT_COLORS = [
  "251, 191, 36", // amber   [400]
  "16, 185, 129", // emerald [500]
  "59, 130, 246", // blue    [500]
  "232, 121, 249", // fuscia  [400]
  "251, 113, 133", // rose    [400]
];

export default function getRandomColor() {
  const randomIndex = Math.floor(
    Math.random() * PRESET_HIGHLIGHT_COLORS.length
  );
  return PRESET_HIGHLIGHT_COLORS[randomIndex];
}
