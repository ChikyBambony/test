let money, time;

function start () {
    money = +prompt ( "Ваш бюджет на месяц?", "$$");
    time = prompt ("Введите дату YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ( "Ваш бюджет на месяц?", "$$");
    }
}
start();
 
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false, 
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt (" Во сколько обойдется?", "$$");
            if ( typeof(a) === "string" && (typeof(a)) != null && (typeof(b)) != null 
                && a != '' && b != '' && a.length < 50) {
                console.log(typeof(b));
                appData.expenses[a] = b;   
            } else {
                i--;
            }           
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if ( appData.moneyPerDay < 100) {
            console.log("Минимальный уровень");
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            console.log("Средний уровень");
        } else if ( appData.moneyPerDay > 2000 ) {
            console.log("Высокий уровень");
        } else {
            console.log("Ошибка");
        }  
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt ("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert ("Доход в месяц с вашего депозита: " + appData.monthIncome);    
        }
    },
    chooseOptExpense: function() {
        for (let count = 1; count <= 3; count++) {
            let article = prompt('Статья необязательных расходов ', '');
            appData.optionalExpenses[count] = article;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет доп. доход?', "");
        //console.log(typeof(items));
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
        alert(arr);    
    }
};
/*
for ( let  Data in appData ) {
    console.log("Наша программа включает в себя данные: " + appData[Data]);
}
*/
