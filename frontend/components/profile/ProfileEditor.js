import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../lib/auth';
import api from '../../lib/api';

export default function ProfileEditor() {
  const { user, setUser } = useAuth();
  const [form, setForm] = useState({
    name: '', bio: '', location: '', website: '',
    github: '', twitter: '', linkedin: '', avatar: '',
    skills: '',
  });
  const [experience, setExperience] = useState([]);
  const [projects, setProjects]     = useState([]);
  const [saving, setSaving] = useState(false);
  const [section, setSection] = useState('basic');

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || '', bio: user.bio || '',
        location: user.location || '', website: user.website || '',
        github: user.github || '', twitter: user.twitter || '',
        linkedin: user.linkedin || '', avatar: user.avatar || '',
        skills: user.skills?.join(', ') || '',
      });
      setExperience(user.experience || []);
      setProjects(user.projects || []);
    }
  }, [user]);

  const save = async () => {
    setSaving(true);
    try {
      const payload = {
        ...form,
        skills: form.skills.split(',').map(s => s.trim()).filter(Boolean),
        experience,
        projects,
      };
      const res = await api.put('/users/profile', payload);
      setUser(res.data.user);
      toast.success('Profile updated!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const addExperience = () => setExperience(prev => [...prev, { title: '', company: '', from: '', to: '', current: false, description: '' }]);
  const updateExp = (i, field, val) => setExperience(prev => prev.map((e, idx) => idx === i ? { ...e, [field]: val } : e));
  const removeExp = (i) => setExperience(prev => prev.filter((_, idx) => idx !== i));

  const addProject = () => setProjects(prev => [...prev, { name: '', description: '', link: '', github: '', tags: '' }]);
  const updateProject = (i, field, val) => setProjects(prev => prev.map((p, idx) => idx === i ? { ...p, [field]: val } : p));
  const removeProject = (i) => setProjects(prev => prev.filter((_, idx) => idx !== i));

  const sections = ['basic', 'social', 'experience', 'projects'];

  return (
    <div className="animate-fade-in">
      {/* Section tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {sections.map(s => (
          <button key={s} onClick={() => setSection(s)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
              section === s ? 'bg-accent/15 text-accent border border-accent/30' : 'bg-space-800 text-slate-400 hover:text-white border border-space-600'
            }`}
          >{s}</button>
        ))}
      </div>

      {/* Basic info */}
      {section === 'basic' && (
        <div className="space-y-5 glass rounded-xl p-6">
          <h2 className="font-display font-semibold text-white mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full Name" value={form.name} onChange={v => setForm({...form, name: v})} />
            <Field label="Avatar URL" value={form.avatar} onChange={v => setForm({...form, avatar: v})} placeholder="https://..." />
            <Field label="Location" value={form.location} onChange={v => setForm({...form, location: v})} placeholder="San Francisco, CA" />
            <Field label="Website" value={form.website} onChange={v => setForm({...form, website: v})} placeholder="https://yoursite.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Bio</label>
            <textarea
              className="input-field resize-none"
              rows={4}
              placeholder="Tell the world about yourself..."
              value={form.bio}
              onChange={e => setForm({...form, bio: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Skills (comma-separated)</label>
            <input className="input-field" placeholder="React, Node.js, TypeScript, AWS..." value={form.skills} onChange={e => setForm({...form, skills: e.target.value})} />
          </div>
        </div>
      )}

      {/* Social */}
      {section === 'social' && (
        <div className="glass rounded-xl p-6 space-y-4">
          <h2 className="font-display font-semibold text-white mb-4">Social Links</h2>
          <Field label="GitHub username" value={form.github} onChange={v => setForm({...form, github: v})} placeholder="octocat" />
          <Field label="LinkedIn username" value={form.linkedin} onChange={v => setForm({...form, linkedin: v})} placeholder="john-doe-123" />
          <Field label="Twitter handle" value={form.twitter} onChange={v => setForm({...form, twitter: v})} placeholder="johndoe" />
        </div>
      )}

      {/* Experience */}
      {section === 'experience' && (
        <div className="space-y-4">
          {experience.map((exp, i) => (
            <div key={i} className="glass rounded-xl p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-medium">Experience {i + 1}</h3>
                <button onClick={() => removeExp(i)} className="text-slate-500 hover:text-neon-pink text-sm">Remove</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Job Title" value={exp.title} onChange={v => updateExp(i, 'title', v)} />
                <Field label="Company" value={exp.company} onChange={v => updateExp(i, 'company', v)} />
                <Field label="Location" value={exp.location || ''} onChange={v => updateExp(i, 'location', v)} />
                <Field label="From (date)" type="date" value={exp.from?.split('T')[0] || ''} onChange={v => updateExp(i, 'from', v)} />
                <div className="flex items-center gap-3">
                  <input type="checkbox" id={`cur-${i}`} checked={exp.current} onChange={e => updateExp(i, 'current', e.target.checked)} className="accent-accent" />
                  <label htmlFor={`cur-${i}`} className="text-sm text-slate-300">Currently working here</label>
                </div>
                {!exp.current && <Field label="To (date)" type="date" value={exp.to?.split('T')[0] || ''} onChange={v => updateExp(i, 'to', v)} />}
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Description</label>
                <textarea className="input-field resize-none" rows={2} value={exp.description || ''} onChange={e => updateExp(i, 'description', e.target.value)} />
              </div>
            </div>
          ))}
          <button onClick={addExperience} className="btn-secondary text-sm w-full">+ Add Experience</button>
        </div>
      )}

      {/* Projects */}
      {section === 'projects' && (
        <div className="space-y-4">
          {projects.map((p, i) => (
            <div key={i} className="glass rounded-xl p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-medium">Project {i + 1}</h3>
                <button onClick={() => removeProject(i)} className="text-slate-500 hover:text-neon-pink text-sm">Remove</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Project Name" value={p.name} onChange={v => updateProject(i, 'name', v)} />
                <Field label="Tags (comma-separated)" value={Array.isArray(p.tags) ? p.tags.join(', ') : p.tags || ''} onChange={v => updateProject(i, 'tags', v)} />
                <Field label="Live URL" value={p.link || ''} onChange={v => updateProject(i, 'link', v)} placeholder="https://..." />
                <Field label="GitHub URL" value={p.github || ''} onChange={v => updateProject(i, 'github', v)} placeholder="https://github.com/..." />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1.5">Description</label>
                <textarea className="input-field resize-none" rows={2} value={p.description || ''} onChange={e => updateProject(i, 'description', e.target.value)} />
              </div>
            </div>
          ))}
          <button onClick={addProject} className="btn-secondary text-sm w-full">+ Add Project</button>
        </div>
      )}

      {/* Save */}
      <div className="mt-6 flex justify-end">
        <button onClick={save} disabled={saving} className="btn-primary">
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder = '', type = 'text' }) {
  return (
    <div>
      <label className="block text-sm text-slate-300 mb-1.5">{label}</label>
      <input
        type={type}
        className="input-field"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
