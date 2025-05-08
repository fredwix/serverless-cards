import { z } from 'zod';

/**
 * This file defines Zod schemas and types 
 * for validating and typing card Plain UI components.
 * 
 * The schemas are used for runtime validation.
 * The types help with static typing and autocompletion.
 */

/* Enums for standard sizes and colors */
export const ComponentTextSize = z.enum(['S', 'M', 'L']);
export type ComponentTextSize = z.infer<typeof ComponentTextSize>;

export const ComponentTextColor = z.enum(['NORMAL', 'MUTED', 'SUCCESS', 'WARNING', 'ERROR']);
export type ComponentTextColor = z.infer<typeof ComponentTextColor>;

export const ComponentSpacerSize = z.enum(['XS', 'S', 'M', 'L', 'XL']);
export type ComponentSpacerSize = z.infer<typeof ComponentSpacerSize>;

export const ComponentDividerSpacingSize = z.enum(['XS', 'S', 'M', 'L', 'XL']);
export type ComponentDividerSpacingSize = z.infer<typeof ComponentDividerSpacingSize>;

export const ComponentBadgeColor = z.enum(['GREY', 'GREEN', 'YELLOW', 'RED', 'BLUE']);
export type ComponentBadgeColor = z.infer<typeof ComponentBadgeColor>;

/* All component schemas */
const Text = z.object({
  text: z.string().min(1).max(5000),
  textSize: ComponentTextSize.optional(),
  textColor: ComponentTextColor.optional(),
});

const Divider = z.object({
  dividerSpacingSize: ComponentDividerSpacingSize.optional(),
});

const LinkButton = z.object({
  linkButtonLabel: z.string().max(500),
  linkButtonUrl: z.string().url(),
});

const Spacer = z.object({
  spacerSize: ComponentSpacerSize,
});

const Badge = z.object({
  badgeLabel: z.string().max(500),
  badgeColor: ComponentBadgeColor.optional(),
});

const CopyButton = z.object({
  copyButtonValue: z.string().max(1000),
  copyButtonTooltipLabel: z.string().max(500).optional(),
});

/* Components that can be used in row */
const RowContent = z.object({
  componentText: Text.optional(),
  componentDivider: Divider.optional(),
  componentLinkButton: LinkButton.optional(),
  componentSpacer: Spacer.optional(),
  componentBadge: Badge.optional(),
  componentCopyButton: CopyButton.optional(),
});

/* Row component schema, both main and aside must have at least one component */
const Row = z.object({
  rowMainContent: z.array(RowContent).min(1),
  rowAsideContent: z.array(RowContent).min(1),
});

/* Components that can be used in container */
const ContainerContent = z.object({
  componentText: Text.optional(),
  componentDivider: Divider.optional(),
  componentLinkButton: LinkButton.optional(),
  componentSpacer: Spacer.optional(),
  componentBadge: Badge.optional(),
  componentCopyButton: CopyButton.optional(),
  componentRow: Row.optional(),
});

/* Container component schema, must have at least one component */
const Container = z.object({
  containerContent: z.array(ContainerContent).min(1),
});

/* Top-level component object */
export const Component = z.object({
  componentText: Text.optional(),
  componentDivider: Divider.optional(),
  componentLinkButton: LinkButton.optional(),
  componentSpacer: Spacer.optional(),
  componentBadge: Badge.optional(),
  componentCopyButton: CopyButton.optional(),
  componentRow: Row.optional(),
  componentContainer: Container.optional(),
});


export type Component = z.infer<typeof Component>;

/* Card schema describing a full card object */
export const Card = z.object({
  key: z.string(),
  timeToLiveSeconds: z.number().int().min(0).nullish().default(null), // optional expiration
  components: z.array(Component).nullable(), // can be null or an array of components
});


export type Card = z.infer<typeof Card>;
