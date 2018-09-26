var sunmadecheese = {
	nametest: "suncheese",
    description: 'Description: Meet SunMade Cheese!This tasty cheese plate is really a solar panel plus an array of solar powered accessories.There’s a brie cheese USB port and connector for the milk bottle power bank, a swiss cheese speaker, a ricotta lantern, and a caciocavallo cheese plasma lighter.The cheese plate collects energy from the sun and stores it in the milk bottle power bank. Embedded magnets and special connectors attach the milk bottle to each of the cheeses and bring them to life. ',
	img: 'image/cheese.png',
	link: 'Link: https://www.kickstarter.com/projects/1398120161/sunmade-cheese-a-solar-panel-cleverly-disguised-as?ref=recommended&ref=discovery',
	pledged: 'Pledged: $32,387',
	backers: 'Backers: 186',
	timeleft: function() {
		var second = 1000, 
		    minute = second * 60,
		    hour = minute * 60,
		    day = hour * 24;

		var timer;

		var end = new Date('09/28/2018 2:00 PM'),
		    now = new Date();

		var distance = end - now;

		var days = Math.floor(distance / day),
		    hours = Math.floor((distance % day) / hour),
		    minutes = Math.floor((distance % hour) / minute),
		    seconds = Math.floor((distance % minute) / second);

        // PEMDAS = Parenth

        return [days, hours, minutes, seconds];

	},

    pledgelevels: [{
    	 nametest: 'A. Solar Milk: power bank',
    	 price: 'Price: pledge US$ 35 or more',
    	 includes: ['Include: Buy one Solar Milk, give one Solar milk'],
    	 available: false

    },
    {
    	 nametest: 'B. Solar Milk and Cheese plate',
    	 price: 'Price: Pledged US$ 98 or more',
    	 includes: ['Include: Solar Milk, Cheese Plate (with USBrid'],
    	 available: false

    }]
};

// var link = document.getElementById('link');

// link.textContent = 'Link to sunmadecheese';

var image = document.getElementById('image');
image.src = sunmadecheese.img;

var descriiption = document.getElementById('description'); 
descriiption.textContent = sunmadecheese.description;

var nametest = document.getElementById('nametest');
nametest.textContent = sunmadecheese.nametest;

var link = document.getElementById('link');
link.textContent = sunmadecheese.link;

var pledged = document.getElementById('pledged');
pledged.textContent = sunmadecheese.pledged;

var backers = document.getElementById('backers');
backers.textContent = sunmadecheese.backers;

console.log(sunmadecheese.timeleft());
var timeleft = sunmadecheese.timeleft();

var days = document.getElementById('days'); 
days.textContent = timeleft[0];

var hours = document.getElementById('hours');
hours.textContent = timeleft[1];

var minutes = document.getElementById('minutes');
minutes.textContent = timeleft[2];

var seconds = document.getElementById('seconds');
seconds.textContent = timeleft[3];


var pledgelevelone = document.getElementById('pledgelevelone');
// pledgelevelone.textContent = sunmadecheese.pledgelevels[0].namepledgelevelone;

var pledgeleveltwo = document.getElementById('pledgeleveltwo');
// pledgeleveltwo.textContent = sunmadecheese.pledgelevels[0].price;

var pledgelevelthree = document.getElementById('pledgelevelthree');
// pledgelevelthree.textContent = sunmadecheese.pledgelevels[0].includes;

var pledgelevelfour = document.getElementById('pledgelevelfour');
// pledgelevelfour.textContent = sunmadecheese.pledgelevels[0].available;


var pledgelevelfive = document.getElementById('pledgelevelfive');
// pledgelevelfive.textContent = sunmadecheese.pledgelevels[1].namepledgelevelone2;

var pledgelevelsix = document.getElementById('pledgelevelsix');
// pledgelevelsix.textContent = sunmadecheese.pledgelevels[1].price;

var pledgelevelseven = document.getElementById('pledgelevelseven');
// pledgelevelseven.textContent = sunmadecheese.pledgelevels[1].includes;

var pledgeleveleight = document.getElementById('pledgeleveleight');
// pledgeleveleight.textContent = sunmadecheese.pledgelevels[1].available;


for (let i = 0; i < sunmadecheese.pledgelevels.length; i++) {
	if(i === 0 ){
		pledgelevelone.textContent = sunmadecheese.pledgelevels[i].nametest;
        pledgeleveltwo.textContent = sunmadecheese.pledgelevels[i].price;
        pledgelevelthree.textContent = sunmadecheese.pledgelevels[i].includes;
        pledgelevelfour.textContent = sunmadecheese.pledgelevels[i].available;
    }
    if(i === 1 ){
    	pledgelevelfive.textContent = sunmadecheese.pledgelevels[i].nametest;
    	pledgelevelsix.textContent = sunmadecheese.pledgelevels[i].price;
    	pledgelevelseven.textContent = sunmadecheese.pledgelevels[i].includes;
    	pledgeleveleight.textContent = sunmadecheese.pledgelevels[i].available;
    }
   
    	}





















