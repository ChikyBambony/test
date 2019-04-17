let money, time;

function start () {
    money = +prompt ( "Ваш бюджет на месяц?", "$$");
    time = prompt ("Введите дату", "YYYY-MM-DD" );

    while (isNaN(money) || money = "" || money == null) {
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
    savings: false
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt (" Во сколько обойдется?", "$$");
        if ( typeof(a) === "string" && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' (typeof(b))  ) {
            console.log(typeof(b));
            appData.expenses[a] = b;   
        } else {
            i--
        }   
    };
}

appData.moneyPerDay = (appData.budget / 30).toFixed();
alert ("Ежедневный бюджет: " + appData.moneyPerDay);

if ( appData.moneyPerDay < 100) {
    console.log("Минимальный уровень");
} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
    console.log("Средний уровень");
} else if ( appData.moneyPerDay > 2000 ) {
    console.log("Высокий уровень");
} else {
     console.log("Ошибка");
}  
