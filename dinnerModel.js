
var dinnerItems = {
	potato:[ "mashed","fried", "baked", "hashed"],
	meat:["porkchop", "steak", "fish", "eggs", "bacon"],
	drink:["water","tea","beer","soda"],
	vegetables:["corn", "greenbeans", "asparagus", "salad"],
	bread:["toast","loaf","rye","wheat", "crackers"],
	soup:["chickenNoodle", "tomato", "potato"],
	other:["cheese"]
};

var dinners = [
	{
		name: "porkchop",
		items: [
	dinnerItems.meat[0],
	dinnerItems.potato[3],
	dinnerItems.bread[1]
],
		cost: 14.95,
	},
	{
		name: "eggs",
		items:[
	dinnerItems.bread[0],
	dinnerItems.vegetables[3],
	dinnerItems.other[0]
],
		cost: 9.95
	},

	{
		name: "soup",
		item:[
	dinnerItems.meat[0],
	dinnerItems.potato[3],
	dinnerItems.bread[1]
],
		cost: 7.95
	},
];

var diners = [
	{name:"Bob",
		dinner:dinners[0]    
	},

	{name:"Jane",
		dinner:dinners[1] 
	},

    {name:"Bill",
		dinner:dinners[1] 
	},

    {name:"Nancy",
		dinner:dinners[1] 
	},

    {name:"Pete",
		dinner:dinners[1] 
	}



];

var totalCost = function(){
    console.log("the dinners are:" )
    for (i=0; i<diners.length; i++){
	console.log(diners[i].name);
        
}
};
totalCost();


