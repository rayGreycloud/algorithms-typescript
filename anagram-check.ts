// Given two strings, determine if they are anagrams

// Version 1
function areAnagrams(s1: string, s2: string): boolean {
  // Requires function to create array of different permutations of given string
  for (const permutation of permutations(s1)) {
    if (permutation === s2) return true;
  }
  return false;
}

// Version 2 - better
// This one actually works - other two require additional code not provided by instructor
function areAnagrams2(s1: string, s2: string): boolean {
  // Split string, sort characters and rejoin
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  // If sorted strings are equal, originals are anagrams
  return s1 === s2;
}

// Version 3 - best time complexity with hash map
// But issue with Map creation due to compile problem - throws error that Map undefined
function areAnagrams3(s1: string, s2: string): boolean {
  const charCount = new Map<string, number>();
  for (const char of s1.split('')) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of s2.split('')) {
    if (!charCount.has(char)) return false;
    charCount.set(char, charCount.get(char) - 1);
  }
  return Array.from(charCount.values()).every(val => val === 0);
}
