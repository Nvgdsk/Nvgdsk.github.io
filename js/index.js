let elem = document.getElementById("enter-but");
let elem1 = document.getElementsByClassName("block-modal")[0];

function openmodal() {
    document.getElementsByClassName("block-modal")[0].style=("display:block");
    document.getElementsByClassName("modal")[0].style=("display:block;width: 20%;");

}
function closemodal() {
    document.getElementsByClassName("block-modal")[0].style=("display:none");
    document.getElementsByClassName("modal")[0].style=("display:none;");

}

elem.onclick = openmodal;
elem1.onclick = closemodal;


