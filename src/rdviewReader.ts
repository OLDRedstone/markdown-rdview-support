import { RDViewWindow, RDEvent, RDGroup, RDDescription, RDDescriptionBox, RDDescriptionBoxButton, RDDescriptionBoxInput, RDDescriptionBoxScroll, RDDescriptionBoxSelect, RDDescriptionIcon, RDDescriptionLine, RDDescriptionText, RDStyle, EventType, EventCondition, BeatsSpecial, RDBeatStyle, RDOneshotBeatSubType } from './rdview';
import tilePosition from './position.json';
import { Color } from 'vscode';


export function ReadObjs(line: string): (RDEvent | RDGroup)[] {
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
        if (value = FindValue(pairs, "offset")) {
            reader = new Reader(value.Value);
            event.ClickStyle ??= new RDStyle();
            try { event.ClickStyle.Beat = reader.ReadFloat(); } catch (e) { }
            try { event.ClickStyle.Y = reader.ReadInt(); } catch (e) { }
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
                    if ((value = FindValue(pairs, "interval"))
                        && (event.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Freezeshot)
                            || event.BeatStyle.OneshotBeatSubType.includes(RDOneshotBeatSubType.Burnshot))) {
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
                    break;
                default:
                    break;
            }
        }
    }
}
