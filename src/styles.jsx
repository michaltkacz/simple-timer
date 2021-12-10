import { keyframes } from 'styled-components';

export const white = '#fff';
export const black = '#000';

export const glowDark = '#9200e6';
export const glowBright = '#a94dff';

export const shadowLargeDark = `0 0 10px #f2bdff, 0 0 20px #fff, 0 0 30px ${glowDark},
    0 0 40px ${glowDark}, 0 0 50px ${glowDark}, 0 0 60px ${glowDark},
    0 0 70px ${glowDark}`;

export const shadowLargeBright = `0 0 10px #f2bdff, 0 0 20px #fff, 0 0 30px ${glowBright},
    0 0 40px ${glowBright}, 0 0 50px ${glowBright}, 0 0 60px ${glowBright},
    0 0 70px ${glowBright}`;

export const shadowSmallDark = `0 0 5px #fff, 0 0 10px ${glowDark}, 0 0 15px ${glowDark}`;

export const shadowSmallBright = `0 0 5px #fff, 0 0 10px ${glowBright}, 0 0 15px ${glowBright}`;

export const glowTextKeyframes = keyframes`
   from {
       text-shadow: ${shadowSmallDark}

  }
  to {
       text-shadow: ${shadowSmallBright}
  }
`;

export const glowBoxKeyframes = keyframes`
   from {
       box-shadow: ${shadowLargeDark}
  }
  to {
       box-shadow: ${shadowLargeBright}
  }
`;

export const animationDuration = '3s';
