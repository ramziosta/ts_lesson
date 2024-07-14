

let pizzaMenu: {name:string, price?: number, ingredients?: string[]}[] = [
    {
        name: 'Margherita',
        price: 8,
        ingredients: ['tomato sauce', 'mozzarella', 'basilicum']
    },
    {
        name: 'Pepperoni',
        price: 10,
        ingredients: ['tomato sauce', 'mozzarella', 'pepperoni', 'oregano']
    },
    {
        name: 'Hawaiian',
        price: 12,
        ingredients: ['tomato sauce', 'mozzarella', 'ham', 'pineapple']
    },
    {
        name: 'Veggie',
        price: 11,
        ingredients: ['tomato sauce', 'mozzarella', 'bell pepper', 'olive', 'onion']
    }
];

type Pizza = {
    name: string;
    price?: number;
    ingredients?: string[];
};

let cashInRegister: number = 100;
let totalSales: number = 0; // Track total sales
const orderQue: Pizza[] = [];

const addNewPizza = (name: string, price: number, ingredients?: string[]) => {
    pizzaMenu.push({
        name,
        price,
        ingredients: ingredients || [], // Provide default empty ingredients array
    });
};

const placeOrder = (pizzaName: string): Pizza | undefined => {
    if (!pizzaName) {
        console.log('Please provide a name for the pizza');
        return undefined;
    }

    const orderedPizza = pizzaMenu.find(menuPizza =>  menuPizza.name === pizzaName);

    if (!orderedPizza) {
        console.log(`Sorry, we don't have ${pizzaName}`);
        return undefined;
    }

    orderQue.push(orderedPizza);
    cashInRegister += orderedPizza.price ?? 0;
    totalSales += orderedPizza.price ?? 0; // Add price to total sales

    return orderedPizza;
};