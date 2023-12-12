# reported.space

Simple, fast, dark-mode and distraction free note-taking web app with autosave and local storage.

![proof](https://raw.githubusercontent.com/petry078/reported/main/proof.jpeg)

Try it!

---> [reported.space](https://reported.space) <---

Just sit and write.

It works really fast, it is just a few lines of code.

Text is stored on client browser with JavaScript localStorage property.

Can be used with Grammarly, LanguageTool and others browser spell checkers.

## Future work

- [x] About page;
- [x] User interface;
- [x] Characters counter;
- [x] Word counter;
- [ ] Make notes using [Saysomething API](https://github.com/petry078/saysomething) requests.

## Changelog

### December 2023

* JavaScript: Character counter functions now filter out blank spaces with simple regular expression. It starts correctly as `0 / 0`.
* CSS: `::-webkit-scrollbar` (5px), `::-webkit-scrollbar-track` (background-color: #16181a) and `::-webkit-scrollbar-thumb` (background-color: #5a5a59) added to make ugly Chrome native scrollbar look a little bit more like Firefox scrollbar.
* CSS: Made ` text-decoration: underline;` transparent, so users dont get that bad snake when spell something wrong. Please use LanguageTool or Grammarly browser extensions for spell checking.

### October 2022

* CSS: `background-color` changed from `#1c1b22` to `#0d1117` (inspired by GitHub background color);
* CSS: `font-family` changed from `Courier Prime` to `Inconsolata`. The font will always be monospaced.

> An example of how it was before is on the GIF at [reported.space/about](https://reported.space/about).
