Class Dinner {
    constructor(
        dinnerName,
        items[],
        cost,
    )
}

dinnerItems {
    potato:{ mashed,fried, baked, hashed},
    meat:{porkchop, steak, fish, eggs, bacon},
    drink:{water,tea,beer,soda},
    vegetables:{corn, greenbeans, asparagus, salad}
    bread:[toast,loaf,rye,wheat, crackers]
    soup:[chickenNoodle, tomato, potato]
    other:[cheese]
}
var dinnersSchema = new dinnersSchema({
    dinnerName: String,
    dinnerItems: Array,
    cost: Number
})

var dinners = [
    {
    name: porkchop,
    items: [
        meat=meat[0],
        potato=potato[3],
        vegetable=null,
        bread=[1]
    ],
    cost: 14.95,
},
    {
    name: eggs,
    items:[
        meat=meat[4],
        potato=potato[2],
        vegetable=vegetable[3],
        bread=[0],
    ],
    cost: 9.95
    },

    {
        name: soup,
        [
          soup:[0],
          bread=[4],
          other:[0]
        ],
    cost: 7.95
    },
]


