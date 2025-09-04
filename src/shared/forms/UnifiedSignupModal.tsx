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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="w-full max-w-md rounded-lg bg-[var(--white)] text-[var(--black)] shadow-[var(--shadow-float)]">
        <div className="p-6 border-b border-[var(--gray-200)]">
          <h2 className="h2">Запись</h2>
          <p className="caption text-[var(--gray-600)]">Оставьте контакты — перезвоним</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <input className="w-full rounded-md border border-[var(--gray-300)] px-4 py-3 bg-transparent" placeholder="Имя родителя" value={parentName} onChange={(e) => setParentName(e.target.value)} />
          <input className="w-full rounded-md border border-[var(--gray-300)] px-4 py-3 bg-transparent" placeholder="Имя ребенка" value={childName} onChange={(e) => setChildName(e.target.value)} />
          <div className="rounded-md border border-[var(--gray-300)] bg-transparent">
            <PhoneInput value={phone} onChange={setPhone} />
          </div>
          <input className="w-full rounded-md border border-[var(--gray-300)] px-4 py-3 bg-transparent" placeholder="Программа" value={program} onChange={(e) => setProgram(e.target.value)} />
          <button disabled={isSubmitting} className="button-text mt-2 h-12 rounded-md bg-[var(--primary)] text-[var(--white)]">
            {isSubmitting ? 'Отправка…' : 'Записаться'}
          </button>
        </form>
      </div>
    </div>
  );
}

