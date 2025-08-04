export function About() {
    return (
        <div>
            <h2 className="text-xl font-bold text-accent mb-2">About Me</h2>
            <p>I am a passionate software engineer with a knack for creating beautiful, performant, and accessible user experiences. I love working with modern web technologies and building cool things on the internet.</p>
            <br/>
            <h3 className="text-lg font-bold text-accent mb-2">Skills</h3>
            <ul className="list-disc list-inside space-y-1">
                <li><span className="font-bold text-primary">Languages:</span> TypeScript, JavaScript, Python, HTML, CSS</li>
                <li><span className="font-bold text-primary">Frameworks:</span> Next.js, React, Tailwind CSS, Node.js</li>
                <li><span className="font-bold text-primary">Tools:</span> Git, Docker, Firebase, Vercel, Figma</li>
            </ul>
        </div>
    );
}
