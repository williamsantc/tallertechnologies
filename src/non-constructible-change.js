exports.nonConstructibleChange = (coins) => {
    if(!coins || coins.length === 0) {
        throw Error('Imposible to calculate')
    }

    coins.forEach((coin, idx) => {
        if(typeof coin !== 'number') {
            throw Error(coin + ' in the index ' + idx + ' is not a number.')
        }
    })

    coins.sort((a,b) => a - b);

    let currentValue = 0;

    for (let coin of coins) {
        if (coin > currentValue + 1) {
            return currentValue + 1;
        }
        currentValue += coin;
    }
    return currentValue + 1;
}
