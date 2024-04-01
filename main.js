#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPassword = 1234;
let user = await inquirer.prompt([
    {
        name: "bank",
        message: "Please Enter Your ATM Password",
        type: "number"
    }
]);
if (user.bank == myPassword) {
    console.log("Please Select");
    let list = await inquirer.prompt([
        {
            name: "bank1",
            message: "Plesae Select",
            type: "list",
            choices: ["CASH", "WITHDRAW", "CHEACK BALANCE", "FAST CASH"]
        }
    ]);
    if (list.bank1 === "WITHDRAW") {
        let list1 = await inquirer.prompt([
            {
                name: "bank2",
                message: "Enter Your Amount",
                type: "number"
            }
        ]);
        myBalance -= list1.bank2;
        console.log(`Your Remaning Balance Is:` + myBalance);
    }
    else if (list.bank1 === "CHEACK BALANCE") {
        console.log("Your Remaning Balance Is:" + myBalance);
    }
    if (list.bank1 === "CASH") {
        let list2 = await inquirer.prompt([
            {
                name: "bank3",
                message: "Enter Your Cash Amount",
                type: "number"
            }
        ]);
        myBalance -= list2.bank3;
        console.log("Your Remaning Balance Is:" + myBalance);
    }
    if (list.bank1 === "FAST CASH") {
        let list3 = await inquirer.prompt([
            {
                name: "bank4",
                message: "Enter Your Amount",
                type: "number"
            }
        ]);
        myBalance -= list3.bank4;
        console.log("Your Remaning Balance Is:" + myBalance);
    }
}
else {
    console.log("Please Enter Your Correct ATM Password");
}
