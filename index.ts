// Import stylesheets
import './style.css';

// Write TypeScript code!
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

console.log('---');
console.log(isIndividualString('abcdefgh'));
console.log(isIndividualString('hogeh'));
console.log('---');
