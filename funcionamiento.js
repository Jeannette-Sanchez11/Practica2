$(document).ready(function () {
    $("#generarRFC").click(function () {
        console.log("entra");
        var val1 = $("#input1").val();
        var val2 = $("#input2").val();
        var val3 = $("#input3").val();
        var val4 = $("#inputDate").val();
        var nombreD, apPatD, apMatD, diaD, mesD, anioD, homoGenerada, res;
        const lestrasYNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        var letra1 = lestrasYNum[Math.floor(Math.random() * lestrasYNum.length)];
        var letra2 = lestrasYNum[Math.floor(Math.random() * lestrasYNum.length)];
        homoGenerada = letra1+letra2;
        nombreD = val1.substring(0,1);
        apPatD = val2.substring(0,2);
        apMatD = val3.substring(0,1);
        diaD = val4.substr(-2, 2);
        mesD = val4.substr(-5, 2);
        anioD = val4.substring(4, 2);
        res= apPatD+apMatD+nombreD+anioD+mesD+diaD+homoGenerada;
        console.log(res);
        $("#inputRfc").val(res);
        console.log(res);
    });

    $("#limpiar").click(function(){
        $('#input1').val('');
        $('#input2').val('');
        $('#input3').val('');
        $('#inputDate').val('');
        $('#inputRfc').val('');
    });



    $("#buscarDato").click(function(){
        var id = document.getElementById("inputID").value;
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users/"+ id,
            dataType:"json",
            success:function(data){
                var nAp = "" + data.name + "";
                var correo=  "" + data.email + "";
                $('#nameAndApPat').append(nAp);
                $('#email').append(correo);
            }
            
        })
    });

    $("#clean").click(function(){
        $('#nameAndApPat').empty();
        $('#email').empty();
        $('#inputID').val('');
    });


});