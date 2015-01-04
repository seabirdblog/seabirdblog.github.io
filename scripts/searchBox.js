function searchBox(){
	var oHeader = document.getElementById("header"),
		oNav = oHeader.getElementsByTagName("ul")[0],
		oBox = oHeader.getElementsByTagName("input")[0];

	oBox.onfocus = function(){
		this.className = "big";
	};

	oBox.onblur = function(){
		this.className = "";
	}
}
addLoadEvent(searchBox);