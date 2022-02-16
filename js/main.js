function incomeExpenses(income_id, food_id, rent_id, clothes_id){
    const income_input = parseFloat(document.getElementById(income_id + "-input").value);
    console.log(income_input);
    
    const food_input = parseFloat(document.getElementById(food_id + "-input").value);
    console.log(food_input);
    
    const rent_input = parseFloat(document.getElementById(rent_id + "-input").value);
    console.log(rent_input);
    
    const clothes_input = parseFloat(document.getElementById(clothes_id + "-input").value);
    console.log(clothes_input);
}
document.getElementById("calc-btn").addEventListener("click", function() {
    incomeExpenses("income", "food", "rent", "clothes")
})