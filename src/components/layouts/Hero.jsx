import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return(
        <>
            <section className="mt-16">
                <h1 className="text-center text-6xl uppercase font-serif pb-2">Projects</h1>
                <section className="flex grid grid-cols-2 my-2 mx-48 justify-center">


                    <div className="bg-gray-200 text-black max-w-[400px] rounded-lg min-h-[200px] m-2 ">
                        <div className="p-4 font-semibold hover:text-blue-700">LinkedIn-Profile page</div>
                        <div 
                            className="text-sm text-gray-600 pl-2">
                                • Cloned LinkedIn’s profile page with 60% feature parity using Next.js, integrating Google API and AWS S3.<br />
                                • Improved engagement by 35% with dynamic profile customization and real-time updates.
                        </div>
                        <div className="p-4 rounded-lg mt-5">
                            <Link href="https://linkedin-clone-eight-sigma.vercel.app">
                                <Image 
                                    src="/linkedInClone.png" 
                                    alt="linkedInClone" 
                                    width={200} 
                                    height={100} 
                                    layout="intrinsic" 
                                    className="cursor-pointer w-full h-full hover:scale-105 border border-gray-700"
                                />
                            </Link>
                        </div>
                    </div>



                    <div className="bg-gray-200 text-black max-w-[400px] rounded-lg min-h-[200px] m-2 ">
                        <div className="p-4 font-semibold hover:text-blue-700">Blogify</div>
                        <div 
                            className="text-sm text-gray-600 pl-2">
                                • Integrated Google login (80% effort reduction), enabled blog creation with Tailwind CSS (25% content increase), used Amazon S3 for images (30% efficiency boost).<br />
                                • Deployed on Vercel with 99.9% uptime for scalable hosting.
                        </div>
                        <div className="p-4 rounded-lg">
                            <Link href="https://blogs-one-kappa.vercel.app/">
                                <Image 
                                    src="/blogify.png" 
                                    alt="blogify" 
                                    width={200} 
                                    height={100} 
                                    layout="intrinsic" 
                                    className="cursor-pointer w-full h-full hover:scale-105 border border-gray-700"
                                />
                            </Link>
                        </div>
                    </div>

                </section>
            </section>
        </>
    );
}