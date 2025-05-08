import { Card } from "../common/types";

/**
 * Usage card using Plain UI Text, Link Button, Badge, Spacer, and Divider components.
 * 
 * @returns 'Usage' Card object
 */
export const Usage = (): Card => {
  return {
    key: "usage",
    timeToLiveSeconds: 3600, // Cached for 1 hour
    components: [
      {
        componentContainer: {
          containerContent: [
            {
              componentRow: {
                rowMainContent: [
                  {
                    componentText: {
                      text: "Customer Name",
                      textSize: "S",
                      textColor: "MUTED",
                    },
                  },
                  {
                    componentText: {
                      text: "Cursor",
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentLinkButton: {
                      linkButtonLabel: "Edit ↗",
                      linkButtonUrl: "https://plain.com",
                    },
                  },
                ],
              },
            },
            {
              componentSpacer: {
                spacerSize: "M",
              },
            },
            {
              componentRow: {
                rowMainContent: [
                  {
                    componentText: {
                      textSize: "S",
                      textColor: "MUTED",
                      text: "Credits",
                    },
                  },
                  {
                    componentText: {
                      textSize: "M",
                      text: "Events Remaining",
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentBadge: {
                      badgeLabel: "593 of 1000",
                      badgeColor: "GREEN",
                    },
                  },
                ],
              },
            },
            {
              componentDivider: {
                dividerSpacingSize: "M",
              },
            },
            {
              componentRow: {
                rowMainContent: [
                  {
                    componentText: {
                      text: "Customer ID",
                      textSize: "S",
                      textColor: "MUTED",
                    },
                  },
                  {
                    componentText: {
                      text: "08052025",
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentCopyButton: {
                      copyButtonValue: "08052025",
                      copyButtonTooltipLabel: "Copy Customer ID",
                    },
                  },
                ],
              },
            },
            {
              componentSpacer: {
                spacerSize: "M",
              },
            },
            {
              componentText: {
                text: "Contract Size",
                textSize: "S",
                textColor: "MUTED",
              },
            },
            {
              componentText: {
                textSize: "L",
                textColor: "SUCCESS",
                text: "$123,456",
              },
            },
            {
              componentSpacer: {
                spacerSize: "M",
              },
            },
            {
              componentText: {
                text: "Team Name",
                textSize: "S",
                textColor: "MUTED",
              },
            },
            {
              componentText: {
                text: "Support Engineering",
              },
            },
            {
              componentSpacer: {
                spacerSize: "M",
              },
            },
            {
              componentText: {
                text: "Roles",
                textSize: "S",
                textColor: "MUTED",
              },
            },
            {
              componentText: {
                text: "Admin",
              },
            },
          ],
        },
      },
    ],
  };
};
