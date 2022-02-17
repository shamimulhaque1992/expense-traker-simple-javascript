function incomeExpenses(income_id, food_id, rent_id, clothes_id, total_expenses_id, total_balance_id) {
    const income_input = parseFloat(document.getElementById(income_id + "-input").value);
    // console.log(income_input);

    const food_input = parseFloat(document.getElementById(food_id + "-input").value);
    // console.log(food_input);

    const rent_input = parseFloat(document.getElementById(rent_id + "-input").value);
    // console.log(rent_input);

    const clothes_input = parseFloat(document.getElementById(clothes_id + "-input").value);
    // console.log(clothes_input);

    const total_prev_expenses = parseFloat(document.getElementById(total_expenses_id).innerText)
    // console.log(total_prev_expenses);

    const total_prev_balance = parseFloat(document.getElementById(total_balance_id).innerText)
    // console.log(total_prev_balance);

    if (income_input % 1 != 0 || food_input % 1 != 0 || rent_input % 1 != 0 || clothes_input % 1 != 0) {
        document.getElementById("error_str").style.display = "block"
        // console.log("it is a String");
    }
    else if (income_input < 0 || food_input < 0 || rent_input < 0 || clothes_input < 0) {
        document.getElementById("error_neg").style.display = "block"
        // console.log("it is a negative number");
    }
    else {
        const updated_total_expenses = document.getElementById(total_expenses_id).innerText = food_input + rent_input + clothes_input;

        document.getElementById(total_balance_id).innerText = income_input - updated_total_expenses;
        document.getElementById("success").style.display = "block"
    }


}

function savingandRemaining(income_id, saving_input_id, saving_id, balance_id, remaining_balance_id) {
    const income_input = parseFloat(document.getElementById(income_id + "-input").value);
    console.log(income_input);

    let saving_input = parseFloat(document.getElementById(saving_input_id).value);
    console.log(saving_input);

    /* const saving =  parseFloat(document.getElementById(saving_id).innerText); */

    const balance = parseFloat(document.getElementById(balance_id).innerText)

    
    /* const updated_savings = document.getElementById(saving_id).innerText = income_input * (saving_input / 100); */

    if (saving_input > income_input) {
        document.getElementById("error_inv_save").style.display = "block"
    }
    else if (income_input < 0) {
        document.getElementById("error_neg_save").style.display = "block"
    }
    else if (income_input % 1 != 0) {
        document.getElementById("error_str_save").style.display = "block"
    }
    else if (saving_input % 1 != 0) {
        document.getElementById("error_str_save").style.display = "block"

        // console.log("it is a String");
    }
    else if (saving_input < 0) {
        document.getElementById("error_neg_save").style.display = "block"
        // console.log("it is a negative number");
    }
    else {
        document.getElementById(saving_id).innerText = income_input * (saving_input / 100);
        // document.getElementById("success_save").style.display = "block"
    }


    const updated_savings = parseFloat(document.getElementById(saving_id).innerText)


    if (updated_savings > balance) {
        document.getElementById("error_inv_save").style.display = "block"
    }
    else if (income_input < 0) {
        document.getElementById("error_neg_save").style.display = "block"
    }
    else if (income_input % 1 != 0) {
        document.getElementById("error_str_save").style.display = "block"
    }
    else if (saving_input % 1 != 0) {
        document.getElementById("error_str_save").style.display = "block"

        // console.log("it is a String");
    }
    else if (saving_input < 0) {
        document.getElementById("error_neg_save").style.display = "block"
        document.getElementById(remaining_balance_id).innerText = 0;
        // console.log("it is a negative number");
    }
    else {
        document.getElementById(remaining_balance_id).innerText = balance - updated_savings;
        document.getElementById("success_save").style.display = "block"
    }


}

function clearNotifications(type) {
    document.getElementById(type).style.display = "none";
}
/* function clearInputField(income_id, food_id, rent_id, clothes_id) {
    document.getElementById(income_id +"-input").value = "";
    document.getElementById(food_id +"-input").value = "";
    document.getElementById(rent_id +"-input").value = "";
    document.getElementById(clothes_id +"-input").value = "";
} */


document.getElementById("calc-btn").addEventListener("click", function () {
    incomeExpenses("income", "food", "rent", "clothes", "total-expenses", "balance");
    // clearInputField("income", "food", "rent", "clothes")
})


document.getElementById("save-btn").addEventListener("click", function () {
    savingandRemaining("income", "save-input", "saving", "balance", "Remaining-balance")
})


document.getElementById("error_str").addEventListener("click", function () {
    clearNotifications("error_str")
})
document.getElementById("error_neg").addEventListener("click", function () {
    clearNotifications("error_neg")
})
document.getElementById("success").addEventListener("click", function () {
    clearNotifications("success")
})
document.getElementById("error_str_save").addEventListener("click", function () {
    clearNotifications("error_str_save")
})
document.getElementById("error_neg_save").addEventListener("click", function () {
    clearNotifications("error_neg_save")
})
document.getElementById("error_inv_save").addEventListener("click", function () {
    clearNotifications("error_inv_save")
})
document.getElementById("success_save").addEventListener("click", function () {
    clearNotifications("success_save")
})
