
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
		item:[
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


// I want to show list of diners, with their meal chosen and items of that meal.
// Then display total cost for each diner's meal'
// Then show the total of all the meals, calculate tip of 20% of total, and then divide that tip by a ratio of cost of each meal for each diner and show each diners part of the total tip.  Then add the tip to each diners total for display of a total owed for each diner. 

var i;
var text = " ";
var dinersNames = function(){
	console.log("the Diners are:" );
	for (i = 0; i < diners.length; i++)
		console.log(diners[i].name);
	return dinersNames();

	function dinerMealCost() {
		var totalMeal;
		for (totalMeal in meals) {
			var list = document.getElementById("total");
			list.innerHTML = list.innerHTML + letters[forincounter];
		}
	}
};

for(x in meals){
	var temp = "<li>"+x+"<ul>";
	for(y in meals[x]){
		temp += "<li>"+y+":"+meals[x][y]+"</li>";
	}
	temp += "</ul></li>";
	$("ul:nth-child(2)").append(temp);
}
 