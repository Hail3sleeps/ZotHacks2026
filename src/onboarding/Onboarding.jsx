import { useState } from 'react'
import './Onboarding.css'

const MAJORS = [
  'Computer Science',
  'Software Engineering',
  'Informatics',
  'Data Science',
  'Computer Game Science',
  'Computer Engineering',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Biomedical Engineering',
  'Mathematics',
  'Applied Physics',
  'Biological Sciences',
  'Business Administration',
  'Psychology',
  'Undeclared',
  'Other',
]

const YEARS = ['1st year', '2nd year', '3rd year', '4th year', '5th+', 'Graduate']

const STORAGE_KEY = 'zotstudy-onboarding'

function loadDraft() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return {
      name: saved.name || '',
      email: saved.email || '',
      major: saved.major || '',
      year: saved.year || '',
    }
  } catch {
    return { name: '', email: '', major: '', year: '' }
  }
}

export default function Onboarding() {
  const [form, setForm] = useState(loadDraft)
  const [errors, setErrors] = useState({})
  const [saved, setSaved] = useState(false)

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
    setSaved(false)
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email'
    }
    else if (!/@([a-z0-9-]+\.)*uci\.edu$/i.test(form.email.trim())) {  
      next.email = 'Use your @uci.edu email'                              
    }
    if (!form.major) next.major = 'Pick your major'
    if (!form.year) next.year = 'Pick your year'
    return next
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setSaved(false)
      return
    }

    const profile = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      step: 'student-info',
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
    console.log('Onboarding student info', profile)
    setSaved(true)
  }

  return (
    <main className="onboarding">
      <aside className="onboarding-brand">
        <p className="onboarding-kicker">ZotStudy</p>
        <h1>Let’s get you set up.</h1>
        <p className="onboarding-lead">
          Tell us who you are so we can match you with Anteaters studying the
          same courses.
        </p>
        <ol className="onboarding-steps" aria-label="Onboarding progress">
          <li className="is-active">Student info</li>
          <li>Your classes</li>
          <li>Study style</li>
        </ol>
      </aside>

      <section className="onboarding-panel">
        <p className="onboarding-step-label">Step 1 of 3</p>
        <h2>Student info</h2>
        <p className="onboarding-sub">
          This becomes your name on study sessions you host or join.
        </p>

        <form className="onboarding-form" onSubmit={handleSubmit} noValidate>
          <label>
            <span>Preferred name <span className="required" aria-hidden="true">*</span></span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="First Last"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </label>

          <label>
            <span>Email<span className="required" aria-hidden="true">*</span></span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="UCInetID@uci.edu"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              onBlur={() => {                                              
                const next = validate()                                    
                setErrors((prev) => ({ ...prev, email: next.email || '' })) 
              }} 
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </label>

          <div className="onboarding-row">
            <label>
              <span>Major<span className="required" aria-hidden="true">*</span></span>
              <select
                name="major"
                value={form.major}
                onChange={(e) => update('major', e.target.value)}
              >
                <option value="">Select major</option>
                {MAJORS.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              {errors.major && <span className="field-error">{errors.major}</span>}
            </label>

            <label>
              <span>Year<span className="required" aria-hidden="true">*</span></span>
              <select
                name="year"
                value={form.year}
                onChange={(e) => update('year', e.target.value)}
              >
                <option value="">Select year</option>
                {YEARS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.year && <span className="field-error">{errors.year}</span>}
            </label>
          </div>

          <button type="submit" className="onboarding-next">
            Continue
          </button>

          {saved && (
            <p className="onboarding-saved" role="status">
              Student info saved. Classes step comes next.
            </p>
          )}
        </form>
      </section>
    </main>
  )
}
