import { FlickeringGrid } from "@/components/magicui/flickering-grid";
// import { Particles } from "@/components/magicui/particles";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function DesktopSite(){
    return (
    <>
    {/* INFOGRID */}
    <div className="w-full h-full flex">
      <div className="px-20 m-auto grid grid-cols-5 grid-rows-5 gap-4">
          {/* 1 */}
          <div className="row-span-5">
            <Card className="w-full h-full opacity-95 bg-gradient-to-br from-zinc-800 to-zinc-900 border-0 text-white">
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
                <CardDescription>Knowledge in</CardDescription>
              </CardHeader>
              <CardContent>
                <h2>Languages</h2>
                <ul className="list-disc list-inside">
                  <li>Java</li>
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                </ul>
                <br/>
                <h2>Frameworks</h2>
                <ul className="list-disc list-inside">
                  <li>Express.js</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TailwindCSS</li>
                  <li>Vite</li>
                </ul>
                <br/>
                <h2>Libraries</h2>
                <ul className="list-disc list-inside">
                  <li>NumPy</li>
                  <li>Pandas</li>
                  <li>PyTorch</li>
                  <li>MatPlotLib</li>
                  <li>Seaborn</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 2 */}
          <div className="col-span-2 row-span-2">
            <Card className="w-full h-full opacity-95 bg-gradient-to-br from-zinc-800 to-zinc-900 border-0 text-white">
              <CardHeader>
                <CardTitle>Hi! My Name is Lilac!</CardTitle>
                <CardDescription>
                  I'm a Software Developer and Machine Learning Specialist
                </CardDescription>
              </CardHeader>
              <CardContent>I write algorithms that help projects grow.</CardContent>
              <CardFooter>
                <div className="w-full flex justify-between">
                  <div className="gap-8">
                    <Button variant={"default"}>Contact</Button>
                    <Button variant={"secondary"}>See More</Button>
                  </div>
                  
                  <div>
                    <h3>o Open to work.</h3>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* 3 */}
          <div className="row-span-3 col-start-2 row-start-3">
            <Card className="w-full h-full opacity-95 bg-gradient-to-br from-zinc-800 to-zinc-900 border-0 text-white">
              <CardHeader>
                <CardTitle>Education</CardTitle>
                {/* <CardDescription>
                  Qualifications
                </CardDescription> */}
              </CardHeader>
              <CardContent>
                B.S. Computer Science
                Florida Int'l University
                2022-2025
              </CardContent>
              SEPARATION INSERT HERE
              <CardHeader>
                <CardTitle>Experience</CardTitle>
                {/* <CardDescription>Qualifications</CardDescription> */}
              </CardHeader>
              <CardContent>
                IT Operations Intern
                City of Coconut Creek
                2024-2025
              </CardContent>
            </Card>
          </div>

          {/* 4 */}
          <div className="row-span-3 col-start-3 row-start-3">
            <Card className="w-full h-full opacity-95 bg-gradient-to-br from-zinc-800 to-zinc-900 border-0 text-white">
              
            </Card>
          </div>

          {/* 5 */}
          <div className="row-span-3 col-start-4 row-start-1 bg-white rounded-2xl">
            <div className="flex justify-center items-center w-full h-full">
              Image Placeholder
            </div>
          </div>

          {/* 6 */}
          <div className="col-span-2 row-span-2 col-start-4 row-start-4">
            <Card className="w-full h-full opacity-95 bg-gradient-to-br from-zinc-800 to-zinc-900 border-0 text-white">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>See my work!</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>Terminal Site</li>
                  <li>Prez Party</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 7 */}
          <div className="row-span-2 col-start-5 row-start-2 ">
            <Card className="w-full h-full opacity-95 bg-gradient-to-br from-zinc-800 to-zinc-900 border-0 text-white">
              <CardHeader>
                <CardTitle>Tools</CardTitle>
                <CardDescription>Applications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>VS Code</li>
                  <li>Github/Git</li>
                  <li>Godot</li>

                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 8 */}
          <div className="col-start-5 row-start-1">
            <Card className="w-full h-full flex justify-center opacity-95 bg-gradient-to-br from-zinc-800 to-zinc-900 border-0 text-white">
              <div className="mx-5 flex content-center items-center">
                <div className="flex content-center">
                  <Avatar>
                    <AvatarImage src="avatar.jpg" />
                  </Avatar>
                </div>
                <CardHeader className="w-full h-full">
                  <CardTitle>LilacDotDev</CardTitle>
                  <CardDescription>@LilacDotDev</CardDescription>
                </CardHeader>
                <div className="flex w-full h-full justify-end items-center">
                  <Button>Socials</Button>
                </div>
              </div>
              
            </Card>
          </div>
      </div>
    </div> 
      
      {/* BACKGROUND GRAPHIC */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black">
        <FlickeringGrid
          className="relative inset-0 z-0 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
          squareSize={10}
          gridGap={6}
          color="#ffffff"
          maxOpacity={0.5}
          flickerChance={0.2}/>
      </div>
    </>
  );
}