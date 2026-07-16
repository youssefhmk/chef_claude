import Groq from "groq-sdk"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.

You don't need to use every ingredient they mention.

The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.

Format your response in markdown.
`

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
})

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const chatCompletion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: SYSTEM_PROMPT,
            },
            {
                role: "user",
                content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            },
        ],
        model: "llama-3.3-70b-versatile",
    })

    return chatCompletion.choices[0].message.content
}