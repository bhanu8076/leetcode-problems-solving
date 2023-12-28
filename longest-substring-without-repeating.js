function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }

        charIndexMap[currentChar] = end;

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

const s = "abcabcbb";
const result = lengthOfLongestSubstring(s);
console.log(result);
