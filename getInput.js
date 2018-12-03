function getInput() {
  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest()
    xhttp.open("GET", "./input.txt", true)
    xhttp.onload = () => {
      if (xhttp.status >= 200 && xhttp.status < 300) {
        resolve(xhttp.response)
      } else {
        reject(xhttp.statusText)
      }
    }
    xhttp.send()
  })
}