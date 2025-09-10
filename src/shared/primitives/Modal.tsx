import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = React.PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  labelledBy?: string; // id of title element
}>;

function getModalRoot() {
  if (typeof document === 'undefined') return null;
  return document.getElementById('modal-root');
}

const focusableSel = [
  'a[href]','area[href]','button:not([disabled])','input:not([disabled])',
  'select:not([disabled])','textarea:not([disabled])','[tabindex]:not([tabindex="-1"])'
].join(',');

const Modal: React.FC<Props> = ({ open, onClose, labelledBy, children }) => {
  const root = getModalRoot();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !containerRef.current) return;
    const el = containerRef.current;
    const focusables = Array.from(el.querySelectorAll<HTMLElement>(focusableSel));
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || focusables.length === 0) return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open || !root) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-[color-mix(in_oklab,var(--black)_60%,transparent)] backdrop-blur-sm flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={containerRef}
        className="w-full max-w-2xl rounded-lg bg-[var(--white)] text-[var(--black)] shadow-float p-6"
      >
        {children}
      </div>
    </div>,
    root
  );
};

export default Modal;

