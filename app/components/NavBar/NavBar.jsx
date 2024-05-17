import Image from 'next/image'

export default function Nav () {
    return (
        <nav className="navbar bg-base-100 fixed w-full flex top-0 left-0 justify-between bg-opacity-70 backdrop-blur-lg">
            <div className='flex-1'>
                <Image
                    src="/RoofScout_Reimagined.png"
                    width={70}
                    height={70}
                    alt="Roof Scout Logo"
                    className='rounded-lg p-1 m-1'
                /><h1 className='text-3xl font-extrabold'>
                    <span className='font-mono'>Roof</span>Scout
                </h1>
            </div>
            <button className='text-2xl btn btn-accent bg-opacity-50'>Login/Sign up</button>
        </nav>
    )
}