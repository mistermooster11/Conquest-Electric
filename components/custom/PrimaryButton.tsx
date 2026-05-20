import Link from "next/link";

interface PrimaryButtonProps {
  label: string;
  href: string;
  className?: string;
}

function ArrowRightIcon() {
  return <i className="caren-icon caren-icon-arrow-right" aria-hidden="true" />;
}

export default function PrimaryButton({ label, href, className = "" }: PrimaryButtonProps) {
  return (
    <Link href={href} className={`btn-primary ${className}`.trim()}>
      <span className="btn-icon-left"><ArrowRightIcon /></span>
      <span>{label}</span>
      <span className="btn-icon-right"><ArrowRightIcon /></span>
    </Link>
  );
}
