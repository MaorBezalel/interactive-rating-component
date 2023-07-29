const ratingPointOptions = document.querySelectorAll(".rating-point-circle");
const sumbitButton = document.querySelector("#sumbit-button");
const theChosenRating = document.querySelector("#chosen-rating");
const rating_section = document.querySelector(".rating-section");
const thank_section = document.querySelector(".thank-you-section");

let currentlyChosenRating = null;


function findAnySelectedRatingPoint() {
    return document.querySelector(".selected-rating-point")
}

function isItSelected(possiblyPreviouslySelectedRatingPoint) { 
    return possiblyPreviouslySelectedRatingPoint !== null;
}

function hasAnyRatingPointBeenChosen(currentlyChosenRatingPoint) {
    return currentlyChosenRatingPoint !== null;
}


ratingPointOptions.forEach(ratingPointOption => {
    ratingPointOption.addEventListener("click", clickEvent => {
        const someRatingPoint = findAnySelectedRatingPoint();

        if (isItSelected(someRatingPoint)) {
            someRatingPoint.classList.remove("selected-rating-point");
        }
        
        currentlyChosenRating = clickEvent.target;
        currentlyChosenRating.classList.add("selected-rating-point");
    })
});

sumbitButton.addEventListener("click", clickEvent => {
    if (hasAnyRatingPointBeenChosen(currentlyChosenRating)) {
        theChosenRating.innerText = currentlyChosenRating.innerText;

        rating_section.classList.add("hidden");
        thank_section.classList.remove("hidden");
    }
});