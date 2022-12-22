




function appendElement(element, text, elId, locationId)
  {
    let location = document.getElementById(locationId)
    let new_element = document.createElement(element);
    
    new_element.innerText = text;
    new_element.id = elId;
    location.append(new_element);
  }