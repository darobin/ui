
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

// XXX:
//  - if the primary is set, I would like to generate sensible defaults for variant and secondaries

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
  let cssName = `--ui-${k.replace(/([A-Z])/g, (_, m1) => `-${m1.toLowerCase()}`)}`;
  if (colours[k]) document.body.style.setProperty(cssName, colours[k]);
  // XXX: DEBUG
  // if (colours[k]) console.warn(cssName, colours[k]); // x
});

// XXX: DEBUG
// console.warn(JSON.stringify(colours, null, 2));
