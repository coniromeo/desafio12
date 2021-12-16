$("body").prepend('<button id="btn1"> Boton </button> <input type="text" id="ipt1">');
            
$("#ipt1").change(function(e){
    console.log("Tu mensaje en el input es :" + e.target.value);
})
$("btn1").click(() =>{
    $("ipt1").tigger("change")
})
