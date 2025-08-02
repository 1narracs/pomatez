import { css, keyframes } from "styled-components/macro";

export const lightTheme = css`
  --color-primary: #ff3a25;
  --color-primary-rgb: 255, 58, 37;

  --color-purple: #775fe4;
  --color-purple-rgb: 119, 95, 228;

  --color-green: #a0f243;
  --color-green-rgb: 160, 242, 67;

  --color-orang: #ff9933;
  --color-orang-rgb: 255, 153, 51;

  --color-heading-text: #120c08;
  --color-body-text: #171310;
  --color-disabled-text: #635245;

  --color-bg-primary: #fff5d6;
  --color-bg-primary-rgb: 255, 245, 214;
  --color-bg-secondary: #fffadd;
  --color-bg-tertiary: #fffbf6;

  --color-bg-popper: var(--color-bg-primary);

  --color-bg-code: var(--color-bg-tertiary);

  --color-bg-ripple-primary: rgba(var(--color-primary-rgb), 0.24);
  --color-bg-ripple-green: rgba(var(--color-green-rgb), 0.24);
  --color-bg-ripple-purple: rgba(var(--color-purple-rgb), 0.24);

  --color-bg-input: var(--color-bg-primary);
  --color-bg-input-focus: var(--color-bg-primary);

  --color-primary-button: var(--color-bg-primary);
  --color-bg-button-normal: var(--color-bg-primary);

  --color-bg-task-list: var(--color-bg-tertiary);
  --color-bg-task-card: var(--color-bg-primary);
  --color-bg-task-card-hover: var(--color-bg-secondary);
  --color-bg-task-card-focus: var(--color-bg-primary);

  --color-titlebar-hover: rgba(18, 12, 8, 0.04);

  --color-bg-slider-thumb: var(--color-bg-primary);

  --color-border-primary: #120c08;
  --color-border-secondary: #171310;
  --color-border-progress: var(--color-border-primary);
  --color-border-window: var(--color-bg-primary);

  --color-border-input-primary: var(--color-border-secondary);
  --color-border-input-secondary: var(--color-border-primary);

  --color-shadow-primary: rgba(0, 0, 0, 0.16);
`;
//disabled option b2ab95 for less contrast 0b0908
export const darkTheme = css`
  --color-primary: #ff3a25;
  --color-primary-rgb: 255, 58, 37;

  --color-purple: #775fe4;
  --color-purple-rgb: 119, 95, 228;

  --color-green: #a0f243;
  --color-green-rgb: 160, 242, 67;

  --color-orang: #ff9933;
  --color-orang-rgb: 255, 153, 51;

  --color-heading-text: #fff5d6;
  --color-heading-text-rgb: 255, 245, 214;
  --color-body-text: #fffadd;
  --color-disabled-text: #656154;

  --color-bg-primary: #120c08;
  --color-bg-primary-rgb: 18, 12, 8;

  --color-bg-secondary: #19130f;
  --color-bg-tertiary: #0b0806;

  --color-bg-popper: #120c08;

  --color-bg-code: var(--color-bg-tertiary);

  --color-bg-ripple-primary: rgba(var(--color-primary-rgb), 0.24);
  --color-bg-ripple-green: rgba(var(--color-green-rgb), 0.24);
  --color-bg-ripple-purple: rgba(var(--color-purple-rgb), 0.24);

  --color-bg-input: var(--color-bg-secondary);
  --color-bg-input-focus: var(--color-bg-popper);

  --color-primary-button: #fff5d6;
  --color-bg-button-normal: #0b0806;

  --color-bg-task-list: var(--color-bg-secondary);
  --color-bg-task-card: #0b0806;
  --color-bg-task-card-hover: rgba(var(--color-heading-text-rgb), 0.02);
  --color-bg-task-card-focus: rgba(var(--color-heading-text-rgb), 0.08);

  --color-titlebar-hover: rgba(255, 245, 214, 0.16);

  --color-bg-slider-thumb: var(--color-bg-tertiary);

  --color-border-primary: rgba(var(--color-heading-text-rgb), 0.32);
  --color-border-secondary: rgba(var(--color-heading-text-rgb), 0.32);
  --color-border-progress: rgba(var(--color-primary-rgb), 0.16);
  --color-border-window: rgba(var(--color-primary-rgb), 0.16);

  --color-border-input-primary: transparent;
  --color-border-input-secondary: transparent;

  --color-shadow-primary: rgba(var(--color-bg-primary-rgb), 0.16);
`;

const enterFromLeft = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-2rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
`;

const enterFromRight = keyframes`
    0% {
      opacity: 0;
      transform: translateX(2rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
`;

export const themes = {
  color: {
    close: "#ff3a25",
    primary: "#ff3a25",
    light: "#fff5d6",
    dark: "#120c08",
  },
  easing: "ease",
  transition: "all 140ms ease",
  enterFromLeft,
  enterFromRight,
};
