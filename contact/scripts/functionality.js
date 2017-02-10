function showEmailBox() {
	hideCurrentBackGround();
	emailBox = document.getElementsByClassName("background-email-box")[0];
	emailBox.style.display = 'block';
}

function hideEmailBox() {
	emailBox = document.getElementsByClassName("background-email-box")[0];
	emailBox.style.display = 'none';
	showCurrentBackGround();
}

function triggerArrow() {
	emailBoxArrow = document.getElementsByClassName("mail-box-arrow")[0];
	emailBoxArrow.style.display = 'block';
	
	addListener(emailBoxArrow);
	toggleClass(emailBoxArrow, 'send-mail', 'add');
}

function toggleClass(element, clzz, action) {
	var classes = element.className;
	var regex = new RegExp('\\b' + clzz + '\\b');
	var hasOne = classes.match(regex);
	clzz = clzz.replace(/\s+/g, '');
	if(action === 'add' && !hasOne) {
    	element.className = classes + clzz;
	}
	if(action === 'remove' && hasOne) {
    	element.className = classes.replace(regex, '');
	}
}

function addListener(element) {
	element.addEventListener('webkitAnimationEnd', function() {
		toggleClass(this, 'send-mail', 'remove');
	});
	element.addEventListener('animationend', function() {
		toggleClass(this, 'send-mail', 'remove');
	});
}
