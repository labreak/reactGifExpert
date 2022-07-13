import { useState } from 'react';
import { AddCategory, GifGrid } from './componets';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);


    }

    return (
        <>


            <h1>GifExpertApp</h1>

            <AddCategory

                onNewCategory={(value) => onAddCategory(value)}
            />



            {categories.map(categoria =>
            (
                <GifGrid
                    key={categoria}
                    categoria={categoria}
                />
            )
            )
            }




        </>
    )




}