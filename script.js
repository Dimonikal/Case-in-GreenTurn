const countOfMachines = 41;

var masOfMachines=document.createElement("div");
var machine=document.createElement("img");
machine.setAttribute("src","machine.png");

function newMachine(obj,id,num,left,top){
    obj.setAttribute("id",id);
    obj.setAttribute("style","left:"+Number(left+(4*num))+"%; top:"+top+"%;");
    obj.setAttribute("status", 1);//1-исправен, 0-неисправен
    //console.log(status);
    obj.setAttribute("onmouseover"," info('"+id+"Info', this);");
    obj.setAttribute("onmouseout"," info('"+id+"Info', this);");
    obj.setAttribute("onclick", "info('"+id+"Info', this);");
    obj.setAttribute("alt",id);
   // console.log(str, obj);
    return obj;
}

function newInfo(id){
    var mId="m"+id;

    var infoOfMachine = document.createElement("div");
    infoOfMachine.setAttribute("id", ""+mId+"Info");
    infoOfMachine.setAttribute("class", "info");
    infoOfMachine.setAttribute("style","display:none");

    var title = document.createElement("h2");
    title.innerHTML="Станок "+mId;

    var closeBtn = document.createElement("button");
    closeBtn.setAttribute("onclick","info('"+mId+"Info')");
    closeBtn.innerHTML="X"
    closeBtn.className="closeBtn";

    var statusOkBtn = document.createElement("button");
    statusOkBtn.setAttribute("onclick","info('"+mId+"Info'); document.getElementById('"+mId+"').setAttribute('status','1')");
    statusOkBtn.innerHTML="OK";
    statusOkBtn.className="okBtn";

    var statusAlertBtn = document.createElement("button");
    statusAlertBtn.setAttribute("onclick","info('"+mId+"Info'); document.getElementById('"+mId+"').setAttribute('status','0')");
    statusAlertBtn.innerHTML="Alert";
    statusAlertBtn.className="alertBtn";

    var status = document.createElement("p");
    status.setAttribute("id", "status")
    status.innerHTML="Состояние: исправен";

    infoOfMachine.insertAdjacentHTML("beforeend", (title.outerHTML+closeBtn.outerHTML+status.outerHTML+statusAlertBtn.outerHTML+statusOkBtn.outerHTML));
    //console.log(infoOfMachine);
    
    return infoOfMachine.outerHTML;
}


function info(id, current){
  //  console.log(current.getAttribute("status"));
  var obj=document.getElementById(id);
  if(current ? true : false){
        var status = Number(current.getAttribute("status"));
        if(!status){
            obj.className="statusAlert info";
            obj.children.status.innerHTML="Состояние: неисправен"
        }else{
            obj.className="statusOk info";
            obj.children.status.innerHTML="Состояние: исправен"
        }
    } 

    if(obj.style.display!='block')
        obj.style.display='block';
    else
        obj.style.display='none';
}


for(var i=0;i<countOfMachines;i++){
    
        masOfMachines.insertAdjacentHTML("beforeend",newInfo(i+1));
    if(i>32){
        masOfMachines.insertAdjacentHTML("beforeend",newMachine(machine, "m"+(i+1), i-32, 51, 10).outerHTML);
    }else
    if(i>25){
        masOfMachines.insertAdjacentHTML("beforeend",newMachine(machine, "m"+(i+1), i-25, 58, 32).outerHTML);
    }else
    if(i>12){
        masOfMachines.insertAdjacentHTML("beforeend",newMachine(machine, "m"+(i+1), i-12, 33, 47).outerHTML);
    }
    else{
        masOfMachines.insertAdjacentHTML("beforeend",newMachine(machine, "m"+(i+1), i+1, 35, 68).outerHTML);
    }
}

document.getElementById("machines").innerHTML=masOfMachines.outerHTML;



