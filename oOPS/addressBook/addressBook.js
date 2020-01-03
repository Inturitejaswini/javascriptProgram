/******************************************************************************
 *  Execution       :   1. default node         cmd> node addressBook.js 
 *                      2. if nodemon installed cmd> nodemodule addressBook.js
 * 
 *  Purpose         : Requirements and User Interface for a Simple Address Book.
 *  @description    
 * 
 *  @file           :addressBook.js
 *  @overview       :addressBook problem.
 *  @module         :addressBook - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :31-12-2019
 ******************************************************************************/
let readline = require("readline-sync");
let fs = require('fs');
let addressBookContent = fs.readFileSync("./addressbook.json");
let addressBookData = JSON.parse(addressBookContent);
console.log(addressBookData);
console.log("1.Adding new data");
console.log("2.Modify the data");
console.log("3.Delete the data");
console.log("4.Exit");
let option = readline.questionInt("enter your choice:")
switch (option) {
    case 1: (option == "1")
        {
            Address(addressBookData);
            break;
        }
    case 2:
        (option == 2)
        {
            modify();
        }
        break;
    case 3:
        (option == 3)
        {
            remove();
        }
        break;
    case 4:
        (option == 4)
        {
            exit();
        }
        break;
}

function Address(addressbook) {
    let name = readline.question("enter first name:");
    let lastname = readline.question("enter last name:");
    let address = readline.question("enter the address:")
    let state = readline.question("enter the state:");
    let city = readline.question("enter the city:");
    let pincode = readline.question("enter the pincode:");
    let phonenumber = readline.question("enter your phonenumber:");
    let update = addressbook.address_book;
    update.push({
        "first_name": name,
        "last_name": lastname,
        "address": address,
        "state": state,
        "city": city,
        "pincode": pincode,
        "phone_number": phonenumber
    })

    fs.writeFile('addressbook1.json', JSON.stringify(update), function (err) {
        if (err) {
            console.log(err);

        }
        console.log("Address update succesfully");

    });
}

function remove(addressbook) {
    let delete1 = readline.question("Please enter the index you want to delete: ");
    delete addressbook.addressbook[delete1];
    let length = addressbook.addressbook.length;
    for (let i = 0; i < length; i++) {
        if (addressbook.addressbook[i] == null) {
            addressbook.addressbook.splice(i, 1);
        }
    }
    fs.writeFile('addressBook.json', JSON.stringify(addressbook), function (err) {
        if (err) throw err
        console.log('Done!')
    })
}
function modify(addressbook) {
    console.log("please enter your choice:");
    console.log("1.To modify Address");
    console.log("2.To modify State");
    console.log("3.To modify City");
    console.log("4.To modify Pincode");
    console.log("5.To modify Phone Number");
    let option = readline.questionInt("enter your choice:");
    for (let i = 0; i < addressbook.addressbook.length; i++) {
        switch (option) {
            case 1:
                let address = readline.question("enter the address:");
                let obj = {
                    "Name": addressbook.addressbook[i].name,
                    "LastName": addressbook.addressbook[i].LastName,
                    "Address": addressbook.addressbook[i].address,
                }
                addressbook.address_book[i] = obj;
                save();
                break;

            case 2:
                let state = readline.question("enter the state name:");
                obj = {
                    "state": addressbook.addressbook[i].state
                }
                addressbook.addressbook[i] = obj;
                save();
                break;

            case 3:
                let city = readline.question("enter the city name:");
                obj = {
                    "city": addressbook.addressbook[i].city
                }
                addressbook.addressbook[i] = obj;
                save();
                break;

            case 4:
                let pincode = readline.question("enter the city pincode:");
                obj = {
                    "pincode": addressbook.addressbook[i].pincode
                }
                addressbook.addressbook[i] = obj;
                save();
                break;

            case 5:
                let phonenumber = readline.question("enter the  phone number:");
                obj = {
                    "phonenumber": addressbook.addressbook[i].phonenumber
                }
                addressbook.addressbook[i] = obj;
                save();
                break;
        }


    }
}
function exit(addressbook) {
    console.log("Thankyou");

}
