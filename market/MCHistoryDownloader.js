'use strict';
var expiry = require("foExp.js");

var fs = require('fs');

var totrows1 = 0;
var totrows2 = 0;


//sc_id,pno,fdt,todt
//function getMCHistoryFor

console.log('Starting...');
//var nseExpWriteStream = fs.createWriteStream('nseExpiry.csv', { highWaterMark: 64 * 1024 });
console.log(indxExpryDt);
console.log(stkExpryDt);

/*
sc_id_arr.forEach((e, i) => {

    let pno = 0;
    for (pno = 1; pno <= 9; pno++) {
        var options = {};
        options.sc_id = e;
        options.transform = mCTableTransform;

        options.urlObj = getMCStockHistoryUrlObj(e, pno);
        options.url = options.urlObj.href;
        //console.log(urlObj.href);

        let rP = requestPromise(options);
        reqPromiseArr.push(rP);

        rP
            .then((responseData) => {
                if (!responseData.rows.match('No data')) {
                    totrows1 += responseData.totrows;   //??
                    let detalyTime = (i * 100 + (pno * 10));
                    return writeChunk(responseData, detalyTime);
                }
            })
    }

})

                let writeResult = mcCsvWriteStream.write(chunk.rows); */


