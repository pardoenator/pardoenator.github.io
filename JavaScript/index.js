// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown'); //new variable also adds a value to the variable, this adds the class from CSS sheet.
var dropdownArray = Array.prototype.slice.call(dropdown,0); //adds an array variable, gives it a value
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),            //creates a button, menu and arrow, and gives them the class from the CSS sheet
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');     //this section creates the event, so when the user clicks on the button it animates the drop down menu.
			arrow.classList.remove('close');  //it also changes the class from the CSS sheet.
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');  //this section revertes the changes for when the menu is already open, it gets closed.
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);  //
};