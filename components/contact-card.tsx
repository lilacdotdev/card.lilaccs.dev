"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialLinks } from "@/components/social-links";
import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto border-none shadow-none bg-none"
    >
      <Card className="border-none shadow-lg dark:shadow-purple-900/10 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm">
        <CardHeader className="relative pb-0">
          <div className="absolute top-4 right-4 z-10">
            <ThemeToggle />
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Avatar className="h-24 w-24 border-2 border-primary/20">
                <AvatarImage src="pfp.jpg"/>
                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-white text-2xl font-bold">
                  L
                </AvatarFallback>
              </Avatar>
            </motion.div>
            <CardTitle className="mt-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              LilacDotDev
            </CardTitle>
            <p className="text-muted-foreground text-center mt-1">
              Machine Learning Specialist
            </p>
            <p className="text-center text-sm mt-2 italic">
              Building intelligent systems that transform how we interact with technology
            </p>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <SocialLinks />
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">SKILLS</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["C", "C++", "C#", "JavaScript", "TypeScript", "Java", "Python"].map((lang) => (
                <motion.div
                  key={lang}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Badge
                    variant="outline"
                    className={cn(
                      "py-1 border-purple-200/20 dark:border-purple-700/30",
                      "bg-gradient-to-r",
                      lang === "Python" ? "from-blue-500/10 to-yellow-500/10 hover:from-blue-500/20 hover:to-yellow-500/20" :
                      lang === "JavaScript" ? "from-yellow-500/10 to-yellow-600/10 hover:from-yellow-500/20 hover:to-yellow-600/20" :
                      lang === "TypeScript" ? "from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20" :
                      lang.startsWith("C") ? "from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20" :
                      "from-red-500/10 to-red-600/10 hover:from-red-500/20 hover:to-red-600/20"
                    )}
                  >
                    {lang}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center text-xs text-muted-foreground pt-2">
            LilacCS &sdot; Reach out!
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}