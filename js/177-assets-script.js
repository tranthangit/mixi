// switch feature button pill click
var switchFeatures = document.getElementsByClassName("switch-feature");

var setActiveImage = function() {
	for (var i = 0; i < switchFeatures.length; i++) {
	    switchFeatures[i].classList.remove("active")
	}

	this.classList.add("active")
    var previewID = this.getAttribute("data-preview");
    const previewElement = document.getElementById("data-" + previewID);
	previewElement.src = this.dataset.image
};

for (var i = 0; i < switchFeatures.length; i++) {
    switchFeatures[i].addEventListener('click', setActiveImage, false);
}

// switch action button pill click
var switchActions = document.getElementsByClassName("switch-action");

var setActiveAction = function() {
	for (var i = 0; i < switchActions.length; i++) {
	    switchActions[i].classList.remove("active")
	}

	this.classList.add("active")
    var previewID = this.getAttribute("data-preview");
    const previewElement = document.getElementById("data-" + previewID);
	previewElement.src = this.dataset.image
};

for (var i = 0; i < switchActions.length; i++) {
    switchActions[i].addEventListener('click', setActiveAction, false);
}

// price toggle click
var prices = document.getElementsByClassName("price");
var priceToggles = document.getElementsByClassName("price-toggle");

var setActivePrice = function() {
	for (var i = 0; i < prices.length; i++) {
	    prices[i].classList.remove("visible")
	}

	for (var i = 0; i < priceToggles.length; i++) {
	    priceToggles[i].classList.remove("active")
	}

	this.classList.add("active")
    var priceID = this.getAttribute("data-price");
    const priceElement = document.getElementById("price-" + priceID);
	priceElement.classList.add("visible")
};

for (var i = 0; i < priceToggles.length; i++) {
    priceToggles[i].addEventListener('click', setActivePrice, false);
}