import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
    return (
        <>
            <section>
                <h2 className="recommends">Chef claude recommends:</h2>
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </section>
        </>
    )
}