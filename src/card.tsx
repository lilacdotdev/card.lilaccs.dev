export default function Card() {
    return (
        <>
            <div className="bg-slate-800 flex justify-center items-center w-full h-full">
                <section className="container flex-col rounded-lg justify-center content-center
                 bg-white text-blue-950 w-1/2 h-3/4 p-5">
                    <div className="flex gap-6 justify-center items-center content-center">
                        <div className="bg-red-600 rounded-full w-20 h-20"></div>
                        <h1>LilacDotDev</h1>
                    </div>  
                    <div className="flex justify-center content-center gap-5">
                        <h3>Software Developer</h3>
                        <h3>•</h3>
                        <h3>Open to Work</h3>
                    </div>
                    <div className="flex gap-8 justify-center content-center">
                        <div className="h-full flex-1 flex-grow bg-blue-300">
                            <h2>Contact</h2>
                            <ul className="list-disc list-inside">
                                <li>Email: <a href="mailto:talk@lilaccs.dev">talk@lilaccs.dev</a></li>
                                <li>Github: <a href="https://github.com/lilacdotdev">@lilacdotdev</a></li>
                                <li>Youtube: <a href="insert yt here">@lilaccsdev</a></li>
                                <li>Discord: <a href="insert disc here">@lilacdotdev</a></li>
                            </ul>
                        </div>
                        <div className="h-full flex-1 flex-grow bg-blue-500">
                            <h2>Employment</h2>
                            <ul className="list-disc list-inside">
                                <li>Education: B.S. Computer Science, Florida Int'l Univeristy</li>
                                <li>Work Experience: IT Ops Intern @ City of Coconut Creek, 10/24 - 5/25</li>
                                <li>Projects: <a href="blog here">LilacBlogs/Projects</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}