import { THEME } from '../utils/constants';

export const COLORS_SCHEME = Object.freeze({
  [THEME.DARK]: {
    accent: '#7FB3E2',
    darkAccent: '#0C1828',
    background: '#0B0E14',
    container: '#171C24',
    lightContainer: '#28303E',
    title: '#FFFFFF',
    text: '#FFFFFF50',
  },
  [THEME.LIGHT]: {
    accent: '#7FB3E2',
    darkAccent: '#0C1828',
    background: '#DFE3EB',
    container: '#E7EAF0',
    lightContainer: '#F1F1F1',
    title: '#000000',
    text: '#00000050',
  },
  [THEME.HIGH_CONTRAST]: {
    accent: '#7FB3E2',
    darkAccent: '#03060A',
    background: '#FFFFFF',
    container: '#5F5F5F',
    lightContainer: '#F1F1F1',
    title: '#000000',
    text: '#000000',
  },
});
