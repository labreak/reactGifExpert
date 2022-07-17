import { render, screen } from "@testing-library/react";
import { GifGrid } from "../src/componets/GifGrid";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

jest.mock("../src/hooks/useFetchGifs");


describe('Pruebas en el componente GifGrid', () => { 
    const category ='One Punch'

    test('Debe de mostrar el loading inicianlmente', () => { 

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        });

        render (<GifGrid categoria= { category }/>);
        
        expect ( screen.getByText("Cargando ..."));
        expect ( screen.getByText("One Punch"));

     });

     test('Debe de mostrar items cuando se cargan las imagenes', () => { 
        const gifs=[{
            id:"abc",
            title:"Nicolas",
            url:"https://slkfhkasf.com"
        },
        {
            id:"rena",
            title:"NicolasP",
            url:"https://slkfhsskasf.com"
        }
    ]

       
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        });


        render (<GifGrid categoria= { category }/>);
        expect (screen.getAllByRole('img').length).toBe(2);

      });






 })