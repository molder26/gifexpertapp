import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.js', () => {
    
    test('getSaludo debe retorar Hola Fernando', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo('Fernando');

        expect( saludo).toBe( 'Hola ' + nombre);

    });

    test('getSaludo debe retorar Hola Carlos', () => {
        
        const saludo = getSaludo();

        expect( saludo).toBe( 'Hola Carlos' );

    });

});