class Application {
    constructor() {
        this.stockArray = [];

        this.startAmount = document.getElementById('start-amount');
        this.amountReplenishment = document.getElementById('amount-replenishment');
        this.depositTerm = document.getElementById('deposit-term');
        this.depositCurrency = document.getElementById('deposit-currency');
        this.button = document.getElementById('button');
        this.button.addEventListener('click', this.handleButtonClick);
    }
    handleButtonClick = () => {
        const startAmount = Number(this.startAmount.value);
        const amountReplenishment = Number(this.amountReplenishment.value);
        const depositTerm = Number(this.depositTerm.value);
        const depositCurrency = this.depositCurrency.value;

        if (startAmount === '' || amountReplenishment === '' || depositTerm === '' || depositCurrency === '') {
            alert('Все поля должны быть заполнены');
            return;
        }
        if (isNaN(Number(depositTerm)) || depositTerm < 1 || depositTerm % 1 !== 0) {
            alert('Срок вклада указано неправильно ');
            return;
        }
        if (isNaN(Number(amountReplenishment)) || amountReplenishment < 0) {
            alert('Сумма ежемесячного пополнения указано неправильно ');
            return;
        }
        if (isNaN(Number(startAmount)) || startAmount < 0) {
            alert('Начальная сумма указано неправильно ');
            return;
        }
        if (depositCurrency === 'USD' || depositCurrency === 'RUB') {
            let res = [{ "bankName": "Газпромбанк", "investName": "Ваш успех", "currency": "RUB", "incomeType": 6.22, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": false },
                { "bankName": "Кредит Европа Банк", "investName": "Оптимальный на 2 года", "currency": "RUB", "incomeType": 6.45, "sumMin": 100000, "sumMax": null, "termMin": 24, "termMax": 24, "canDeposit": false },
                { "bankName": "Банк Зенит", "investName": "Праздничный 500+", "currency": "RUB", "incomeType": 6, "sumMin": 30000, "sumMax": null, "termMin": 17, "termMax": 17, "canDeposit": false },
                { "bankName": "Еврофинанс Моснарбанк", "investName": "Классический", "currency": "RUB", "incomeType": 6.95, "sumMin": 30000, "sumMax": null, "termMin": 12, "termMax": 24, "canDeposit": false },
                { "bankName": "Джей энд Ти Банк", "investName": "Магнус-Онлайн", "currency": "RUB", "incomeType": 6.8, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": false },
                { "bankName": "МТС Банк", "investName": "В вашу пользу", "currency": "RUB", "incomeType": 6.75, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
                { "bankName": "Эс-Би-Ай Банк", "investName": "Свои правила Онлайн", "currency": "RUB", "incomeType": 6.7, "sumMin": 30000, "sumMax": 30000000, "termMin": 24, "termMax": 24, "canDeposit": false },
                { "bankName": "Банк Уралсиб", "investName": "Прогноз отличный", "currency": "RUB", "incomeType": 6.7, "sumMin": 100000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
                { "bankName": "Инвестторгбанк", "investName": "ИТБ-Постоянный доход", "currency": "RUB", "incomeType": 6.6, "sumMin": 50000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
                { "bankName": "Транскапиталбанк", "investName": "ТКБ.Постоянный доход", "currency": "RUB", "incomeType": 6.6, "sumMin": 50000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
                { "bankName": "Совкомбанк", "investName": "Зимний праздник с Халвой", "currency": "RUB", "incomeType": 5.6, "sumMin": 50000, "sumMax": null, "termMin": 2, "termMax": 2, "canDeposit": true },
                { "bankName": "Агророс", "investName": "Медовый месяц", "currency": "RUB", "incomeType": 5.51, "sumMin": 20000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
                { "bankName": "Росдорбанк", "investName": "Онлайн-1", "currency": "RUB", "incomeType": 5.1, "sumMin": 100000, "sumMax": 150000000, "termMin": 1, "termMax": 1, "canDeposit": true },
                { "bankName": "Национальный Стандарт", "investName": "Сберегательный стандарт", "currency": "RUB", "incomeType": 5.1, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
                { "bankName": "Россия", "investName": "Морозные узоры", "currency": "RUB", "incomeType": 5, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
                { "bankName": "Кузнецкий Мост", "investName": "Накопительный", "currency": "RUB", "incomeType": 4.85, "sumMin": 50000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
                { "bankName": "Тексбанк", "investName": "Универсальный", "currency": "RUB", "incomeType": 4.6, "sumMin": 10000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
                { "bankName": "Морской Банк", "investName": "Правильным курсом +", "currency": "RUB", "incomeType": 4.55, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
                { "bankName": "Норвик Банк", "investName": "Лаконичный", "currency": "RUB", "incomeType": 4.5, "sumMin": 500, "sumMax": 50000000, "termMin": 1, "termMax": 1, "canDeposit": true },
                { "bankName": "Промсельхозбанк", "investName": "Конструктор", "currency": "RUB", "incomeType": 4.5, "sumMin": 10000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
                { "bankName": "Акибанк", "investName": "Онлайн", "currency": "RUB", "incomeType": 6.5, "sumMin": 1000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
                { "bankName": "Банк БКФ", "investName": "Ключевой стандарт", "currency": "RUB", "incomeType": 6.5, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 13, "canDeposit": true },
                { "bankName": "Экспобанк", "investName": "Специальный (в конце срока)", "currency": "RUB", "incomeType": 6.35, "sumMin": 50000, "sumMax": 10000000, "termMin": 6, "termMax": 6, "canDeposit": true },
                { "bankName": "Инвестторгбанк", "investName": "ИТБ-Пополняемый", "currency": "RUB", "incomeType": 6.15, "sumMin": 50000, "sumMax": 30000000, "termMin": 6, "termMax": 6, "canDeposit": true },
                { "bankName": "Транскапиталбанк", "investName": "ТКБ.Пополняемый", "currency": "RUB", "incomeType": 6.15, "sumMin": 50000, "sumMax": 30000000, "termMin": 6, "termMax": 6, "canDeposit": true },
                { "bankName": "Евроазиатский Инвестиционный Банк", "investName": "Классика", "currency": "RUB", "incomeType": 6.1, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 12, "canDeposit": true },
                { "bankName": "Тимер Банк", "investName": "Надежный выбор", "currency": "RUB", "incomeType": 6, "sumMin": 10000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
                { "bankName": "Евразийский Банк", "investName": "TURBO MAXIMUM", "currency": "RUB", "incomeType": 6, "sumMin": 30000, "sumMax": 299999, "termMin": 6, "termMax": 6, "canDeposit": true },
                { "bankName": "Таврический Банк", "investName": "Достижимый (онлайн)", "currency": "RUB", "incomeType": 6, "sumMin": 50000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
                { "bankName": "Экспобанк", "investName": "Юбилейный 25 (в конце срока)", "currency": "RUB", "incomeType": 6.5, "sumMin": 100000, "sumMax": 20000000, "termMin": 12, "termMax": 12, "canDeposit": true },
                { "bankName": "Крокус-Банк", "investName": "Ежемесячный доход", "currency": "RUB", "incomeType": 6.35, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
                { "bankName": "Промсельхозбанк", "investName": "Ваш выбор", "currency": "RUB", "incomeType": 6.3, "sumMin": 10000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
                { "bankName": "Нацинвестпромбанк", "investName": "Прибыльный", "currency": "RUB", "incomeType": 6.3, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
                { "bankName": "Ишбанк", "investName": "Накопительный", "currency": "RUB", "incomeType": 6.25, "sumMin": 100000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
                { "bankName": "Примсоцбанк", "investName": "Новогодний чулок (333 дня)", "currency": "RUB", "incomeType": 6.2, "sumMin": 10000, "sumMax": null, "termMin": 11, "termMax": 11, "canDeposit": true },
                { "bankName": "Еврофинанс Моснарбанк", "investName": "Пополняемый", "currency": "RUB", "incomeType": 6.75, "sumMin": 1000000, "sumMax": null, "termMin": 12, "termMax": 24, "canDeposit": true },
                { "bankName": "Евроазиатский Инвестиционный Банк", "investName": "VIP", "currency": "RUB", "incomeType": 6.35, "sumMin": 1000000, "sumMax": null, "termMin": 9, "termMax": 12, "canDeposit": true },
                { "bankName": "Российская Финансовая Корпорация", "investName": "Универсальный", "currency": "RUB", "incomeType": 6, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
                { "bankName": "Московский Кредитный Банк", "investName": "МЕГА Онлайн", "currency": "RUB", "incomeType": 5.8, "sumMin": 1000, "sumMax": null, "termMin": 3, "termMax": 5, "canDeposit": true },
                { "bankName": "Александровский", "investName": "Черника 19/20", "currency": "RUB", "incomeType": 5.6, "sumMin": 20000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
                { "bankName": "Финанс Бизнес Банк", "investName": "Мандариновый!", "currency": "RUB", "incomeType": 5.6, "sumMin": 50000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
                { "bankName": "ЦентроКредит", "investName": "Доход Плюс", "currency": "USD", "incomeType": 1.15, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
                { "bankName": "Совкомбанк", "investName": "Удобный (в долларах)", "currency": "USD", "incomeType": 1, "sumMin": 500, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
                { "bankName": "Веста", "investName": "Веста - Копилка", "currency": "USD", "incomeType": 1, "sumMin": 10000, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
                { "bankName": "Славия", "investName": "Славный Капитал", "currency": "USD", "incomeType": 0.85, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 4, "canDeposit": true },
                { "bankName": "Роскосмосбанк", "investName": "Комфортный", "currency": "USD", "incomeType": 0.8, "sumMin": 500, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
                { "bankName": "ФорБанк", "investName": "Срочный накопительный", "currency": "USD", "incomeType": 0.8, "sumMin": 10000, "sumMax": 500000, "termMin": 3, "termMax": 3, "canDeposit": true },
                { "bankName": "Московский Областной Банк", "investName": "Гарантированный доллар", "currency": "USD", "incomeType": 0.75, "sumMin": 50, "sumMax": null, "termMin": 4, "termMax": 4, "canDeposit": true },
                { "bankName": "Объединенный Резервный Банк", "investName": "ОРБ-Накопительный (в конце срока)", "currency": "USD", "incomeType": 1.6, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
                { "bankName": "Банк Агора", "investName": "Срочный", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
                { "bankName": "Тинькофф Банк", "investName": "СмартВклад (с повышенной ставкой)", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
                { "bankName": "Первый Инвестиционный Банк", "investName": "Закон сохранения", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
                { "bankName": "Новый Век", "investName": "Сберегательный", "currency": "USD", "incomeType": 1.5, "sumMin": 5000, "sumMax": 20000, "termMin": 12, "termMax": 12, "canDeposit": true }
            ];
            class BankProduct {
                constructor(bankName, investName, currency, incomeType, sumMin, sumMax, termMin, termMax, canDeposit) {
                    this.bankName = bankName;
                    this.investName = investName;
                    this.currency = currency;
                    this.incomeType = incomeType;
                    this.sumMin = sumMin;
                    this.sumMax = sumMax;
                    this.termMin = termMin;
                    this.termMax = termMax;
                    this.canDeposit = canDeposit;
                }
            }
            class Deposit {
                constructor(userCurrency, userDeposit, userTerm) {
                    this.userCurrency = userCurrency;
                    this.userDeposit = userDeposit;
                    this.userTerm = userTerm;
                }
            }
            let userDeposit = new Deposit(startAmount, amountReplenishment, depositTerm);
            class Calculator {
                constructor(startAmount, amountReplenishment, depositTerm, percent) {
                    this.startAmount = startAmount;
                    this.amountReplenishment = amountReplenishment;
                    this.depositTerm = depositTerm;
                    this.percent = percent;
                }
                BankProduct() {
                    for (let i = 0; i < this.depositTerm; i++) {
                        this.startAmount = this.startAmount + this.startAmount * this.percent / 100 / 12;
                        this.startAmount = this.startAmount + this.amountReplenishment;
                    }
                    this.total = Math.round(this.startAmount - this.amountReplenishment);
                }
            }
            let incomeTypeValue = 0;
            let bankProducts = [];
            let bankFind = false;
            let tableContent = '<th>Название банка</th><th>   Вклад   </th><th>   Процент   </th><th> Итоговая сумма </th>';
            for (let i = 0; i < res.length; i++) {
                if (res[i].currency === depositCurrency) {
                    if (+res[i].sumMin < startAmount || +res[i].sumMin === +startAmount || res[i].sumMin === null) {
                        if (+res[i].sumMax === startAmount || +res[i].sumMax > +startAmount || res[i].sumMax === null) {
                            if (+res[i].termMin < +depositTerm || +res[i].termMin === +depositTerm || res[i].termMin === null) {
                                if (+res[i].termMax === +depositTerm || +res[i].termMax > +depositTerm || res[i].termMax === null) {
                                    let a = false;
                                    if (amountReplenishment > 0) {
                                        a = true;
                                    }
                                    if (res[i].canDeposit === a) {
                                        if (res[i].incomeType > incomeTypeValue) {
                                            incomeTypeValue = res[i].incomeType;
                                            tableContent = '<th>Название банка</th><th>   Вклад   </th><th>   Процент   </th><th> Итоговая сумма </th>';
                                            document.getElementById('table').innerHTML = tableContent;
                                            if (+res[i].incomeType < +incomeTypeValue) {
                                                tableContent = '<th>Название банка</th><th>   Вклад   </th><th>   Процент   </th><th> Итоговая сумма </th>';
                                                document.getElementById('table').innerHTML = tableContent;
                                            }
                                        }
                                        if (res[i].incomeType === incomeTypeValue) {
                                            incomeTypeValue = res[i].incomeType;

                                            bankProducts = new BankProduct(res[i].bankName, res[i].investName, res[i].currency, res[i].incomeType, res[i].sumMin, res[i].sumMax, res[i].termMin, res[i].termMax, res[i].canDeposit);
                                            let bankPercent = res[i].incomeType;
                                            let bankTotalAmount = new Calculator(userDeposit.userCurrency, userDeposit.userDeposit, userDeposit.userTerm, bankPercent);
                                            bankTotalAmount.BankProduct();
                                            console.log(res[i].incomeType); //TEST
                                            console.log(res[i].bankName); //TEST

                                            tableContent = tableContent + `<tr><td> ${res[i].bankName} </td><td> ${res[i].investName} </td><td>${res[i].incomeType}</td><td>${bankTotalAmount.total}</td></tr>`;
                                            document.getElementById('table').innerHTML = tableContent;
                                            bankFind = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (!bankFind === true) {
                tableContent = '';
                document.getElementById('table').innerHTML = tableContent;
                alert('Нет подходящих вариантов');
            }
        } else {
            alert('Некорректное значение валюты ');
            return;
        }
    }
}