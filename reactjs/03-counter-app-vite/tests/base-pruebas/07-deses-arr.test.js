import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr',() => {
    test('debe de retornar un string y un número',() => {
        const [letter, numbers] = retornaArreglo();

        expect(letter).toBe('ABC');
        expect(numbers).toBe(123);

        expect(letter).toEqual(expect.any(String))
    })
});