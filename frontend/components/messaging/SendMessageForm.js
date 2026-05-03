import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../lib/api';

export default function SendMessageForm({ recipientUsername, onSent }) {
  const [form, setForm] = useState({ subject: '', body: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await api.post('/messages', { recipientUsername, ...form });
      toast.success('Message sent!');
      setForm({ subject: '', body: '' });
      onSent?.();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send message');
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-slate-300 mb-1.5">Subject</label>
        <input
          type="text"
          className="input-field"
          placeholder="What's this about?"
          value={form.subject}
          onChange={e => setForm({ ...form, subject: e.target.value })}
          required
          maxLength={200}
        />
      </div>
      <div>
        <label className="block text-sm text-slate-300 mb-1.5">Message</label>
        <textarea
          className="input-field resize-none"
          rows={5}
          placeholder="Write your message..."
          value={form.body}
          onChange={e => setForm({ ...form, body: e.target.value })}
          required
          maxLength={5000}
        />
        <p className="text-xs text-slate-500 mt-1">{form.body.length}/5000</p>
      </div>
      <div className="flex justify-end gap-3">
        <button type="submit" disabled={sending} className="btn-primary text-sm">
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
