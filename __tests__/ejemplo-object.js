const cliente = {
    nombre: 'Guillermo',
    balance: 500
};

describe('Testing al Cliente', ()=>{

    test('Cliente es premium?',()=>{
        expect(cliente.balance).toBeGreaterThan(400);
    })
    test('El cliente es Guillermo?',()=>{
        expect( cliente.nombre ).toBe('Guillermo')
    })
    test('No es otro cliente', ()=>{
        expect( cliente.nombre ).not.toBe('Pedro')
    })
    test('No tiene 500', ()=>{
        expect( cliente.balance ).not.toBe(400)
    })
})
