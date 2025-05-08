import { Usage } from "./usage";
import { Basic } from "./basic";

/**
 * Map of all card components.
 * 
 * Each entry is a function that returns a fully constructed Card object.
 * This map is used by API handlers /api/cards to dynamically look up and returns card structure
 * 
 */
export const Components = {
    basic: Basic,
    usage: Usage,
};

