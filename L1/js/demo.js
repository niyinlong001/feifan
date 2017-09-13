window.onload = function() {
				console.log(2);
				var btn = document.getElementById("btn");
				btn.onclick = function() {
					console.log(this);
				}
			}
window.onload = function(){
	// 后一个覆盖掉前一个
}

$(document).ready(function(){
	console.log(1);
	
});


$(document).ready(function(){
	console.log(2);
	// 可以并存，不会相互覆盖
});