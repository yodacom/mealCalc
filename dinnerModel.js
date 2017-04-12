
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

var showDiners = function(){
    console.log("the dinners are:" )
    for (i=0; i<diners.length; i++){
	console.log(diners[i].name);
        
}


// Functions are to show list of diners, with their meal choice and items listed of that meal.
// Then display total cost for each diner's meal'
// Then show the total of all the meals, calculate and list total tip of 20% of total of all meals, and then divide that tip by a ratio of cost of each diners meal to total of all meals cost and display diners part of the total tip.  Then add that calculated tip to the total for each of the diners to pay. 

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
