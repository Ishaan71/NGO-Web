import { ArrowUpRight, FileText } from "lucide-react";

interface PublicationCardProps {
  title: string;
  description: string;
  category: string;
  year: string;
  href: string;
}

const PublicationCard = ({
  title,
  description,
  category,
  year,
  href,
}: PublicationCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-md">
      {/* Cover */}
      <div className="flex h-48 items-center justify-center bg-primary-light">
        <FileText
          size={48}
          strokeWidth={1.5}
          className="text-primary"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary-dark">
            {category}
          </span>

          <span className="text-xs text-text-muted">{year}</span>
        </div>

        <h3 className="mt-4 text-lg font-semibold leading-7 text-text">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-text-muted">
          {description}
        </p>

        <a
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          View resource
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
};

export default PublicationCard;