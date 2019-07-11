
function GOLDBACH(){
    var n=document.getElementById("inputg").value;
    if(n!= parseInt(n)||(n%2!=0)||(n<=2)){
        alert("Invalid Input! Enter Even integer greater than 2");
        document.getElementById("resultg").innerHTML ="Please enter a valid number";
        var vn=document.getElementById("resultg");
        vn.style.color="red";

    }
    else{
        var i;
        var s="";
        var arr = new Array();
        for(i=2;i<=n/2;i++){
            if(PRIME(i) && PRIME(n-i)){
            arr.push(i+"+"+(n-i));
        if(arr.length==0){
          s="NO such combinations are possible";
        }
    document.getElementById("resultg").innerHTML ="<center> Result:<br>"+n+"="+arr.join(", ")+s+"</center>";
    }
            }
        }
    }
    function PRIME(n){
        for(var i=2;i<=n/2;i++){
            if(n%i==0)return false;
        }
        return true;
    }
