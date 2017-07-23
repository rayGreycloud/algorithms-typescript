// Given two strings, determine if they are anagrams
// Version 1
function areAnagrams(s1, s2) {
    // Requires function to create array of different permutations of given string
    for (var _i = 0, _a = permutations(s1); _i < _a.length; _i++) {
        var permutation = _a[_i];
        if (permutation === s2)
            return true;
    }
    return false;
}
// Version 2 - better
// This one actually works - other two require additional code not provided by instructor
function areAnagrams2(s1, s2) {
    // Split string, sort characters and rejoin
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
    // If sorted strings are equal, originals are anagrams
    return s1 === s2;
}
// Version 3 - best time complexity with hash map
// But issue with Map creation due to compile problem - throws error that Map undefined
function areAnagrams3(s1, s2) {
    var charCount = new Map();
    for (var _i = 0, _a = s1.split(''); _i < _a.length; _i++) {
        var char = _a[_i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (var _b = 0, _c = s2.split(''); _b < _c.length; _b++) {
        var char = _c[_b];
        if (!charCount.has(char))
            return false;
        charCount.set(char, charCount.get(char) - 1);
    }
    return Array.from(charCount.values()).every(function (val) { return val === 0; });
}
