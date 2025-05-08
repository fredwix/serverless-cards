import * as R from "remeda";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Components } from "../components";

/**
 * API handler to serve card JSON objects.
 * 
 * This endpoint supports:
 * 
 * 1. POST /api/cards
 *    → Returns a list of all cards specified in the cardKeys array.
 * 
 * The handler dynamically builds card on each request,
 * disables caching to always deliver fresh content,
 * and ensures the response shape is consistent for both single and multiple cards.
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Disable Vercel's edge cache to ensure fresh data on every request
  res.setHeader("Cache-Control", "no-cache");

  const { cardKeys } = req.body;

  // Only allow POST request for this endpoint
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  // Validate that cardKeys is an array of strings
  if (!R.isArray(cardKeys) || !cardKeys.every((k) => typeof k === 'string')) {
    return res.status(400).json({ error: 'Invalid cardKeys. Provide an array of strings.' });
  }

  // Map over provided keys, generate cards, and filter out invalid/missing ones
  const listOfCards = cardKeys
    .map((key) => Components[key as keyof typeof Components]?.())
    .filter(R.isTruthy); // removes undefined/null

  return res.json({ cards: listOfCards });
}
