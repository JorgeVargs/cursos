(()=> {

    // desestructurar objetos
    const avenger = {
        nombre : 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    }

    // const {nombre, poder} = avenger;
    // console.log(nombre);
    // console.log(poder);

    const extraer = ({nombre,poder}:any) =>{
        console.log(nombre);
        console.log(poder);
    }

    // extraer(avenger);

    // desestructurar arreglos
    const avengers:string[] = ['Thor','Ironman','Spiderman'];

    //definir nombre, de acuerdo al orden
    const [, ,arana] =  avengers;

    // console.log(avengers[0]);
    // console.log(avengers[1]);
    // console.log(avengers[2]);

    // console.log(loki);
    // console.log(hombre);
    // console.log(arana);

    const extraerArr = ([thor,ironman,spiderman]: string[]) =>{
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }

    extraerArr(avengers);



})();


