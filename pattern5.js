// Printing Star Pattern : Reverse Left-Sided Triangle


var n = 5; // Counting number of lines
var i, j, k;

for (i = 1; i <= n; i++) {
    for (j = 5; j >= i && j <= n; j--) {
        document.write('*'); // Printing in Browser Page
        // console.log(' '); // Printing in Browser Console
    }
    document.write('<br>');
    // console.log('\n');
}