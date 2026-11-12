import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqListProps {
  items: FaqItem[];
}

export default function FaqList({ items }: FaqListProps) {
  return (
    <div className="space-y-4 max-w-4xl">
      {items.map((item, index) => (
        <details
          key={index}
          className="group rounded-xl border border-slate-800 bg-ink-800 p-5 transition-all open:border-slate-700 open:shadow-xs"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-white text-base sm:text-lg list-none focus:outline-hidden">
            <span>{item.q}</span>
            <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200">
              <ChevronDown className="w-5 h-5" />
            </span>
          </summary>
          <div className="mt-3 pt-3 border-t border-slate-800 text-sm sm:text-base text-slate-300 leading-relaxed">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
