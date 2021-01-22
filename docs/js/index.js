var enviadoProductos=false;
var enviadoTestimonios=false;
var formMostrado=false;
var jsonTestimonios;
var primero, segundo=0; tercero=0;
var cardView=true;
$(window).on('load', function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop()+$(window).height()>=$(document).height() -100){
            if(!enviadoTestimonios)
                cargarTestimonios();
            else
                if(!enviadoProductos)
                    cargarProductos();
                    else
                        if(!formMostrado){
                            $('#subscribirse').animate({
                                backgroundColor: '#361257',
                                color: 'white',
                            },2000, showForm())
                            formMostrado=true;
                        }
            
        }
        
    });
    //Botón arriba
    $(".btnArriba").click(function(){
        $("html").animate({scrollTop: 0},2000)
    })
    //Cambiar vista
    $('#cambiarVista').click(function(){
        cardView=!cardView;
        $('.testimonio').toggle(1000);
        $('table').toggle(1000);
    })
    //Geolocalizador
    navigator.geolocation.getCurrentPosition(geoSucces, geoError);
});

function geoSucces(position) {
    let coord = position.coords;

	$.ajax(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCb0unDlhxO7OS3cHce1mA8UQV3kjdNwZQ&address=${coord.latitude},${coord.longitude}`)
		.done((response) => {
			console.log(response.results[0].formatted_address);
		})
		.fail((error) => {
			console.warn(error);
		});
}   
function geoError(){
    console.log("Su navegador no es compatible con geolocalizacion")
}