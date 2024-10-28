import { RDViewWindow, RDEvent, RDGroup, BeatsSpecial, RDOneshotBeatSubType } from './rdview';
import { Color } from 'vscode';

export function ConstructObjs(window: RDViewWindow) {
	var html: string = `<div class="RDView" style="--column:${window.Column};--row:${window.Row};--scale:${window.Scale};">`;
	for (var obj of window.Objects) {
		html += ConstructDivObject(obj);
	}
	html += `</div>`;
	return html;
}

function ConstructDivObject(obj: RDEvent | RDGroup): string {
	if (obj instanceof RDEvent) {
		return `<div class="event ${obj.BeatType === undefined ? `${obj.SubType}` : 'beat'}"style="${ConstructCssProperties(
			new Map<string, any>([
				['beat', obj.Style.Beat],
				['y', obj.Style.Y],
				['event-x', obj.EventX],
				['event-y', obj.EventY],
				['event-width', obj.Width],
				['event-height', obj.Height],
				['hue', obj.Style.Hue],
				['brightness', obj.Style.Brightness],
				['grayscale', obj.Style.Grayscale],
				['offset-beat', obj.ClickStyle?.Beat],
				['offset-y', obj.ClickStyle?.Y],
				['offset-hue', obj.ClickStyle?.Hue],
				['offset-brightness', obj.ClickStyle?.Brightness],
				['offset-grayscale', obj.ClickStyle?.Grayscale],
				['tick', obj.BeatStyle?.Tick],
				['delay', obj.BeatStyle?.Delay],
				['interval', obj.BeatStyle?.Interval],
				['subdivision', obj.BeatStyle?.Subdivision],
				['hold', obj.BeatStyle?.Hold],
				['pulse', obj.BeatStyle?.Pulse],
				['swing', obj.BeatStyle?.Swing],
			]))
			}">${ConstructSubDiv(
				[obj.Condition !== undefined, `condition-${obj.Condition}`, () => ''],
				[obj.Tag === true, `tag`, () => ''],
				[obj.BeatType === BeatsSpecial.AddClassicBeat, `classicbeat`, () => {
					var result: string = '';
					for (var i = 0; i < 6; i++) {
						result += `<div></div>`;
					}
					return result;
				}],
				[obj.BeatType === BeatsSpecial.AddFreeTimeBeat, `add freetime`, () => ''],
				[obj.BeatType === BeatsSpecial.PulseFreeTimeBeat, `pulse freetime`, () => ''],
				[obj.BeatType === BeatsSpecial.AddOneshotBeat && obj.BeatStyle !== undefined && obj.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Freezeshot), `freezeshot`, () => ''],
				[obj.BeatType === BeatsSpecial.AddOneshotBeat && obj.BeatStyle !== undefined && obj.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Burnshot), `burnshot`, () => ''],
				[obj.BeatType === BeatsSpecial.AddOneshotBeat && obj.BeatStyle !== undefined && obj.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Subdivision), `subdivision`, () => {
					var result: string = '';
					for (var i = 0; i < (obj.BeatStyle?.Subdivision ?? 1) - 1; i++) {
						result += `<div></div>`;
					}
					return result;
				}],
				[obj.BeatType === BeatsSpecial.SetRowXs, `row-xs`, () => {
					var result: string = '';
					for (var i = 0; i < 6; i++) {
						result += (obj.BeatStyle?.RowXs[i] === 'x') ? `<div class="x"></div>` : `<div></div>`;
					}
					return result;
				}],
				[(obj.BeatType === BeatsSpecial.AddClassicBeat || obj.BeatType === BeatsSpecial.AddFreeTimeBeat || obj.BeatType === BeatsSpecial.PulseFreeTimeBeat) && (obj.BeatStyle?.Hold ?? 0) > 0, `holdbeat`, () => ''],
				[obj.BeatType === BeatsSpecial.AddOneshotBeat && obj.BeatStyle !== undefined && obj.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Skipshot), `skipshot`, () => ''],
			)}</div>`;
	}
	else if (obj instanceof RDGroup) {
		return `<div class="event group"style="${ConstructCssProperties(
			new Map<string, any>([
				['group-beat', obj.Style.Beat],
				['group-y', obj.Style.Y],
				['group-width', obj.Width],
				['group-height', obj.Height],
				['group-hue', obj.Style.Hue],
				['group-brightness', obj.Style.Brightness],
				['group-grayscale', obj.Style.Grayscale],
				['group-outline', ToHex(obj.Outline)],
				['group-offset-beat', obj.ClickStyle?.Beat],
				['group-offset-y', obj.ClickStyle?.Y],
				['group-offset-hue', obj.ClickStyle?.Hue],
				['group-offset-brightness', obj.ClickStyle?.Brightness],
				['group-offset-grayscale', obj.ClickStyle?.Grayscale],
			])
		)}">${obj.Children.map(i => ConstructDivObject(i)).join('')}</div>`;
	}
	else { return ''; }
}
function ConstructCssProperties(pairs: Map<string, any>): string {
	var result: string = '';
	for (const [key, value] of pairs) {
		result += value !== undefined ? `--${key}:${value};` : ``;
	}
	return result;
}
function ConstructSubDiv(...pairs: [shouldDo: boolean, name: string, func: () => string][]) {
	var result: string = '';
	for (const [key, name, func] of pairs) {
		result += key ? `<div class="${name}">${func()}</div>` : ``;
	}
	return result;
}

function ToHex(color: Color) {
	const hex =
		parseInt(color.red.toFixed(0)).toString(16).padStart(2, '0') +
		parseInt(color.green.toFixed(0)).toString(16).padStart(2, '0') +
		parseInt(color.blue.toFixed(0)).toString(16).padStart(2, '0') +
		parseInt(color.alpha.toFixed(0)).toString(16).padStart(2, '0');
	return '#' + hex;
}