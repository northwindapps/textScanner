var ta = null;

function getSrc () {
var src = ta.value.replace(/\n\r?/g, '<br>');
getValue(src)

}

function getValue(data){
    for(let key of Object.values(data)){
        console.log(key);
    }
}


window.onload = async function(){ 
    ta = await document.querySelector("#ta");
    // your code 
    console.log('welcome back');
    
};

