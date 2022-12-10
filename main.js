function getSrc () {

var ta = document.querySelector("#ta");
var src = ta.value.replace(/\n\r?/g, '<br>');
getValue(src)

}

function getValue(data){
    for(let key of Object.values(data)){
        console.log(key);
    }
}


window.onload = function(){ 
    // your code 
    console.log('welcome back');
    
};

