import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/componets";

describe('Pruebas en <GifItem/>', () => {

    const title = "Hola Soy Nicolas";
    const url="https://nico-test.com/lii.jpg";
  
  
    test('Debe hacer match con el snapshot', () => {
  
      const { container } = render(<GifItem title={title} url={url}/>)
     
      expect(container).toMatchSnapshot();
  
    });
  
    


    test('Debe mostrar imagen con url y alt indicado', () => {
  
      render(<GifItem title={title} url={url} />)
      expect(screen.getByRole('img').src).toEqual(url);
      expect(screen.getByRole('img').alt).toEqual(title);

      const {src,alt} =screen.getByRole('img');
      expect(src).toBe(url)
      expect(alt).toBe(title)
     
      
  
    });

    test('debe de mostrar el titulo en el componente', () => {

      render(<GifItem title={title} url={url} />)

      expect(screen.getByText(title)).toBeTruthy();

      })
 
  
  });