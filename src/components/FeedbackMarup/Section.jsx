
export function Section({title, children}) {
    return (
        <div className="feedback">
            <h2 className="">{title}</h2>
            <div>{children}</div>
        </div>
    )
}