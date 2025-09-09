import React, { useState } from 'react';
import PhoneInput from './PhoneInput';
import sendLead from '../utils/sendLead';

type Props = {
  open: boolean;
  onClose: () => void;
  source?: string;
};

export default function UnifiedSignupModal({ open, onClose, source = 'unified-signup-modal' }: Props) {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phone.replace(/\D/g, '').length !== 10) return;
    setIsSubmitting(true);
    try {
      await sendLead({ parentName, childName, phone: `+7${phone}`, program, source });
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md rounded-lg bg-[var(--white)] text-[var(--black)] shadow-float">
        <div className="p-6 border-b border-[var(--gray-200)]">
          <h2 className="h2" id="signup-title">Запись</h2>
          <p className="caption text-[var(--gray-600)]">Оставьте контакты — перезвоним</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <input className="w-full rounded-md border border-[var(--gray-300)] px-4 py-3 bg-transparent" placeholder="Имя родителя" value={parentName} onChange={(e) => setParentName(e.target.value)} aria-label="Имя родителя" />
          <input className="w-full rounded-md border border-[var(--gray-300)] px-4 py-3 bg-transparent" placeholder="Имя ребенка" value={childName} onChange={(e) => setChildName(e.target.value)} aria-label="Имя ребенка" />
          <div className="rounded-md border border-[var(--gray-300)] bg-transparent">
            <PhoneInput value={phone} onChange={setPhone} />
          </div>
          <input className="w-full rounded-md border border-[var(--gray-300)] px-4 py-3 bg-transparent" placeholder="Программа" value={program} onChange={(e) => setProgram(e.target.value)} aria-label="Программа" />
          <button disabled={isSubmitting} className="button-text mt-2 h-12 rounded-md bg-[var(--primary)] text-[var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--white)]">
            {isSubmitting ? 'Отправка…' : 'Записаться'}
          </button>
        </form>
      </div>
    </div>
  );
}
