function Navbar() {
    return (
        <nav className="bg-white/95 backdrop-blur-sm shadow-xl w-[370px] h-[53px] shrink-0 rounded-[20px] border-2 border-gray-200/50 hover:shadow-2xl transition-all duration-300">
            <div className="container flex items-center justify-between pl-2 pr-2.5 h-full">
                {/* Left Section - Navigation */}
                <div className="flex items-center space-x-2">
                    <button className="p-2 hover:scale-110 rounded-full cursor-pointer transition-all duration-200 active:scale-95 group">
                        <img
                            src="home_navbar.png"
                            alt="Home"
                            className="w-8 h-8 group-hover:brightness-110 transition-all duration-200"
                        />
                    </button>
                    <button className="p-2 hover:scale-110 rounded-full cursor-pointer transition-all duration-200 active:scale-95 group">
                        <img
                            src="blog_navbar.png"
                            alt="Blog"
                            className="w-8 h-8 group-hover:brightness-110 transition-all duration-200"
                        />
                    </button>
                </div>

                {/* Separator with gradient */}
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-60"></div>

                {/* Right Section - Social Links */}
                <div className="flex items-center space-x-4">
                    <a
                        href="https://github.com/codingashishdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:bg-gray-900 hover:scale-110 rounded-full transition-all duration-300 active:scale-95 group relative overflow-hidden"
                    >
                        <img
                            src="github.svg"
                            alt="GitHub"
                            className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gray-900 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full -z-10"></div>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:bg-blue-600 hover:scale-110 rounded-full transition-all duration-300 active:scale-95 group relative overflow-hidden"
                    >
                        <img
                            src="linkedin.svg"
                            alt="LinkedIn"
                            className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full -z-10"></div>
                    </a>
                    <a
                        href="mailto:atankmember@gmail.com"
                        className="p-1.5 hover:bg-red-500 hover:scale-110 rounded-full transition-all duration-300 active:scale-95 group relative overflow-hidden"
                    >
                        <img 
                            src="gmail.svg"
                            alt="mail"
                            className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300"   
                        />
                        <div className="absolute inset-0 bg-red-500 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full -z-10"></div>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:bg-sky-500 hover:scale-110 rounded-full transition-all duration-300 active:scale-95 group relative overflow-hidden"
                    >
                        <img
                            src="twitter.svg"
                            alt="Twitter"
                            className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-sky-500 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full -z-10"></div>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
