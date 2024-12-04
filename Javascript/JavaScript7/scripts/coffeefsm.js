class Coin{
    value = 0;
    coins = [1,2,5,10,20,50];

    constructor({value, year}){
        if (typeof value !== 'number' ||
            !this.coins.includes(value)){
            throw new Error('Coin value is invalid');
        }

        this.value = value;

        if (year){
            console.log(year);
        }
    }
}

class Automat{
    menu = {};
    price = 0;
    sum = 0;

    constructor(menu){
        if (typeof menu != 'object'){
            throw new Error("Menu must be an object");
        }

        this.menu = menu;
    }

    chooseProduct(id){
        const product = this.menu[id];

        if (product == undefined){
            throw new Error("Nonexisting product");
        }

        if (this.price > 0){
            throw new Error("Already ordered");
        }

        this.price = product.price;
    }

    insertCoin({value}){
        if (typeof value !== 'number'){
            throw new Error("Invalid coin value inserted in the automat");
        }

        if (this.price <= 0){
            throw new Error("Choose product first");
        }

        console.log(value);

        this.sum += value
    }

    makeDrink(el){
        if (this.sum >= this.price){
            console.log("Here's you coffee");

            if (this.sum > this.price){
                const change = this.sum - this.price
                console.log(`Heres your change ${change}`)
                
            }

            this.price = this.sum = 0;
        }
    }
}

const app = document.getElementById('app');
const numberInput = document.createElement('input');
numberInput.type = 'number';
app.appendChild(numberInput);

const Automata = new Automat({
    'coffee': {
        price: 35,
        title: "Kafe",
    },
    'tea': {
        price: 20,
        title: "Čaj",
    },
});
Automata.chooseProduct('tea');

numberInput.addEventListener('keydown', (e) => {
    if (e.key !== "Enter"){
        return;
    }

    const h = parseInt(e.target.value);

    try{
        const C = new Coin({
            value: h,
        });

        console.log(C);
        
        Automata.insertCoin(C);

        Automata.makeDrink();
    } catch(error){
        console.error(error);
    }
});