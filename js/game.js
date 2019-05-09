/* välj element */
let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerUpsDiv = document.getElementById("powerups");
/* variabel för att spara bank */
let bank = 0;
let pupCost = 10;
/* lyssna på knappen efter click event */
gameButton.addEventListener('click', function() {
    bank += 1;
    gameButton.textContent = Math.floor(bank);
});
/* skapa ett powerup-element */
let powerUp = document.createElement("button");
powerUp.textContent = "ganska nice " + pupCost;
powerUp.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank = bank - pupCost;
        pupCost = pupCost * 2;
        bank = bank * 10;
        gameButton.textContent = bank;
        powerUp.textContent = "Ganska nice " + pupCost;
        bankElement.textContent = "Neto Dorito";
    } else
        bankElement.textContent = "Onice mannen";
});
powerUpsDiv.appendChild(powerUp);

/* skapa ett powerup-element */
let powerUrp = document.createElement("button");
powerUrp.textContent = "Biffboi " + pupCost;
powerUrp.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank = bank - pupCost;
        pupCost = pupCost * 2;
        bank = bank * 10;
        gameButton.textContent = bank;
        powerUrp.textContent = "Biffboi " + pupCost;
        bankElement.textContent = "Du e biff mannen";
    } else
        bankElement.textContent = "Du är inte biff mannen";
});
powerUpsDiv.appendChild(powerUrp);
button.addEventListener("click", function() {
	// kontrollera om vi har ett lejon aktivt, annars återställ clickValue
	if (lejonClicks > 0) {
		lejonClicks--;
	} else if (lejonClicks == 0) {
		clickValue = 1;		
	}
	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "Points: " + Math.floor(bank); // sätt textvärdet i p elementet till bank.
}, true);