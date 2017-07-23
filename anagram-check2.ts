// Given two strings, determine if they are anagrams

// This is not the most efficient approach for Big O
// But instructor's best method using hash map doesn't work as presented

function areAnagrams(s1: string, s2: string): boolean {
  // Split string, sort characters and rejoin
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  // If sorted strings are equal, originals are anagrams
  return s1 === s2;
}

let words = ['earth', 'heart', 'potato'];

words.forEach(function(word, index) {
  let index2 = (index + 1 <= 2) ? index + 1 : 0;
  let answer = areAnagrams(words[index], words[index2]);
  if (answer) {
    console.log(`${words[index]} and ${words[index2]} are anagrams`);
  } else {
    console.log(`${words[index]} and ${words[index2]} are NOT anagrams`);
  }
});
