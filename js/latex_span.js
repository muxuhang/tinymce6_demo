
/**
* latex_span 1.6v 2023-11-28
* 公式预览
*/
tinymce.PluginManager.add('latex_span', function (editor, url) {
	var pluginName = '公式预览';
	var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');
	const getLatex = editor.getParam('latex_callback', undefined, 'function');
	editor.on('init', function () {
		editor.formatter.register({
			latex_span: {
				inline: 'span',
				classes: 'latex_span',
				styles: {
					background: 'red'
				},
			}
		});
		const writer = tinymce.html.Writer({ indent: true });
		writer.start('node', { attr: 'value' });
		writer.end('node');
		console.log(writer.getContent());
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