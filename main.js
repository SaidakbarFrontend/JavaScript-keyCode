const elKeyCode = document.querySelector('.keycode');
const elModal = document.querySelector('.modal');
const elEventList = document.querySelector('.event');
const elEventTitle = document.querySelector('.event__title');
const elEventLocationTitle = document.querySelector('.event__location');
const elEventCode = document.querySelector('.event__code');
const elEventWhich = document.querySelector('.event__which');
const elEventAltKey = document.querySelector('.event__altKey');

window.addEventListener('keyup', event => {
	if (event.isTrusted === true) {
		elModal.style.display = 'none';
	}
	if (event.isTrusted === true) {
		elEventList.style.display = 'block';
	}
	elKeyCode.textContent = event.keyCode;
	if (event.code === 'Space') {
		elEventTitle.textContent = 'Space';
	} else {
		elEventTitle.textContent = event.key;
	}
	elEventLocationTitle.textContent = 'General keys';

  elEventCode.textContent = event.code;
  elEventWhich.textContent = event.which;
	if (event.code === 'Space') {
		elEventAltKey.textContent = 'Space';
	} else {
		elEventAltKey.textContent = event.altKey;
	}

  console.log(event);
});
