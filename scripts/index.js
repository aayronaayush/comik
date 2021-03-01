let panelContainers = document.getElementsByClassName("panel")
let panelContainersArray = []
let panel = null
let currInterval = -1
let yCoord

const keyPressedHandler = (e) => {
    const num1KeyCode = 49
    panel = panelContainersArray[e.keyCode - num1KeyCode]
    yCoord = panel.getBoundingClientRect().top
    
    // if there currently an interval set remove it
    if (currInterval!=-1){
        clearInterval(currInterval)
        currInterval = -1
    }

    if (yCoord > 0){ // is the panel is not at the top
        currInterval = setInterval(() => {
            console.log(panel.getBoundingClientRect().top)
            if (panel.getBoundingClientRect().top>=0) {
                if (panel.getBoundingClientRect().top<10) {
                    window.scrollBy(0,panel.getBoundingClientRect().top)
                    clearInterval(currInterval)
                    currInterval = -1
                }
                window.scrollBy(0,10)
            } else {
                clearInterval(currInterval)
                currInterval = -1
            }    
        }, 10)
    } else if(yCoord < 0){
        currInterval = setInterval(() => {      
            console.log(panel.getBoundingClientRect().top)     
            if (panel.getBoundingClientRect().top<=0) {
                if (panel.getBoundingClientRect().top>-10) {
                    window.scrollBy(0,panel.getBoundingClientRect().top)
                    clearInterval(currInterval)
                    currInterval = -1
                }
                window.scrollBy(0,-10)
            } else {
                clearInterval(currInterval)
                currInterval = -1
            }    
        }, 10)
        // console.log("panel is above")
    }
    // panel.scrollIntoView()
}

document.addEventListener("keypress",keyPressedHandler)

Object.keys(panelContainers).forEach(panelContainerKey => {
    console.log(window.innerHeight)
    let panel = panelContainers[panelContainerKey]
    panel.style.height = window.innerHeight+"px"
    panelContainersArray.push(panel)
})