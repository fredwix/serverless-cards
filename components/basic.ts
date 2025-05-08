import { Card } from "../common/types";

/**
 * Basic card using Plain UI Text component.
 * 
 * @returns 'Basic' Card object
 */
export const Basic = (): Card => {
  return {
    key: "basic",
    timeToLiveSeconds: 3600,
    components: [
      {
        componentContainer: {
          containerContent: [
            {
              componentRow: {
                rowMainContent: [
                  {
                    componentText: {
                      text: "**Plain Card**",
                      textSize: "L",
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentText: {
                      text: "[✈️](https://plain.com)",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  };
};
