/**Codigo para porobar la instalacion y configuracion de jest */
// describe('fizzbuzz',()=>{
//     test('test',(test)=>{
//         expect(true).toBe(true);
//     });
// });
const fizzbuzz=require('./fizzbuzz');

describe("FizBuzz",()=>{
    
    test("Se debe imprimir 1 si el número es 1",()=>{
        const RESPUESTA_ESPERADA=1;
        const RESULTADO_OBTENIDO=fizzbuzz(1);
        expect(RESPUESTA_ESPERADA).toBe(RESULTADO_OBTENIDO);
    });

    test("Se debe imprimir la palabra fizz cuando sea multiplo de 3",()=>{
        const RESPUESTA_ESPERADA = "FIZZ";
        const  RESULTADO_OBTENIDO = fizzbuzz(3);
        expect(RESPUESTA_ESPERADA).toBe(RESULTADO_OBTENIDO);
    });

    test("Se debe imprimir la palabra buzz cuando sea multiplo de 5",()=>{
        const RESPUESTA_ESPERADA="BUZZ"
        const RESULTADO_OBTENIDO= fizzbuzz(5);
        expect(RESPUESTA_ESPERADA).toBe(RESULTADO_OBTENIDO);
    });
    test("Se debe imprimir la palabra fizzbuzz si es multiplo de los 3 y de 5",()=>{
        const RESPUESTA_ESPERADA="FIZZ-BUZZ"
        const RESULTADO_OBTENIDO = fizzbuzz(15);
        expect(RESPUESTA_ESPERADA).toBe(RESULTADO_OBTENIDO);
    });


})

