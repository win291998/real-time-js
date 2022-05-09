const video = document.getElementById("videoElm")

if (navigator.mediaDevices.getUserMedia){
  navigator.mediaDevices.getUserMedia({video: {}})
    .then(stream =>{
      video.src = stream
    })
    .catch(() => {})
}


console.log(video.srcObject)