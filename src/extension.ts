import type MarkdownIt from 'markdown-it';
import * as rd from './rdview';
import * as vscode from 'vscode';
import * as completion from './completion';
import * as themeColors from './rdview-theme.json';

export function activate(context: vscode.ExtensionContext) {
	completion.Init(context);
	const config = vscode.workspace.getConfiguration();
	if (config.get('markdown-rdview-support.reloadconfiguration')) {
		RebuildConfig();
	}
	if (config.get('markdown-rdview-support.removeconfiguration')) {
		RemoveConfig();
	}
	return {
		extendMarkdownIt(md: MarkdownIt) {
			return view(md);
		}
	};
}

export function deactivate() { }

function RebuildConfig() {
	const config = vscode.workspace.getConfiguration();
	const currentThemes = config.get<
		{
			"[*Dark*]": { textMateRules: [{ scope: string, setting: {} }] },
			"[*Light*]": { textMateRules: [{ scope: string, setting: {} }] }
		}
	>('editor.tokenColorCustomizations') ??
	{
		"[*Dark*]": { textMateRules: [] },
		"[*Light*]": { textMateRules: [] }
	};
	const Dark = currentThemes["[*Dark*]"]?.textMateRules ?? [];
	const Light = currentThemes["[*Light*]"]?.textMateRules ?? [];
	const newTheme = {
		...currentThemes,
		"[*Dark*]": {
			"textMateRules": [
				...Dark.filter(item2 => !themeColors.dark.find(item1 => item1.scope === item2.scope)) || [],
				...themeColors.dark
			]
		},
		"[*Light*]": {
			"textMateRules": [
				...Light.filter(item2 => !themeColors.light.find(item1 => item1.scope === item2.scope)) || [],
				...themeColors.light
			]
		}
	};

	config.update('editor.tokenColorCustomizations', newTheme, vscode.ConfigurationTarget.Global);
	config.update('markdown-rdview-support.reloadconfiguration', false, vscode.ConfigurationTarget.Global);
	config.update('markdown-rdview-support.firstload', false, vscode.ConfigurationTarget.Global);
}

function RemoveConfig() {
	const config = vscode.workspace.getConfiguration();
	const currentThemes = config.get<
		{
			"[*Dark*]": { textMateRules: [{ scope: string, setting: {} }] },
			"[*Light*]": { textMateRules: [{ scope: string, setting: {} }] }
		}
	>('editor.tokenColorCustomizations') ?? {
		"[*Dark*]": { textMateRules: [] },
		"[*Light*]": { textMateRules: [] }
	};
	const Dark = currentThemes["[*Dark*]"]?.textMateRules ?? [];
	const Light = currentThemes["[*Light*]"]?.textMateRules ?? [];
	const newTheme = {
		...currentThemes,
		"[*Dark*]": {
			"textMateRules": Dark.filter(item => !themeColors.dark.find(i => i.scope === item.scope))
		},
		"[*Light*]": {
			"textMateRules": Light.filter(item => !themeColors.light.find(i => i.scope === item.scope))
		}
	};
	
	config.update('editor.tokenColorCustomizations', newTheme, vscode.ConfigurationTarget.Global);
	config.update('markdown-rdview-support.removeconfiguration', false, vscode.ConfigurationTarget.Global);
}

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

