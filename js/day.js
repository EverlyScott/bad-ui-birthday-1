var strd = ''

document.getElementById('d1').onclick = () => {
  strd += '1'
  updateStringDay()
}

document.getElementById('d0').onclick = () => {
  strd += '0'
  updateStringDay()
}

document.getElementById('denter').onclick = () => {
  const day = parseInt(strd, 2)
  console.log(day)
  strd = ''
  if (day > 31) {
    document.getElementById('error').innerText = 'invalid day!'
    updateStringDay()
  } else {
    document.getElementById('day').innerText = day
    document.getElementById('error').innerText = ''
  }
}

function updateStringDay() {
  document.getElementById('day').innerText = strd
}