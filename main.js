var menu=["veg magherita pizza","chicken tandori pizza","salty pizza","pasta pizza","hot capsicum pizza","paneer pizza"];

function add() {
htmldata="<ol>";
for (i=0;i<menu.length;i++){
htmldata=htmldata+"<li>"+menu[i]+"</li>";

}
htmldata=htmldata+"</ol>";
 document.getElementById("menu").innerHTML = htmldata;

}
