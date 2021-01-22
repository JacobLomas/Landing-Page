function cargarProductos(){
    $.ajax({
        url:"./json/productos.json",
        method:'GET'
    })
    .done(function(respuesta){
        if(!$('.productos').length){ //Sin este if, solo en ocasiones, me hace más de una peticion ajax (Preguntar a Jose)
            let section=$('<section class="productos">');
            for(producto of respuesta.productos){
                $(section).append(maquetarProducto(producto));
            }
            $('body').append(section);
            enviadoProductos=true;
        }
    }).fail(function(){
        enviadoProductos=true;
        setTimeout(cargarProductos, 5000);
    });
}

function maquetarProducto(producto){
    let card=$('<div class="card">');
    card.css('opacity', 0);
    card.append(initImg(producto.img,producto.alt, producto.src));
    let cardBody=$('<div class="card-body">');
    cardBody.append(initTitulo(producto.titulo));
    cardBody.append(initTexto(producto.texto));
    cardBody.append(initButtom(producto.src));
    card.append(cardBody);
    card.animate({
        opacity:1
    },1600);
    return card;
}
function initImg(img,alt, src){
    return $('<a href='+src+'>').append($('<img src='+img+' alt='+alt+'>'));
}
function initTitulo(titulo){
    return $('<h1>'+titulo+'</h1>');
}
function initTexto(texto){
    return $('<h4>'+texto+'</h4>');
}
function initButtom(src){
    return $('<button> <a href='+src+'> Ir a la tienda</a> </button>');
}