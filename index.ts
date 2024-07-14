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
type order = {
    orderedPizza: Pizza;
    status: string;
    id: number;
};

let cashInRegister: number = 100;
let totalSales: number = 0; // Track total sales
const orderQue: order[] = [];

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
    let orderId: number = orderQue.length+1;
    const newOrder: order = { orderedPizza, status: 'ordered', id: orderId };
    orderQue.push(newOrder);
    cashInRegister += orderedPizza.price ?? 0;
    totalSales += orderedPizza.price ?? 0; // Add price to total sales

    return orderedPizza;
};

const completeOrder = (orderId:number): order | undefined=> {
    let completedPizza: order | undefined = orderQue.find(order => orderId === order.id);
    if(!completedPizza) {
        console.log('Order not found');
        return;
    }
    completedPizza.status = 'completed';
    return completedPizza;
}


addNewPizza("Jalapeno Jack", 14, ["tomato, jalapeno, cheese"]);
addNewPizza("Pepperoni Feast", 12, ["tomato, mozzarella, pepperoni"]);
console.log(pizzaMenu.length);

placeOrder("Jalapeno Jack");
placeOrder("Pepperoni Feast");
placeOrder("Hawaiian");

const completedOrder = completeOrder(3); // Store the returned pizza
if (completedOrder) {
    console.log(` Order number ${completedOrder.id} has been ${completedOrder.status}`);
} else {
    console.log("Order not found");
}

