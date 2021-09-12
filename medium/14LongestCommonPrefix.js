const longestCommonPrefix = (strs) => {
    if (strs.length == 0) return '';
    let prefix = strs[0];
    for (let word of strs) {
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix
}
console.log(longestCommonPrefix(["flower","flow","flight"]))