import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';
import  PropTypes  from 'prop-types';


export const GifGrid = ({categoria}) => {

const {images,isLoading} =useFetchGifs( categoria);


  return (

<>
<h2>{categoria}</h2>
{
  isLoading && (<p>Cargando ...</p> )
}


<div className='card-grid'>
{images.map(image =>
            (
               <GifItem key={image.id} {...image}
               />
               
                    
               
            )
            )
            }

</div>


</>
    
  )
}

GifGrid.propTypes = {
  categoria : PropTypes.string.isRequired,
}
