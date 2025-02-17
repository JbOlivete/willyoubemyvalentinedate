const gif = ["gif/pic2.gif", "gif/pic3.gif", "gif/pic4.gif", "gif/pic5.gif", "gif/pic6.gif", "gif/pic7.gif","gif/yes.gif"];
const message = ["Please:(", "don't do this to me", "I will cry", "I really wanted to..", "I will not stop crying"];

let clickCount = 0; 
const nbutton = document.getElementById("no-btn");
const ybutton = document.getElementById("yes-btn");

const finalMessage = document.getElementById("message");
const header = document.getElementById("subhead");
const btnContainer = document.getElementById("btn-con")

const maxClicks = 6;
const startYesWidth = 100, maxYesWidth = 600;
const startYesHeight = 50, maxYesHeight = 300;

const startNoWidth = 200, minNoWidth = 140; 

nbutton.addEventListener("click", function() {
    if (clickCount < maxClicks) { 
        clickCount++; 
        
        if (clickCount < gif.length - 1) {
            document.getElementById("gif").src = gif[clickCount]; 
        }
        if (clickCount < message.length) {
            finalMessage.textContent = message[clickCount];
        }
        
        
        let newYesWidth = startYesWidth + ((maxYesWidth - startYesWidth) / maxClicks) * clickCount;
        let newYesHeight = startYesHeight + ((maxYesHeight - startYesHeight) / maxClicks) * clickCount;

        ybutton.style.width = `${newYesWidth}px`;
        ybutton.style.height = `${newYesHeight}px`;

       
        let newNoWidth = startNoWidth - ((startNoWidth - minNoWidth) / maxClicks) * clickCount;
        nbutton.style.width = `${newNoWidth}px`;
    }
});

ybutton.addEventListener("click", function() {
    document.getElementById("gif").src = gif[gif.length - 1]; 
    header.textContent = "Thank you for being my valentine! ";
    btnContainer.style.display = "none";
    
});
