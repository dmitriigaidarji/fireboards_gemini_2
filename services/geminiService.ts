
import { GoogleGenAI } from "@google/genai";

export async function getBoardRecommendation(weight: number, skill: string, waves: string) {
  // Fixed: Initialize GoogleGenAI right before making the call to ensure the latest API key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `I am a surfer who weighs ${weight}kg, my skill level is ${skill}, and I usually surf ${waves} waves. What kind of board from the "Fire" collection (Performance Pro, Island Cruiser, Hybrid Heat) would suit me best? Provide a short, enthusiastic response.`,
      config: {
        temperature: 0.7,
        // Fixed: Removed maxOutputTokens to avoid potential empty responses when thinking is used without thinkingBudget
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "The ocean is calling! Based on your profile, a Hybrid Heat mid-length or a Performance Pro shortboard would be a great match for Siargao's dynamic waves.";
  }
}
