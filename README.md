# markdown-rdview-support README

**The first rhythm game with a Markdown plugin!**  
Make the Rhythm Doctor Editor event bar interface easily rendered on Markdown.

## Features

![RDView][rdview]

Write a simple code fence like

    ---

    ~~My **first** RDView code fence~~

    ```rdview 4 3
    eb.AddOneshotBeat 1 1[tick=2,offset_grayscale=100];
    ```

and it will be displayed on the Markdown preview page.  

![RDViewTest][tutorial1]

The plugin includes autocomplete for some keywords.

May be useful when writing Rhythm Doctor tutorials.

> Note: This will **NOT** help you generate a level file.

## Release Notes

### 0.0.1

Almost all events can be shown.

[rdview]: https://github.com/OLDRedstone/markdown-rdview-support/blob/main/rdviewtheme.png
[tutorial1]: https://github.com/OLDRedstone/markdown-rdview-support/blob/main/tutorial01.png