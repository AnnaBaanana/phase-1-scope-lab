// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName()
{
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer="not bob"
}

setBestCustomer();
console.log(bestCustomer)

function overwriteBestCustomer(name) {
    bestCustomer=name;
}

overwriteBestCustomer("maybe bob");
console.log(bestCustomer);

const leastFavoriteCustomer = 'matt';

function changeLeastFavoriteCustomer(name) {
    leastFavoriteCustomer=name;
}

changeLeastFavoriteCustomer('brad')