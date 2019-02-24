//  Buscar en el pemsun

function buscar() {
var input, filter, found, table,celda_fila,val_celda;
input = document.getElementById("id_texto_buscar");
filter = input.value.toUpperCase();
table = document.getElementById("id_tabla");
found = false;

for(var fila = 1;fila<table.rows.length;fila++){

celda_fila = table.rows[fila].getElementsByTagName('td');
found = false;

for(var celda = 1;celda<celda_fila.length;celda++){

val_celda = celda_fila[celda].innerHTML.toUpperCase();

if(filter.length == 0 || (val_celda.indexOf(filter)>-1)){

found = true;

}


}

if(found){

table.rows[fila].style.display='';    

}else{

table.rows[fila].style.display='none';
}
}  
}


// Linea, color y zoom letra enlace pemsun

function modificar_estructura_enlace(){
var enlace_mercadotecnia = document.getElementById('id_licenciatura_mercadotecnia');
enlace_mercadotecnia.style.color="blue";
enlace_mercadotecnia.style.fontSize="22px";
enlace_mercadotecnia.style.textDecoration="underline";
                                      }
  
function modificar_estructura_enlace_descargar_pensum(){
var enlace_descargar_pensum = document.getElementById('id_descargar_pensum');
enlace_descargar_pensum.style.color="blue";
enlace_descargar_pensum.style.fontSize="22px";
enlace_descargar_pensum.style.textDecoration="underline";
                                                         }


// Linea, color y zoom letra enlace footer

function enlace_pagina_uasd(){
var enlace_uasd = document.getElementById('id_pagina_uasd');
enlace_uasd.style.color="blue";
enlace_uasd.style.fontSize="22px";
enlace_uasd.style.textDecoration="underline"      
                               }
                                                        
 function enlace_pagina_mescyt(){
 var enlace_mescyt = document.getElementById('id_pagina_mescyt');
 enlace_mescyt.style.color="blue";
 enlace_mescyt.style.fontSize="22px";
 enlace_mescyt.style.textDecoration="underline"
                                }

function enlace_pagina_autoservicio(){
var enlace_autoservicio = document.getElementById('id_pagina_autoservicio');
enlace_autoservicio.style.color="blue";
enlace_autoservicio.style.fontSize="22px";
enlace_autoservicio.style.textDecoration="underline"
                                    }

function enlace_pagina_uasd_virtual(){
var enlace_uasd_virtual = document.getElementById('id_pagina_uasd_virtual');
enlace_uasd_virtual.style.color="blue";
enlace_uasd_virtual.style.fontSize="22px";
enlace_uasd_virtual.style.textDecoration="underline"
                                      }


function enlace_programacion_docente(){
var enlace_programacion = document.getElementById('id_descargar_programacion');
enlace_programacion.style.color="blue";
enlace_programacion.style.fontSize="22px";
enlace_programacion.style.textDecoration="underline"
                                                                              }
                                        
// boton subir arriba
                                      
$(document).ready(function(){
$('.ir-arriba').click(function(){
$('body, html').animate({
scrollTop: '0px'
}, 100);
});
$(window).scroll(function(){
if( $(this).scrollTop() > 0 ){
$('.ir-arriba').slideDown(300);
} else {
$('.ir-arriba').slideUp(300);
}
});
});

                     

