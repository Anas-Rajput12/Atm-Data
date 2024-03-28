#!  /usr/bin/env node
import inquirer from "inquirer";
import chakAnimation from "chalk-animation";

const sleep = ()=>{
    return new Promise((res)=>{
      setTimeout(res, 2000);
    })}
  
async function atm() {
    let rainbow = chakAnimation.rainbow(`let Start Atm
Hint PinCode is 4 Number And First Two Number is 23`);
    await sleep ();
    rainbow.stop();
}
atm();
// console.log("Hint PinCode is 4 Number And First Two Number is 23");
let mybalance =10000;
let pinCode = 2345;
async function data() {
    let atm1 = true
    do {
        let answer = await inquirer.prompt([
            {
                name : "pin",
                type : "number",
                message : "enter your pin :",
            }
        ]);
        
        if (answer.pin === pinCode) {
            console.log("correct your pin");
            let answer1 = await inquirer.prompt([
                {
                    type : "list",
                    name : "accountType",
                    choices : ["Current","Saving"],
                    message : "Enter Your AccountType",
                },
                {
                    type : "list",
                    name : "transactionType",
                    choices : ["fastCash","withdraw"],
                    message : "Enter Your TransactionType",
                }
            ]);
            console.log(answer1);
            if (answer1.transactionType === "withdraw") {
                let answer2 = await inquirer.prompt([
                    {
                        type : "number",
                        name : "amount",
                        message : "Enter your amount",
                    }
                ]);
                // console.log(answer2);
                mybalance -=  answer2.amount;
                console.log("your remaining balance is : " + mybalance); 
            }else if (answer1.transactionType === "fastCash") {
                let answer3 = await inquirer.prompt([
                    {
                        type : "list",
                        name : "amount",
                        choices : ["1000","2000","10000","20000"],
                        message : "Enter Your amount : ",
                    }
                ]);
                // console.log(answer3);
                mybalance -=  answer3.amount;
                console.log("your remaining balance is : " + mybalance);
            }
        }
        else{
            console.log("Please enter Correct pin");
        }
        const {atmdata} = await inquirer.prompt([
            {
              name : "atmdata",
              type : "confirm",
              message : "Funther check your Transaction ?",
              default : true
            }
          ]);
          atm1 = atmdata;
    } while (atm1);
}
data();




