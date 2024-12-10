import vscode, { CompletionItem, CompletionItemKind, CompletionList, SnippetString } from 'vscode';
import tilePosition from './position.json';

function provideCompletionItemsMarkdown(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): CompletionList<CompletionItem> | null {

	const text = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
	const lang = text.substring(text.lastIndexOf('```') + 3).split('\n')[0].replace('```', '').trim().toLowerCase();
	if (!lang.startsWith('rdview')) { return null; }
	const lineText = document.lineAt(position).text.substring(0, position.character).trim();
	return MatchCompletionItem(lineText);
}
function provideCompletionItemsRDView(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): CompletionList<CompletionItem> | null {
	const lineText = document.lineAt(position).text.substring(0, position.character).trim();
	return MatchCompletionItem(lineText);
}
function MatchCompletionItem(lineText: string): CompletionList<CompletionItem> | null {
	var list: CompletionList<CompletionItem> = new CompletionList;
	if (/((^|;)\s*)e$/g.test(lineText)) {
		list.items.push(
			{ label: 'es', insertText: new SnippetString('es.${1:Empty} ${2:0 0}[$3];'), kind: CompletionItemKind.Keyword, documentation: 'Sound event.', },
			{ label: 'eb', insertText: new SnippetString('eb.${1:Empty} ${2:0 0}[$3];'), kind: CompletionItemKind.Keyword, documentation: 'Row event.' },
			{ label: 'ea', insertText: new SnippetString('ea.${1:Empty} ${2:0 0}[$3];'), kind: CompletionItemKind.Keyword, documentation: 'Action event.' },
			{ label: 'ed', insertText: new SnippetString('ed.${1:Empty} ${2:0 0}[$3];'), kind: CompletionItemKind.Keyword, documentation: 'Decoration event.' },
			{ label: 'er', insertText: new SnippetString('er.${1:Empty} ${2:0 0}[$3];'), kind: CompletionItemKind.Keyword, documentation: 'Room event.' },
			{ label: 'ec', insertText: new SnippetString('ec.${1:Empty} ${2:0 0}[$3];'), kind: CompletionItemKind.Keyword, documentation: 'Custom event.' });
	}
	if (/((^|;)\s*)g$/g.test(lineText)) {
		list.items.push(
			{ label: 'g', insertText: new SnippetString('g ${1:0 0} ${2:1 1} #${3:f00}[$4]{\n\t$0\n};'), kind: CompletionItemKind.Keyword, documentation: 'Event group.' });
	}
	if (/[\[,].$/.test(lineText)) {
		new Map<string, any>([
			['hue', 0],
			['brightness', 100],
			['grayscale', 0],
			['offset', '0 0'],
			['offset_hue', 0],
			['offset_brightness', 100],
			['offset_grayscale', 0],
			['if', 'true'],
			['tag', 'true'],
			['tick', 1],
			['swing', 0.5],
			['hold', 1],
			['pulse', 7],
			['rowxs', '------'],
			['type', 'skipshot'],
			['interval', 1],
			['delay', 1],
			['subdivision', 2],
		]).forEach((i, j) => list.items.push({ label: j, insertText: new SnippetString(`${j}=\$\{1:${i}\},`), kind: CompletionItemKind.Keyword, documentation: 'Event property.' }));
	}

	var collection;
	var isBeat = false;
	switch (true) {
		case /es\.$/g.test(lineText):
			collection = tilePosition.events.sounds;
			break;
		case /eb\.$/g.test(lineText):
			collection = tilePosition.events.rows;
			isBeat = true;
			break;
		case /ea\.$/g.test(lineText):
			collection = tilePosition.events.actions;
			break;
		case /ed\.$/g.test(lineText):
			collection = tilePosition.events.decorations;
			break;
		case /er\.$/g.test(lineText):
			collection = tilePosition.events.rooms;
			break;
		case /ec\.$/g.test(lineText):
			collection = tilePosition.events.custom;
			break;
		default:
			break;
	}
	if (collection) {
		collection.map((i) => list.items.push({ label: i.name, insertText: new SnippetString(`${i.name} \$\{1:0 0}[$2];`), kind: CompletionItemKind.Text }));
		if (isBeat) {
			tilePosition.events.beatsSpecial.map(i => list.items.push({ label: i, insertText: new SnippetString(`${i} \$\{1:0 0\}[$2]];`), kind: CompletionItemKind.Text }));
		}
	}
	return list;
}

function resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken) {
	return null;
}

export function Init(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider('markdown', {
			provideCompletionItems: provideCompletionItemsMarkdown,
			resolveCompletionItem
		}, '.'),
		vscode.languages.registerCompletionItemProvider('rdview', {
			provideCompletionItems: provideCompletionItemsRDView,
			resolveCompletionItem
		}, '.')
	);
};
