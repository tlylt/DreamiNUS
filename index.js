const click = (clazz) => {
    const buttons = document.getElementsByClassName(clazz);
    for (const button of buttons) {
        button.click();
        console.log("No More Ad");
    }
}

console.log("No More Ad - Init");
const circles = Array.from(document.querySelectorAll("span.circle"));
circles.map((element, index) => {
    element.style.width = "10px!important";
    element.style.height = "10px!important";
})

let flag = false;
let currentLocation;

function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
        x.style.display = "initial";
    } else {
        x.style.display = "none";
    }
}

const reposition = (clazz) => {
    const panel = document.getElementsByClassName(clazz)[0]
    if (!(typeof panel == 'undefined') && !flag) {
        const stats = document.querySelector(".legend-expanded.ng-star-inserted span:first-of-type")
        const circles = Array.from(document.querySelectorAll("span.circle"));
        circles.map((element, index) => {
            element.style.margin = "0";
            element.style.height = "5px"
            element.style.width = "1px"
        })

        document.querySelector(".questions").style.justifyContent = "center !important"

        panel.id = "resultPanel"
        const resultBtn = document.createElement("button")
        resultBtn.onclick = () => myFunction("resultPanel")
        resultBtn.innerText = "(• ◡•) Result"
        resultBtn.style.margin = "15px"
        resultBtn.style.backgroundColor = "darkorange"
        resultBtn.style.color = "white"
        resultBtn.style.boxShadow = "none"
        resultBtn.style.border = "none"
        resultBtn.style.padding = "6px 12px"
        resultBtn.style.borderRadius = "4px"
        document.querySelector(".full-screen-header-overlay").appendChild(resultBtn)
        stats.innerText = stats.innerText.split(" ")[0]
        panel.style.position = "absolute"
        panel.style.top = "3em"
        panel.style.width = "150px"
        panel.style.right = "0"
        panel.style.height = "200px"
        panel.style.border = "none"
        panel.style.backgroundColor = "transparent"
        flag = true
        currentLocation = window.location.href;
    }
}






setInterval(() => {
    reposition("legend-section ng-star-inserted")

}, 1000);

setInterval(() => {
    if (currentLocation !== window.location.href) {
        flag = false;
    }
}, 2000);