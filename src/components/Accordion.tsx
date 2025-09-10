import React, { useState } from 'react';

type Item = { id: string; title: string; content: React.ReactNode };

type Props = { items: Item[] };

const Accordion: React.FC<Props> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="w-full divide-y divide-[var(--gray-200)] rounded-lg border border-[var(--gray-200)] bg-[var(--white)]">
      {items.map((it) => {
        const open = openId === it.id;
        return (
          <div key={it.id}>
            <button
              className="w-full text-left p-4 flex items-center justify-between hover:bg-[var(--gray-50)]"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : it.id)}
            >
              <span className="button-text">{it.title}</span>
              <span className="ml-3 select-none">{open ? '−' : '+'}</span>
            </button>
            <div className="overflow-hidden transition-[max-height] duration-300 ease-out" style={{ maxHeight: open ? 400 : 0 }}>
              <div className="p-4 pt-0 body text-[var(--gray-700)]">{it.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

