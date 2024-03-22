import inquirer from "inquirer";
import chakAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function atm() {
    let rainbow = chakAnimation.rainbow(`let Start Atm`);
    await sleep();
    rainbow.stop();
}
atm();
async function data() {
    let atm1 = true;
    do {
        const answer = await inquirer.prompt([
            {
                name: "userId",
                type: "input",
                message: "Kindly enter Your Id"
            },
            {
                name: "userPin",
                type: "number",
                message: "Kindly enter Your Pin"
            },
            {
                type: "list",
                name: "accountType",
                choices: ["Current", "Saving"],
                message: "Enter Your AccountType",
            },
            {
                type: "list",
                name: "transactionType",
                choices: ["fastCash", "withdraw"],
                message: "Enter Your TransactionType",
                when(answer) {
                    return answer.accountType;
                },
            },
            {
                type: "list",
                name: "amount",
                choices: ["1000", "2000", "10000", "20000"],
                message: "Enter Your amount",
                when(answer) {
                    return answer.transactionType == "fastCash";
                },
            },
            {
                type: "number",
                name: "amount",
                message: "Enter your amount",
                when(answer) {
                    return answer.transactionType == "withdraw";
                },
            },
        ]);
        if (answer.userId && answer.userPin) {
            const balance = Math.floor(Math.random() * 10000000);
            console.log(balance);
            const EnteredAmount = answer.amount;
            if (balance >= EnteredAmount) {
                const remaining = balance - EnteredAmount;
                console.log("your remainig balance is ", remaining);
            }
            else {
                console.log("Insufficient balance!!!");
            }
            const { atmdata } = await inquirer.prompt([
                {
                    name: "atmdata",
                    type: "confirm",
                    message: "Funther check your Transaction ?",
                    default: true
                }
            ]);
            atm1 = atmdata;
        }
    } while (atm1);
}
data();
