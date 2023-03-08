const cliente = {
    nombre: 'Guillermo',
    balance: 505,
    tipo: 'Premium',
}

describe('Testing al cliente', ()=>{
    test('Es Guillermo', ()=>{
        expect(cliente).toMatchSnapshot()
    })
})