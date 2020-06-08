function Function(D) {
    const key = Object.keys(D);
    const result ={};
    for(let i=0;i< key.length - 1;i++){
        let start = key[i];
        let end = key[i+1];
        let diff = Math.floor((Date.parse(end) - Date.parse(start)) / 86400000);
        result[key[i]] = D[key[i]];
        if(diff == 1)
            continue;
        let x = (D[key[i+1]] + (diff - 1) * (D[key[i]])) / (diff);
        var prev_date = start;
        for(let j=1;j<diff;j++)
        {   
            let targetDate = new Date(prev_date);
        targetDate.setDate(targetDate.getDate() + 1);
        let dd = (targetDate.getDate() + "").length < 2 ? ("0"+ (targetDate.getDate())) : targetDate.getDate() ;
        let mm = (""+ (targetDate.getMonth() + 1)).length < 2 ? ("0"+ (targetDate.getMonth() + 1)) : targetDate.getMonth() + 1  ; 
        let yyyy = targetDate.getFullYear();
         prev_date = yyyy + '-' + mm + '-' + dd;
        result[prev_date] = (j) *(x) - (j-1) * (D[key[i]]);
        }

       }
     result[key[key.length - 1]] = D[key[key.length - 1]]
     return result;
    }



console.log(Function({'2019-01-10': 10, '2019-01-11': 20, '2019-01-13': 10}));
console.log(Function({'2019-01-01': 100, '2019-01-04': 115}));


