const highlightRow = (rowId) => {
  const row = document.getElementById(rowId)
  if (row) {
    row.classList.add('highlighted')
  }
}

const unhighlightRow = (rowId) => {
  const row = document.getElementById(rowId)
  if (row) {
    row.classList.remove('highlighted')
  }
}

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

const handleScroll = () => {
  const table = document.querySelector('.clinical-resources-info__table')
  const anchorId = window.location.hash.substring(1)

  if (!table) {
    return
  }

  const row226 = document.getElementById('test-226')
  const row172 = document.getElementById('test-172')
  const row228 = document.getElementById('test-228')
  const row231 = document.getElementById('test-231')
  const row223 = document.getElementById('test-223')

  const isAnchorRow =
    anchorId === 'test-226' ||
    anchorId === 'test-172' ||
    anchorId === 'test-228' ||
    anchorId === 'test-231' ||
    anchorId === 'test-223'

  if (isAnchorRow) {
    if (isElementInViewport(document.getElementById(anchorId))) {
      highlightRow(anchorId)
    } else {
      unhighlightRow(anchorId)
    }
  } else {
    if (isElementInViewport(row226)) {
      highlightRow('test-226')
    } else {
      unhighlightRow('test-226')
    }

    if (isElementInViewport(row172)) {
      highlightRow('test-172')
    } else {
      unhighlightRow('test-172')
    }

    if (isElementInViewport(row228)) {
      highlightRow('test-228')
    } else {
      unhighlightRow('test-228')
    }

    if (isElementInViewport(row231)) {
      highlightRow('test-231')
    } else {
      unhighlightRow('test-231')
    }

    if (isElementInViewport(row223)) {
      highlightRow('test-223')
    } else {
      unhighlightRow('test-223')
    }
  }
}

window.addEventListener('scroll', handleScroll)

document.addEventListener('DOMContentLoaded', () => {
  handleScroll()
})
