const bodyStyle = window.getComputedStyle(document.body)
const trTabletAnchorColor = bodyStyle.getPropertyValue('--light-yellow-hover')

const hashUrl = window.location.hash

if (hashUrl.length) {
  const trTableId = hashUrl.slice(1)
  const trTableTarget = document.getElementById(trTableId)

  if (trTableTarget) {
    trTableTarget.style.backgroundColor = trTabletAnchorColor
  }
}
