const View = {
    render({minutes, seconds}){
        document.body.innerHTML = `
    <p>Dencanso em:</p>
    <span>${minutes}:${seconds}</span>
    `}
}
 

export {View};