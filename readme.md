# Favicon Switcher

[Live preview](https://rumkin.github.io/favicon-switcher)

Switches site's favicon by matching media queries. It could be used for
light/dark mode switching. Due to browsers don't support all Media Query
features in link tag, this module fixes it.

## Usage

Script doesn't require any setup or configuration and works like a polyfill.
The example below shows how to make dark/light mode icon switching:

### UMD

Use with UMD:

```html
<link rel="icon" media="(prefers-color-scheme:dark)" href="favicon-dark.png" type="image/png" />
<link rel="icon" media="(prefers-color-scheme:light)" href="favicon-light.png" type="image/png" />

<script src="https://unpkg.com/favicon-switcher@1.0.0/dist/index.umd.js" crossorigin="anonymous" type="application/javascript"></script>
<script>faviconSwitcher()</script>
```

### ESM

Use as ES module:

```html
<link rel="icon" media="(prefers-color-scheme:dark)" href="favicon-dark.png" type="image/png" />
<link rel="icon" media="(prefers-color-scheme:light)" href="favicon-light.png" type="image/png" />

<script src="https://unpkg.com/favicon-switcher@1.0.0/dist/index.esm.js" crossorigin="anonymous" type="application/javascript"></script>
<script type="module" language="javascript">
  import initSwitcher from 'favicon-switcher'

  // Subscribe to media queries changing events
  const unsubscribe = initSwitcher()
  // Unsubscribe later on some condition. For example on page navigation.
  unsubscribe()
</script>
```

## License

MIT © [Rumkin](https://rumk.in)
