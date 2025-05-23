"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { 
  Github, 
  AtSign, 
  Link as LinkIcon, 
  Youtube, 
  Linkedin,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github size={18} />,
    url: "https://github.com/lilacdotdev",
    color: "hover:text-[#333] dark:hover:text-white",
  },
  {
    name: "LeetCode",
    icon: <Code2 size={18} />,
    url: "https://leetcode.com/lilacdotdev",
    color: "hover:text-[#FFA116] dark:hover:text-[#FFA116]",
  },
  {
    name: "YouTube",
    icon: <Youtube size={18} />,
    url: "https://youtube.com/@lilaccsdev",
    color: "hover:text-[#FF0000] dark:hover:text-[#FF0000]",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={18} />,
    url: "https://linkedin.com/in/stablada",
    color: "hover:text-[#0077B5] dark:hover:text-[#0077B5]",
  },
  {
    name: "Website",
    icon: <LinkIcon size={18} />,
    url: "https://lilaccs.dev",
    color: "hover:text-blue-500 dark:hover:text-blue-400",
  },
  {
    name: "Email",
    icon: <AtSign size={18} />,
    url: "mailto:talk@lilaccs.dev",
    color: "hover:text-purple-500 dark:hover:text-purple-400",
    action: () => {
      navigator.clipboard.writeText("talk@lilaccs.dev");
      toast({
        title: "Email copied to clipboard",
        description: "talk@lilaccs.dev",
        duration: 3000,
      });
    }
  },
];

export function SocialLinks() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">CONNECT</h3>
      <div className="flex flex-wrap justify-center gap-2">
        <TooltipProvider>
          {socialLinks.map((link) => (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="icon"
                    variant="outline"
                    className={`rounded-full border-purple-200/20 dark:border-purple-700/30 ${link.color}`}
                    onClick={link.action}
                    asChild={!link.action}
                  >
                    {link.action ? (
                      <span>{link.icon}</span>
                    ) : (
                      <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        {link.icon}
                      </a>
                    )}
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
}