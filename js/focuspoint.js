
/**
* focuspoint 1.6v 2023-8-10
* 着重号，着重点
*/
tinymce.PluginManager.add('focuspoint', function (editor, url) {
	var pluginName = '着重号';
	var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');

	editor.on('init', function () {
		editor.formatter.register({
			focuspoint: {
				inline: 'span',
				styles: {
					'text-emphasis': '%value',
					'text-emphasis-position': 'under'
				},
			}
		});
	});
	function doAct(value) {
		editor.undoManager.transact(function () {
			editor.focus();
			editor.formatter.apply('focuspoint', { value: value });
		})
	}

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
	editor.ui.registry.getAll().icons.focuspoint || editor.ui.registry.addIcon(
		'focuspoint',
		`<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
			<g>
				<title>Layer 1</title>
				<text xml:space="preserve" text-anchor="start" style="font-size:20px;font-weight:600" font-family="Noto Sans JP" font-size="22" stroke-width="0" id="svg_5" y="18" x="4.77259" stroke="#000" fill="#000000">A</text>
				<ellipse transform="rotate(20 7.22699 25.6912)" stroke-width="0" ry="1.60493" rx="1.48147" id="svg_6" cy="25.69125" cx="7.22699" stroke="#000" fill="#000000"/>
				<ellipse ry="1.25" rx="1.19565" id="svg_7" cy="21" cx="12" stroke-width="0" stroke="#000" fill="#000000"/>
			</g>
		</svg>`
	);
	editor.ui.registry.addToggleButton('focuspoint', {
		tooltip: pluginName,
		icon: 'focuspoint',
		active: false,
		onAction: function (api) {
			var dom = editor.dom;
			var block = editor.selection.getStart();
			var lhv = 0;
			block = getChildren(block, 'span')
			if (lhv == 0) {
				lhv = dom.hasClass(block, 'text_emphasis') || (dom.getStyle(block, 'text-emphasis') ? dom.getStyle(block, 'text-emphasis') : 0)
			}
			api.setActive(!api.isActive());
			doAct((lhv == 0 || lhv == 'none') ? 'dot #333' : 'none');
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