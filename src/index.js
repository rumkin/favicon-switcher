function collectLinks() {
  return Array.prototype.slice.apply(
    document.head.querySelectorAll('link[rel*="icon"]')
  )
}

function applyLink(source, target) {
  target.setAttribute('type', source.getAttribute('type'))
  target.setAttribute('href', source.getAttribute('href'))
}

// eslint-disable-next-line no-unused-vars
function initSwitcher(delay ) {
  // Exit if media queries aren't supported
  if (typeof window.matchMedia !== 'function') {
    return function noop() {}
  }

  var links = collectLinks()

  var current = document.createElement('link')
  current.setAttribute('rel', 'shortcut icon')
  document.head.appendChild(current)

  function faviconApplyLoop() {
    links.forEach(function(link) {
      if (window.matchMedia(link.media).matches) {
        applyLink(link, current)
      }
    })
  }

  var intervalId = setInterval(faviconApplyLoop, delay || 300)

  function unsubscribe() {
    clearInterval(intervalId)
    links.forEach(function(link) {
      document.head.appendChild(link)
    })
  }

  faviconApplyLoop()
  links.forEach(function(link) {
    document.head.removeChild(link)
  })

  return unsubscribe
}
