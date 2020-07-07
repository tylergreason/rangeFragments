// create options object for warning card 
const warningOptions = {
    title:"warning!", 
    text:"You shouldn't have clicked that button!"
}

let warningCardElement = warningCard(warningOptions); 
document.body.appendChild(warningCardElement)
