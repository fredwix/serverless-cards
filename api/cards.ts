import * as R from "remeda";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Components } from "../components";

/**
 * API handler for /api/cards 
 * 
 * This endpoint supports:
 * 
 * POST /api/cards
 *    → Returns a list of all cards specified in the cardKeys array.
 * 
 * The handler dynamically builds cards response on each request,
 * that is used by Plain to display Customer Customer Cards.
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

  // Map over provided keys and build customer card response
  const listOfCards = R.pipe(
    cardKeys,
    R.flatMap((key) => {
      const executeFn = Components[key as keyof typeof Components];
      return executeFn ? [executeFn()] : [];
    })
  );

  return res.json({ cards: listOfCards });
}
