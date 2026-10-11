export type SessionQuestion = { id: string; topic: string };

export function sampleFiveQuestions<T extends SessionQuestion>(pool: readonly T[]): T[] {
  if (pool.length < 5) throw new Error('A session needs at least five questions.');
  if (new Set(pool.map((item) => item.id)).size !== pool.length) throw new Error('Question IDs must be unique before sampling.');

  const shuffle = <U,>(items: U[]): U[] => {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  };

  const groups = new Map<string, T[]>();
  for (const item of shuffle([...pool])) {
    groups.set(item.topic, [...(groups.get(item.topic) ?? []), item]);
  }

  const topicBuckets = shuffle([...groups.values()].map(shuffle));
  const selected: T[] = [];
  while (selected.length < 5) {
    for (const bucket of topicBuckets) {
      if (bucket.length && selected.length < 5) selected.push(bucket.pop()!);
    }
  }
  return shuffle(selected);
}
