document.getElementById('submit').onclick = () => {
  const month = document.getElementById('month').innerText
  const day = document.getElementById('day').innerText
  const year = document.getElementById('year').innerText
  
  const str = `${month}/${day}/${year}`
  location.href = `./submit?q=${encodeURIComponent(str)}`
}