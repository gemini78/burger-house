import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel';
import '../../../css/carousel.css';
import Image1 from '../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg';
import Image2 from '../../../medias/images/products/Product-1.jpg';
import Image3 from '../../../medias/images/products/Product-2.jpg';
import Heading from '../../elements/DisplayTitles.js/Heading';


const Slide = ({ children, category, title, image, alt }) => {
    return (
        <div className='grid grid-cols-2 p-6 h-96'>
            <div className='mb-10 p-10'>
                <Heading variant="h4">
                    {category}
                </Heading>
                <Heading variant="h3" theme="secondary" className="mb-5">
                    {title}
                </Heading>
                <p className='tracking-wide text-lg leading-relaxed font-light text-gray-800'>
                    {children}
                </p>
            </div>
            <div className='relative w-full h-full'>
                <img src={image} alt={alt} className='bg-primary absolute top-0 left-0 w-full h-full object-cover object-bottom z-0' />

            </div>
        </div>
    )
}

export default function Event() {

    const items = [
        <Slide
            alt="description de l'image 1"
            image={Image1}
            category="évenement à venir"
            title="Vivez la demi-finale">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus aliquam maiores corrupti, similique quaerat dolorum eum quas. Quod sed harum facere ea? Similique autem nulla natus cum, veritatis laboriosam.
        </Slide>,
        <Slide
            alt="description de l'image 2"
            image={Image2}
            category="Nouveau burger"
            title="Découvrer le killer burger">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus aliquam maiores corrupti, similique quaerat dolorum eum quas. Quod sed harum facere ea? Similique autem nulla natus cum, veritatis laboriosam.
        </Slide>,

        <Slide
            alt="description de l'image 3"
            image={Image3}
            category="Le buger végétarien"
            title="Le végéburger arrive">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus aliquam maiores corrupti, similique quaerat dolorum eum quas. Quod sed harum facere ea? Similique autem nulla natus cum, veritatis laboriosam.
        </Slide>

    ];

    return (
        <Container>
            <div className='shadow-2xl mb-20'>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlay
                    infinite
                    autoPlayInterval={4000}
                    disableButtonsControls
                    animationType='fadeout'
                />
            </div>
        </Container>
    )
}
