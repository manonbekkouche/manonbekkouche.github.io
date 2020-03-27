const stepElems = document.getElementsByClassName("step");
const buttonElems = document.getElementsByClassName("btn-next");

function clickHandler(e) {
    const target = e.target;
    console.log(target)
    const intent = parseInt(target.dataset.intent, 10);

    for (const step of stepElems) {
        const stepIndex = parseInt(step.dataset.step, 10);
        if (stepIndex === intent) {
            step.classList.add("step-active");
        } else {
            step.classList.remove("step-active");
        }
    }
}

for (const buttonElem of buttonElems) {
    buttonElem.addEventListener("click", clickHandler);
}
