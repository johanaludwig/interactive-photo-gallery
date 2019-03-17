// Search Filter Function
const input = document.getElementById('filter');
const entry = document.getElementsByClassName('image');

input.addEventListener("keyup", () => { 
    const value = input.value;
    
    for (let i = 0; i < entry.length; i++) {
      const description = entry[i].getAttribute("data-title");
       
      if (description.toLowerCase().indexOf(value.toLowerCase()) != -1) { 
        entry[i].style.display = "block";
      } else {
        entry[i].style.display = "none";
      }
    }

});