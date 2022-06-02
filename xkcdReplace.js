var inStr = ["plane", "Plane", "PLANE"];
var outStr = ["spider", "Spider", "SPIDER"];

Array.prototype.forEach.call(document.getElementsByTagName('*'), (element) => {
	Array.prototype.forEach.call(element.childNodes, (node) => {
		if (node.nodeType === 3) {
			var nodeText = node.nodeValue;
			for (var i = 0; i < inStr.length; i++) {
				nodeText = nodeText.replaceAll(inStr[i], outStr[i]);
			}

			element.replaceChild(document.createTextNode(nodeText), node);
		}
	});
});
