function collectLinks() {
  var links = {}
  var result = []

  Array.prototype.slice.apply(document.head.querySelectorAll('link[rel*="icon"]'))
  .reverse()
  .forEach(link => {
    var mq = link.getAttribute('media') || ''

    if (mq in links) {
      return
    }

    links[mq] = link
    result.push([mq, link])
  })

  return result.reverse()
}

function switchLinks(link) {
  var parent = link.parentNode
  // Rearranage links
  parent.removeChild(link)
  parent.appendChild(link)
}
// eslint-disable-next-line no-unused-vars
function initSwitcher() {
  // Exit if media queries aren't supported
  if (typeof window.matchMedia !== 'function') {
    return function noop() {}
  }

  var unsubscriptions = []

  collectLinks()
  .forEach(function(item) {
    var query = item[0]
    var link = item[1]

    var mq = window.matchMedia(query)
    var onMediaQuery = function (e) {
      e.matches && switchLinks(link)
    }
    mq.addListener(onMediaQuery)
    unsubscriptions.push(function() {
      mq.removeListener(onMediaQuery)
    })
    mq.matches && switchLinks(link)
  })

  return function unsubscribe () {
    unsubscriptions.forEach(function(unsub) {
      unsub()
    })
  }
}
