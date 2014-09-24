(function(){
	var congrats = document.getElementsByClassName('congrats')[0],
			counter = document.getElementsByClassName('counter')[0],
			clickCounter = 0;

			congrats.addEventListener('click', function(){
				clickCounter ++;
				counter.innerText = 'You was congrats ' + clickCounter + ' times';
			}, false);
})();