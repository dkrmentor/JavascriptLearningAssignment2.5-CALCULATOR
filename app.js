function btn(num) {
    var result = document.getElementById("result")
    result.value += num;
}
function clearResult() {
    var result = document.getElementById("result")
    result.value = " ";
}
function clrResult() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.substr(0, result.length - 1);
}
function getResult() {
    var result = document.getElementById("result")
    result.value = eval(result.value);
}
function sqr(){
    var result = document.getElementById('result');
    result.value= Math.pow(result.value,2);
}
function cube(){
    var result = document.getElementById('result');
    result.value= Math.pow(result.value,3);
}
function sqrt(){
    var result = document.getElementById('result');
    result.value= Math.sqrt(result.value);
}

function off(){
    var off = document.getElementById("chng");
    off.href = "ty.html";
}