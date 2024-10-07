import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "http://callbackhell.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = {
  href: "https://eloquentjavascript.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  const _component_SleepButton = resolveComponent("SleepButton");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[190] || (_cache[190] = createStaticVNode('<h1 id="asynchronous-programming-in-javascript" tabindex="-1"><a class="header-anchor" href="#asynchronous-programming-in-javascript" aria-hidden="true">#</a> Asynchronous Programming in JavaScript</h1><p>In this lecture we&#39;ll take a look at how synchronous programming differs from asynchronous programming, when you should use which one, and how we can use asynchronous programming in JavaScript through <em>callback functions</em>, <em>promises</em> and <em>promises with <code>async</code> and <code>wait</code></em>.</p><h2 id="what-is-synchronous-programming" tabindex="-1"><a class="header-anchor" href="#what-is-synchronous-programming" aria-hidden="true">#</a> What is Synchronous Programming?</h2>', 3)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("When you first learned programming, ")),
      _cache[1] || (_cache[1] = createBaseVNode(
        "em",
        null,
        "synchronous programming",
        -1
        /* HOISTED */
      )),
      _cache[2] || (_cache[2] = createTextVNode(" is most likely what you learned. In synchronous programming, one thing is carried out at a time, and you don't start doing the next thing until the first thing is done. You can think of that ")),
      _cache[3] || (_cache[3] = createBaseVNode(
        "em",
        null,
        "thing",
        -1
        /* HOISTED */
      )),
      _cache[4] || (_cache[4] = createTextVNode(" as a function, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[5] || (_cache[5] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Example of synchronous programming in JavaScript." }, {
      default: withCtx(() => _cache[6] || (_cache[6] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Example of a synchronous function."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("x"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" y")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" x "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" y\n	"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" sum\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// Example of calls to a synchronous function."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" sum1 "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" sum2 "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nconsole"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum1 "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" sum2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[7] || (_cache[7] = createTextVNode("In ")),
      createVNode(_component_FigureNumber, { previous: "" }),
      _cache[8] || (_cache[8] = createStaticVNode(" above, <code>getSum()</code> is a synchronous function. What that means is that when <code>getSum(1, 2)</code> is called, <code>getSum()</code> will do all it&#39;s work, and then return back the result and store it in <code>sum1</code>. Then we continue with the call <code>getSum(3, 4)</code> on next line, and <code>getSum()</code> will again do it&#39;s entire work, and then return back the result, which we then store in <code>sum2</code>.", 15))
    ]),
    _cache[191] || (_cache[191] = createBaseVNode(
      "p",
      null,
      "This sounds obvious, right? Well, that's because it works the way you're used to.",
      -1
      /* HOISTED */
    )),
    _cache[192] || (_cache[192] = createBaseVNode(
      "h2",
      {
        id: "what-s-the-problem-with-synchronous-programming",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#what-s-the-problem-with-synchronous-programming",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" What's the Problem with Synchronous Programming?")
      ],
      -1
      /* HOISTED */
    )),
    _cache[193] || (_cache[193] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("The problem with synchronous programming occurs when we have "),
        createBaseVNode("em", null, "long running operations"),
        createTextVNode(" and want to be able to do multiple things at the same time. What counts as a long running operation depends on what type of application you create, but usually operations taking than a few milliseconds to complete count as long running. The problem with synchronous programming is that we can only run one long running operation at a time, and that is problematic from some type of applications. A few examples of these are given next.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[194] || (_cache[194] = createBaseVNode(
      "h3",
      {
        id: "example-1-graphical-user-interfaces",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#example-1-graphical-user-interfaces",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Example 1: Graphical User Interfaces")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[10] || (_cache[10] = createTextVNode("One problem with synchronous programming occurs when we implement a graphical user interface (GUI). Imagine the user clicks on a button, and we start to compute something that takes 3 seconds to compute. If we use synchronous programming, nothing else in our code during those 3 seconds would run, so the graphical user interface would freeze, so the user can't click on an abort button, nor do anything else. Want an example of this? Just click ")),
      createVNode(_component_SleepButton, { sleepMs: 3e3 }, {
        default: withCtx(() => _cache[9] || (_cache[9] = [
          createTextVNode("this button")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[11] || (_cache[11] = createTextVNode(" and then try to select text on this page, click on a link, or something, within 3 seconds (requires JavaScript to be enabled in your web browser)."))
    ]),
    createBaseVNode("p", null, [
      _cache[12] || (_cache[12] = createTextVNode("The code in ")),
      createVNode(_component_FigureNumber),
      _cache[13] || (_cache[13] = createTextVNode(" below explains the problem in detail."))
    ]),
    createVNode(_component_Figure, { caption: "Example of problem with synchronous programming." }, {
      default: withCtx(() => _cache[14] || (_cache[14] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// This is the function that is called when the button is clicked."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "handleClickOnButton"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// Imagine the sleep() function would exist, and calling it with"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// 3000 would make the function wait 3000ms before it returned."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token function" }, "sleep"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "3000"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// Then non of our code would execute during those 3000ms,"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// and the GUI would freeze."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// (JS doesn't have a such stupid function, so it doesn't exist). "),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// The sleep function in this example is implemented like this"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// (we use a loop with very many iterations to simulate a long running operation):"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "sleep"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "sleepMs"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" timeToWakeUp "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" Date"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "now"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" sleepMs\n	"),
                createBaseVNode("span", { class: "token keyword" }, "while"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("Date"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "now"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" timeToWakeUp"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token comment" }, "// Do nothing"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[195] || (_cache[195] = createStaticVNode('<p>In this example, the long running operation was just a loop doing nothing for many iterations, but you can substitute it with any operation that takes long time to complete, for example to check if there&#39;s a human in the world named <code>Chipsope</code> (would in worst case require you to compare <code>Chipsope</code> with ~7 billion names, which would take a while).</p><h3 id="example-2-data-loading" tabindex="-1"><a class="header-anchor" href="#example-2-data-loading" aria-hidden="true">#</a> Example 2: Data Loading</h3><p>One problem with synchronous programming occurs when we want to carry out multiple tasks in parallel, and each task involves a lot of waiting, such as:</p><ul><li>Waiting for the result of a query sent to the database</li><li>Waiting for the response for an HTTP request we have sent</li><li>Waiting for GPS coordinates from a GPS receiver</li><li>Waiting for the computer to load the content of a file on the file system</li><li>Etc.</li></ul>', 4)),
    createBaseVNode("p", null, [
      _cache[15] || (_cache[15] = createTextVNode("If we use synchronous programming, then we start carrying out the first task, which involves some waiting for the result (for example from the database). When we get back the result, we finish carrying out the first task, and then we start carrying out the second task, which shortly makes us wait again for another result (perhaps loading the content from a file), and then when we finally get back the result for that, we finish the second task, and so on. This is visualized in ")),
      createVNode(_component_FigureNumber),
      _cache[16] || (_cache[16] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sequence diagram where the app waits for three things at three different times (3 seconds in total)." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n	participant App\n	participant DB\n	participant Server\n	participant FileSystem\n	App->>DB: getData()\n	activate App\n	activate DB\n	App->>App: Waiting 1 second\n	DB-->>App: Data\n	deactivate DB\n	App->>Server: sendRequest()\n	activate Server\n	App->>App: Waiting 1 second\n	Server-->>App: Response\n	deactivate Server\n	App->>FileSystem: openFile()\n	activate FileSystem\n	App->>App: Waiting 1 second\n	FileSystem-->>App: File\n	deactivate FileSystem\n	deactivate App\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[196] || (_cache[196] = createBaseVNode(
      "p",
      null,
      "The problem here is that we spend most of our time on waiting, instead of doing useful work. While we wait for the database result from task 1, we want to start carrying out task 2, and wait for the result for task 2 at the same time as we wait for the result from task 1, but we can't do that with synchronous programming, since we can only do one thing at a time in synchronous programming.",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[17] || (_cache[17] = createTextVNode("An example of this is shown in ")),
      createVNode(_component_FigureNumber),
      _cache[18] || (_cache[18] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Another example of problem with synchronous programming. " }, {
      default: withCtx(() => _cache[19] || (_cache[19] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getAllHumans"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// Imagine db.getAllRows() would be a synchronous function, and it would"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// take 1 second before it has received the humans from the database."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" allHumans "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" db"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "getAllRows"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"humans"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" allHumans\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getAllPets"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// Imagine fileSystem.loadFile() would be a synchronous function, and"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// it would take 1 second before it has loaded the pets from the file."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" allPets "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" fileSystem"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "loadFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"pets.json"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" allPets\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" humans "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getAllHumans"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// This line would take 1.001 seconds to complete (1 second spent on waiting)."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" pets "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getAllPets"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// This line would take 1.001 seconds to complete (1 second spent on waiting)."),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[20] || (_cache[20] = createTextVNode("In ")),
      createVNode(_component_FigureNumber, { previous: "" }),
      _cache[21] || (_cache[21] = createTextVNode(" above it takes ~2 seconds to load all data, but if humans and pets could be loaded in parallel, it would only take ~1 second. You don't like applications that takes a long time to load all the data at startup, right? So you probably don't want to use synchronous programming to load data at startup."))
    ]),
    _cache[197] || (_cache[197] = createBaseVNode(
      "h2",
      {
        id: "what-is-asynchronous-programming",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#what-is-asynchronous-programming",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" What is Asynchronous Programming?")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[22] || (_cache[22] = createTextVNode("So, asynchronous programming is when we start a long running operation, and it will run ")),
      _cache[23] || (_cache[23] = createBaseVNode(
        "em",
        null,
        "in the background",
        -1
        /* HOISTED */
      )),
      _cache[24] || (_cache[24] = createTextVNode(". The rest of our code will continue to run as usual until it has completed. Then, sometime in the future, the long running operation in the background will complete, and notify our ordinary code what the result of the long running operation was, and our ordinary code can handle the result of the long running operation. A visualization of this is shown in ")),
      createVNode(_component_FigureNumber),
      _cache[25] || (_cache[25] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sequence diagram where the app waits for three things at the same time (1 second in total)." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n	participant App\n	participant DB\n	participant Server\n	participant FileSystem\n	App->>DB: getData()\n	activate App\n	activate DB\n	App->>Server: sendRequest()\n	activate Server\n	App->>FileSystem: openFile()\n	activate FileSystem\n	App->>App: Waiting 1 second\n	DB-->>App: Data\n	deactivate DB\n	Server-->>App: Response\n	deactivate Server\n	FileSystem-->>App: File\n	deactivate FileSystem\n	deactivate App\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[198] || (_cache[198] = createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Long running operations that aren&#39;t waiting</p><p>Here we say that long running operations usually involve a lot of waiting. Long running operations can instead/also do useful work, e.g. compute something really complex that takes a very long time to compute. These operations can still run in the background at the same time as our ordinary synchronous code thanks to threads and multiple cores (or in worst case time slicing of the CPU). These are details we don&#39;t worry about in this lecture, but just remember that asynchronous programming is not only useful when waiting is involved, but for all types of long running operations.</p></div><p>The question is how a long running operation can tell our ordinary code when it&#39;s done with it works in the background, and what the result is. That can be done in different ways, such as by using callback functions or promises.</p><h2 id="asynchronous-programming-with-callback-functions" tabindex="-1"><a class="header-anchor" href="#asynchronous-programming-with-callback-functions" aria-hidden="true">#</a> Asynchronous Programming with Callback Functions</h2><p>In asynchronous programming, one way to indicate what should happen after a long running operation has completed is to pass a <code>callback</code> function to the asynchronous function, and when the asynchronous function has completed its long running operation, it will call the <code>callback</code> function, and pass the result of the long running operation as an argument to the <code>callback</code> function. In the <code>callback</code> function we write the code that should run when the long running operation has completed.</p>', 4)),
    createBaseVNode("p", null, [
      _cache[26] || (_cache[26] = createTextVNode("For example, if we have the synchronous function in ")),
      createVNode(_component_FigureNumber),
      _cache[27] || (_cache[27] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Example of a synchronous function." }, {
      default: withCtx(() => _cache[28] || (_cache[28] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Synchronous function that returns back the result."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("x"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" y")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" theSum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" x "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" y\n	"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" theSum\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nconsole"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[29] || (_cache[29] = createTextVNode("And would like to use this in an asynchronous way with a ")),
      _cache[30] || (_cache[30] = createBaseVNode(
        "code",
        null,
        "callback",
        -1
        /* HOISTED */
      )),
      _cache[31] || (_cache[31] = createTextVNode(" function, it would look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[32] || (_cache[32] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Example of an asynchronous function that will run synchronously." }, {
      default: withCtx(() => _cache[33] || (_cache[33] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Asynchronous function that calls the callback function with the result."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("x"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" y"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" callback")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n\n	"),
                createBaseVNode("span", { class: "token comment" }, '// This is the "work" the "long running operation" should do.'),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" theSum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" x "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" y\n\n	"),
                createBaseVNode("span", { class: "token comment" }, "// When the result of the work has been computed, pass it to the callback function."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("theSum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// Call the asynchronous function, and pass along our callback function."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n\n	"),
                createBaseVNode("span", { class: "token comment" }, "// When this function is called, the long running operation has completed."),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[199] || (_cache[199] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Even though "),
        createBaseVNode("code", null, "getSum()"),
        createTextVNode(" above has a "),
        createBaseVNode("code", null, "callback"),
        createTextVNode(" function as a parameter, everything will run synchronously, as you're used to. That's because we don't do any work that runs "),
        createBaseVNode("em", null, "in the background"),
        createTextVNode(". To make "),
        createBaseVNode("code", null, "getSum()"),
        createTextVNode(" asynchronous, we need to tell it to do it's work in the background somehow. In JavaScript, you can do that by calling an asynchronous built-in function, like:")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[34] || (_cache[34] = createTextVNode("fetch")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[35] || (_cache[35] = createTextVNode(" (to send an HTTP request)"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[36] || (_cache[36] = createTextVNode("setTimeout")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[37] || (_cache[37] = createTextVNode(" (to schedule a function to be called later)"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[38] || (_cache[38] = createTextVNode("setInterval")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[39] || (_cache[39] = createTextVNode(" (to schedule a function to be called repeatedly with a given interval)"))
      ]),
      _cache[40] || (_cache[40] = createBaseVNode(
        "li",
        null,
        "Etc.",
        -1
        /* HOISTED */
      ))
    ]),
    createBaseVNode("p", null, [
      _cache[41] || (_cache[41] = createTextVNode("To really make ")),
      _cache[42] || (_cache[42] = createBaseVNode(
        "code",
        null,
        "getSum()",
        -1
        /* HOISTED */
      )),
      _cache[43] || (_cache[43] = createTextVNode(" asynchronous, we can call ")),
      _cache[44] || (_cache[44] = createBaseVNode(
        "code",
        null,
        "setTimeout()",
        -1
        /* HOISTED */
      )),
      _cache[45] || (_cache[45] = createTextVNode(" in it, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[46] || (_cache[46] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Example of an asynchronous function that will run asynchronously." }, {
      default: withCtx(() => _cache[47] || (_cache[47] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Asynchronous function that calls the callback function with the result."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("x"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" y"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" callback")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n\n	"),
                createBaseVNode("span", { class: "token comment" }, "// Here we call an asynchronous function, making our own function asynchronous."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// In this case we schedule the function below to be called 1 second later."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token function" }, "setTimeout"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		\n		"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" theSum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" x "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" y\n		"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("theSum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1000"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n	"),
                createBaseVNode("span", { class: "token comment" }, "// Here we return back immediately, before we have computed the sum."),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// This will call our own asynchronous function,"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// which will call setTimeout(), and then return here immediately."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// This will call our own asynchronous function,"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// which will call setTimeout(), and then return here immediately."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// This is the first value that will be logged."),
                createTextVNode("\nconsole"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Hello!"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// 1 second later, the two callback functions we have passed to setTimeout()"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// will be called (one at a time), which in turn will compute their sums"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// and call the callback functions we passed to getSum(), in which we log"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// the computed sums (first 3, then 7)."),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[200] || (_cache[200] = createBaseVNode(
      "p",
      null,
      "So, to summarize:",
      -1
      /* HOISTED */
    )),
    _cache[201] || (_cache[201] = createBaseVNode(
      "ol",
      null,
      [
        createBaseVNode("li", null, "To make a function asynchronous, it must somehow do work in the background, for example by calling an existing asynchronous function."),
        createBaseVNode("li", null, [
          createTextVNode("To listen for when an asynchronous function is done running in the background, we can pass a "),
          createBaseVNode("code", null, "callback"),
          createTextVNode(" function to it, which the asynchronous function will call when it's done running in the background.")
        ])
      ],
      -1
      /* HOISTED */
    )),
    _cache[202] || (_cache[202] = createBaseVNode(
      "h3",
      {
        id: "error-handling",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#error-handling",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Error Handling")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[48] || (_cache[48] = createTextVNode("In synchronous programming, when you discover something is wrong, you usually throw an exception, which you later can catch, which you can see in ")),
      createVNode(_component_FigureNumber),
      _cache[49] || (_cache[49] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Example of error handling in synchronous programming using exceptions." }, {
      default: withCtx(() => _cache[50] || (_cache[50] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// A synchronous function that might throw an exception."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("dividend"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" divisor")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("divisor "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "throw"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, `"Can't divide by 0."`),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" dividend "),
                createBaseVNode("span", { class: "token operator" }, "/"),
                createTextVNode(" divisor\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// The main code that contains the error handling."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "try"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" quotient "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[51] || (_cache[51] = createTextVNode("If you try to do something similar in asynchronous programming with ")),
      _cache[52] || (_cache[52] = createBaseVNode(
        "code",
        null,
        "callback",
        -1
        /* HOISTED */
      )),
      _cache[53] || (_cache[53] = createTextVNode(" functions, it could look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[54] || (_cache[54] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Trying to catch exceptions when calling an asynchronous function." }, {
      default: withCtx(() => _cache[55] || (_cache[55] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// An asynchronous function that might throw an exception."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("dividend"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" divisor"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" callback")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token function" }, "setTimeout"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("divisor "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token keyword" }, "throw"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, `"Can't divide by 0."`),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("dividend "),
                createBaseVNode("span", { class: "token operator" }, "/"),
                createTextVNode(" divisor"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1000"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// The main code that needs to handle errors."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "try"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "quotient"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[203] || (_cache[203] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("This does unfortunately not work. The reason is simple: when you call "),
        createBaseVNode("code", null, "getQuotient()"),
        createTextVNode(", you are inside the try block, but "),
        createBaseVNode("code", null, "getQuotient()"),
        createTextVNode(" returns back almost immediately, and you will leave the try/catch block. Then 1 second later, the callback you passed to "),
        createBaseVNode("code", null, "setTimeout()"),
        createTextVNode(" will be called, and if you now throw the exception from inside that callback, you will throw it to the one who called the callback function, which will be the JavaScript runtime environment, so that's where the exception will be thrown to, and there of course no one is trying to catch the specific exceptions your code throws.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[56] || (_cache[56] = createTextVNode("The workaround to this problem is usually to pass two values to the ")),
      _cache[57] || (_cache[57] = createBaseVNode(
        "code",
        null,
        "callback",
        -1
        /* HOISTED */
      )),
      _cache[58] || (_cache[58] = createTextVNode(` function. The first value is the exception (aka "the error"). If everything go well and you don't have an error, you simply use `)),
      _cache[59] || (_cache[59] = createBaseVNode(
        "code",
        null,
        "null",
        -1
        /* HOISTED */
      )),
      _cache[60] || (_cache[60] = createTextVNode(" as the error. The second value is the result of the long running operation. In your ")),
      _cache[61] || (_cache[61] = createBaseVNode(
        "code",
        null,
        "callback",
        -1
        /* HOISTED */
      )),
      _cache[62] || (_cache[62] = createTextVNode(" function you simply check if the first argument is ")),
      _cache[63] || (_cache[63] = createBaseVNode(
        "code",
        null,
        "null",
        -1
        /* HOISTED */
      )),
      _cache[64] || (_cache[64] = createTextVNode(" or not with an if statement to figure out if you got an error, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[65] || (_cache[65] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Example of error handling in asynchronous programming with callback functions." }, {
      default: withCtx(() => _cache[66] || (_cache[66] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("dividend"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" divisor"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" callback")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token function" }, "setTimeout"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("divisor "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, `"Can't divide by 0"`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "null"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" dividend "),
                createBaseVNode("span", { class: "token operator" }, "/"),
                createTextVNode(" divisor"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1000"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("error"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" quotient")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[204] || (_cache[204] = createBaseVNode(
      "h2",
      {
        id: "the-drawback-with-asynchronous-programming-with-callback-functions",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#the-drawback-with-asynchronous-programming-with-callback-functions",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" The Drawback with Asynchronous Programming with Callback Functions")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[67] || (_cache[67] = createTextVNode("The drawback with asynchronous programming with ")),
      _cache[68] || (_cache[68] = createBaseVNode(
        "code",
        null,
        "callback",
        -1
        /* HOISTED */
      )),
      _cache[69] || (_cache[69] = createTextVNode(" functions is that it makes the code harder to read compared to synchronous programming, especially when you have many asynchronous functions you need to call in order, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[70] || (_cache[70] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Example of sequential calls to asynchronous functions with callbacks." }, {
      default: withCtx(() => _cache[71] || (_cache[71] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Imagine getUserById(), getPetsByOwnerName() and"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// storeInJsonFile() are all asynchronous functions."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("userId"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" filename"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" callback")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token function" }, "getUserById"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("userId"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("userError"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" user")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("userError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("userError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token function" }, "getPetsByOwnerName"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("user"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("petsError"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" pets")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n				"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("petsError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n					"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("petsError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n				"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n					"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" data "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n						pets\n					"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n					"),
                createBaseVNode("span", { class: "token function" }, "storeInJsonFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("data"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("storeError"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" fileSize")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n						"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("storeError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n							"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("storeError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n						"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n							"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "null"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" fileSize"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n						"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n					"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n				"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[73] || (_cache[73] = createTextVNode("This is just a simple example, but you can already now see that the code has become quite hard to read due to all the indentation of the code, especially at the end of the code, with all closing brackets. Imagine we would need to call more asynchronous functions, or use more loops or conditional statements, etc. This messy type of code is known as ")),
      createBaseVNode("a", _hoisted_4, [
        _cache[72] || (_cache[72] = createTextVNode("Callback Hell")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[74] || (_cache[74] = createTextVNode("."))
    ]),
    createBaseVNode("p", null, [
      _cache[75] || (_cache[75] = createTextVNode("If we compare the code above with synchronous code with the same functionality, it would look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[76] || (_cache[76] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Example of sequential calls to synchronous functions." }, {
      default: withCtx(() => _cache[77] || (_cache[77] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("userId"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" filename")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "try"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" user "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getUserById"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("userId"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" pets "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getPetsByOwnerName"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("user"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" data "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			pets\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" fileSize "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" fileSystem"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "storeInJsonFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("data"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" fileSize\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "throw"),
                createTextVNode(" error "),
                createBaseVNode("span", { class: "token comment" }, "// Could even skip try and catch since we throw the error again, but whatever."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[205] || (_cache[205] = createBaseVNode(
      "p",
      null,
      "Clearly, the synchronous code is much easier to read. So this is the trade off: synchronous code is easier to read, but asynchronous code can run more efficient, since we don't waste time on waiting, and we can do multiple things at the same time with asynchronous code. Wouldn't it be great if there was a way to get the best of both worlds? Introducing promises.",
      -1
      /* HOISTED */
    )),
    _cache[206] || (_cache[206] = createBaseVNode(
      "h2",
      {
        id: "what-are-promises",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#what-are-promises",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" What are Promises?")
      ],
      -1
      /* HOISTED */
    )),
    _cache[207] || (_cache[207] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("em", null, "Promises"),
        createTextVNode(" is an attempt to make asynchronous code more readable and to avoid callback hell (making the code look more like synchronous code), but that still runs asynchronously. Instead of passing a "),
        createBaseVNode("code", null, "callback"),
        createTextVNode(" to an asynchronous function, the asynchronous function returns back a promise. The promise is an object that represent a long running operation that will be completed some time in the future.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[78] || (_cache[78] = createTextVNode("Initially, the promise will be in the ")),
      _cache[79] || (_cache[79] = createBaseVNode(
        "code",
        null,
        "Pending",
        -1
        /* HOISTED */
      )),
      _cache[80] || (_cache[80] = createTextVNode(" state, meaning that the long running operation is still running. When the long running operation complete (when the promise has been ")),
      _cache[81] || (_cache[81] = createBaseVNode(
        "em",
        null,
        "resolved",
        -1
        /* HOISTED */
      )),
      _cache[82] || (_cache[82] = createTextVNode("), the promise will be in the ")),
      _cache[83] || (_cache[83] = createBaseVNode(
        "code",
        null,
        "Fulfilled",
        -1
        /* HOISTED */
      )),
      _cache[84] || (_cache[84] = createTextVNode(" state, and we can get the value the long running operations resulted in through the promise object. If something instead goes wrong with the long running operation (when the promise has been ")),
      _cache[85] || (_cache[85] = createBaseVNode(
        "em",
        null,
        "rejected",
        -1
        /* HOISTED */
      )),
      _cache[86] || (_cache[86] = createTextVNode("), the promise will go into the ")),
      _cache[87] || (_cache[87] = createBaseVNode(
        "code",
        null,
        "Rejected",
        -1
        /* HOISTED */
      )),
      _cache[88] || (_cache[88] = createTextVNode(" state, and we can get the error through the promise object. This is visualized in ")),
      createVNode(_component_FigureNumber),
      _cache[89] || (_cache[89] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "State diagram over promises." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nstateDiagram-v2\n	state Pending\n	state Fulfilled\n	state Rejected\n	[*] --> Pending : Promise created, long running operation runs in background\n	Pending --> Fulfilled : Long running operation completed successfully\n	Pending --> Rejected : Error occurred in the long running operation\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[208] || (_cache[208] = createStaticVNode("<p>When you have called an asynchronous function and received back a promise from it, you usually want to listen for when the promise leaves the <code>Pending</code> state, and goes to either the <code>Pending</code> state or the <code>Fulfilled</code> state. You do that by calling <code>.then()</code> on the promise and <code>.catch()</code> on the promise respectively and pass them each a <code>callback</code> function.</p>", 1)),
    createBaseVNode("p", null, [
      _cache[90] || (_cache[90] = createTextVNode("For example, if ")),
      _cache[91] || (_cache[91] = createBaseVNode(
        "code",
        null,
        "getQuotient()",
        -1
        /* HOISTED */
      )),
      _cache[92] || (_cache[92] = createTextVNode(" would be an asynchronous function with a ")),
      _cache[93] || (_cache[93] = createBaseVNode(
        "code",
        null,
        "callback",
        -1
        /* HOISTED */
      )),
      _cache[94] || (_cache[94] = createTextVNode(" function, you would use it as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[95] || (_cache[95] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample usage of an asynchronous function with a callback." }, {
      default: withCtx(() => _cache[96] || (_cache[96] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("error"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" quotient")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[97] || (_cache[97] = createTextVNode("If ")),
      _cache[98] || (_cache[98] = createBaseVNode(
        "code",
        null,
        "getQuotient()",
        -1
        /* HOISTED */
      )),
      _cache[99] || (_cache[99] = createTextVNode(" instead of having a ")),
      _cache[100] || (_cache[100] = createBaseVNode(
        "code",
        null,
        "callback",
        -1
        /* HOISTED */
      )),
      _cache[101] || (_cache[101] = createTextVNode(" function would return back a promise, you would use it as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[102] || (_cache[102] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample usage of an asynchronous function returning a promise." }, {
      default: withCtx(() => _cache[103] || (_cache[103] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" promise "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// When the line above has been executed, the promise will be in the Pending state."),
                createTextVNode("\n\npromise"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "then"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "quotient"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// When the promise has been resolved (enters the Fulfilled state),"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// this function will be called."),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\npromise"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// When the promise has been rejected (enters the Rejected state),"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// this function will be called."),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[209] || (_cache[209] = createStaticVNode("<p>Since we still provide callback functions to <code>.then()</code> and <code>.catch()</code>, you might think this code will result in callback hell as well when we start calling multiple asynchronous functions returning back promises, but that is not the case, because promises are <em>chainable</em>. This is the hard part to understand with promises, but this is what makes them so nice, so let&#39;s go through how chaining works in detail.</p><p>The callback function you pass to <code>.then()</code> can:</p><ol><li>Return back a new promise.</li><li>Return back another value that automatically will be wrapped in a promise that will be immediately resolved.</li><li>Not return back any value at all (i.e. <code>undefined</code>), in which case we can <strong>see it as</strong> the promise you called <code>.then()</code> on will be returned back.</li></ol>", 3)),
    createBaseVNode("p", null, [
      _cache[104] || (_cache[104] = createTextVNode("Note that you can ")),
      _cache[105] || (_cache[105] = createBaseVNode(
        "strong",
        null,
        "see it as",
        -1
        /* HOISTED */
      )),
      _cache[106] || (_cache[106] = createTextVNode(" that the callback function you pass to ")),
      _cache[107] || (_cache[107] = createBaseVNode(
        "code",
        null,
        ".then()",
        -1
        /* HOISTED */
      )),
      _cache[108] || (_cache[108] = createTextVNode(" will always return back a promise. Promises are also implemented in a very clever way, so you can ")),
      _cache[109] || (_cache[109] = createBaseVNode(
        "strong",
        null,
        "see it as",
        -1
        /* HOISTED */
      )),
      _cache[110] || (_cache[110] = createTextVNode(" the promise you return back from the callback function passed to ")),
      _cache[111] || (_cache[111] = createBaseVNode(
        "code",
        null,
        ".then()",
        -1
        /* HOISTED */
      )),
      _cache[112] || (_cache[112] = createTextVNode(" will also be returned from the call to ")),
      _cache[113] || (_cache[113] = createBaseVNode(
        "code",
        null,
        ".then()",
        -1
        /* HOISTED */
      )),
      _cache[114] || (_cache[114] = createTextVNode(". All this and list item 3 above means that we can simplify the code we had earlier to the one shown in ")),
      createVNode(_component_FigureNumber),
      _cache[115] || (_cache[115] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample usage of an asynchronous function returning a promise." }, {
      default: withCtx(() => _cache[116] || (_cache[116] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" promise "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\npromise"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "then"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "quotient"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// This function does not return a value, so we can see it"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// as the promise itself will be returned."),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// So here we immediately call .catch() on the same promise."),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[117] || (_cache[117] = createTextVNode("As you probably realise, we can even get rid of the ")),
      _cache[118] || (_cache[118] = createBaseVNode(
        "code",
        null,
        "promise",
        -1
        /* HOISTED */
      )),
      _cache[119] || (_cache[119] = createTextVNode(" variable and call ")),
      _cache[120] || (_cache[120] = createBaseVNode(
        "code",
        null,
        ".then()",
        -1
        /* HOISTED */
      )),
      _cache[121] || (_cache[121] = createTextVNode(" and ")),
      _cache[122] || (_cache[122] = createBaseVNode(
        "code",
        null,
        ".catch()",
        -1
        /* HOISTED */
      )),
      _cache[123] || (_cache[123] = createTextVNode(" on the promise directly, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[124] || (_cache[124] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample usage of an asynchronous function returning back a promise." }, {
      default: withCtx(() => _cache[125] || (_cache[125] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "then"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "quotient"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[126] || (_cache[126] = createTextVNode("This code will run asynchronously, and is looks really similar to what a synchronous version of the code would look like, which is shown in ")),
      createVNode(_component_FigureNumber),
      _cache[127] || (_cache[127] = createTextVNode(", which is really promising."))
    ]),
    createVNode(_component_Figure, { caption: "Sample usage of a synchronous function." }, {
      default: withCtx(() => _cache[128] || (_cache[128] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "try"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" quotient "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[129] || (_cache[129] = createTextVNode("The question is, how readable will the code be when we start using multiple promises? Will we get into a callback hell similar situation, as the one shown in ")),
      createVNode(_component_FigureNumber),
      _cache[130] || (_cache[130] = createTextVNode(" below where we use asynchronous functions with callbacks?"))
    ]),
    createVNode(_component_Figure, { caption: "Example of callback hell." }, {
      default: withCtx(() => _cache[131] || (_cache[131] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Asynchronous version with callback functions."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("userId"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" filename"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" callback")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token function" }, "getUserById"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("userId"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("userError"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" user")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("userError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("userError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token function" }, "getPetsByOwnerName"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("user"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("petsError"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" pets")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n				"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("petsError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n					"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("petsError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n				"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n					"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" data "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n						pets\n					"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n					fileSystem"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "storeInJsonFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("data"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("storeError"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" fileSize")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n						"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("storeError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n							"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("storeError"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n						"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n							"),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "null"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" fileSize"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n						"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n					"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n				"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// Sample usage of the function."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"data.json"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Data stored in file "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("fileSize"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" bytes big!"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[132] || (_cache[132] = createTextVNode("No, list item 1 above (")),
      _cache[133] || (_cache[133] = createBaseVNode(
        "em",
        null,
        [
          createTextVNode("our callback function passed to "),
          createBaseVNode("code", null, ".then()"),
          createTextVNode(" can return back a new promise")
        ],
        -1
        /* HOISTED */
      )),
      _cache[134] || (_cache[134] = createTextVNode(") makes sure that we don't get into a callback hell situation. If the asynchronous functions in the ")),
      createVNode(_component_FigureNumber, { previous: "" }),
      _cache[135] || (_cache[135] = createTextVNode(" above would return back promises instead of using callback functions, the code would look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[136] || (_cache[136] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample usage of sequential calls to asynchronous functions returning back promises." }, {
      default: withCtx(() => _cache[137] || (_cache[137] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Asynchronous version with promises."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("userId"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" filename")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getUserById"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("userId"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "then"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "user"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getPetsByOwnerName"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("user"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// We return back a new promise here..."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "then"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "pets"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, '// ...so here we call "then" on that new getPetsByOwnerName promise!'),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" data "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			pets\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" fileSystem"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "storeInJsonFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("data"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// We return back a new promise here..."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "then"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "fileSize"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, '// ...so here we call "then" on that new fileSystem promise!'),
                createTextVNode("\n		\n		"),
                createBaseVNode("span", { class: "token comment" }, "// The value we return here is not a promise, so it will"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token comment" }, "// automatically be wrapped in a resolve promise."),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" fileSize\n		"),
                createBaseVNode("span", { class: "token comment" }, "// This last promise can be seen as the final promise we"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token comment" }, "// return back from loadUserWithPetsAndStoreInFile()."),
                createTextVNode("\n		\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// Sample usage of the function."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"data.json"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "then"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "fileSize"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Data stored in file "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("fileSize"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" bytes big!"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[138] || (_cache[138] = createTextVNode("An importing thing to know when using chained promises like we do here is that if one of the promises in the chain is rejected, the next promises in the chain will never be resolved, and the error will be passed to the callback functions passed to ")),
      _cache[139] || (_cache[139] = createBaseVNode(
        "code",
        null,
        ".catch()",
        -1
        /* HOISTED */
      )),
      _cache[140] || (_cache[140] = createTextVNode(" no matter which promise that was rejected. So in ")),
      createVNode(_component_FigureNumber, { previous: "" }),
      _cache[141] || (_cache[141] = createTextVNode(" above, even if it looks like we only call ")),
      _cache[142] || (_cache[142] = createBaseVNode(
        "code",
        null,
        ".catch()",
        -1
        /* HOISTED */
      )),
      _cache[143] || (_cache[143] = createTextVNode(" on the last promise in the chain, the callback function we pass to it will be called when any promise in the chain is rejected."))
    ]),
    createBaseVNode("p", null, [
      _cache[144] || (_cache[144] = createTextVNode("This way of writing asynchronous code (with promises) is really similar to synchronous code, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[145] || (_cache[145] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample usage of sequential calls to synchronous functions." }, {
      default: withCtx(() => _cache[146] || (_cache[146] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Synchronous version."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("userId"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" filename")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" user "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getUserById"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("userId"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" pets "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getPetsByOwnerName"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("user"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" data "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		pets\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" fileSize "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" fileSystem"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "storeInJsonFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("data"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" fileSize\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// Sample usage of the function."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "try"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" fileSize "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"data.json"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Data stored in file "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("fileSize"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" bytes big!"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"error"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[210] || (_cache[210] = createStaticVNode('<p>The only downside with promises is that we need to pass callback functions to <code>.then()</code> and <code>.catch()</code>, which makes our code a little bit more indented and a little bit harder to read than the synchronous code, but that we can solve with <code>async</code> and <code>await</code>.</p><h2 id="async-and-await" tabindex="-1"><a class="header-anchor" href="#async-and-await" aria-hidden="true">#</a> Async and Await</h2><p>The keywords <code>async</code> and <code>await</code> can make our asynchronous code with promises even more readable. The <code>await</code> operator is the real hero of these two. Instead of calling <code>.then()</code> or <code>.catch()</code> on a promise, we can wait for the promise to be resolved or rejected with the <code>await</code> operator. When the promise resolve, the <code>await</code> operator will yield the value the promise resolved to, and when the promise is rejected the <code>await</code> operator will throw the error as an exception.</p>', 3)),
    createBaseVNode("p", null, [
      _cache[147] || (_cache[147] = createTextVNode("So, without ")),
      _cache[148] || (_cache[148] = createBaseVNode(
        "code",
        null,
        "async",
        -1
        /* HOISTED */
      )),
      _cache[149] || (_cache[149] = createTextVNode(" and ")),
      _cache[150] || (_cache[150] = createBaseVNode(
        "code",
        null,
        "await",
        -1
        /* HOISTED */
      )),
      _cache[151] || (_cache[151] = createTextVNode(", we can call an asynchronous function returning a promise as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[152] || (_cache[152] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample usage of an asynchronous function returning back a promise." }, {
      default: withCtx(() => _cache[153] || (_cache[153] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Asynchronous version with promises."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "then"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "quotient"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[154] || (_cache[154] = createTextVNode("If we would use the ")),
      _cache[155] || (_cache[155] = createBaseVNode(
        "code",
        null,
        "await",
        -1
        /* HOISTED */
      )),
      _cache[156] || (_cache[156] = createTextVNode(" operator, it would instead look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[157] || (_cache[157] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample usage of an awaiting an promise returned back from a function." }, {
      default: withCtx(() => _cache[158] || (_cache[158] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Asynchronous version with promises and await."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "try"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" quotient "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "await"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[211] || (_cache[211] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("This code is just as readable as synchronous code, the only different is that whenever we call a function that returns a promise, we must remember to use the "),
        createBaseVNode("code", null, "await"),
        createTextVNode(" operator to wait for the promise to be resolved or rejected.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[159] || (_cache[159] = createTextVNode("Whenever you use the ")),
      _cache[160] || (_cache[160] = createBaseVNode(
        "code",
        null,
        "await",
        -1
        /* HOISTED */
      )),
      _cache[161] || (_cache[161] = createTextVNode(" operator in a function, you must mark that function with the ")),
      _cache[162] || (_cache[162] = createBaseVNode(
        "code",
        null,
        "async",
        -1
        /* HOISTED */
      )),
      _cache[163] || (_cache[163] = createTextVNode(" keyword. A function marked with the ")),
      _cache[164] || (_cache[164] = createBaseVNode(
        "code",
        null,
        "async",
        -1
        /* HOISTED */
      )),
      _cache[165] || (_cache[165] = createTextVNode(" keyword always returns back a promise that resolves to the value you ")),
      _cache[166] || (_cache[166] = createBaseVNode(
        "code",
        null,
        "return",
        -1
        /* HOISTED */
      )),
      _cache[167] || (_cache[167] = createTextVNode(" back from the function. An example of that is shown in ")),
      createVNode(_component_FigureNumber),
      _cache[168] || (_cache[168] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Example of async functions." }, {
      default: withCtx(() => _cache[169] || (_cache[169] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, "// Asynchronous version with promises and async/await."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "async"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getTheSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" quotient1 "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "await"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" quotient2 "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "await"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" quotient1 "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" quotient12\n	"),
                createBaseVNode("span", { class: "token comment" }, "// The sum will be wrapped in a promise,"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// since the `async` keyword is used on this function."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "async"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "logTheSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "try"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" theSum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "await"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getTheSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, `"Couldn't log the sum because division by 0."`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// Even though this function does not explicitly return a value,"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// a promise will be returned implicitly."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token function" }, "logTheSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// Use the await operator here if you don't want the code"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// execution to continue until the promise has been fulfilled or rejects."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// As it is now (without the await operator), Hello! will be logged first."),
                createTextVNode("\n\nconsole"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Hello!"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[212] || (_cache[212] = createBaseVNode(
      "h2",
      {
        id: "how-to-create-promises",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#how-to-create-promises",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" How to Create Promises")
      ],
      -1
      /* HOISTED */
    )),
    _cache[213] || (_cache[213] = createBaseVNode(
      "p",
      null,
      "Often, promises are created automatically for you when you call one of the built-in functions in the JavaScript runtime environment that run asynchronously and returns a promise, such as:",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_5, [
          _cache[170] || (_cache[170] = createTextVNode("fetch()")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[172] || (_cache[172] = createTextVNode("It's also possible to create your own promises using ")),
      createBaseVNode("a", _hoisted_6, [
        _cache[171] || (_cache[171] = createTextVNode("the Promise constructor")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[173] || (_cache[173] = createTextVNode(", as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[174] || (_cache[174] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Template for creating your own promise." }, {
      default: withCtx(() => _cache[175] || (_cache[175] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" myPromise "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "new"),
                createTextVNode(),
                createBaseVNode("span", { class: "token class-name" }, "Promise"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("resolve"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" reject")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// The work the promise should do should be written here."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// If all goes well, call resolve(), and pass it the computed value."),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token comment" }, "// If something goes wrong, call reject(), and pass it the error."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[214] || (_cache[214] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("You need to pass a callback function to the Promise constructor. That callback function will be invoked immediately by the constructor, and in that function you should write the code for the long running operation. The constructor will also pass you two callback functions, one called "),
        createBaseVNode("code", null, "resolve()"),
        createTextVNode(", and one called "),
        createBaseVNode("code", null, "reject()"),
        createTextVNode(".")
      ],
      -1
      /* HOISTED */
    )),
    _cache[215] || (_cache[215] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("When your long running operation has completed, you should call "),
        createBaseVNode("code", null, "resolve()"),
        createTextVNode(" and pass it the value the long running operation resulted in. If something goes wrong you should instead call "),
        createBaseVNode("code", null, "reject()"),
        createTextVNode(", and pass it the error.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[176] || (_cache[176] = createTextVNode("To implement ")),
      _cache[177] || (_cache[177] = createBaseVNode(
        "code",
        null,
        "getQuotient()",
        -1
        /* HOISTED */
      )),
      _cache[178] || (_cache[178] = createTextVNode(" as an asynchronous function using promises, it would look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[179] || (_cache[179] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "A function returning a custom promise." }, {
      default: withCtx(() => _cache[180] || (_cache[180] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("dividend"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" divisor")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "new"),
                createTextVNode(),
                createBaseVNode("span", { class: "token class-name" }, "Promise"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("resolve"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" reject")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("divisor "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token function" }, "reject"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, `"Can't divide by 0"`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token function" }, "resolve"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("dividend "),
                createBaseVNode("span", { class: "token operator" }, "/"),
                createTextVNode(" divisor"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// Or create the promise implicitly by using the async keyword:"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "async"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("dividend"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" divisor")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("divisor "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "throw"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, `"Can't divide by 0"`),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" dividend "),
                createBaseVNode("span", { class: "token operator" }, "/"),
                createTextVNode(" divisor\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "try"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" quotient "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "await"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[181] || (_cache[181] = createTextVNode("You can use the promise above in the same way as any other promise, but since it doesn't contain any call to an asynchronous function (that runs in the background), it will run synchronous. To make it asynchronous, we could for example use ")),
      _cache[182] || (_cache[182] = createBaseVNode(
        "code",
        null,
        "setTimeout()",
        -1
        /* HOISTED */
      )),
      _cache[183] || (_cache[183] = createTextVNode(" to delay the computations, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[184] || (_cache[184] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "A function returning a custom promise that runs (waits) in the background." }, {
      default: withCtx(() => _cache[185] || (_cache[185] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("dividend"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" divisor")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "new"),
                createTextVNode(),
                createBaseVNode("span", { class: "token class-name" }, "Promise"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("resolve"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" reject")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token function" }, "setTimeout"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("divisor "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n				"),
                createBaseVNode("span", { class: "token function" }, "reject"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, `"Can't divide by 0"`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n				"),
                createBaseVNode("span", { class: "token function" }, "resolve"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("dividend "),
                createBaseVNode("span", { class: "token operator" }, "/"),
                createTextVNode(" divisor"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n			"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1000"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "try"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" quotient "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "await"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getQuotient"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The quotient is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("quotient"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[216] || (_cache[216] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Note that when you implement functions that makes use of promises from scratch, the implementation can have a few symptoms of callback hell, as "),
        createBaseVNode("code", null, "getQuotient()"),
        createTextVNode(" above. The real benefit with promises is that the code is really easy to read when you call functions returning promises, as in the try/catch block above.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[217] || (_cache[217] = createBaseVNode(
      "h2",
      {
        id: "recommended-reading",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#recommended-reading",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Recommended Reading")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[187] || (_cache[187] = createTextVNode("The following chapters from the book ")),
        createBaseVNode("a", _hoisted_7, [
          _cache[186] || (_cache[186] = createTextVNode("Eloquent JavaScript")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[188] || (_cache[188] = createTextVNode(": ")),
        _cache[189] || (_cache[189] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("ol", { start: "11" }, [
                createBaseVNode("li", null, "Asynchronous Programming")
              ])
            ])
          ],
          -1
          /* HOISTED */
        ))
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
