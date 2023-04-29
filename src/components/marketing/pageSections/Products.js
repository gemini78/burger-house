import React from 'react'
import Container from '../../elements/Container'
import HeadingTitles from '../../elements/DisplayTitles.js/HeadingTitles'
import Heading from '../../elements/DisplayTitles.js/Heading'
import Button from '../../elements/Button';
import Product1 from '../../../medias/images/products/Product-1.jpg';
import Product2 from '../../../medias/images/products/Product-2.jpg';
import Product3 from '../../../medias/images/products/Product-3.jpg';

export default function Products() {
    return (
        <Container>
            <HeadingTitles>
                Toujours des délicieux burgers
            </HeadingTitles>
            <Heading theme="secondary" alignement="center" className="my-5">
                Choisissez et savourez
            </Heading>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint quasi repudiandae est ipsam dolore similique, voluptatem dolores, temporibus deserunt optio, fugit vitae omnis laboriosam aliquam repellendus vel officia ab.</p>

            <div className='grid grid-cols-3 gap-x-1 my-20 mb-20 mt-10'>

                <div className='w-full h-full'>

                    <div className='relative w-full h-72'>
                        <img src={Product1} alt="un hamburger" className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <Heading variant="h3" className="my-5"> lorem ipsum</Heading>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Button color="danger" className="font-secondary">Commander</Button>
                    </div>
                </div>
                <div className='w-full h-full'>

                    <div className='relative w-full h-72'>
                        <img src={Product2} alt="un hamburger" className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <Heading variant="h3" className="my-5"> lorem ipsum</Heading>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Button color="danger" className="font-secondary">Commander</Button>
                    </div>
                </div>
                <div className='w-full h-full'>

                    <div className='relative w-full h-72'>
                        <img src={Product3} alt="un hamburger" className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <Heading variant="h3" className="my-5"> lorem ipsum</Heading>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Button color="danger" className="font-secondary">Commander</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
