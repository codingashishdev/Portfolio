import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Image from "./components/Image/Image";
import Button from "./components/Button/Button";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import CertificationCard from "./components/CertificationCard/CertificationCard";

function App() {
    return (
        <>
            <div className="flex justify-center items-center flex-col mx-auto m-3">
                <div className="">
                    <Navbar />
                </div>
                <div className="flex items-center justify-center text-left m-5 p-8 bg-gradient-to-r from-gray-150 to-gray-100 rounded-2xl shadow-xl shadow-gray-400 max-w-4xl">
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <Image 
                                imageUrl={"public/pp.png"} 
                                className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                            />
                        </div>
                    </div>
                    <div className="ml-8 max-w-md">
                        <div className="mb-4">
                            <span className="text-4xl font-extrabold text-gray-800 block leading-tight">
                                Hey, I'm Ashish
                            </span>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mt-2 rounded-full"></div>
                        </div>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed">
                            Software Engineer and developer, who loves solving problems and building stuff for web and CLI
                        </p>
                        
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-start flex-col mx-auto my-auto m-3 max-w-180">
                <header className="text-xl m-1.5 font-bold border-b-2 w-full">
                    Skills
                </header>
                <div className="flex flex-wrap mt-2">
                    <Button varient={"black"} text={"Javascript"} className={'hover:transform hover:scale-110 transition-transform duration-200'}/>
                    <Button varient={"black"} text={"React.js"} className={'hover:transform hover:rotate-3 hover:scale-105 transition-transform duration-300'} />
                    <Button varient={"black"} text={"C++"} className={'hover:transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200'} />
                    <Button varient={"black"} text={"MongoDB"} className={'hover:transform hover:skew-x-3 hover:scale-105 transition-transform duration-250'} />
                    <Button varient={"black"} text={"NodeJs"} className={'hover:transform hover:rotate-2 hover:scale-110 transition-transform duration-300'} />
                    <Button varient={"black"} text={"Linux"} className={'hover:transform hover:-rotate-1 hover:translate-x-1 transition-transform duration-200'} />
                    <Button varient={"black"} text={"ExpressJS"} className={'hover:transform hover:scale-105 hover:translate-y-1 transition-transform duration-250'} />
                    <Button varient={"black"} text={"SQL"} className={'hover:transform hover:rotate-1 hover:scale-105 transition-transform duration-200'} />
                    <Button
                        varient={"black"}
                        text={"DSA"}
                        className={"w-[100px] hover:transform hover:scale-125 hover:-rotate-2 transition-transform duration-300"}
                    />
                </div>
            </div>

            <div className="flex justify-center items-start flex-col mx-auto m-10 max-w-180">
                <header className="text-xl m-1.5 font-bold border-b-2 w-full">
                    Education
                </header>
                <div className="flex flex-col mt-2">
                    <div className="flex">
                        <div>
                            <img
                                src="hngu.png"
                                alt=""
                                className="w-[70px] h-[70px] border-2 rounded-full p-3 border-gray-400"
                            />
                        </div>
                        <div className="m-2">
                            <div className="flex">
                                <p className="font-bold mr-10">
                                    Hemchandracharya North Gujarat University
                                </p>
                                <span className="font-medium">2021-2024</span>
                            </div>
                            <p className="font-light">
                                Bachelor of Computer Applications(BCA){" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <div>
                            <img
                                src="pu.jpg"
                                alt=""
                                className="w-[70px] h-[70px] border-2 rounded-full p-3 border-gray-400"
                            />
                        </div>
                        <div className="m-2">
                            <div className="flex">
                                <p className="font-bold mr-10">
                                    Parul University
                                </p>
                                <span className="font-medium ml-62">
                                    2021-2024
                                </span>
                            </div>
                            <p className="font-light">
                                Masters in Computer Applications(MCA){" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-start flex-col mx-auto m-10 max-w-180">
                <header className="text-xl m-1.5 font-bold border-b-2 w-full">
                    Awards & certifications
                </header>
                <div className="mt-2 flex space-x-1">
                    <CertificationCard
                        name="student expert"
                        issuedBy="postman"
                        date="Jan 2025"
                        imgageUrl="postman_expert.png"
                        credentials_link={
                            "https://api.badgr.io/public/assertions/tWfUVFgXSTyxDZIIlJy-9w"
                        }
                    />
                    <CertificationCard
                        name="IT Specialist - javascript"
                        issuedBy="Certiport"
                        date="May 17, 2025"
                        imgageUrl="it-js.png"
                        credentials_link={
                            "https://api.badgr.io/public/assertions/tWfUVFgXSTyxDZIIlJy-9w"
                        }
                    />
                </div>
            </div>


            <div className="flex justify-center items-start flex-col mx-auto m-10 max-w-180">
                <header className="text-xl m-1.5 font-bold border-b-2 w-full">
                    Projects
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-full">
                    <div>
                        <ProjectCard
                            projectpreview={"PJ-1.png"}
                            projectname={"Megablog"}
                            date={"Mar 25 - Apr 25"}
                            description={
                                "A full stack SPA blog website built using React and Appwrite Cloud"
                            }
                            technologies={[
                                "React.js",
                                "Appwrite",
                                "Redux Toolkit",
                            ]}
                            livelink={
                                "https://fancy-syrniki-8cdc6c.netlify.app/"
                            }
                            githublink={
                                "https://github.com/codingashishdev/MegaBlog"
                            }
                        />
                    </div>
                    <div>
                        <ProjectCard
                            projectpreview={"PJ-1.png"}
                            projectname={"Megablog"}
                            date={"Mar 25 to Apr 25"}
                            description={
                                "A full stack SPA blog website built using React and Appwrite Cloud"
                            }
                            technologies={[
                                "React.js",
                                "Appwrite",
                                "Redux Toolkit",
                            ]}
                            livelink={
                                "https://fancy-syrniki-8cdc6c.netlify.app/"
                            }
                            githublink={
                                "https://github.com/codingashishdev/MegaBlog"
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
export default App;