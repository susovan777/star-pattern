// Printing Star Pattern : Right Sided Triangle


var n = 5; // Counting number of lines
var i, j, k;

for (i = 1; i <= n; i++) {
    for (j = 0; j < n - i; j++) {
        document.write(' &nbsp'); // Printing in Browser Page
        // console.log(' '); // Printing in Browser Console
    }
    for (k = 0; k < i; k++) {
        document.write('*');
        // console.log('*');
    }
    document.write('<br>');
    // console.log('\n');
}