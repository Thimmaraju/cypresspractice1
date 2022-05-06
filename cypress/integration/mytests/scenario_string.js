const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

/// integer
let sum = 0;

When("I add {int} and {int}", (a, b) => {
    sum = a + b;
});

Then("I verify that the result is equal the {int}", (result) => {
    expect(sum).to.equal(result);
});


//string

const fruitToJuice = {
    apple: "apple juice",
    pineapple: "pineapple juice",
    strawberry: "strawberry juice",
};

let juice = "";

Given("I put {string} in a juicer", (fruit) => {
    juice = fruitToJuice[fruit];
    expect(typeof juice).to.equal("string");
});

When("I switch it on", () => {
    expect(true).to.equal(true);
});

Then("I should get {string}", (resultJuice) => {
    expect(resultJuice).to.equal(juice);
});



// //var
let var1 = "var1";
let var2 = "var2";

When("I enter variable {string} and {string}", (v1, v2) => {
    var1 = v1;
    var2 = v2;
});

Then("I verify that both variables have {string} as value", (value) => {
    expect(value).to.equal(var1);
    expect(value).to.equal(var2);
});




// //data table 

let sum2 = { first: 0, second: 0, result: 0 };

When("I enter {int} and {int}", (a, b) => {
    sum2 = { first: a, second: b, result: a + b };
});

Then("I see following result table", (dataTable) => {
    dataTable.hashes().forEach((row) => {
        expect(sum2.first).to.equal(parseInt(row.first, 10));
        expect(sum2.second).to.equal(parseInt(row.second, 10));
        expect(sum2.result).to.equal(parseInt(row.result, 10));
    });
});