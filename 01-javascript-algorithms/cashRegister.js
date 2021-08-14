/**
    Cash Register  

    Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

    cid is a 2D array listing available currency.

    The checkCashRegister() function should always return an object with a status key and a change key.

    Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

    Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

    Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
    Currency                Unit	     Amount
    Penny	                $0.01       (PENNY)
    Nickel	                $0.05       (NICKEL)
    Dime	                $0.1        (DIME)
    Quarter	                $0.25       (QUARTER)
    Dollar	                $1          (ONE)
    Five Dollars	        $5          (FIVE)
    Ten Dollars	            $10         (TEN)
    Twenty Dollars	        $20         (TWENTY)
    One-hundred Dollars	    $100        (ONE HUNDRED)

    See below for an example of a cash-in-drawer array:
    [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]
*/

function checkCashRegister(price, cash, cid) {
    // Declaring objects
    const cashReg = {
        status: 'OPEN',
        change: [],
    };
    const currency = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.1,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        'ONE HUNDRED': 100,
    };

    // Get total change needed
    let remainder = cash - price;

    // Check for a sure case of Insufficient Funds
    let cidFunds = cid.map((c) => c[1]).reduce((sum, n) => sum + n);
    console.log(`Total Change: ${remainder} | Drawer Funds: ${cidFunds}`);

    if (remainder > cidFunds) {
        cashReg.status = 'INSUFFICIENT_FUNDS';
        console.log(cashReg);
        return cashReg;
    }

    for (let i = cid.length - 1; i >= 0; i--) {
        let cname = cid[i][0]; // currency Name
        let curr = currency[cname]; // currency value
        let cidAmt = cid[i][1]; // amt of currency that drawer Has
        let cidPcs = cidAmt / curr; // pieces of currency that drawer Has
        let pieces = Math.floor(remainder / curr); // pieces of currency we need as Change
        let amount = 0;

        if (pieces > 0 && cidPcs !== 0) {
            console.log(
                `$${curr} |  ${pieces} ${cname} needed. |  Drawer has ${cidPcs} - $${cidAmt}`
            );

            if (cidPcs < pieces) {
                pieces = cidPcs;
            }

            amount = curr * pieces;
            remainder = (remainder - amount).toFixed(2);
            cashReg.change.push([cname, amount]);

            console.log(
                `~ ${cname.toLowerCase()} | Amount: $${amount} | Remainder: $${remainder} | Change: ${
                    cashReg.change
                }`
            );
        }
    }

    if (remainder >= 0.01) {
        cashReg.status = 'INSUFFICIENT_FUNDS';
        cashReg.change = [];
    } else if (cidFunds == cash - price) {
        cashReg.status = 'CLOSED';
        cashReg.change = [...cid];
    }

    console.log(cashReg, '\n');
    return cashReg;
}

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
]);
