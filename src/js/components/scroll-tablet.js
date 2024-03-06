const hashUrl = window.location.hash

if (hashUrl.length) {
  const elementId = hashUrl.slice(1)
  const targetElement = document.getElementById(elementId)

  if (targetElement) {
    targetElement.style.background = '#fff0c2'
  }
}
