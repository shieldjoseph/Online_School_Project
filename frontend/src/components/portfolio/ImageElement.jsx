import React from 'react'

export default function ImageElement({ image, type, id }) {
  return (
    <>
        <li className={`item-thumbs col-lg-3 col-md-3 col-sm-6 ${type}`} data-id={id} data-type={type}  >
			<a className="hover-wrap fancybox" data-fancybox-group="gallery" title={type} href={image}  >
                <span className="overlay-img"></span>
                <span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code"></i></span>
            </a>
            <img src={image} alt="" />
        </li>
    </>
  )
}