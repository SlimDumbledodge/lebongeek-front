export const SWITCH_SCREEN_RESPONSIVE = 'SWITCH_SCREEN_RESPONSIVE';

export const switchScreenResponsive = (isNewValueMobile) => ({
  type: SWITCH_SCREEN_RESPONSIVE,
  isMobile: isNewValueMobile,
});
