let start = document.getElementById(`start`),
   budgetValue = document.getElementsByClassName('budget-value')[0],
   daybudgetValue = document.getElementsByClassName(`daybudget-value`)[0],
   levelValue = document.getElementsByClassName(`level-value`)[0],
   expensesValue = document.getElementsByClassName(`expenses-value`)[0],
   optionalexpensesValue = document.getElementsByClassName(`optionalexpenses-value`)[0],
   incomeValue = document.getElementsByClassName(`income-value`)[0],
   monthsavingsValue = document.getElementsByClassName(`monthsavings-value`)[0],
   yearsavingsValue = document.getElementsByClassName(`yearsavings-value`)[0],
  
   expensesItem = document.getElementsByClassName (`expenses-item`),
   submit = document.getElementsByTagName (`button`)[0],
   optionalexpensesBtn = document.getElementsByTagName(`button`)[1],
   countBtn = document.getElementsByTagName (`button`)[2],
   optionalexpensesItem = document.querySelectorAll (`.optionalexpenses-item`),
   incomeItem = document.querySelector (`.choose-income`),
   checkSavings = document.querySelector (`#savings`),
   sumValue = document.querySelector (`.choose-sum`),
   percentValue = document.querySelector (`.choose-percent`),
   yearValue = document.querySelector (`.year-value`),
   monthValue = document.querySelector (`.month-value`),
   dayValue = document.querySelector (`.day-value`);
     

let money, time;

start.addEventListener(`click`, function(){
    money = +prompt ( "Ваш бюджет на месяц?", "$$");
    time = prompt ("Введите дату YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ( "Ваш бюджет на месяц?", "$$");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date (Date.parse(time)).getFullYear();
    monthValue.value = new Date (Date.parse(time)).getMonth()+1;
    dayValue.value = new Date (Date.parse(time)).getDate();
    submit.addEventListener(`click`, function() {
        let sum = 0; 
           
        for (let i = 0; i < expensesItem.length; i++) {
                let a = expensesItem[i].value,
                    b = expensesItem[++i].value;
                
            if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;  
                sum += +b;  
            } else {
                i--;
            }           
        }
        expensesValue.textContent = sum;
        appData.sumexpensesItem = sum;
    });
    
    optionalexpensesBtn.addEventListener(`click`, function() {
        for (let count = 0; count < optionalexpensesItem.length; count++) {
            let article = optionalexpensesItem[count].value;
            appData.optionalExpenses[count] = article;
            optionalexpensesValue.textContent += appData.optionalExpenses[count] + ' ';
            console.log(appData.optionalExpenses);
            } 
    });
    
    countBtn.addEventListener ('click', function(){
    
        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - appData.sumexpensesItem) / 30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;
           
            if ( appData.moneyPerDay <= 100) {
                levelValue.textContent ="Минимальный уровень";
            } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
                levelValue.textContent ="Средний уровень";
            } else if ( appData.moneyPerDay > 2000 ) {
                levelValue.textContent ="Высокий уровень";
            } else {
                levelValue.textContent ="Ошибка";
            }  
        } else {
            daybudgetValue.textContent = 'Произошла ошибка';
        }
    });
});
 


incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeItem.value.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener ('input', function(){
    if ( appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener ('input', function(){
    if ( appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);    
    }
});
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false, 
   
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt ("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert ("Доход в месяц с вашего депозита: " + appData.monthIncome);    
        }
    },
   
    chooseIncome: function() {
        let items = prompt('Что принесет доп. доход?', "");
        
        if (typeof(items) === 'string' && typeof(items) != null && items != '' ) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
            
        }
        else {
            console.log('херню пишешь');
        }
        str = '';
        appData.income.forEach(function(value, index){
            number = index + 1;
            str = str + number + ' - ' + value +'\n';
        });   
        alert ('Способы доп. заработка:\n' + str);    
    }
};

// for ( let  Data in appData ) {
//     console.log("Наша программа включает в себя данные: " + appData[Data]);
// }

