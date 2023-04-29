import React from 'react';
import Container from '../../elements/Container';
import Assiete from '../../../medias/images/background/Assiette-burger-frites.png';
import Burger from '../../../medias/images/background/Burger.png';
import Sauce from '../../../medias/images/background/Sauce-pimente.png';
import Heading from '../../elements/DisplayTitles.js/Heading';


export default function Booking() {
    return (
        <Container>
            <div className='relative mb-20'>
                <img src={Burger} alt="un hamburger" className='absolute -top-20 -left-36 z-10' />
                <img src={Sauce} alt="une sauce pimentée" className='absolute bottom-0 left-0' />
                <img src={Assiete} alt="une assiette hamburger avec des frites" className='absolute -bottom-52 -right-96' />
                <div className='max-w-3xl mx-auto px-10 py-20'>
                    <Heading  variant="h3" alignement="center">
                        Réservation
                    </Heading>
                    <Heading alignement="center" theme="secondary" className="mt-5">
                        Réservez votre table
                    </Heading>
                    <form className='grid grid-cols-2 gap-x-7 gap-y-6 mt-20'>
                        <div className='h-20'>
                            <label htmlFor='name'>Nom</label>
                            <input type="text" id="name" name="name" autoComplete='off' className='focus:ring-primary focus:border block w-full border-gray-400 rounded-md p-5' placeholder='John doe'/>
                        </div>
                        <div className='h-20'>
                            <label htmlFor='email'>Email</label>
                            <input type="email" id="email" name="email" autoComplete='off' className='focus:ring-primary focus:border block w-full border-gray-400 rounded-md p-5' placeholder='john.doe@gmail.com'/>
                        </div>
                        <div className='h-20'>
                            <label htmlFor='time'>Date</label>
                            <input type="date" id="date" name="date" autoComplete='off' className='focus:ring-primary focus:border block w-full border-gray-400 rounded-md p-5'/>
                        </div>
                        <div className='h-20'>
                            <label htmlFor='time'>Heure</label>
                            <input type="time" id="time" name="time" autoComplete='off' className='focus:ring-primary focus:border block w-full border-gray-400 rounded-md p-5'/>
                        </div>
                        <div className='h-20'>
                            <label htmlFor='customer'>Nombre de personnes</label>
                            <input type="text" id="customer" name="customer" autoComplete='off' className='focus:ring-primary focus:border block w-full border-gray-400 rounded-md p-5' placeholder='5'/>
                        </div>
                        
                        <div className='h-20'>
                            <label htmlFor='sendBooking' className='invisible'>Réserver votre repas</label>
                            <input type="button" id="sendBooking" 
                                name="sendBooking" 
                                className='bg-red-primary hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest uppercase py-5 rounded-md first-letter cursor-pointer animate'
                                value="Réserver votre repas" />
                        </div>
                        
                    </form>
                </div>
            </div>
        </Container>
    )
}
