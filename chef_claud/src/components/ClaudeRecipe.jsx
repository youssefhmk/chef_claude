import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
  return (
    <section
      className="
        mt-8
        rounded-xl
        bg-amber-50
        border
        border-amber-200
        p-6
        shadow-md
      "
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        👨‍🍳 Chef Claude Recommends
      </h2>

      <article
        className="
          prose
          prose-amber
          max-w-none
          text-gray-700
          leading-7
        "
      >
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </article>
    </section>
  )
}