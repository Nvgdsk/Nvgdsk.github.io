let elem = document.getElementById("enter-but");
let elem1 = document.getElementsByClassName("block-modal")[0];
let style_1 = document.getElementById("style_1");
let style_2 = document.getElementById("style_2");
let style_3 = document.getElementById("style_3");

function openmodal() {
    document.getElementsByClassName("block-modal")[0].style = ("display:block");
    document.getElementsByClassName("modal")[0].style = ("display:block;width: 20%;");

}

function closemodal() {
    document.getElementsByClassName("block-modal")[0].style = ("display:none");
    document.getElementsByClassName("modal")[0].style = ("display:none;");

}

function style_mod() {

    switch (this.id) {
        case "style_1":
            document.getElementsByClassName("mainconten")[0].style = "grid-template-columns: repeat(6, 2fr);" +
                "grid-column:2/12;grid-row:1";
            document.getElementsByTagName("header")[0].style = "flex-direction:column;    grid-row: 1/3;" +
                "    grid-column: 1;";
            document.getElementsByTagName("nav")[0].style =

                "flex-direction: column;padding: 0;min-height: 100%;";
            document.getElementsByTagName("ul")[0].style = "flex-direction: column;";
            break;
        case "style_2":
            document.getElementsByClassName("mainconten")[0].style = "grid-template-columns: repeat(2, 2fr);" +
                "grid-column:1/12;grid-row:2";
            break;
        case "style_3":

            break;

    }
}

elem.onclick = openmodal;
elem1.onclick = closemodal;
style_1.onclick = style_mod;
style_2.onclick = style_mod;
style_3.onclick = style_mod;

