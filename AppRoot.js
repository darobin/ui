
export let primaryColor
  , primaryVariantColor
  , secondaryColor
  , secondaryVariantColor
  , backgroundColor
  , surfaceColor
  , errorColor
  , onPrimaryColor
  , onPrimaryVariantColor
  , onSecondaryColor
  , onSecondaryVariantColor
  , onBackgroundColor
  , onSurfaceColor
  , onErrorColor
;

let colours = {
  primaryColor,
  primaryVariantColor,
  secondaryColor,
  secondaryVariantColor,
  backgroundColor,
  surfaceColor,
  errorColor,
  onPrimaryColor,
  onPrimaryVariantColor,
  onSecondaryColor,
  onSecondaryVariantColor,
  onBackgroundColor,
  onSurfaceColor,
  onErrorColor,
};
Object.keys(colours).forEach(k => {
  let cssName = `--${k.replace(/([A-Z])/g, (_, m1) => `--${m1.toLowerCase()}`)}`;
  if (colours[k]) document.documentElement.setProperty(cssName, colours[k]);
});
