import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", ()=> {
    test("getHeroeById debe de retornar un heroe por ID", ()=> {

        const id = 100;
        const hero = getHeroeById(id);
        
        // expect(hero).toEqual({id: 1, name:'Batman',owner:'DC'})

        expect(hero).toBeFalsy();

    });

    test("getHeroesByOwner debe de retornar heroes de DC",() => {
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
          { id: 1, name: "Batman", owner: "DC" },
          { id: 3, name: "Superman", owner: "DC" },
          { id: 4, name: "Flash", owner: "DC" },
        ]);

        // mejor forma en caso de que se agregen nuevos datos a la lista de heroes
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    });

    test("getHeroesByOwner debe de retornar heroes de Marvel", () => {
      const owner = "Marvel";

      const heroes = getHeroesByOwner(owner);
      console.log(heroes);
      expect(heroes.length).toBe(2);

      // mejor forma en caso de que se agregen nuevos datos a la lista de heroes
      expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });
});



//tarea:
// debe de retornar un arreglo con los héroes de DcC
//length === 3
//toEqual al arreglo filtrado


//debe de retornar un arreglo con los héroes de Marvel
//length ===2