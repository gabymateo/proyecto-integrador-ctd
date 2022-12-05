import React from 'react';
import './alojamiento.css';
//React Slider
import Slider from "react-slick";

//React Photoswipe
import '../../../node_modules/photoswipe/dist/photoswipe.css'
import { Gallery, Item, useGallery } from 'react-photoswipe-gallery'
//Iconos
import { FiShare2 } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';

export const BloqueImagenes = (props) => {
  const images = props?.products?.images;
  
  return (
    <>
      <div className="alojamiento__imagenes">
        <div className="imagenes__botones">
          <FiShare2 className="share" />
          <AiFillHeart className="like" />
        </div>
        <div className="imagenes__container">
          <div className="imagenes__imagen-secundaria">
            <Gallery>
              {/* <GalleryContent/> */}
              {images?.map((image, i = 0) => (
                <div key={image.id} className={`imagen${i}`}>
                  <Item original={image.url} width="1024" height="768">
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={image.url} />
                    )}
                  </Item>
                </div>
              ))}
              <Item>
                {({ ref, open }) => (
                  <p ref={ref} onClick={open}>
                    Ver mas
                  </p>
                )}
              </Item>
            </Gallery>
          </div>
        </div>
      </div>
    </>
  );
}

// export const GalleryContent = (props) => {
//   const images = props?.products?.images;
//   console.log(props);
//   return (
//     <>
//     {images?.map((image, i = 0) => (
//                 <div key={image.id} className={`imagen${i}`}>
//                   <Item original={image.url} width="1024" height="768">
//                     {({ ref, open }) => (
//                       <img ref={ref} onClick={open} src={image.url} />
//                     )}
//                   </Item>
//                 </div>
//               ))}
//     </>
//   )
// }

export const BloqueImagenesRes = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = props?.products?.images
  return (
    <>
      <div className="alojamiento__imagenes-res">
        
          <div className="imagenes-res__botones">
            <FiShare2 className="share"/>
            <AiFillHeart className="like" />
          </div>
          <div className="imagenes-res__container">
            <Slider {...settings}>
              {images?.map((image, i=0)=>(
                <div key={image.id} className={`imagen${i}`}>
                  <img src={image.url} alt="" />
                </div>
              ))}
            </Slider>
          </div>
      </div>
    </>
  );
}

