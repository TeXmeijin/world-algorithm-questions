// Import stylesheets
import './style.css';

// 1.1
function isIndividualString(str: string): boolean {
  const map: Record<string, boolean> = {};
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      return false;
    }
    map[str[i]] = true;
  }
  return true;
}

console.log('---1.1---');
console.log(isIndividualString('abcdefgh'));
console.log(isIndividualString('hogeh'));
console.log('---------');

// 1.2
function areSortedStringRelation(strA: string, strB: string) {
  const map: Record<string, boolean> = {};
  for (let i = 0; i < strA.length; i++) {
    map[strA[i]] = true;
  }
  for (let i = 0; i < strB.length; i++) {
    if (map[strB[i]]) {
      continue
    }
    return false
  }
  return true
}

console.log('---1.2---')
console.log(areSortedStringRelation('hoge', 'egoh'))
console.log(areSortedStringRelation('hoge', 'egah'))
console.log(areSortedStringRelation('hoge', 'hogeb'))
console.log('---------');
