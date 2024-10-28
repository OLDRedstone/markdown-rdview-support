import { Color } from 'vscode';
import { ReadObjs } from './rdviewReader';
import { ConstructObjs } from './rdviewConstuctor';

export enum EventType {
	sounds = "sounds",
	rows = "rows",
	actions = "actions",
	decorations = "decorations",
	rooms = "rooms",
	custom = "custom",
}

export enum BeatsSpecial{
	AddClassicBeat,
	AddFreeTimeBeat,
	PulseFreeTimeBeat,
	AddOneshotBeat,
	SetRowXs,
}

export enum EventCondition {
	true = "true",
	false = "false",
	both = "both",
}

export class RDViewWindow {
	Objects: (RDEvent | RDGroup)[] = [];
	Row: number = 4;
	Column: number = 8;
	Scale: number = 1;
}

export class RDEvent {
	SubType: EventType = EventType.custom;
	BeatType?: BeatsSpecial = undefined;
	BeatStyle?:RDBeatStyle;
	Width: number = 1;
	Height: number = 1;
	EventX: number = 0;
	EventY: number = 0;
	Style: RDStyle = { Beat: 0, Y: 0 };
	ClickStyle?: RDStyle;
	Condition?: EventCondition;
	Tag?: boolean;
	Description?: RDDescription;
}

export class RDDescription {
	Width: number = 4;
	Lines: RDDescriptionLine[] = [];
}
export class RDDescriptionLine {
	BoxCount: number = 1;
	IconCount: number = 0;
	Items: (RDDescriptionText | RDDescriptionBox | RDDescriptionIcon)[] = [];
}
export class RDDescriptionText {
	Middle?: boolean;
	Hoverable?: boolean;
	FGray?: boolean;
	Highlight?: boolean;
	Text: string = "";
}

export class RDDescriptionBox {
	Items: (RDDescriptionBoxButton | RDDescriptionBoxInput | RDDescriptionBoxScroll | RDDescriptionBoxSelect)[] = [];
}

export class RDDescriptionBoxInput {
	Tips?: string = "";
	Middle?: boolean;
	FGray?: boolean;
	BlackBack?: boolean;
	Highlight?: boolean;
	Text: string = "";
}

export class RDDescriptionBoxScroll {
	Scroll: number = 0;
}

export class RDDescriptionBoxButton {
	Middle?: boolean;
	Active?: boolean;
	GrayBack?: boolean;
	Highlight?: boolean;
	Text: string = "";
}

export class RDDescriptionBoxSelect {
	Items: string[] = [];
	SelectedIndex: number = 0;
}

export class RDDescriptionIcon {
}

export class RDStyle {
	Beat: number = 0;
	Y: number = 0;
	Brightness?: number;
	Hue?: number;
	Grayscale?: number;
}

export class RDBeatStyle{
	Tick?:number;
	OneshotBeatSubType:RDOneshotBeatSubType[]=[];
	Interval?:number;
	Delay?:number;
	Subdivision?:number;
	Swing?:number;
	Hold?:number;
	Pulse?:number;
	RowXs:string='------';
}

export enum RDOneshotBeatSubType{
	Freezeshot,
	Burnshot,
	Skipshot,
	Subdivision,
}

export class RDGroup {
	Width: number = 1;
	Height: number = 1;
	Outline: Color = new Color(255, 0, 0, 255);
	Style: RDStyle = new RDStyle();
	ClickStyle?: RDStyle;
	Children: (RDEvent | RDGroup)[] = [];
}


export function RDViewRender(lang: string, code: string): string {
	const lines: string[] = code.split('\n');
	const window: RDViewWindow = new RDViewWindow();
	var objs: (RDEvent | RDGroup)[] = [];
	try {
		window.Objects = ReadObjs(code);
	} catch (error) {
		return errorHtml(`${error}`);
	}

	const args = lang.split(/\s+/g);
	if (1 < args.length && args.length <= 4) {
		if (args[1]) {
			window.Column = parseInt(args[1]);
		}
		if (args[2]) {
			window.Row = parseInt(args[2]);
		}
		if (args[3]) {
			window.Scale = parseFloat(args[3]);
		}
	}
	return ConstructObjs(window);

}

function errorHtml(message: string = ""): string {
	return `<div class="RDView" style="--row:0;--column:0;"><div class="event actions" style="--beat:0;--y:0"><div class="description" style="--width:12;">${message.length ? `${message}` : ""}</div></div></div>`;
}