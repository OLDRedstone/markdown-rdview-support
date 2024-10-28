import vscode, { CompletionItem, CompletionItemKind, CompletionList } from 'vscode';
import tilePosition from './position.json';

function provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): CompletionList<CompletionItem> | null {

    const text = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
    const lang = text.substring(text.lastIndexOf('```') + 3).split('\n')[0].replace('```', '').trim().toLowerCase();
    if (lang.startsWith('rdview')) {
        const lineText = document.lineAt(position).text.substring(0, position.character).trim();
        var list: CompletionList<CompletionItem> = new CompletionList;
        if (/(^|;\s*|\s*)(e[sbadrc]|g)?/g.test(lineText)) {
            list.items.push(
                { label: 'es', detail: 'Sound event.', insertText: `es.Empty 0 0;` },
                { label: 'eb', detail: 'Row event.', insertText: `eb.Empty 0 0;` },
                { label: 'ea', detail: 'Action event.', insertText: `ea.Empty 0 0;` },
                { label: 'ed', detail: 'Decoration event.', insertText: `ed.Empty 0 0;` },
                { label: 'er', detail: 'Room event.', insertText: `er.Empty 0 0;` },
                { label: 'ec', detail: 'Custom event.', insertText: `ec.Empty 0 0;` },
                { label: 'g', detail: 'Event group.', insertText: `g 0 0 1 1;` });
        }
        if (/[\[,].$/.test(lineText)) {
            new Map<string,any>([
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
                ['type','skipshot'],
                ['interval',1],
                ['delay',1],
                ['subdivision',2],
            ]).forEach((i, j) => list.items.push({ label: j + `=${i},` }));
        }

        var collection;
        var isBeat = false;
        switch (true) {
            case /(^|;\s*|\s*)es\s*\.\s*\w*/g.test(lineText):
                collection = tilePosition.events.sounds;
                break;
            case /(^|;\s*|\s*)eb\s*\.\s*\w*/g.test(lineText):
                collection = tilePosition.events.rows;
                isBeat = true;
                break;
            case /(^|;\s*|\s*)ea\s*\.\s*\w*/g.test(lineText):
                collection = tilePosition.events.actions;
                break;
            case /(^|;\s*|\s*)ed\s*\.\s*\w*/g.test(lineText):
                collection = tilePosition.events.decorations;
                break;
            case /(^|;\s*|\s*)er\s*\.\s*\w*/g.test(lineText):
                collection = tilePosition.events.rooms;
                break;
            case /(^|;\s*|\s*)ec\s*\.\s*\w*/g.test(lineText):
                collection = tilePosition.events.custom;
                break;
            default:
                break;
        }
        if (collection) {
            collection.map((i) => { list.items.push({ label: i.name + ';' }); });
            if (isBeat) {
                tilePosition.events.beatsSpecial.map(i => list.items.push({ label: i + ';' }));
            }
        }
        return list;
    }
    return null;
}

function resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken) {
    return null;
}

export function Init(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('markdown', {
        provideCompletionItems,
        resolveCompletionItem
    }, '.'));
};
