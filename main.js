function fallback(video)
    {
      const img = video.querySelector('fallback-img');
      if (img)
        video.parentNode.replaceChild(img, video);
    }
    const video = document.getElementById('bg-video')
    video.muted = true
    video.addEventListener('loadeddata', function (){
      video.play()
    });




function appendElement(element, text, elId, locationId)
  {
    let location = document.getElementById(locationId)
    let new_element = document.createElement(element);
    
    new_element.innerText = text;
    new_element.id = elId;
    location.append(new_element);
  }