import Image from 'next/image';

export default function HeroComponent () {
    return (
        <div className='text-center m-3 p-3 mt-16'>
            <div className='w-full'>
                <Image
                    src="/family-love-real-estate-concept-banner.jpg"
                    alt='family-love-real-estate'
                    width={200}
                    height={200}
                    className='mx-auto w-4/5 sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5'
                />
            </div>
            
            <header className='font-semibold text-3xl mt-4 p-3 italic underline'>Find Your Dream Home with RoofScout</header>
        </div>
    )
}