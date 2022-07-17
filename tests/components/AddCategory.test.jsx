const { render,screen,fireEvent} = require("@testing-library/react")
const { AddCategory } = require("../../src/componets/AddCategory")

describe('Pruebas en AddCategory', () => {
    
    test('Debe de cambiar el valor de formulario', () => { 
    
        render( <AddCategory onNewCategory ={ ()=>{} }/> );
        
        const input= screen.getByRole('textbox');

        fireEvent.input(input,{target:{value:'Nicolas'}});

        expect(input.value).toBe('Nicolas');
    
    });

    test('debe llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = "Nicolas";
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory ={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole("form");

        fireEvent.input( input, { target: { value:inputValue } });
        fireEvent.submit(  form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );




     })
     test('No debe de llamar onNewCategory si el input esta vacio', () => { 

     
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory ={ onNewCategory }/> );
        const form  = screen.getByRole("form");      
        fireEvent.submit(  form );   
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();


      })

})