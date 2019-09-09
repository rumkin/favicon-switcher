# Favicon Switcher

Switches site's favicon by matching media queries. It could be used for
light/dark mode switching. Due to browsers don't support all Media Query
features in link tag, this module fixes it.

## Usage

Script doesn't require any setup or configuration and works like a polyfill.
The example below shows how to make dark/light mode icon switching:

UMD:

```html
<link rel="icon" media="(prefers-color-scheme:dark)" href="favicon-dark.png" type="image/png" />
<link rel="icon" media="(prefers-color-scheme:light)" href="favicon-light.png" type="image/png" />
<script src="https://unpkg.com/favicon-switcher@1.0.0/dist/index.umd.js" crossorigin="anonymous" type="application/javascript"></script>
```

ESM:
```js
import faviconSwitcher from 'favicon-switcher'

faviconSwitcher()
```

## License

MIT © [Rumkin](https://rumk.in)
