import HeroImages from '@/app/features/HeroImages/pages';

export default function HeroComponent () {
    return (
        <div className='text-center m-3 p-3 mt-16'>
            <div className='grid grid-flow-col'>
               <HeroImages />
            </div>
            <header className='font-semibold text-3xl mt-4 p-3 italic'>Find Your Dream Home with RoofScout</header>
            <p className='italic'><span className='hover:underline font-semibold'><a href="/login">Login</a></span> to get started...</p>
        </div>
    )
}