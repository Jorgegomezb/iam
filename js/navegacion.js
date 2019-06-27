$("#icono_menu").on("click",function(){
    $("#menu_movil").toggle();
    $("#icono_menu").hide();
});

$("#icono_cerrar").on("click",function(){
    $("#menu_movil").toggle();
    $("#icono_menu").show();
});
$("#menu_movil").on("click",function(){
    $("#menu_movil").toggle();
    $("#icono_menu").show();
});