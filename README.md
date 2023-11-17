# CucutaTest

## Introduction

[Cocos Creator Editor Extension]

**A naive quickstart extension for a Unit Test Framework in order to provide a minimal environment for tests.**

> 🎯 Objectives
>
>  - Provide means in order to enlist certain type of methods and execute them.
>  - Enable a way to retrieve success/fail messages.
>  - Provide UI to visualize results.
>  - Give an easy way to evaluate different testing files.
>  - EXTRA: Implement a simple graphics interface to show drawing-mixed test's results.
>  - EXTRA: Implement a little slot to eval short scripts.

Even though it started as an intended tag/annotation approach, it didn't take long to become clear that attempting such a kind of development would exceed the initial requirements, and
taking in mind there is already many other robust frameworks, this one tends to provide a quick and easy tool for newbies (hey! just like me!).

> 🤝 Achieved
>
>  - Automatically enlist methods which name corresponds to *_Test pattern.
>  - Allows to load multiples files and after edited, just Run again with no reloading needed.
>  - Provide progess bar during test execution.
>  - Show a drop down report with nice check/cross icons, method name and result message.
>  - EXTRA: Has a drop down canvas to show some drawings.
>  - EXTRA: Has two text areas, one for input, and below, another one to show TS script formatted code before execution (results are shown in Console).

Whereas this satisfies the original intentions, there's still work to do.

> ✍️ ToDo
>
>  - Avoid a node creation to hold test files instances.
>  - Provide a simple mean to mark methods as "test" discarding inheritance and substrings pattern looking.
>  - Provide other functionalities any other state-of-the-art frameworks support (Data Provider, Execution Order, Hooks, Repeated Test, and even going further, Mocks maybe? but... in order to solve exactly WHAT?) 
>  - Improve graphics results GUI (many tabs?... auto center?...)
>  - Detailed report (Coverage, Time Execution, Draw Calls? take it easy bro, don't bite off more than you can swallow)
 

---

## Open Source

This extension is an open source project, here is the git repository: [https://github.com/Jmlucero1984/CucutaTest](https://github.com/Jmlucero1984/CucutaTest)

If you like this project, don't forget to star ⭐ [https://github.com/Jmlucero1984/CucutaTest/stargazers]!

 
## Screenshots

![main-panel](https://github.com/Jmlucero1984/CucutaTest/blob/main/ScreenShot_01.JPG)
 
 
![code-example](https://github.com/Jmlucero1984/CucutaTest/blob/main/ScreenShot_02.JPG)



## Environment

Platform: Windows

Engine: Cocos Creator ⬆️3.7



## Download & Installation

 
### Download from git repository

Click [here](https://github.com/Jmlucero1984/CucutaTest) or go to the release panel, download the latest version package of this extension.

And then unzip the package:

- Windows: Unzip to `C:\Users\${your username}\.CocosCreator\packages\` }
For example, on my Windows computer...



## Usage

### Search and open scene/prefab

1. Press the hotkey (The default is `F1`) or click on *Extension -> Quick Finder -> Search* option to open the search bar.

2. Enter the keyword then you'll get a list of results.

3. Scroll the mouse wheel to scroll through the list; press the `Up Arrow` or `Down Arrow` to select file; press the `Left Arrow` or `Right Arrow` to locate the current selected file in Assets Panel.

4. Find and select your target file, click on it or press `Enter` to open it.

And then, click on anywhere outside the search bar or press `ESC` to close the search bar.

```ts
import { L10nManager } from 'db://localization-editor/l10n'

```


### Setting

Click on *Extension -> Quick Finder -> Setting* option to open the setting panel.

In the setting panel, you can choose a hotkey(shortcut, for opening the search bar quickly) in preset list, or customize one by yourself.

One thing you should know, not every keys/keys-combinations can be used, because some keys/keys-combinations have been used by the system or Cocos Creator.

*Accelerator reference: [https://www.electronjs.org/docs/api/accelerator](https://www.electronjs.org/docs/api/accelerator)*
 

## Dependencies

- [cocos-creator](https://github.com/cocos-creator)
- [electron](https://github.com/electron/electron)
- [vue](https://github.com/vuejs/vue)
- [node-fetch](https://github.com/node-fetch/node-fetch)



## License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).



---
