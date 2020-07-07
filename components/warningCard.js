const warningCard = (options={}) => {
    // create variable for svg text for warning symbol 
    const warningSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>'; 
    // create variable to hold string that will be given as an argument to the returned range fragment 
    // use template literal for easier access to the options argument 
    const returnString = `
        <div class='warningCard'>
            <div class='warningCard__left'>
                ${warningSVG}
            </div>
            <div class='warningCard__right'>
                <div class='title'>
                    ${options.title}
                </div>
                <div class='text'>
                    ${options.text}
                </div>
            </div>
        </div>
    `
    // return range and fragment that will hold the HTML string 
    return document.createRange().createContextualFragment(returnString); 
}