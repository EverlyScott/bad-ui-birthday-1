var stry = ''

document.getElementById('y1').onclick = () => {
  stry += '1'
  updateStringYear()
}

document.getElementById('y0').onclick = () => {
  stry += '0'
  updateStringYear()
}

document.getElementById('yenter').onclick = () => {
  const year = parseInt(stry, 2)
  console.log(year)
  stry = ''
  if (year > 2020) {
    document.getElementById('error').innerText = 'invalid year!'
    updateStringYear()
  } else {
    document.getElementById('year').innerText = year
    document.getElementById('error').innerText = ''
  }
}

function updateStringYear() {
  document.getElementById('year').innerText = stry
}