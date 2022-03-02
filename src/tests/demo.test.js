describe('Pruebas en el archivo demo.test.js', () => {

    test('deben ser iguales los strings', () => { 

        const mensaje = 'Hola';
    
        const mensaje2 = `Hola`;
    
        expect( mensaje ).toBe( mensaje2 );
    
     })
});