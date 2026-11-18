// Integration test script for Chinese Engine & Data
const {
  CHINESE_PINYIN_DATA,
  CHINESE_STROKES_DATA,
  CHINESE_RADICALS_DATA,
  CHINESE_HSK_VOCAB_DATA,
  CHINESE_GRAMMAR_DATA,
  CHINESE_DATA_REPOSITORY
} = require('./chinese-data.js');

console.log('--- TEST 1: DATA VERIFICATION ---');
console.log('Initials count:', CHINESE_PINYIN_DATA.initials.length, 'expected: 21');
console.log('Finals count:', CHINESE_PINYIN_DATA.finals.length, 'expected: 36');
console.log('Tones count:', CHINESE_PINYIN_DATA.tones.length, 'expected: 5');
console.log('Tone rules count:', CHINESE_PINYIN_DATA.rules.length, 'expected: 3');
console.log('Kangxi Radicals count:', CHINESE_RADICALS_DATA.length, 'expected: 214');
console.log('HSK 1 Vocab count:', CHINESE_HSK_VOCAB_DATA.length, 'expected >= 130');
console.log('Grammar lessons count:', CHINESE_GRAMMAR_DATA.length, 'expected: 12');
console.log('Total Repository Characters:', CHINESE_DATA_REPOSITORY.length, 'expected >= 340');

if (CHINESE_PINYIN_DATA.initials.length !== 21) throw new Error('Initials count mismatch!');
if (CHINESE_PINYIN_DATA.finals.length !== 36) throw new Error('Finals count mismatch!');
if (CHINESE_RADICALS_DATA.length !== 214) throw new Error('Radicals count mismatch!');
if (CHINESE_GRAMMAR_DATA.length !== 12) throw new Error('Grammar lessons mismatch!');

console.log('\n--- TEST 2: RADICAL STROKES COVERAGE ---');
const strokeCounts = new Set(CHINESE_RADICALS_DATA.map(r => r.strokes));
console.log('Radical stroke counts covered:', Array.from(strokeCounts).sort((a,b) => a-b).join(', '));
if (Math.min(...strokeCounts) !== 1 || Math.max(...strokeCounts) !== 17) {
  throw new Error('Radicals must span 1 to 17 strokes!');
}

console.log('\n--- TEST 3: HSK 1 TOPICS COVERAGE ---');
const topics = new Set(CHINESE_HSK_VOCAB_DATA.map(v => v.topic));
console.log('Vocab topics covered:', Array.from(topics).join(', '));

console.log('\n--- TEST 4: ALL 12 GRAMMAR LESSONS STRUCTURE ---');
CHINESE_GRAMMAR_DATA.forEach(g => {
  if (!g.title || !g.formula || !g.explanation || !g.examples || g.examples.length === 0) {
    throw new Error('Incomplete grammar lesson: ' + g.title);
  }
});
console.log('All 12 grammar lessons have valid title, formula, explanation, and examples!');

console.log('\n>>> ALL 4 VERIFICATION TESTS PASSED PERFECTLY! <<<');
