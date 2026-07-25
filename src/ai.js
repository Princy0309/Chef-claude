import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use all of them. Format your response beautifully in markdown.
`;

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: `${SYSTEM_PROMPT}\n\nI have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        });

        return response.text;
    } catch (err) {
        console.error("Gemini API Error:", err.message);
        return `API Error: ${err.message}`;
    }
}