const myH1 = document.getElementById("myH1")
const speedInput = document.getElementById("speed")
const words = myH1.textContent

let idx = 0 , intervalId = null

function updateAnimationSpeed(){
  myH1.textContent = ""
  idx = 0
  const speed = 1000 / parseInt(speedInput.value)

  clearInterval(intervalId)
  
  intervalId = setInterval(() => {
    if(idx < words.length){
      myH1.textContent += words[idx++]
    }
    else{
      clearInterval(intervalId)
    }
  },speed)
}

speedInput.addEventListener("input" , updateAnimationSpeed)



