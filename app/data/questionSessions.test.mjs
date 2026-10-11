import assert from 'node:assert/strict';
import test from 'node:test';
import { sampleFiveQuestions } from './questionSessions.ts';

const pool = Array.from({ length: 30 }, (_, index) => ({
  id: 'question-' + index,
  topic: 'topic-' + (index % 10),
}));

test('samples exactly five unique questions across varied topics without mutating the pool', () => {
  const original = [...pool];
  for (let run = 0; run < 100; run++) {
    const sample = sampleFiveQuestions(pool);
    assert.equal(sample.length, 5);
    assert.equal(new Set(sample.map((question) => question.id)).size, 5);
    assert.equal(new Set(sample.map((question) => question.topic)).size, 5);
  }
  assert.deepEqual(pool, original);
});

test('rejects pools with fewer than five questions', () => {
  assert.throws(() => sampleFiveQuestions(pool.slice(0, 4)), /at least five/);
});

test('rejects duplicate IDs before sampling', () => {
  assert.throws(() => sampleFiveQuestions([...pool, pool[0]]), /IDs must be unique/);
});
