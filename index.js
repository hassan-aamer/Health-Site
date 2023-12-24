

$("#btn50").click(function(){


var w=$("#form1").val();
alert(w)
var h=$("#form2").val();
var bmi= (w/(h*h))*10000;

if(bmi>25){
    var result="overweight"
}else if(bmi<18.5){
    var result="loweweight"
}else{
    var result="normal"
}
alert(result)
$("#h10").html(result)

})

$("#b12").click(function(){


    var t=$("#form3").val();
    $("#list").append("<li>" +t +"</li>")


})
$("#btn22").click(function(){
    var a=$("#11").val();
    var b=$("#12").val();
    var c=$("#13").val();
    var d=$("#14").val();

    
})

