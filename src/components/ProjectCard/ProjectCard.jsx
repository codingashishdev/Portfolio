import React from "react";
import Button from "../Button/Button";

function ProjectCard({
    projectpreview,
    projectname,
    date,
    description,
    technologies,
    livelink,
    githublink,
}) {
    return (
        <div className="w-[361px] bg-white rounded-[20px] border border-gray-200 overflow-hidden shadow-lg flex flex-col transition text-shadow-gray-600">
            {/* Placeholder for Project Image - Assuming an image goes here */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <img 
                    src={projectpreview} 
                    alt={`${projectname} preview`} 
                    className="object-contain w-100 h-[190px]"
                />
            </div>


            {/* Divider */}
            <hr className="border-black" />

            {/* Project Details */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Title and Date */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-black text-xl font-bold font-['Poppins']">
                        {projectname}
                    </h2>
                    <span className="text-black text-[14px] font-normal font-['Poppins']">
                        {date}
                    </span>
                </div>

                {/* Description */}
                <p className="text-black text-[14px] font-normal font-['Poppins'] mb-5 text-left">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech, index) => (
                        <Button key={index} text={tech} varient={'white'} className={`font-['Poppins']`}/>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                    <a
                        href={livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 py-2 bg-black rounded-2xl text-white text-lg font-normal font-['Poppins'] hover:bg-gray-800 transition-colors"
                    >
                        {/* Placeholder for Live Icon */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path></svg>
                        Live
                    </a>
                    <a
                        href={githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 py-2 bg-black rounded-2xl text-white text-lg font-normal font-['Poppins'] hover:bg-gray-800 transition-colors"
                    >
                        {/* GitHub Icon */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
