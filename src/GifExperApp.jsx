import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExperApp = () => {

    const [categories, setCategories] = useState(['One Punsh']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExperApp</h1>

            {/* input */}
            <AddCategory 
                onNewCategory={event => onAddCategory(event)}
            />

            {categories.map(category => (
                    <GifGrid 
                        key={category} category={category}
                    />
                ))
            }

        </>
    )
}
