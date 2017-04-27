//close modals of BULMA anywhere by clicking cancel or X 
const modals = document.getElementsByClassName('modal');
const modals_cancels = document.querySelectorAll("a[class='button']");
const modals_deletes = document.querySelectorAll("button[class='delete']");
let modals_close = [];
for (let i = 0; i < modals_cancels.length; i++) {
    modals_close.push(modals_cancels[i]);
}
for (let i = 0; i < modals_deletes.length; i++) {
    modals_close.push(modals_deletes[i]);
}
for (let i = 0; i < modals_close.length; i++) {
    modals_close[i].onclick = removeActive;
}
function removeActive(){
    this.parentNode.parentNode.parentNode.classList.remove('is-active');
}
