(function(){
    //template literales

    function getEdad() {
        return 100 + 100 +300;
    }

    const nombre = 'Jorge';
    const apellido = 'Vargas';
    const edad = 29;

    // const salida = nombre + " " + apellido + "( "+edad+" )";

    const salida = `${ nombre } ${ apellido } (${ getEdad() })`;

    console.log(salida);
})();


