
# Todo

- [ ] Setup
  - [ ] Look at how other Svelte libs have done this, notably with the issue that this will
        required `splintered`.

- [ ] AppRoot component
  - [ ] have a colour system using `:global(:root)` to declare vars according to
        Tk and interpolate from props in JS
  - [ ] using a Grid based on CSS Grid (pick one)
  - [ ] don't do fonts management, that can be delegated to the container HTML
- [ ] Header component (top of boxes, can support nav and conditional hamburgers)
- [ ] SidePanel component, can slide in when mobile, otherwise is in grid

- [ ] build a showcase that makes use of all components and serves as testing ground for them
  - [ ] do the full rollup build

- [ ] NYT components
  - [ ] SuperT (can set colour! embed SVG!)

- [ ] Misc
  - [ ] a readable store for @media to react to viewport changes
