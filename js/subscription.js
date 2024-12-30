// Function for toggling details of the "Self Makeup Course" card
function toggleSelfMakeup() {
    const selfMakeupDetails = document.getElementById("self-makeup");
    const level1Details = document.getElementById("level1");
    const level2Details = document.getElementById("level2");

    // Toggle the current card's details
    if (selfMakeupDetails.style.display === "block") {
        selfMakeupDetails.style.display = "none";
    } else {
        selfMakeupDetails.style.display = "block";
        level1Details.style.display = "none"; // Hide other cards
        level2Details.style.display = "none";
    }
}

// Function for toggling details of the "Level 1" card
function toggleLevel1() {
    const selfMakeupDetails = document.getElementById("self-makeup");
    const level1Details = document.getElementById("level1");
    const level2Details = document.getElementById("level2");

    // Toggle the current card's details
    if (level1Details.style.display === "block") {
        level1Details.style.display = "none";
    } else {
        level1Details.style.display = "block";
        selfMakeupDetails.style.display = "none"; // Hide other cards
        level2Details.style.display = "none";
    }
}

// Function for toggling details of the "Level 2" card
function toggleLevel2() {
    const selfMakeupDetails = document.getElementById("self-makeup");
    const level1Details = document.getElementById("level1");
    const level2Details = document.getElementById("level2");

    // Toggle the current card's details
    if (level2Details.style.display === "block") {
        level2Details.style.display = "none";
    } else {
        level2Details.style.display = "block";
        selfMakeupDetails.style.display = "none"; // Hide other cards
        level1Details.style.display = "none";
    }
}

// Add click events for each card
document.querySelector(".subscription-card:nth-child(1)").addEventListener("click", toggleSelfMakeup);
document.querySelector(".subscription-card:nth-child(2)").addEventListener("click", toggleLevel1);
document.querySelector(".subscription-card:nth-child(3)").addEventListener("click", toggleLevel2);
