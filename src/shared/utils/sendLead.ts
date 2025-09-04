// Unified sendLead function calling Netlify function

interface LeadPayload {
  name?: string;
  parentName?: string;
  childName?: string;
  phone: string;
  age?: string;
  program?: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  source?: string;
  hp?: string; // honeypot
  text?: string;
}

function getFormType(source?: string) {
  switch ((source || '').toLowerCase()) {
    case 'hero-modal':
    case 'lead-form':
      return 'Заявка с лид-формы';
    case 'signup-modal':
      return 'Заявка на запись (модал)';
    case 'unified-signup-modal':
      return 'Единая форма записи (модал)';
    case 'quiz-form':
      return 'Ответы на квиз';
    case 'question-modal':
      return 'Вопрос из модала';
    default:
      return 'Сообщение с сайта';
  }
}

export default async function sendLead(data: LeadPayload) {
  const lines: string[] = [];
  const typeLabel = getFormType(data.source);
  lines.push(`<b>${typeLabel}</b>`);

  const displayName = data.parentName || data.name;
  if (displayName) lines.push(`Имя: ${escapeHtml(displayName)}`);
  if (data.childName) lines.push(`Ребенок: ${escapeHtml(data.childName)}`);
  if (data.age) lines.push(`Возраст: ${escapeHtml(data.age)}`);
  if ((data.source || '').toLowerCase() !== 'quiz-form' && data.program) {
    lines.push(`Программа: ${escapeHtml(data.program)}`);
  }
  lines.push(`Телефон: ${data.phone ? escapeHtml(data.phone) : '—'}`);
  if (data.preferredDate) lines.push(`Дата: ${escapeHtml(data.preferredDate)}`);
  if (data.preferredTime) lines.push(`Время: ${escapeHtml(data.preferredTime)}`);
  if (data.message) lines.push(`Сообщение: ${escapeMultiline(data.message)}`);

  const payload = { ...data, text: lines.join('\n') };

  try {
    const res = await fetch('/.netlify/functions/notify-telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => ({}));
    return Boolean(json?.ok);
  } catch (e) {
    console.error('sendLead error:', e);
    return false;
  }
}

function escapeHtml(s: string) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c] || c));
}

function escapeMultiline(s: string) {
  return escapeHtml(s).replace(/\r?\n/g, '\n');
}

