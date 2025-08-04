export function Home() {
    return (
        <div>
            <pre className="text-primary whitespace-pre-wrap text-xs sm:text-base">
{`
  ____ _     ___ ____ _  _ ____    ____ ____ _  _ ____ ____ ____ 
  |  | |     |__ |___ |\\/| |___    |__| |  | |\\/| |___ |__/ [__  
  |__| |     |___ |___ |  | |___    |  | |__| |  | |___ |  \\ ___] 
                                                                
`}
            </pre>
            <p>Welcome to my interactive CLI portfolio.</p>
            <p className="mt-2">Type '<span className="text-accent">help</span>' to see the list of available commands.</p>
        </div>
    );
}
