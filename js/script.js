console.log(Math.floor(Math.random() * 7));

var count = 0;

document.onclick = function(e) {

    count++;

    var div = document.createElement("div");
    div.style.backgroundColor = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",0.5)";

    div.style.width = "70px";
    div.style.height = "70px";
    div.style.position = "absolute";


    document.body.appendChild(div);

    console.log(count);

    if (count % 2 == 0) {
        div.style.borderRadius = "50%";
    }

    div.style.left = e.clientX + 'px';
    div.style.top = e.clientY + 'px';
}