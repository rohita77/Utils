'use strict';
var a = require("./foExp.js");

var fs = require('fs');

var totrows1 = 0;
var totrows2 = 0;


//sc_id,pno,fdt,todt
//function getMCHistoryFor

console.log('Starting...');

var nseExpCsvWriteStream = fs.createWriteStream('nseExpiry.csv', { highWaterMark: 64 * 1024 });
let writeResult1 = nseExpCsvWriteStream.write(a.indxExpryDt.join(',IDX\n') + ',IDX\n');
let writeResult2 = nseExpCsvWriteStream.write(a.vixExpryDt.join(',VIX\n') + ',VIX\n');
let writeResult3 = nseExpCsvWriteStream.write(a.stkExpryDt.join(',STK\n') + ',STK\n');
nseExpCsvWriteStream.end();
console.log('Finished...');

//http://stackoverflow.com/questions/7809397/how-to-require-from-url-in-node-js