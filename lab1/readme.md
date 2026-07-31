# EventLoop

JS is synchronous and single threaded bydefault

## there can be assync behaviour
- with BrowserAPI -set Timeout,setInterval, setImmediate,nextTick
- with promises
- with event handlers
promise -: a fumction not executed immediatetely but it must be executed after a while.It has some status during the execution at final it may resolve success
promise ki priority next Tick k equal hotih.
 call back function=> yhat pass as argument or the parameter to another function.
## modern java script is divided into two catogeries:-
1. common JS (.cjs)-> supports OOPS -> require
-priority (nextTick, Promise, setImmediate/setTimeout)
2. ModuleJS (.mjs) -> follow modular approach -> import
-priority (promise,nextTick, setImmediate/setTimeout)