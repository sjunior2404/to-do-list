//Criação do Botão close
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i=0; myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
//Clicar no botão close para esconder os itens da lista
var close = document.getElementsByClassName("close");
var i;
for (i=0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Adicionar simbolo excluir quando clicar em um item da lista
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('cheked');
    }
}, false);

//Cria um novo item na lista quanclica no botão adicionar
function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert("Você precisa escrever algo para adicionar a lista")
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0; i<close.length;i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}