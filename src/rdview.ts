import { window } from "vscode";

export var tilePosition = {
    "events": {
        "sounds": [
            { "name": "Empty", "position": [0, 0, 1, 1] },
            { "name": "SetCrotchetsPerBar_1", "position": [0, 1, 1, 1] },
            { "name": "SetCrotchetsPerBar_2", "position": [1, 1, 1, 1] },
            { "name": "SetCrotchetsPerBar_3", "position": [2, 1, 1, 1] },
            { "name": "SetCrotchetsPerBar_4", "position": [3, 1, 1, 1] },
            { "name": "SetCrotchetsPerBar_5", "position": [4, 1, 1, 1] },
            { "name": "SetCrotchetsPerBar_6", "position": [5, 1, 1, 1] },
            { "name": "SetCrotchetsPerBar_7", "position": [6, 1, 1, 1] },
            { "name": "SetCrotchetsPerBar_8", "position": [7, 1, 1, 1] },
            { "name": "SetCrotchetsPerBar_9", "position": [8, 1, 1, 1] },
            { "name": "SetCrotchetsPerBar", "position": [9, 2, 1, 1] },
            { "name": "SayReadyGetSetGo_1", "position": [0, 2, 1, 1] },
            { "name": "SayReadyGetSetGo_2", "position": [1, 2, 1, 1] },
            { "name": "SayReadyGetSetGo_3", "position": [2, 2, 1, 1] },
            { "name": "SayReadyGetSetGo_4", "position": [3, 2, 1, 1] },
            { "name": "SayReadyGetSetGo_5", "position": [4, 2, 1, 1] },
            { "name": "SayReadyGetSetGo_6", "position": [5, 2, 1, 1] },
            { "name": "SayReadyGetSetGo_7", "position": [6, 2, 1, 1] },
            { "name": "SayReadyGetSetGo_8", "position": [7, 2, 1, 1] },
            { "name": "SayReadyGetSetGo_9", "position": [8, 2, 1, 1] },
            { "name": "SayReadyGetSetGo_10", "position": [9, 2, 1, 1] },
            { "name": "PlaySong", "position": [0, 3, 2, 1] },
            { "name": "PlaySound", "position": [2, 3, 1, 1] },
            { "name": "SetBeatsPerMinute", "position": [3, 3, 1, 1] },
            { "name": "SetClapSounds", "position": [4, 3, 1, 1] },
            { "name": "SetHeartExplodeVolume", "position": [5, 3, 1, 1] },
            { "name": "SetHeartExplodeInterval", "position": [6, 3, 1, 1] },
            { "name": "SetGameSound", "position": [7, 3, 1, 1] },
            { "name": "SetBeatSound", "position": [8, 3, 1, 1] },
            { "name": "SetCountingSound", "position": [9, 3, 1, 1] },
            { "name": "SayReadyGetSetGo_Rea", "position": [1, 0, 1, 1] },
            { "name": "SayReadyGetSetGo_Dy", "position": [2, 0, 1, 1] },
            { "name": "SayReadyGetSetGo_Get", "position": [3, 0, 1, 1] },
            { "name": "SayReadyGetSetGo_Set", "position": [4, 0, 1, 1] },
            { "name": "SayReadyGetSetGo_Go", "position": [5, 0, 1, 1] },
            { "name": "SayReadyGetSetGo_Ready", "position": [10, 0, 1, 1] },
            { "name": "SayReadyGetSetGo_And", "position": [10, 1, 1, 1] },
            { "name": "SayReadyGetSetGo_GetSetGo", "position": [11, 0, 3, 1] },
            { "name": "SayReadyGetSetGo_GetSetOne", "position": [11, 1, 3, 1] },
            { "name": "SayReadyGetSetGo_Stop", "position": [14, 0, 1, 1] },
            { "name": "SayReadyGetSetGo_AndStop", "position": [14, 1, 1, 1] },
            { "name": "SayReadyGetSetGo_ReaDyGetSetGo", "position": [10, 2, 5, 1] },
            { "name": "SayReadyGetSetGo_ReaDyGetSetOne", "position": [10, 3, 5, 1] },
            { "name": "Comment", "position": [15, 0, 1, 1] }
        ],
        "rows": [
            { "name": "Empty", "position": [0, 0, 1, 1] },
            { "name": "SetOneshotWave", "position": [1, 0, 1, 1] }
        ],
        "actions": [
            { "name": "Empty", "position": [0, 0, 1, 1] },
            { "name": "SetTheme", "position": [1, 0, 1, 1] },
            { "name": "SetVFXPreset", "position": [2, 0, 1, 1] },
            { "name": "SetBackgroundColor", "position": [3, 0, 1, 1] },
            { "name": "SetForeground", "position": [4, 0, 1, 1] },
            { "name": "SetSpeed", "position": [5, 0, 1, 1] },
            { "name": "Flash", "position": [6, 0, 1, 1] },
            { "name": "CustomFlash", "position": [7, 0, 1, 1] },
            { "name": "NewWindowDance", "position": [8, 0, 1, 1] },
            { "name": "MoveCamera", "position": [0, 1, 1, 1] },
            { "name": "PulseCamera", "position": [1, 1, 1, 1] },
            { "name": "TextExplosion", "position": [2, 1, 1, 1] },
            { "name": "ShowDialogue", "position": [3, 1, 1, 1] },
            { "name": "ShowStatusSign", "position": [4, 1, 1, 1] },
            { "name": "FloatingText", "position": [5, 1, 1, 1] },
            { "name": "AdvanceText", "position": [6, 1, 0.5, 1] },
            { "name": "ChangePlayersRows", "position": [7, 1, 1, 1] },
            { "name": "Comment", "position": [8, 1, 1, 1] },
            { "name": "FinishLevel", "position": [0, 2, 1, 1] },
            { "name": "Stutter", "position": [1, 2, 1, 1] },
            { "name": "HideRow", "position": [2, 2, 1, 1] },
            { "name": "MoveRow", "position": [3, 2, 1, 1] },
            { "name": "PlayExpression", "position": [4, 2, 1, 1] },
            { "name": "TintRows", "position": [5, 2, 1, 1] },
            { "name": "BassDrop", "position": [6, 2, 1, 1] },
            { "name": "ShakeScreen", "position": [7, 2, 1, 1] },
            { "name": "FlipScreen", "position": [0, 3, 1, 1] },
            { "name": "InvertColors", "position": [1, 3, 1, 1] },
            { "name": "ShowHands", "position": [2, 3, 1, 1] },
            { "name": "PaintHands", "position": [3, 3, 1, 1] },
            { "name": "SetHandOwner", "position": [4, 3, 1, 1] },
            { "name": "SetPlayStyle", "position": [5, 3, 1, 1] },
            { "name": "TagAction", "position": [6, 3, 1, 1] },
            { "name": "CallCustomMethod", "position": [7, 3, 1, 1] }
        ],
        "decorations": [
            { "name": "Empty", "position": [0, 0, 1, 1] },
            { "name": "PlayAnimation", "position": [1, 0, 1, 1] },
            { "name": "Tint", "position": [0, 1, 1, 1] },
            { "name": "Comment", "position": [1, 1, 1, 1] },
            { "name": "SetVisible", "position": [0, 2, 1, 1] },
            { "name": "Move", "position": [0, 3, 1, 1] }
        ],
        "rooms": [
            { "name": "Empty", "position": [0, 0, 1, 1] },
            { "name": "MoveRoom", "position": [0, 1, 1, 1] },
            { "name": "FadeRoom", "position": [0, 2, 1, 1] },
            { "name": "MaskRoom", "position": [0, 3, 1, 1] },
            { "name": "ShowRooms", "position": [1, 0, 1, 4] },
            { "name": "ReorderRooms", "position": [2, 0, 1, 4] },
            { "name": "SetRoomContentMode", "position": [3, 0, 1, 1] },
            { "name": "SetRoomPerspective", "position": [3, 1, 1, 1] },
            { "name": "Comment", "position": [3, 2, 1, 1] }
        ],
        "custom": [
            { "name": "Empty", "position": [0, 0, 1, 1] },
            { "name": "Comment", "position": [0, 1, 1, 1] }
        ],
        "beatsSpecial": [
            "AddClassicBeat",
            "AddOneshotBeat",
            "AddFreeTimeBeat",
            "PulseFreeTimeBeat",
            "SetRowXs"
        ]
    }
};

