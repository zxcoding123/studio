import { Github, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "Project Alpha",
        description: "A cutting-edge e-commerce platform built with Next.js and Stripe, offering a seamless shopping experience.",
        tags: ["Next.js", "Stripe", "Tailwind CSS"],
        live: "#",
        repo: "#",
        image: "https://placehold.co/400x250.png",
        aiHint: "e-commerce website"
    },
    {
        title: "Project Beta",
        description: "A data visualization dashboard for tracking real-time analytics, powered by React and D3.js.",
        tags: ["React", "D3.js", "Firebase"],
        live: "#",
        repo: "#",
        image: "https://placehold.co/400x250.png",
        aiHint: "dashboard analytics"
    },
    {
        title: "Project Gamma",
        description: "A collaborative project management tool that helps teams stay organized and productive.",
        tags: ["React", "Node.js", "MongoDB"],
        live: "#",
        repo: "#",
        image: "https://placehold.co/400x250.png",
        aiHint: "project management"
    }
];

export function Works() {
    return (
        <div>
            <h2 className="text-xl font-bold text-accent mb-4">My Works</h2>
            <div className="space-y-6">
                {projects.map(p => (
                    <div key={p.title} className="flex flex-col md:flex-row gap-4 border border-primary/20 p-4 rounded-md bg-secondary/20">
                        <div className="w-full md:w-1/3">
                             <Image src={p.image} alt={p.title} width={400} height={250} className="rounded-md object-cover w-full h-auto" data-ai-hint={p.aiHint} />
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col">
                            <h3 className="font-bold text-lg text-primary">{p.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2 flex-grow">{p.description}</p>
                            <div className="flex gap-2 flex-wrap mb-3">
                                {p.tags.map(tag => <span key={tag} className="text-xs bg-background/50 px-2 py-1 rounded">{tag}</span>)}
                            </div>
                            <div className="flex gap-4 text-sm">
                                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors"><Github size={16} /> Repository</a>
                                <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors"><LinkIcon size={16} /> Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
