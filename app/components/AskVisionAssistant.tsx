'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { sampleFiveQuestions } from '../data/questionSessions';
import { findAssistantAnswers, QUIZ_QUESTIONS, VIVA_QUESTIONS, QuizQuestion, VivaQuestion } from '../data/assistantKnowledge';

type Mode = 'ask' | 'quiz' | 'viva';
type Message = { question: string; answers: ReturnType<typeof findAssistantAnswers> };

const SUGGESTIONS = ['What is India’s latest population estimate?', 'How are renewable and non-fossil capacity different?', 'What does integrated development mean?'];

export function AskVisionAssistant() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>('ask');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [quizSession, setQuizSession] = useState<QuizQuestion[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizChoice, setQuizChoice] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizChecked, setQuizChecked] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [vivaSession, setVivaSession] = useState<VivaQuestion[]>([]);
  const [vivaIndex, setVivaIndex] = useState(0);
  const [vivaResponse, setVivaResponse] = useState('');
  const [vivaAnswered, setVivaAnswered] = useState(false);
  const [vivaFinished, setVivaFinished] = useState(false);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && mode === 'ask') inputRef.current?.focus();
  }, [open, mode]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  function ask(question: string) {
    const clean = question.trim();
    if (!clean) return;
    setMessages((current) => [...current, { question: clean, answers: findAssistantAnswers(clean) }]);
    setInput('');
  }

  function navigateTo(sectionId: string) {
    const target = document.getElementById(sectionId);
    if (!target) return;
    const header = document.querySelector('header');
    const offset = header?.getBoundingClientRect().height ?? 80;
    window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - offset - 12, behavior: 'smooth' });
    target.classList.add('ring-2', 'ring-cyan-300', 'ring-offset-4', 'ring-offset-slate-950');
    setHighlightedId(sectionId);
    window.setTimeout(() => {
      target.classList.remove('ring-2', 'ring-cyan-300', 'ring-offset-4', 'ring-offset-slate-950');
      setHighlightedId((current) => current === sectionId ? null : current);
    }, 2200);
  }

  const quiz = quizSession[quizIndex];
  const viva = vivaSession[vivaIndex];

  function startQuiz() {
    setMode('quiz'); setQuizSession(sampleFiveQuestions(QUIZ_QUESTIONS)); setQuizIndex(0);
    setQuizChoice(null); setQuizScore(0); setQuizChecked(false); setQuizFinished(false);
  }
  function startViva() {
    setMode('viva'); setVivaSession(sampleFiveQuestions(VIVA_QUESTIONS)); setVivaIndex(0);
    setVivaResponse(''); setVivaAnswered(false); setVivaFinished(false);
  }
  function submitQuiz() {
    if (quizChoice === null || quizChecked || !quiz) return;
    if (quizChoice === quiz.correct) setQuizScore((score) => score + 1);
    setQuizChecked(true);
  }
  function nextQuiz() {
    if (quizIndex === quizSession.length - 1) { setQuizFinished(true); return; }
    setQuizIndex((index) => index + 1); setQuizChoice(null); setQuizChecked(false);
  }
  function nextViva() {
    if (vivaIndex === vivaSession.length - 1) { setVivaFinished(true); return; }
    setVivaIndex((index) => index + 1); setVivaResponse(''); setVivaAnswered(false);
  }


  return <>
    <button ref={launcherRef} type="button" onClick={() => setOpen((value) => !value)} aria-label="Open Ask Vision assistant" aria-expanded={open} aria-controls="vision-assistant-panel" className="chakra-launcher fixed z-[60] inline-flex items-center justify-center rounded-full focus-visible:outline-none">
      <svg aria-hidden="true" viewBox="0 0 48 48" className="chakra-icon"><circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="24" cy="24" r="3" fill="currentColor"/><g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round">{Array.from({ length: 24 }, (_, index) => <line key={index} x1="24" y1="8" x2="24" y2="21" transform={`rotate(${index * 15} 24 24)`} />)}</g></svg><span className="sr-only">Ask Vision India 2047</span>
    </button>
    {open && <div ref={panelRef} id="vision-assistant-panel" role="dialog" aria-label="Ask Vision India 2047 assistant" className="fixed inset-x-2 bottom-[calc(env(safe-area-inset-bottom)+4rem)] z-[60] flex max-h-[min(78dvh,42rem)] flex-col overflow-hidden rounded-2xl assistant-panel border text-[var(--text-primary)] shadow-2xl shadow-black/60 sm:inset-x-auto sm:right-4 sm:w-[min(26rem,calc(100vw-2rem))]">
      <div className="flex items-start justify-between border-b border-slate-700/80 p-4">
        <div><p className="font-bold">Ask Vision India 2047</p><p className="mt-1 text-xs text-slate-400">Answers from this website’s content and cited sources</p></div>
        <button type="button" aria-label="Close assistant" onClick={() => { setOpen(false); launcherRef.current?.focus(); }} className="rounded-lg px-2 py-1 text-slate-300 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">✕</button>
      </div>
      <div role="group" aria-label="Assistant mode" className="grid grid-cols-3 gap-1 border-b border-slate-800 p-2">
        {(['ask', 'quiz', 'viva'] as Mode[]).map((item) => <button key={item} aria-pressed={mode === item} type="button" onClick={() => { if (item === 'quiz') startQuiz(); else if (item === 'viva') startViva(); else setMode('ask'); }} className={`rounded-lg px-2 py-2 text-xs font-semibold capitalize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${mode === item ? 'bg-cyan-400/15 text-cyan-200' : 'text-slate-400 hover:bg-slate-800'}`}>{item === 'ask' ? 'Ask' : item === 'quiz' ? 'Quiz Me' : 'Viva Mode'}</button>)}
      </div>

      {mode === 'ask' && <>
        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4" aria-live="polite">
          {!messages.length && <div><p className="mb-3 text-sm text-slate-300">Choose a question or ask about a topic on the site.</p><div className="space-y-2">{SUGGESTIONS.map((question) => <button key={question} type="button" onClick={() => ask(question)} className="block w-full rounded-xl border border-slate-700 bg-slate-900/70 p-3 text-left text-xs text-cyan-100 hover:border-cyan-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{question}</button>)}</div></div>}
          {messages.map((message, index) => <div key={`${index}-${message.question}`} className="space-y-2 text-sm">
            <p className="ml-8 rounded-xl bg-cyan-950/60 p-3 text-cyan-50">{message.question}</p>
            {!message.answers.length ? <p className="mr-6 rounded-xl bg-slate-900 p-3 text-slate-300">I couldn’t find a reliable match in this site’s content. Try a topic such as demographics, energy, SDGs, Smart Cities, PPPs or strategy.</p> : message.answers.map((answer) => <article key={answer.title} className="mr-2 rounded-xl bg-slate-900 p-3">
              <h3 className="font-semibold text-white">{answer.title}</h3><p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-slate-300">{answer.answer}</p>
              <div className="mt-3 flex flex-wrap gap-2">{answer.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="rounded-md text-[11px] text-cyan-300 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{source.name}{source.date ? ` · ${source.date}` : ''} ↗</a>)}</div>
              <button type="button" onClick={() => navigateTo(answer.sectionId)} className="mt-3 rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-200 hover:border-cyan-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">View on this page{highlightedId === answer.sectionId ? ' · highlighted' : ''}</button>
            </article>)}
          </div>)}
        </div>
        <form onSubmit={(event: FormEvent<HTMLFormElement>) => { event.preventDefault(); ask(input); }} className="flex gap-2 border-t border-slate-700/80 p-3">
          <label className="sr-only" htmlFor="vision-assistant-question">Ask a question</label><input ref={inputRef} id="vision-assistant-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about a topic…" className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" />
          <button type="submit" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Ask</button>
        </form>
      </>}

      {mode === 'quiz' && <div className="min-h-0 flex-1 overflow-y-auto p-4">
        {quizFinished ? <div className="text-center" role="status"><p className="text-xs uppercase tracking-wider text-emerald-300">Quiz complete</p><h3 className="mt-3 text-2xl font-bold">{quizScore} / 5</h3><p className="mt-2 text-sm text-slate-300">You completed this five-question session.</p><button type="button" onClick={startQuiz} className="mt-5 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">New quiz</button></div> : quiz && <div data-question-id={quiz.id}>
          <div className="flex items-center justify-between gap-2"><p className="text-xs text-slate-400">Question {quizIndex + 1} of 5 · Score {quizScore}</p><button type="button" onClick={startQuiz} className="text-xs text-cyan-300 underline">New quiz</button></div>
          <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">{quiz.topic}</p><h3 className="mt-2 text-base font-semibold">{quiz.question}</h3>
          <div className="mt-4 space-y-2">{quiz.choices.map((choice, index) => <button key={choice} type="button" disabled={quizChecked} aria-pressed={quizChoice === index} onClick={() => setQuizChoice(index)} className={`w-full rounded-xl border p-3 text-left text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${quizChoice === index ? 'border-cyan-300 bg-cyan-950/70 text-white' : 'border-slate-700 bg-slate-900 text-slate-200'}`}>{choice}</button>)}</div>
          {quizChecked && <p role="status" className="mt-4 rounded-xl bg-slate-900 p-3 text-sm text-slate-200">{quizChoice === quiz.correct ? 'Correct. ' : 'Not quite. '}{quiz.explanation}</p>}
          <div className="mt-4">{quizChecked ? <button type="button" onClick={nextQuiz} className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">{quizIndex === 4 ? 'See results' : 'Next question'}</button> : <button type="button" disabled={quizChoice === null} onClick={submitQuiz} className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 disabled:opacity-40">Check answer</button>}</div>
        </div>}
      </div>}

      {mode === 'viva' && <div className="min-h-0 flex-1 overflow-y-auto p-4">
        {vivaFinished ? <div className="text-center" role="status"><p className="text-xs uppercase tracking-wider text-emerald-300">Viva session complete</p><h3 className="mt-3 text-lg font-bold">Five prompts completed</h3><p className="mt-2 text-sm text-slate-300">Review the key ideas and sources from this session.</p><button type="button" onClick={startViva} className="mt-5 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">New Viva session</button></div> : viva && <div data-question-id={viva.id}>
          <div className="flex items-center justify-between gap-2"><p className="text-xs text-slate-400">Prompt {vivaIndex + 1} of 5</p><button type="button" onClick={startViva} className="text-xs text-cyan-300 underline">New session</button></div>
          <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">{viva.topic}</p><h3 className="mt-2 text-base font-semibold">{viva.prompt}</h3>
          {!vivaAnswered ? <form onSubmit={(event) => { event.preventDefault(); if (vivaResponse.trim()) setVivaAnswered(true); }} className="mt-4 space-y-3">
            <label htmlFor="vision-viva-response" className="block text-xs text-slate-300">Your response</label><textarea id="vision-viva-response" required value={vivaResponse} onChange={(event) => setVivaResponse(event.target.value)} rows={3} className="w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" placeholder="Write or say your answer aloud, then summarize it here." />
            <button type="submit" className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">Submit response</button>
          </form> : <div className="mt-4 space-y-3"><div className="rounded-xl bg-slate-900 p-3"><p className="text-[10px] uppercase tracking-wider text-emerald-300">Key points</p><p className="mt-1 text-sm leading-relaxed text-slate-200">{viva.answer}</p><p className="mt-2 text-xs text-slate-400">Consider: {viva.guidance}</p><a className="mt-3 inline-block text-xs text-cyan-300 underline" href={viva.source.url} target="_blank" rel="noopener noreferrer">{viva.source.name} ↗</a></div>
            <button type="button" onClick={nextViva} className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">{vivaIndex === 4 ? 'Finish session' : 'Next prompt'}</button>
          </div>}
        </div>}
      </div>}
    </div>}
  </>;
}
