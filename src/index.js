module.exports = function getZerosCount(number, base) {
    var div = 2;
    var res = 0;
    var multiplier = [];
    var count = 0;
    while (base > 1)
    {
        while (base % div == 0)
        {
            base = base / div;
            multiplier.push(div);
        }
        div++;
    }
    
    for(var i = 0; i < multiplier.length; ++i){
        if(multiplier[i] == multiplier[multiplier.length - 1])
            count++;
    }

    
    while(number > 0)
    {
        if(number>1){
            number /= div-1;
            res += Math.floor(number);
        }else{
            break;
        }
    }
    return Math.floor(res/count);
}