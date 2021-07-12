function showCousing(){
    var nOne=parseInt(document.getElementById("numOne").value);
    var nTwo=parseInt(document.getElementById("numTwo").value);
    if(!(isNaN(nOne) || isNaN(nTwo))){
       //alert(isCousing(nOne));
        var tabCousing=loadTable(nOne,nTwo);
        var out=document.getElementById("result");
        out.innerHTML=" ";
         var less=nOne<nTwo?nOne:nTwo;
         var great=nOne>nTwo?nOne:nTwo;
        var tabCousing=loadTable(less,great);
        var out=document.getElementById("result");
        out.innerHTML=" ";
        var body=document.createElement("tbody");
        var aux=1;
        var suma=0;
        for(var cont=less; cont<=great;cont++){
            if(isCousing(cont)){
            var row=document.createElement("tr");
            var col=document.createElement("td");
            col.appendChild(document.createTextNode(aux++));
            row.appendChild(col);
            col=document.createElement("td");
            col.appendChild(document.createTextNode(cont));
            row.appendChild(col);
                 suma+=cont;
            body.appendChild(row);                
            }
             if(cont==great-1){
                 var row=document.createElement("tr");
                 var col=document.createElement("td");
                 col.appendChild(document.createTextNode("suma"));
                 row.appendChild(col);
                 col=document.createElement("td");
                 col.appendChild(document.createTextNode(suma));   
                 row.appendChild(col);
                }
               
                body.appendChild(row); 
            
           
        }
        tabCousing.appendChild(body);
        out.appendChild(tabCousing);
       }else{
        alert("valores invalidos");   
       }
    
}
function isCousing(n){
    var cousing=true;
    var cont=2;
    while(cont<=n/2 && cousing){
        cousing=!(n%cont++==0);
    }
    return cousing;
}
function loadTable(nOne,nTwo){
    var less=nOne<nTwo?nOne:nTwo;
    var great=nOne>nTwo?nOne:nTwo;
    var tab=document.createElement("table");
    tab.setAttribute("style","border:1px solid");
    var head=document.createElement("thead");
    var row=document.createElement("tr");
    var col=document.createElement("th");
    col.setAttribute("colspan","2");
    col.appendChild(document.createTextNode("primos del"+less+" al "+great));
    row.appendChild(col);
    head.appendChild(row);
    tab.appendChild(head);
    row=document.createElement("tr");
    col=document.createElement("th");
    col.appendChild(document.createTextNode("#"));
    row.appendChild(col);
    col=document.createElement("th");
    col.appendChild(document.createTextNode("Numero Primo"));
    row.appendChild(col);
    head.appendChild(row);
    tab.appendChild(head);
    return tab;
}

