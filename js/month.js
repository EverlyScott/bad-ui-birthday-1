var str = ''

document.getElementById('m1').onclick = () => {
  str += '1'
  updateStringMonth()
}

document.getElementById('m0').onclick = () => {
  str += '0'
  updateStringMonth()
}

document.getElementById('menter').onclick = () => {
  const month = parseInt(str, 2)
  console.log(month)
  str = ''
  if (month > 12) {
    document.getElementById('error').innerText = 'invalid month!'
    updateStringMonth()
  } else {
    document.getElementById('month').innerText = month
    document.getElementById('error').innerText = ''
  }
}

function updateStringMonth() {
  document.getElementById('month').innerText = str
}