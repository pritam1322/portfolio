import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full -mt-8 flex items-center justify-center min-h-screen ">
            <div className="text-center">
                <div className="mb-4 flex justify-center ">
                    <Image
                        src="/profile1.jpg"
                        alt="profile pic"
                        width={128}
                        height={128}
                        className="rounded-full shadow-md shadow-white/75 border-4 border-white hover:scale-105"
                    />
                </div>

                <div className="text-8xl font-serif uppercase mb-4 hover:text-gray-200">
                    Pritam Jathar
                </div>
                
                <div className="mb-4 text-3xl text-gray-400 border border-dashed w-1/2 mx-auto hover:text-white hover:border-gray-200 hover:scale-95">
                    Software Developer
                </div>

                <div className="flex gap-4 justify-center mt-4">
                    <Link
                        href={'https://www.linkedin.com/in/pritam-jathar-25a08417a/'} 
                        className="flex items-center justify-center bg-white rounded-full p-2 shadow-lg transition-transform transform hover:scale-110">
                        <FontAwesomeIcon icon={faLinkedin} className="text-black h-6 w-6"/>
                    </Link>

                    <Link 
                        href={'https://x.com/Pritamjathar94'} 
                        className="flex items-center justify-center bg-white rounded-full p-2 shadow-lg transition-transform transform hover:scale-110">
                        <FontAwesomeIcon icon={faTwitter} className="text-black h-6 w-6" />
                    </Link>

                    <Link 
                        href={'https://github.com/pritam1322'}  
                        className="flex items-center justify-center bg-white rounded-full p-2 shadow-lg transition-transform transform hover:scale-110">
                        <FontAwesomeIcon icon={faGithub} className="text-black h-6 w-6" />
                    </Link>

                    <Link 
                        href={'https://www.instagram.com/pritam.jathar07/'} 
                        className="flex items-center justify-center bg-white rounded-full p-2 shadow-lg transition-transform transform hover:scale-110">
                        <FontAwesomeIcon icon={faInstagram} className="text-black h-6 w-6" flip={"horizontal"} />
                    </Link>
                </div>

                <h1 className="mt-4">pritamjat98@gmail.com - 7020921132</h1>
                <div>
                    <Link href={'https://shorturl.at/jMrNs'} className="text-blue-500 hover:text-blue-700">
                        Resume
                    </Link>
                </div>
            </div>
        </header>
    );
}
