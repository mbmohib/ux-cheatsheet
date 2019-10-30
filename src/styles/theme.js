export const sizes = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const fonts = {
  titleFont: `'Comfortaa', cursive`,
  normalFont: `'Roboto', sans-serif;`,
};

export default {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${sizes[key]}px)`,
  },
  space: [0, 8, 16, 32, 64],
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
    '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
    '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
    '0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
    '0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
    '0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
    '0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
    '0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
    '0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
  ],
  direction: 'ltr',
  overrides: {},
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    speedDial: 1050,
    tooltip: 1500,
  },
  spacing: 8,
  typography: {
    fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"',
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    htmlFontSize: 16,
    body1: {
      fontWeight: 400,
      fontSize: '1.2rem',
      lineHeight: 1.5,
      letterSpacing: '0.5px',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
    },
    subtitle1: {
      fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: '1.2rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
      color: '#757575',
    },
    subtitle2: {
      fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.8rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
      color: '#00000080',
    },
    h1: {
      fontFamily: fonts.normalFont,
      fontWeight: 300,
      fontSize: '3rem',
      lineHeight: 1,
      letterSpacing: '-0.01562em',
      marginBottom: '10px',
    },
    h2: {
      fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 300,
      fontSize: '2.75rem',
      lineHeight: 1,
      letterSpacing: '-0.00833em',
      marginBottom: '10px',
    },
    h3: {
      fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: '2rem',
      lineHeight: 1.04,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: '1.8rem',
      lineHeight: 1.17,
      letterSpacing: '0.00735em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    h5: {
      fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.33,
      letterSpacing: '0em',
    },
    h6: {
      fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
  },
  palette: {
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
    },
    background: {
      paper: '#fff',
      default: '#f9f9fc',
      level1: '#ffffff',
      level2: '#f5f5f5',
    },
    common: { black: '#000', white: '#fff' },
    contrastThreshold: 3,
    divider: 'rgba(0, 0, 0, 0.12)',
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    primary: {
      main: '#1F3A93',
      light: 'rgb(71, 145, 219)',
      dark: 'rgb(17, 82, 147)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3a3a3a',
      light: '#f1f7f6',
      dark: 'rgb(154, 0, 54)',
      contrastText: 'rgb(238, 238, 238)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(255, 255, 255, 255)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    tonalOffset: 0.2,
    type: 'light',
  },

  themeName: 'admin-panel',
};
