// Printing Star Pattern : Pyramid Structure


var n = 5; // Counting number of lines
var i, j, k;

for (i = 1; i <= n; i++) {
    for (j = 0; j <= n - i; j++) {
        document.write(' &nbsp');  // Printing in Browser Page
        // console.log(' '); // Printing in Browser Console
    }
    for (k = 0; k < 2 * i - 1; k++) {
        document.write('*');  // Printing in Browser Page
        // console.log('*');  // Printing in Browser Console
    }
    document.write('<br>');  // Printing in Browser Page
    // console.log('\n');  // Printing in Browser Console
}
