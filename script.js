var budget_display = document.getElementById("budget_display");
var expense_display = document.getElementById("expense_display");
var balance_display = document.getElementById("balance_display");

var budget = 0;
var balance = 0;

var totalExpenditure = 0;

var expense_list_obj = {};

document.getElementById("submit_btn").addEventListener("click", function () {
    if (document.getElementById("budget_amount_input").value == "0")
    {
        window.alert("Please enter the budget properly");
        return;
    }
    
    
    budget += Number(document.getElementById("budget_amount_input").value);
    budget_display.innerHTML = budget;
    balance += Number(document.getElementById("budget_amount_input").value);
    document.getElementById("budget_amount_input").value = "";
    balance_display.innerText = balance; 
});

document.getElementById("add_btn").addEventListener("click", function () {


    if ((document.getElementById("expense_context").value == "") || (document.getElementById("expense_amount_input").value == "0"))
    {
        window.alert("Please enter the expense data properly")
        return;
    }
    
    var expense_context = document.getElementById("expense_context").value;
    var expense_amount_input = document.getElementById("expense_amount_input").value;
    totalExpenditure = totalExpenditure + Number(expense_amount_input);

    balance = Number(budget) - Number(totalExpenditure);
    if (balance == 0 ||balance < 0)
    {
        window.alert("There is no money in your accout.");        
        window.alert("The amount will be credited.");
        
    }
    
    balance_display.innerText = balance; 
    expense_display.innerHTML = totalExpenditure;

    expense_list_obj[expense_context] = expense_amount_input;

    let list_item = document.createElement("li");
    list_item.appendChild(document.createTextNode(expense_context + "-----Rs."+expense_amount_input));
    list.append(list_item);

    //document.getElementById("expense_list").innerText = JSON.stringify(expense_list_obj,null,4);

    document.getElementById("expense_context").value = "";
    document.getElementById("expense_amount_input").value = "0"

    
});

setInterval((balance_display) => {
    if (Number(document.getElementById("balance_display").innerText) <= 0)
    {
        document.getElementById("balance_display").style.color = red;
    }
    else
    {
        document.getElementById("balance_display").style.color = blue;
    }
}, 0.5);