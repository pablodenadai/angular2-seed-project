'use strict';

module.exports = function() {
	this.header = {
		getText: function() {
			return getComponentText('app', 'h1');
		}
	};
};

function getComponentText(selector, innerSelector) {
	return browser.executeScript(
		'return document.querySelector("' + selector + '").querySelector("' + innerSelector + '").textContent'
	);
};