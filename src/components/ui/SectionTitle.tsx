interface SectionTitleProps {
  /** Supports plain text or text with `<muted>` markers that get rendered as `<span class="muted">` */
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

/**
 * Renders a section title with support for `<muted>...</muted>` rich-text markers.
 *
 * Example: `"Projects we're <muted>proud of</muted>"`
 * renders as: `Projects we're <span class="muted">proud of</span>`
 */
export default function SectionTitle({ text, as: Tag = 'h2', className }: SectionTitleProps) {
  const classes = ['section-title', className].filter(Boolean).join(' ');

  // Convert <muted>...</muted> markers into spans
  const html = text.replace(
    /<muted>(.*?)<\/muted>/g,
    '<span class="muted">$1</span>',
  );

  return <Tag className={classes} dangerouslySetInnerHTML={{ __html: html }} />;
}
