import React from 'react';
import './alojamiento.css';
//Iconos
import { FiShare2 } from 'react-icons/fi';
import { AiTwotoneHeart } from 'react-icons/ai';
import '../../../node_modules/photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export const BloqueImagenes = (props) => {
    //console.log(props?.products);
    const images = props?.products?.images
    //console.log(images[0]);

  return (
    <>
      <div className="alojamiento__imagenes">
        <div className="imagenes__botones">
          <FiShare2 className="share" />
          <AiTwotoneHeart className="like" />
        </div>
        <div className="imagenes__container">
        <div className="imagenes__imagen-secundaria">
          <Gallery>
            {images?.map((image, i = 0) => (
              <div key={image.id} className={`imagen${i}`}>
                <Item 
                original={image.url} 
                width="1024" 
                height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={image.url} />
                  )}
                </Item>
              </div>
            ))}
          <Item>
          {({ref, open})=>(
            <p ref={ref} onClick={open}>Ver mas</p>

          )}

          </Item>
          </Gallery>
        </div>
      </div>
      </div>
    </>
  );
}

export const Test = (props) => {
  const images = props?.products?.images
  return (
    <>
      
      {/*<Gallery>
        <Item
          original="https://placekitten.com/1024/768?image=1"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="https://placekitten.com/80/60?image=1"
            />
          )}
        </Item>
        <Item
          original="https://placekitten.com/1024/768?image=2"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="https://placekitten.com/80/60?image=2"
            />
          )}
        </Item>
          </Gallery>*/}
    </>
  );
}

