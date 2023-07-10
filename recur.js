let palindrome = document.getElementById("palindrome"),
    notPalindrome = document.getElementById("notpalindrome");

var pali_1 = "Wont lovers revolt now",
    pali_2 = "RACECARS",
    drome = "It's a palindrome",
    rome = "It's not a palindrome",
    i, j;
for (i = 0; i < pali_1.length; i++) {
    var p = pali_1.charAt([i]).toLowerCase();
    var q = pali_1.charAt(pali_1.length - (i + 1)).toLowerCase();
    (p === q) ? palindrome.textContent = (`${drome}`) : palindrome.textContent = (`${rome}`);
}
for (j = 0; j < pali_2.length; j++) {
    let M = pali_2.charAt([j]).toLowerCase();
    let N = pali_2.charAt(pali_2.length - (j + 1)).toLowerCase();
    { (N === M) ? notPalindrome.innerText = (`${drome}`) : notPalindrome.innerText = (`${rome}`) };
}