function loadRDView() {
    (window as any).RDViewRender = RDViewRender;
}
class Color {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly alpha: number;
    constructor(red: number, green: number, blue: number, alpha: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    };
}
enum EventType {
    sounds = "sounds",
    rows = "rows",
    actions = "actions",
    decorations = "decorations",
    rooms = "rooms",
    custom = "custom",
}
enum BeatsSpecial {
    AddClassicBeat,
    AddFreeTimeBeat,
    PulseFreeTimeBeat,
    AddOneshotBeat,
    SetRowXs,
}
enum EventCondition {
    true = "true",
    false = "false",
    both = "both",
}
class RDViewWindow {
    Objects: (RDEvent | RDGroup)[] = [];
    Row: number = 4;
    Column: number = 8;
    Scale: number = 1;
}
class RDEvent {
    SubType: EventType = EventType.custom;
    BeatType?: BeatsSpecial = undefined;
    BeatStyle?: RDBeatStyle;
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
class RDDescription {
    Width: number = 4;
    Lines: RDDescriptionLine[] = [];
}
class RDDescriptionLine {
    BoxCount: number = 1;
    IconCount: number = 0;
    Items: (RDDescriptionText | RDDescriptionBox | RDDescriptionIcon)[] = [];
}
class RDDescriptionText {
    Middle?: boolean;
    Hoverable?: boolean;
    FGray?: boolean;
    Highlight?: boolean;
    Text: string = "";
}
class RDDescriptionBox {
    Items: (RDDescriptionBoxButton | RDDescriptionBoxInput | RDDescriptionBoxScroll | RDDescriptionBoxSelect)[] = [];
}
class RDDescriptionBoxInput {
    Tips?: string = "";
    Middle?: boolean;
    FGray?: boolean;
    BlackBack?: boolean;
    Highlight?: boolean;
    Text: string = "";
}
class RDDescriptionBoxScroll {
    Scroll: number = 0;
}
class RDDescriptionBoxButton {
    Middle?: boolean;
    Active?: boolean;
    GrayBack?: boolean;
    Highlight?: boolean;
    Text: string = "";
}
class RDDescriptionBoxSelect {
    Items: string[] = [];
    SelectedIndex: number = 0;
}
class RDDescriptionIcon {
}
class RDStyle {
    Beat: number = 0;
    Y: number = 0;
    Brightness?: number;
    Hue?: number;
    Grayscale?: number;
    Opacity?: number;
}
class RDBeatStyle {
    Tick?: number;
    OneshotBeatSubType: RDOneshotBeatSubType[] = [];
    Interval?: number;
    Delay?: number;
    Subdivision?: number;
    Swing?: number;
    Hold?: number;
    Pulse?: number;
    RowXs: string = '------';
    Loop?: number;
}
enum RDOneshotBeatSubType {
    Freezeshot,
    Burnshot,
    Skipshot,
    Subdivision,
}
class RDGroup {
    Width: number = 1;
    Height: number = 1;
    Outline: Color = new Color(255, 0, 0, 255);
    Style: RDStyle = new RDStyle();
    ClickStyle: RDStyle = new RDStyle();
    ClickOutline?: Color;
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
    return `<div class="RDView" style="--row:1;--column:0;"><div class="event actions" style="--beat:0;--y:0"><div class="description" style="--width:12;">${message.length ? `${message}` : ""}</div></div></div>`;
}
function ReadObjs(line: string): (RDEvent | RDGroup)[] {
    const objs: (RDEvent | RDGroup)[] = [];
    var reader = new Reader(line);
    while (!reader.IsEnd()) {
        var event: (RDEvent | RDGroup);
        try {
            const type = reader.ReadSymbol().toLowerCase();
            event = ReadType(type);
        }
        catch (e) {
            event = new RDEvent();
        }
        if (event instanceof RDEvent) {
            reader.TestRead('.', true);
            const name = reader.ReadSymbol();
            var collection;
            switch (event.SubType) {
                case EventType.sounds:
                    collection = tilePosition.events.sounds;
                    break;
                case EventType.rows:
                    collection = tilePosition.events.rows;
                    switch (name) {
                        case 'AddClassicBeat':
                            event.BeatType = BeatsSpecial.AddClassicBeat;
                            break;
                        case 'AddFreeTimeBeat':
                            event.BeatType = BeatsSpecial.AddFreeTimeBeat;
                            break;
                        case 'PulseFreeTimeBeat':
                            event.BeatType = BeatsSpecial.PulseFreeTimeBeat;
                            break;
                        case 'AddOneshotBeat':
                            event.BeatType = BeatsSpecial.AddOneshotBeat;
                            break;
                        case 'SetRowXs':
                            event.BeatType = BeatsSpecial.SetRowXs;
                            break;
                        default:
                            break;
                    }
                    break;
                case EventType.actions:
                    collection = tilePosition.events.actions;
                    break;
                case EventType.decorations:
                    collection = tilePosition.events.decorations;
                    break;
                case EventType.rooms:
                    collection = tilePosition.events.rooms;
                    break;
                case EventType.custom:
                    collection = tilePosition.events.custom;
                    break;
                default:
                    collection = tilePosition.events.custom;
                    break;
            }
            const pos = collection.filter(i => i.name.toLowerCase() === name.toLowerCase())[0];
            if (pos) {
                event.EventX = pos.position[0];
                event.EventY = pos.position[1];
                event.Width = pos.position[2];
                event.Height = pos.position[3];
            }
            try { event.Style.Beat = reader.ReadFloat(); } catch (e) { }
            try { event.Style.Y = reader.ReadInt(); } catch (e) { }
            if (reader.TestPeek('[')) {
                const pairString: string = reader.ReadQuoted('[', ']');
                const keyvalues = new Reader(pairString, reader).ReadPairs();
                ReadProperties(reader, event, keyvalues);
            }
            reader.TestRead(';', true);
        }
        else if (event instanceof RDGroup) {
            try { event.Style.Beat = reader.ReadFloat(); } catch (e) { }
            try { event.Style.Y = reader.ReadInt(); } catch (e) { }
            try { event.Width = reader.ReadFloat(); } catch (e) { }
            try { event.Height = reader.ReadInt(); } catch (e) { }
            try { event.Outline = reader.ReadColor(); } catch (e) { }
            if (reader.TestPeek('[')) {
                const pairString: string = reader.ReadQuoted('[', ']');
                const keyvalues = new Reader(pairString, reader).ReadPairs();
                ReadProperties(reader, event, keyvalues);
            }
            if (reader.TestPeek('{')) {
                const pairString: string = reader.ReadQuoted('{', '}');
                const objs2 = ReadObjs(pairString);
                event.Children = objs2;
            }
            reader.TestRead(';', true);
        }
        objs.push(event);
    }
    return objs;
}
interface KeyValuePair {
    Index: number;
    Key: string;
    Value: string;
}
function IsEmptyOrSpace(string: string): boolean {
    return (string) ? /\s/.test(string) : false;
}
class Reader {
    private string: string;
    private position: number = 0;
    private line: number = 0;
    private offl: number = 0;
    private offp: number = 0;
    constructor(string: string, reader: Reader | undefined = undefined) {
        this.string = string;
        if (reader) {
            this.offl = reader.line;
            this.offp = reader.position;
        }
    };
    public IsEnd(): boolean {
        this.JumpSpace();
        return this.position >= this.string.length;
    }
    private JumpSpace(): void {
        while (IsEmptyOrSpace(this.string[this.position])) {
            if (this.string[this.position] === '\n') {
                this.line++;
            }
            this.position++;
        }
    }
    public Peek(): string {
        this.JumpSpace();
        return this.string[this.position];
    }
    public TestPeek(str: string, allowThrow: boolean = false): boolean {
        this.JumpSpace();
        var c = this.string.substring(this.position, this.position + str.length);
        if (c === str) {
            return true;
        }
        else {
            if (allowThrow) {
                throw new Error(`Expecting a string '${str}' but got '${c}': ${this.GetPositionDescription()}.`);
            }
            else {
                return false;
            }
        }
    }
    public TestRead(str: string, allowThrow: boolean = false): boolean {
        this.JumpSpace();
        var c = this.string.substring(this.position, this.position + str.length);
        if (c === str) {
            this.position++;
            return true;
        }
        else {
            if (allowThrow) {
                throw new Error(`Expecting a char '${str}' but got '${c}': ${this.GetPositionDescription()}.`);
            }
            else {
                return false;
            }
        }
    }
    public ReadChar(): string {
        var c = this.string[this.position];
        if (c === '\n') {
            this.line++;
        }
        this.position++;
        return c;
    }
    public ReadSymbol(): string {
        this.JumpSpace();
        var name = this.string.substring(this.position).match(/^\w+/)?.[0];
        if (name) {
            this.position += name.length;
            return name;
        }
        throw new Error(`Expecting a key but missing: ${this.GetPositionDescription()}.`);
    }
    public ReadColor(): Color {
        this.JumpSpace();
        var color = this.string.substring(this.position).match(/^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{1}([0-9A-Fa-f]{2}([0-9A-Fa-f]{2})?)?)?/)?.[0].substring(1);
        if (!color) {
            throw new Error(`Expecting a color but missing: ${this.GetPositionDescription()}`);
        }
        var result: Color;
        switch (color.length) {
            case 3:
                result = new Color(
                    parseInt(color.substring(0, 1), 16) * 16,
                    parseInt(color.substring(1, 2), 16) * 16,
                    parseInt(color.substring(2, 3), 16) * 16,
                    255
                );
                break;
            case 4:
                result = new Color(
                    parseInt(color.substring(0, 1), 16) * 16,
                    parseInt(color.substring(1, 2), 16) * 16,
                    parseInt(color.substring(2, 3), 16) * 16,
                    parseInt(color.substring(3, 4), 16) * 16
                );
                break;
            case 6:
                result = new Color(
                    parseInt(color.substring(0, 2), 16),
                    parseInt(color.substring(2, 4), 16),
                    parseInt(color.substring(4, 6), 16),
                    255
                );
                break;
            case 8:
                result = new Color(
                    parseInt(color.substring(0, 2), 16),
                    parseInt(color.substring(2, 4), 16),
                    parseInt(color.substring(4, 6), 16),
                    parseInt(color.substring(6, 8), 16)
                );
                break;
            default:
                result = new Color(255, 0, 0, 255);
                break;
        }
        this.position += color.length + 1;
        return result;
    }
    public ReadInt(): number {
        this.JumpSpace();
        var name = this.string.substring(this.position).match(/^[+-]?[0-9]+/)?.[0];
        if (name) {
            this.position += name.length;
            return parseInt(name);
        }
        throw new Error(`Expecting an int but missing: ${this.GetPositionDescription()}.`);
    }
    public ReadFloat(): number {
        this.JumpSpace();
        var name = this.string.substring(this.position).match(/^[+-]?([0-9]*[.])?[0-9]+/)?.[0];
        if (name) {
            this.position += name.length;
            return parseFloat(name);
        }
        throw new Error(`Expecting a float but missing: ${this.GetPositionDescription()}.`);
    }
    public ReadPairs(separator: string = ',', equals: string = '='): KeyValuePair[] {
        var pairs: KeyValuePair[] = [];
        var flag: boolean = !this.IsEnd();
        while (flag) {
            if (this.IsEnd()) {
                break;
            }
            const index = this.position + this.offp;
            const name = this.ReadSymbol();
            this.TestRead(equals, true);
            const value = this.ReadWhileNotEnd([separator]);
            pairs.push({ Key: name, Value: value, Index: index });
            if (flag = !this.IsEnd()) {
                this.TestRead(separator, true);
            }
        }
        return pairs;
    }
    public ReadWhileNotEnd(ends: string[] = [',', ']']): string {
        var str: string = '';
        while (!(this.position >= this.string.length) && !ends.find(i => this.string.startsWith(i, this.position))) {
            str += this.string[this.position];
            this.position++;
        }
        return str.trim();
    }
    public ReadQuoted(left: string, right: string): string {
        this.JumpSpace();
        var level: number = 0;
        var result = '';
        if (this.string.startsWith(left, this.position)) { level++; this.position += left.length; }
        else { throw new Error(`Cannot find the left half "${left}": ${this.GetPositionDescription()}`); }
        while (!(this.position >= this.string.length) && level > 0) {
            if (this.string.startsWith(left, this.position)) {
                level++;
                this.position += left.length;
                result += left;
            }
            if (this.string.startsWith(right, this.position)) {
                level--;
                this.position += right.length;
                if (level === 0) {
                    return result;
                }
                else {
                    result += right;
                }
            }
            result += this.string[this.position];
            this.position++;
        }
        throw new Error(`Cannot find the right half "${right}": ${this.GetPositionDescription()}`);
    }
    public GetPositionDescription(position: number | undefined = undefined): string {
        const s = this.string.split('\n');
        var curp: number = this.offp;
        var line: number = this.offl;
        if (position !== undefined) {
            while (curp + s[line].length + 1 < position - this.offp) {
                curp += s[line].length + 1;
                line += 1;
            }
        }
        else {
            curp += s.slice(0, this.line).reduce((sum, i) => sum + i.length + 1, 0);
            line += this.line;
            position = this.position;
        }
        return `<br>at "${s[line]}".`;//, at ${line + 1}:${position - curp}`;
    }
}
function FindValue(pairs: KeyValuePair[], key: string): KeyValuePair | undefined {
    const finded = pairs.find(i => i.Key === key);
    if (finded) {
        return finded;
    }
    return undefined;
}
function ReadType(typename: string): (RDEvent | RDGroup) {
    var t: EventType = EventType.custom;
    var event: RDEvent | RDGroup;
    switch (typename[0]) {
        case 'e':
            event = new RDEvent();
            switch (typename[1]) {
                case 's':
                    t = EventType.sounds;
                    break;
                case 'b':
                    t = EventType.rows;
                    break;
                case 'a':
                    t = EventType.actions;
                    break;
                case 'd':
                    t = EventType.decorations;
                    break;
                case 'r':
                    t = EventType.rooms;
                    break;
                case 'c':
                    t = EventType.custom;
                    break;
                default:
                    t = EventType.custom;
            }
            event.SubType = t;
            break;
        case 'g':
            event = new RDGroup();
            break;
        default:
            event = new RDEvent();
    }
    return event;
}
function ReadProperties(reader: Reader, event: RDEvent | RDGroup, pairs: KeyValuePair[]) {

    if (event instanceof RDGroup) {
        if (value = FindValue(pairs, "hue")) {
            try {
                event.Style.Hue = parseFloat(value.Value);
            }
            catch (e) {
                throw new Error(`Expecting a number, but find "${value.Value}".`);
            }
        }
        if (value = FindValue(pairs, "brightness")) {
            try {
                event.Style.Brightness = parseFloat(value.Value);
            }
            catch (e) {
                throw new Error(`Expecting a number, but find "${value.Value}".`);
            }
        }
        if (value = FindValue(pairs, "grayscale")) {
            try {
                event.Style.Grayscale = parseFloat(value.Value);
            }
            catch (e) {
                throw new Error(`Expecting a number, but find "${value.Value}".`);
            }
        }
        if (value = FindValue(pairs, "opacity")) {
            try {
                event.Style.Opacity = parseFloat(value.Value);
            }
            catch (e) {
                throw new Error(`Expecting a number, but find "${value.Value}".`);
            }
        }
        if (value = FindValue(pairs, "offset")) {
            reader = new Reader(value.Value);
            event.ClickStyle ??= new RDStyle();
            try { event.ClickStyle.Beat = reader.ReadFloat(); } catch (e) { }
            try { event.ClickStyle.Y = reader.ReadInt(); } catch (e) { }
            try { event.ClickOutline = reader.ReadColor(); } catch (e) { }
        }
        if (value = FindValue(pairs, "offset_hue")) {
            event.ClickStyle ??= new RDStyle();
            event.ClickStyle.Hue = parseFloat(value.Value);
        }
        if (value = FindValue(pairs, "offset_brightness")) {
            event.ClickStyle ??= new RDStyle();
            event.ClickStyle.Brightness = parseFloat(value.Value);
        }
        if (value = FindValue(pairs, "offset_grayscale")) {
            event.ClickStyle ??= new RDStyle();
            event.ClickStyle.Grayscale = parseFloat(value.Value);
        }
        if (value = FindValue(pairs, "offset_opacity")) {
            event.ClickStyle ??= new RDStyle();
            event.ClickStyle.Opacity = parseFloat(value.Value);
        }
    }
    else if (event instanceof RDEvent) {
        var value: KeyValuePair | undefined;
        if (value = FindValue(pairs, "if")) {
            if (["true", "false", "both"].find(i => i === value?.Value)) {
                event.Condition = value.Value === "true" ? EventCondition.true :
                    value.Value === "false" ? EventCondition.false : EventCondition.both;
            }
            else {
                throw new Error(`Expecting "true", "false" or "both", but find "${value.Value}".`);
            }
        }
        if (value = FindValue(pairs, "tag")) {
            event.Tag = value.Value === "true" ? true : false;
        }
        if (value = FindValue(pairs, "hue")) {
            event.Style.Hue = parseFloat(value.Value);
        }
        if (value = FindValue(pairs, "brightness")) {
            event.Style.Brightness = parseFloat(value.Value);
        }
        if (value = FindValue(pairs, "grayscale")) {
            event.Style.Grayscale = parseFloat(value.Value);
        }
        if (value = FindValue(pairs, "opacity")) {
            event.Style.Opacity = parseFloat(value.Value);
        }
        event.ClickStyle ??= new RDStyle();
        if (value = FindValue(pairs, "offset")) {
            reader = new Reader(value.Value);
            try { event.ClickStyle.Beat = reader.ReadFloat(); } catch (e) { }
            try { event.ClickStyle.Y = reader.ReadInt(); } catch (e) { }
        }
        if (value = FindValue(pairs, "offset_hue")) {
            event.ClickStyle.Hue = parseFloat(value.Value);
        }
        if (value = FindValue(pairs, "offset_brightness")) {
            event.ClickStyle.Brightness = parseFloat(value.Value);
        }
        if (value = FindValue(pairs, "offset_grayscale")) {
            event.ClickStyle.Grayscale = parseFloat(value.Value);
        }
        if (value = FindValue(pairs, "offset_opacity")) {
            event.ClickStyle.Opacity = parseFloat(value.Value);
        }
        if (event.BeatType !== undefined) {
            event.BeatStyle = new RDBeatStyle();
            if (value = FindValue(pairs, "tick")) {
                event.BeatStyle.Tick = parseFloat(value.Value);
            }
            switch (event.BeatType) {
                case BeatsSpecial.AddClassicBeat:
                    if (value = FindValue(pairs, "swing")) {
                        event.BeatStyle.Swing = parseFloat(value.Value);
                    }
                    if (value = FindValue(pairs, "hold")) {
                        event.BeatStyle.Hold = parseFloat(value.Value);
                    }
                    break;
                case BeatsSpecial.AddFreeTimeBeat:
                    if (value = FindValue(pairs, "pulse")) {
                        event.BeatStyle.Pulse = parseFloat(value.Value);
                    }
                    if (value = FindValue(pairs, "hold")) {
                        event.BeatStyle.Hold = parseFloat(value.Value);
                    }
                    break;
                case BeatsSpecial.PulseFreeTimeBeat:
                    if (value = FindValue(pairs, "pulse")) {
                        event.BeatStyle.Pulse = parseFloat(value.Value);
                    }
                    if (value = FindValue(pairs, "hold")) {
                        event.BeatStyle.Hold = parseFloat(value.Value);
                    }
                    break;
                case BeatsSpecial.SetRowXs:
                    if ((value = FindValue(pairs, "rowxs"))) {
                        if (value.Value.match(/^[-x]{6}$/)) {
                            event.BeatStyle.RowXs = value.Value;
                        }
                        else {
                            throw new Error(`Expect a string of length 6, consisting of "x" and "-", instead of "${value?.Value}".`);
                        }
                    }
                    break;
                case BeatsSpecial.AddOneshotBeat:
                    if (value = FindValue(pairs, "type")) {
                        const types: string[] = value.Value.split(/\s+/);
                        var illegal: string[] | undefined;
                        if ((illegal = types.filter(i => {
                            ![
                                "freezeshot",
                                "burnshot",
                                "skipshot",
                                "subdivision"
                            ].includes(i);
                        })).length) {
                            throw new Error(`Expecting "freezeshot", "burnshot", "skipshot" or "subdivision", but find ${illegal.map(i => `"${i}"`).join(', ')}.`);
                        }
                        else {
                            types.map(i => {
                                switch (i) {
                                    case "freezeshot":
                                        event.BeatStyle?.OneshotBeatSubType.push(RDOneshotBeatSubType.Freezeshot);
                                        break;
                                    case "burnshot":
                                        event.BeatStyle?.OneshotBeatSubType.push(RDOneshotBeatSubType.Burnshot);
                                        break;
                                    case "skipshot":
                                        event.BeatStyle?.OneshotBeatSubType.push(RDOneshotBeatSubType.Skipshot);
                                        break;
                                    case "subdivision":
                                        event.BeatStyle?.OneshotBeatSubType.push(RDOneshotBeatSubType.Subdivision);
                                        break;
                                }
                            });
                        }
                    }
                    if (value = FindValue(pairs, "interval")){
                        event.BeatStyle.Interval = parseFloat(value.Value);
                    }
                    if ((value = FindValue(pairs, "delay"))
                        && event.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Freezeshot)) {
                        event.BeatStyle.Delay = parseFloat(value.Value);
                    }
                    if ((value = FindValue(pairs, "subdivision"))
                        && event.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Subdivision)) {
                        event.BeatStyle.Subdivision = parseFloat(value.Value);
                    }
                    if (value = FindValue(pairs, "loop")) {
                        event.BeatStyle.Loop = parseInt(value.Value);
                    }
                    break;
                default:
                    break;
            }
        }
    }
}
function ConstructObjs(window: RDViewWindow) {
    var html: string = `<div class="RDViewContent" style="--column:${window.Column};--row:${window.Row};--scale:${window.Scale};">`
    +`<div class="RDView" style="--column:${window.Column};--row:${window.Row};--scale:${window.Scale};">`;
    for (var obj of window.Objects) {
        html += ConstructDivObject(obj);
    }
    html += `</div></div>`;
    return html;
}
function ConstructDivObject(obj: RDEvent | RDGroup): string {
    if (obj instanceof RDEvent) {
        return `<div class="event ${obj.BeatType === undefined ? `${obj.SubType}` : 'beat'}"style="${ConstructCssPropertiesIfExists(
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
                ['opacity', obj.Style.Opacity],
                ['offset-beat', obj.ClickStyle?.Beat],
                ['offset-y', obj.ClickStyle?.Y],
                ['offset-hue', obj.ClickStyle?.Hue],
                ['offset-brightness', obj.ClickStyle?.Brightness],
                ['offset-grayscale', obj.ClickStyle?.Grayscale],
                ['offset-opacity', obj.ClickStyle?.Opacity],
                ['tick', obj.BeatStyle?.Tick],
                ['delay', obj.BeatStyle?.Delay],
                ['interval', obj.BeatStyle?.Interval],
                ['subdivision', obj.BeatStyle?.Subdivision],
                ['hold', obj.BeatStyle?.Hold],
                ['pulse', obj.BeatStyle?.Pulse],
                ['swing', obj.BeatStyle?.Swing],
                ['loop', obj.BeatStyle?.Loop],
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
                [obj.BeatType === BeatsSpecial.AddFreeTimeBeat, `add freetime`, () => {return '';}],
                [obj.BeatType === BeatsSpecial.PulseFreeTimeBeat, `pulse freetime`, () => ''],
                [obj.BeatStyle?.Loop !== undefined && obj.BeatStyle.Loop > 0, `loop`, () => {
                    var result: string = '';
                    for (var i = 0; i < (obj.BeatStyle?.Loop ?? 0); i++) {
                        result += `<div></div>`;
                    }
                    return result;
                }],
                [obj.BeatType === BeatsSpecial.AddOneshotBeat && obj.BeatStyle !== undefined && obj.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Freezeshot), `freezeshots`, () => {
                    var result: string = '';
                    for (var i = 0; i < (obj.BeatStyle?.Loop ?? 0) + 1; i++) {
                        result += `<div></div>`;
                    }
                    return result;
                }],
                [obj.BeatType === BeatsSpecial.AddOneshotBeat && obj.BeatStyle !== undefined && obj.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Burnshot), `burnshots`, () => {
                    var result: string = '';
                    for (var i = 0; i < (obj.BeatStyle?.Loop ?? 0) + 1; i++) {
                        result += `<div></div>`;
                    }
                    return result;
                }],
                [obj.BeatType === BeatsSpecial.AddOneshotBeat && obj.BeatStyle !== undefined && obj.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Subdivision), `subdivisions`, () => {
                    var result: string = '';
                    for(var l = 0; l < (obj.BeatStyle?.Loop ?? 0) + 1; l++){
                        result += `<div class="subdivision">`;
                        for (var i = 0; i < (obj.BeatStyle?.Subdivision ?? 1); i++) {
                            result += `<div></div>`;
                        }
                        result += `</div>`;
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
        return `<div class="event group"style="${ConstructCssPropertiesIfExists(
            new Map<string, any>([
                ['group-beat', obj.Style.Beat],
                ['group-y', obj.Style.Y],
                ['group-width', obj.Width],
                ['group-height', obj.Height],
                ['group-hue', obj.Style.Hue],
                ['group-brightness', obj.Style.Brightness],
                ['group-grayscale', obj.Style.Grayscale],
                ['group-opacity', obj.Style.Opacity],
                ['group-outline', ToHex(obj.Outline)],
                ['group-offset-beat', obj.ClickStyle.Beat],
                ['group-offset-y', obj.ClickStyle.Y],
                ['group-offset-hue', obj.ClickStyle.Hue],
                ['group-offset-brightness', obj.ClickStyle.Brightness],
                ['group-offset-grayscale', obj.ClickStyle.Grayscale],
                ['group-offset-opacity', obj.ClickStyle.Opacity],
                ['group-offset-outline', ToHex(obj.ClickOutline??obj.Outline)],
            ])
        )}">${obj.Children.map(i => ConstructDivObject(i)).join('')}</div>`;
    }
    else { return ''; }
}
function ConstructCssPropertiesIfExists(pairs: Map<string, any>): string {
    var result: string = '';
    for (const [key, value] of pairs) {
        result += value !== undefined ? `--${key}:${value};` : ``;
    }
    return result;
}
function ConstructCssProperties(pairs: Map<string, any>): string {
    var result: string = '';
    for (const [key, value] of pairs) {
        result += `--${key}:${value};`;
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

(window as any).loadRDView = loadRDView;