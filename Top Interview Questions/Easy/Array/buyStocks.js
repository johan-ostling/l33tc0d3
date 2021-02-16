const prices = [
   5,4,3,2,1,10
];

let stock = 0;
let profit = 0;
let considerBuying  = false;
let considerSelling = false;

for (let i = 0; i < prices.length; i++) {
    console.log("\nday: " + i)
   switch (true) {
        case (stock == 0):
            considerBuying = prices[i] < prices[i+1];
            if(considerBuying) { stock = prices[i] }
            console.log("Buying: " + considerBuying)
            break;
        case (stock >= 0):
            considerSelling = prices[i] > prices[i+1]
            if(considerSelling || i == prices.length -1) {
                profit += prices[i]-stock;
                stock = 0;
                console.log("Selling: true")
            }
            break;
        default:    
            console.log("default")
   }
    console.log("price: " + prices[i])
    console.log("stock: " + stock)
    console.log("profit: " + profit)
}

