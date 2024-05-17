import { FaLinkedin, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import Image from 'next/image'

export default function Footer () {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content bg-opacity-55 backdrop-blur-lg">
            <aside>
                <div>
                    <Image 
                    src="/RoofScout_Reimagined.png" 
                    alt="RoofScout Logo" 
                    width={50} 
                    height={50}/>
                </div>
                <p className="font-extrabold">RoofScout Real Estate Ltd.<br/>Finding you the perfect Home <br />Copyright &copy; 2024</p>
                </aside> 
                <nav>
                <h6 className="footer-title">Social</h6> 
                <div className="grid grid-flow-col gap-4">
                    <a className="text-center font-bold" href="https://github.com/joe-boadi" title="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current font-bold"> <FaSquareFacebook /></svg>Facebook </a>
                    <a className="text-center font-bold" href="https://www.linkedin.com/in/kwadjo-boadi-mantey-43b670271/" title="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current font-bold"> <FaLinkedin /> </svg> LinkedIn</a>
                    <a className="text-center font-bold" href="https://www.x.com/joeboadiDev_" title="X/Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current font-bold"> <FaSquareXTwitter />  </svg> X/Twitter</a>
                </div>
            </nav>
      </footer>
    )
}
