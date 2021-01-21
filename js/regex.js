$(window).on('load',function(e){
    $('#nombres, #apellidos').keyup(function (e) { 
        let expresion=/[a-zA-Z]{3,20}/;
        if(expresion.test($(this).val()))
            $(this).next().attr('disabled',false);
        else
            $(this).next().attr('disabled', true);
    });
    $('#correo').keyup(function (e) { 
        let expresion=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(expresion.test($(this).val()))
            $(this).next().attr('disabled',false);
        else
            $(this).next().attr('disabled', true);
    });
    $('#contrasena').keyup(function (e) { 
        let expresion=/^(?=.*\d).{8,16}$/;
        if(expresion.test($(this).val())){
            $('button[type="submit"]').attr('disabled',false);
            console.log('Coincide')
        }
        else{
            console.log('NOCoincide');
            $(this).next().next().next().attr('disabled', true);
        }
    });
})
