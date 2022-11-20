import React from 'react';
import './alojamiento.css';
//Iconos
import { FiShare2 } from 'react-icons/fi';
import { AiTwotoneHeart } from 'react-icons/ai';
import '../../../node_modules/photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export const BloqueImagenes = (props) => {
    //console.log(props?.products);
    //console.log(images);
    const images = props?.products?.images

  return (
    <>
      <div className="alojamiento__imagenes">
        <div className="imagenes__botones">
          <FiShare2 className="share" />
          <AiTwotoneHeart className="like" />
        </div>
        <div className="imagenes__container">
          <div className="imagenes__imagen-secundaria">
            {images?.map((image, i = 0) => (
              <div key={image.id} className={`imagen${i}`}>
                <img src={image.url} />
              </div>
            ))}
            <p>Ver mas</p>
          </div>
        </div>
      </div>
    </>
  );
}
