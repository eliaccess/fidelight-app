import Colors from 'theme/Colors';

export const backgroundGradientProps = () => ({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0, 0.5],
  colors: [Colors.white, Colors.primary],
});

export const headerGradientProps = () => ({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0, 1],
  colors: [Colors.accentDark, Colors.accent],
});

export const buttonGradientProps = () => ({
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
  locations: [0, 1],
  colors: ['#55C595', '#45BCBD'],
});

export const screenTopGradientProps = () => ({
  start: { x: 0, y: -3 },
  end: { x: 0, y: 3 },
  colors: [Colors.white, Colors.transparent],
});

export const getFontFamily = (weight) => {
  if (weight === 'bold') {
    return 'Gilroy-Bold';
  }
  if (weight >= '600') {
    return 'Gilroy-SemiBold';
  }
  if (weight >= '500') {
    return 'Gilroy-Medium';
  }
  if (weight >= '400') {
    return 'Gilroy-Regular';
  }
  if (weight >= '300') {
    return 'Gilroy-Light';
  }
  return 'Gilroy-Regular';
};
