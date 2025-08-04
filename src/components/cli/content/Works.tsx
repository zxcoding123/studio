'use client';

import { Github, Link as LinkIcon } from 'lucide-react';
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const projects = [
    {
        title: "Project Alpha",
        description: "A cutting-edge e-commerce platform built with Next.js and Stripe, offering a seamless shopping experience.",
        tags: ["Next.js", "Stripe", "Tailwind CSS"],
        live: "https://www.google.com",
        repo: "https://github.com/google/generative-ai-docs",
        images: [
            "https://placehold.co/400x250.png",
            "https://placehold.co/400x250/ff0000/ffffff",
            "https://placehold.co/400x250/00ff00/000000",
        ],
        aiHint: "e-commerce website"
    },
    {
        title: "Project Beta",
        description: "A data visualization dashboard for tracking real-time analytics, powered by React and D3.js.",
        tags: ["React", "D3.js", "Firebase"],
        live: "https://www.google.com",
        repo: "https://github.com/google/generative-ai-docs",
        images: [
            "https://placehold.co/400x250.png",
            "https://placehold.co/400x250/0000ff/ffffff",
            "https://placehold.co/400x250/ffff00/000000",
        ],
        aiHint: "dashboard analytics"
    },
    {
        title: "Project Gamma",
        description: "A collaborative project management tool that helps teams stay organized and productive.",
        tags: ["React", "Node.js", "MongoDB"],
        live: "https://www.google.com",
        repo: "https://github.com/google/generative-ai-docs",
        images: [
            "https://placehold.co/400x250.png",
            "https://placehold.co/400x250/ff00ff/ffffff",
            "https://placehold.co/400x250/00ffff/000000",
        ],
        aiHint: "project management"
    }
];

export function Works() {
    return (
        <div className="px-4">
            <h2 className="text-xl font-bold text-blue-500 mb-4">My Works</h2>
            <div className="space-y-6">
                {projects.map(p => (
                    <div key={p.title} className="flex flex-col md:flex-row gap-4 border border-border p-4 rounded-md bg-secondary">
 <Carousel
 plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
 className="w-full md:w-1/3"
 >
 <CarouselContent>
                            {p.images.map((image, index) => (
 <CarouselItem key={index}>
 <Dialog>
 <DialogTrigger asChild>
 <img src={image} alt={`${p.title} - Image ${index + 1}`} className="rounded-md object-cover w-full h-auto cursor-pointer" />
 </DialogTrigger>
 <DialogContent className="max-w-screen-md">
 <img src={image} alt={`${p.title} - Image ${index + 1}`} className="object-contain w-full h-full" />
 </DialogContent>
 </Dialog>
 </CarouselItem>
                            ))}
 </CarouselContent>
                        </Carousel>
                        <div className="w-full md:w-2/3 flex flex-col">
                            <h3 className="font-bold text-lg text-primary">{p.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2 flex-grow">{p.description}</p>
                            <div className="flex gap-2 flex-wrap mb-3">
                                {p.tags.map(tag => <span key={tag} className="text-xs bg-background/50 px-2 py-1 rounded">{tag}</span>)}
                            </div>
                            <div className="flex gap-4 text-sm">
                                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500 transition-colors"><Github size={16} /> Repository</a>
                                <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500 transition-colors"><LinkIcon size={16} /> Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

