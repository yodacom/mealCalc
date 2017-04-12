
var mealItems = {
	potato:[ "mashed","fried", "baked", "hashed"],
	meat:["porkchop", "steak", "fish", "eggs", "bacon"],
	drink:["water","tea","beer","soda","Orange Juice"],
	vegetables:["corn", "greenbeans", "asparagus", "salad"],
	bread:["toast","loaf","rye","wheat", "crackers"],
	soup:["chickenNoodle", "tomato", "potato"],
	other:["cheese"]
};

var meals = [
	{
		name: "Porkchop",
		items: [
			mealItems.meat[0],
			mealItems.potato[3],
			mealItems.bread[1],
			mealItems.drink[1]
		],
		cost: 14.95,
	},
	{
		name: "Eggs",
		items:[
			mealItems.bread[0],
			mealItems.vegetables[3],
			mealItems.other[0],
			mealItems.drink[4]
		],

		cost: 9.95
	},

	{
		name: "Soup",
		items:[
			mealItems.meat[0],
			mealItems.potato[3],
			mealItems.bread[1]
		],

		cost: 7.95
	},
];

var diners = [
	{name:"Bob",
		mealChoice:meals[0]    
	},

	{name:"Jane",
		mealChoice:meals[1] 
	},

	{name:"Bill",
		mealChoice:meals[2] 
	},

	{name:"Nancy",
		mealChoice:meals[0] 
	},

	{name:"Pete",
		mealChoice:meals[1] 
	}



];

var showDiners = function(){
	console.log(" The diners bill is:" );
	var total = 0;

	for (i=0; i<diners.length; i++){
		var mealChoiceCost = diners[i].mealChoice.cost;
		var dinersName = diners[i].name;
		console.log(dinersName);
		console.log(diners[i].mealChoice.name);
		console.log(mealChoiceCost);
		total += diners[i].mealChoice.cost;
		var tip = diners[i].mealChoice.cost * 0.2
		console.log(tip);
		var items=diners[i].mealChoice.items;
		for (j = 0; j<items.length;j++){
			console.log(items[j]);
		}
		
	}
	console.log(total);
	var totalTip = total * 0.2;
	console.log(totalTip);

};


showDiners();
// showDinerBill();

// Functions are to show list of diners, with their meal choice and items listed of that meal.
// Then display total cost for each diner's meal'
// Then show the total of all the meals, calculate and list total tip of 20% of total of all meals, and then divide that tip by a ratio of cost of each diners meal to total of all meals cost and display diners part of the total tip.  Then add that calculated tip to the total for each of the diners to pay. 


