// This is Left Sided Triangle

var n = 5;
var i, j;

for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        document.write('*');
        // console.log(' ');
    }
    document.write('<br>');
    // console.log('\n');
}