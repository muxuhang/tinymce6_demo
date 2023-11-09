
/**
* drawingBoard 1.6v 2023-8-10
* 
*/
tinymce.PluginManager.add('drawingBoard', function (editor, url) {
	var pluginName = '绘画板';
	var iframeUrl = tinymce.baseURL + '/drawing/drawing.html'
	console.log(iframeUrl);
	var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');

	editor.on('init', function () {
		editor.formatter.register({
			drawingBoard: {
				inline: 'div',
				styles: {
					display: 'inline-block'
				},
			}
		});
	});

	function getChildren(curEle, tagName) {
		if (curEle.nodeName.toLowerCase() === tagName) { return curEle; }
		var nodeList = curEle.childNodes;
		var ary = [];
		if (/MSIE(6|7|8)/.test(navigator.userAgent)) {
			for (var i = 0; i < nodeList.length; i++) {
				var curNode = nodeList[i];
				if (curNode.nodeType === 1) {
					ary[ary.length] = curNode;
				}
			}
		} else {
			ary = Array.prototype.slice.call(curEle.children);
		}

		// 获取指定子元素
		if (typeof tagName === "string") {

			for (var k = 0; k < ary.length; k++) {
				curTag = ary[k];
				if (curTag.nodeName.toLowerCase() !== tagName.toLowerCase()) {
					ary.splice(k, 1);
					k--;
				}
			}
		}

		return ary[0];
	}

	// var getCanvasValue = function (editor) {//获取选中节点的值作为初始值
	// 	return editor.dom.getParent(editor.selection.getNode(), '[data-tp-open-url]')?.innerText
	// }
	//@ts-ignore
	window.canvasData = ''

	function openDialog(params) {
		return editor.windowManager.openUrl({
			title: '绘画板',
			size: "large",
			url: iframeUrl,
			buttons: [
				{
					type: 'cancel',
					text: '关闭'
				},
				{
					type: 'custom',
					text: '保存',
					name: 'save',
					primary: true
				},
			],
			onAction: function name(api, details) {
				if (details.name === 'save') {
					let imgUrl = window.canvasData.toDataURL('image/png');
					// 插入图片
					editor.execCommand('mceInsertContent', false, editor.dom.createHTML("img", {
						src: imgUrl,
						width: 240
					}));
					api.close();
				}
			}
		})
	}
	editor.ui.registry.getAll().icons.drawingBoard || editor.ui.registry.addIcon(
		'drawingBoard',
		`画`
	);
	editor.ui.registry.addButton('drawingBoard', {
		tooltip: pluginName,
		icon: 'drawingBoard',
		onAction: function () {
			openDialog()
		},
	});

	return {
		getMetadata: function () {
			return {
				name: pluginName,
				url: "",
			};
		}
	};
});