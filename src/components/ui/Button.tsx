import type { ReactNode, MouseEventHandler, AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'ghost' | 'nav';

interface ButtonBaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  target?: never;
  rel?: never;
}

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  nav: 'btn-nav',
};

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className,
  target,
  rel,
}: ButtonProps) {
  const classes = [variantClass[variant], className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
    >
      {children}
    </button>
  );
}
