import * as R from "remeda";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Components } from "../components";

/**
 * API handler to serve card JSON objects.
 * 
 * This endpoint supports two modes:
 * 
 * 1. GET /api/cards
 *    → Returns a list of all available card objects by executing 
 * 
 * 2. GET /api/cards?type={cardType}
 *    → Returns a single card object matching the provided type.
 * 
 * The handler dynamically builds card on each request,
 * disables caching to always deliver fresh content,
 * and ensures the response shape is consistent for both single and multiple cards.
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Disable Vercel's edge cache to ensure fresh data on every request
  res.setHeader("Cache-Control", "no-cache");

  const { type } = req.query;

  // If no 'type' parameter is provided, return all available cards.
  if (R.isNullish(type)) {
    // We execute each card function in Components to build and return the full card JSON objects.
    const listOfCards = Object.values(Components).map((execute) => execute());
    return res.json({ cards: listOfCards });
  }

  // If a 'type' parameter is provided, attempt to retrieve and execute the matching card generator.
  // Use null fallback to avoid passing undefined into the response.
  const card = Components[type as keyof typeof Components]?.() ?? null;

  // If no matching card is found, return a 404 error with a clear message.
  if (R.isNullish(card)) {
    return res.status(404).json({ error: `Card type '${type}' not found` });
  }

  // Return the selected card in the expected response format.
  return res.json({
    cards: [card],
  });
}
