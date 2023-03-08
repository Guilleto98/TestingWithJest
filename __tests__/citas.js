import Citas from '../js/classes/Citas';


describe('Probar la clase de Citas', ()=>{
    test('Agregar nueva cita', ()=>{

        const citas = new Citas();

        const citaObj = {
            mascota: 'Hook',
            propietario: 'Guillermo',
            telefono: '099155',
            fecha: '10-12-2020',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }

        citaObj.id = Date.now();
        citas.agregarCita(citaObj);

        //Prueba
        expect( citas ).toMatchSnapshot()

    })
})