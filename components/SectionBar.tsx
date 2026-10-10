import Link from "next/link";

/* Section header bar: label left, optional text link right, 1px Stone hairline below. */
export function SectionBar({
  label,
  href,
  action,
}: {
  label: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-stone px-5 py-5 t-body">
      <h2 className="font-normal">{label}</h2>
      {href && action && (
        <Link href={href} className="t-link">
          {action}
        </Link>
      )}
    </div>
  );
}
