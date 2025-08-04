interface NotFoundProps {
    command: string;
}

export function NotFound({ command }: NotFoundProps) {
    return (
        <div>
            <p>
                <span className="text-destructive">command not found:</span> {command}
            </p>
            <p>Type '<span className="text-blue-500">help</span>' to see the list of available commands.</p>
        </div>
    );
}
