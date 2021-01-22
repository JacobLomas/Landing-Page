function cargarTestimonios(){
    $.ajax({
        url:"./json/testimonios.json",
        method:'GET'
    })
    .done(function(respuesta){
        if(!jsonTestimonios){ //Sin este if, solo en ocasiones, me hace más de una peticion ajax (Preguntar a Jose)
            jsonTestimonios=respuesta.testimonios;
            enviadoTestimonios=true;
            $('.testimonios').show(1000);
            desencadenado();
            setInterval(limpiarSection,10000);
        }
    }).fail(function(){
        enviadoTestimonios=true;
        setTimeout(cargarTestimonios, 5000);
    });
}

function desencadenado() {
    let section=$('.testimonios');
    primero=Math.floor(Math.random() * jsonTestimonios.length);
    do{
        if(segundo==primero)
            segundo=Math.floor(Math.random() * jsonTestimonios.length);
        tercero=Math.floor(Math.random() * jsonTestimonios.length);
    }while(primero==segundo||primero==tercero||segundo==tercero);
    section.append(maquetarTestimonioCard(jsonTestimonios[primero]));
    section.append(maquetarTestimonioCard(jsonTestimonios[segundo]));
    section.append(maquetarTestimonioCard(jsonTestimonios[tercero]));
    maquetarTestimonioTable(jsonTestimonios[primero]);
    maquetarTestimonioTable(jsonTestimonios[segundo]);
    maquetarTestimonioTable(jsonTestimonios[tercero]);
}
function limpiarSection() {  
    let elementos;
    if(cardView)
        elementos='.testimonio';
    else
        elementos='tbody>tr';
    $(elementos).animate({
        opacity:0
    },3000,function(){
        $('.testimonio, tbody>tr').hide(0, function(){
            $('.testimonio').remove();
            $('tbody>tr').remove(); 
            desencadenado();
         });
    });
    
    
    
}
function maquetarTestimonioCard(testimonio){
    let card=$('<div class="testimonio">');
    card.css('opacity', 0);
    card.append($('<img src='+testimonio.foto+' alt="Foto usuario">'));
    let testimonioBody=$('<div class="testimonio-body">');
    testimonioBody.append($('<h2>'+testimonio.nombre+'</h2>'));
    testimonioBody.append($('<h3>'+testimonio.testimonio+'</h3>'));
    testimonioBody.append($('<p>'+testimonio.fecha+'</p>'));
    card.animate({
        opacity:1
    },1000)
    if(!cardView){
        card.hide();
    }
    card.append(testimonioBody);
    return card;
}
function maquetarTestimonioTable(testimonio) {
    let lista=$('<tr>');
    lista.css('opacity', 0);
    lista.append($('<td><img src='+testimonio.foto+' alt="Foto Usuario"></td>'));
    lista.append($('<td>'+testimonio.nombre+'</td>'));
    lista.append($('<td>'+testimonio.testimonio+'</td>'));
    lista.append($('<td>'+testimonio.fecha+'</td>'));
    lista.animate({
        opacity:1
    },1000)
    if(cardView){
        $('table').hide();
    }
    $('tbody').append(lista);
}