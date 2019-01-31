function removeElement(className) {
	// Removes an element from the document
	var element = document.getElementsByClassName(className)[0];
	element.parentNode.removeChild(element);
}

// function addElement(parentId, elementTag, elementId, html) {
// 	// Adds an element to the document
// 	var p = document.getElementById(parentId);
// 	var newElement = document.createElement(elementTag);
// 	newElement.setAttribute('id', elementId);
// 	newElement.innerHTML = html;
// 	p.appendChild(newElement);
// }

removeElement("login_mainframe");

document.body.innerHTML = `
<div class="wrapper">
	<div class="color-overlay"></div>
	<div class="container">
		<form class="form login-form" name="userForm" action="Login.jsp" method="post">
			<h1>Sign In</h1>
			<input type="hidden" name="action" class="hidden" id="action" value="login" />
			<input type="hidden" name="schoolfavorite" class="hidden" id="schoolfavorite" value="1" />
			<select style="visibility: hidden" name="usertype" size="1" id="usertype" class="select1">
				<option value="0">Personal</option>
				<option value="1" selected="selected">Elev</option>
				<option value="2">Vårdnadshavare</option>
			</select>
			<input class="bg-white" id="ssusername" name="ssusername" type="text" placeholder="Email" />
			<input class="bg-white" id="sspassword" name="sspassword" value type="password" placeholder="Password" />
			<button type="submit" id="login-button">Login</button>
		</form>
	</div>
	<ul class="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>
`;