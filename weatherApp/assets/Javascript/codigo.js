

// Ahora hacé que cuando se dispare el evento que va a pedir los datos, se reemplace el contenido del div #container por el string "Estamos buscando los datos". Cuando llegan los datos del pedido AJAX (tip: en la función dentro de success) agregá de nuevo el html al #container con la lista y los datos correspondientes.
// Ahora probemos algunas interacciones más complejas usando una RESTful API , que son una serie de endpoints, disponibles en internet, que devuelve datos en JSON en un formato determinado basado en el nombre del recurso (ejemplo: un post con id 7 estará disponible en /posts/7).


// Metodo para GET info de esa url
 
// $.ajax({
//   method: 'GET',
//   url: 'http://jsonplaceholder.typicode.com/posts/1',
//   success: function(data) {
//     console.log(data)
//   }
// })

// $.ajax({
//     method: 'GET',
//   url: 'http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es',
//   success: function(data){
//     $("#actual").text(data.main.temp); 
//     $("#max").text(data.main.temp_max);
//     $("#min").text(data.main.temp_min);
//     $("#cond").text(data.weather[0].description);
//     $("#viento").text(data.wind.speed);
// }});


$("input").keypress(function(e){
    //filtrar para que sólo se active cuando aprietan Enter
    if (e.which == "13") {
        $.ajax({
        
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + $("input").val() + "&appid=29cd8b4e061906fc7451300f9f3e80f6&units=metric",
            
            success:function(data){
                $("#actual").text("Temperatura actual : " + data.main.temp); 
                $("#max").text("Temperatura máxima : " +data.main.temp_max);
                $("#min").text("Temperatura mínima : " +data.main.temp_min);
                $("#cond").text("Condiciones actuales : " +data.weather[0].description);
                $("#viento").text("Viento : " +data.wind.speed);    
                $("input").val(""); 
            }
    
            
            });
            return false; 
    }});

$("button").click(function(){
    $.ajax({
        
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $("input").val() + "&appid=29cd8b4e061906fc7451300f9f3e80f6&units=metric",
        
        success:function(data){
            $("#actual").text("Temperatura actual : " + data.main.temp); 
            $("#max").text("Temperatura máxima : " +data.main.temp_max);
            $("#min").text("Temperatura mínima : " +data.main.temp_min);
            $("#cond").text("Condiciones actuales : " +data.weather[0].description);
            $("#viento").text("Viento : " +data.wind.speed);    
            $("input").val(""); 
        }

        
        });
});

$.ajax({
        
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $("input").val() + "&appid=29cd8b4e061906fc7451300f9f3e80f6&units=metric",
        
        success:function(data){
            $("#actual").text("Temperatura actual : " + data.main.temp); 
            $("#max").text("Temperatura máxima : " +data.main.temp_max);
            $("#min").text("Temperatura mínima : " +data.main.temp_min);
            $("#cond").text("Condiciones actuales : " +data.weather[0].description);
            $("#viento").text("Viento : " +data.wind.speed);    
            $("input").val(""); 
        }

        
        });

   
    



