import { GridGif } from "./GridGif";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log(isLoading);

    return (
        <>
            <h3 className="card-grid">{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            

            <div>
                {
                    images.map( (image) => (
                        <GridGif 
                            key={image.id}
                            {...image}
                        />
                    ))
                }

            </div>
        </>
    )
}
