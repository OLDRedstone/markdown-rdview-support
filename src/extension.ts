import type MarkdownIt from 'markdown-it';
import * as rd from './rdview';
import * as vscode from 'vscode';
import * as completion from './completion';

export function activate(context: vscode.ExtensionContext) {
	completion.Init(context);
	return {
		extendMarkdownIt(md: MarkdownIt) {
			return view(md);
		}
	};
}

export function deactivate() { }

function view(md: MarkdownIt): MarkdownIt {
	const defaultRender = md.renderer.rules.fence;

	md.renderer.rules.fence = function (tokens, idx, options, env, self) {
		const token = tokens[idx];
		const lang = token.info.trim().toLowerCase();
		const code = token.content;
		if (!(lang.startsWith("rdview"))) {
			if (defaultRender) { return defaultRender(tokens, idx, options, env, self); }
			else { return ''; };
		}
		return rd.RDViewRender(lang, code);
	};

	return md;
}

