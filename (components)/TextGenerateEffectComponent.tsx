"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `It is just somethong like loram ipsum for testing the effect somehow and try it, this is a cool effect or ?
`;

export function TextGenerateEffectComponent() {
  return <TextGenerateEffect words={words} />;
}
