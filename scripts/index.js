let panelContainers = document.getElementsByClassName("panel")
let panelContainersArray = []
const keyPressedHandler = (e) => {
    const num1KeyCode = 49
    const panel = panelContainersArray[e.keyCode - num1KeyCode]
    // panel.scrollIntoView()
    console.log(panel.getBoundingClientRect().top1)
}

document.addEventListener("keypress",keyPressedHandler)

Object.keys(panelContainers).forEach(panelContainerKey => {
    console.log(window.innerHeight)
    let panel = panelContainers[panelContainerKey]
    panel.style.height = window.innerHeight+"px"
    panelContainersArray.push(panel)
})