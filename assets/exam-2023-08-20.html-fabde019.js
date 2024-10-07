import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://datatracker.ietf.org/doc/html/rfc7519#section-3.1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://openid.net/specs/openid-connect-core-1_0.html#IDToken",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[62] || (_cache[62] = createStaticVNode('<h1 id="exam-2023-08-20" tabindex="-1"><a class="header-anchor" href="#exam-2023-08-20" aria-hidden="true">#</a> Exam 2023-08-20</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-08-20.</p><hr><p>Start by reading through all questions. Peter will not visit the exam. If you find any question unclear, ask the exam administrator (<em>tentavakt</em> in Swedish) to call Peter for clarification.</p><p>Max score is 25 points.</p><ul><li>For grade 3, 40% of max score (10 points) is required</li><li>For grade 4, 60% of max score (15 points) is required</li><li>For grade 5, 80% of max score (20 points) is required</li></ul><p>You are not allowed to use anything else except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. Write proper sentences (spelling, upper/lower case characters, punctuation, etc.). Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions,</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="client-side-js" tabindex="-1"><a class="header-anchor" href="#client-side-js" aria-hidden="true">#</a> Client-Side JS</h2><h3 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h3>', 13)),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[0] || (_cache[0] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("In client-side JS, name three different methods we can call on the "),
            createBaseVNode("code", null, "document"),
            createTextVNode(" object to obtain references to HTML elements on the webpage (the method should either return a single reference, or multiple references (i.e. a NodeList/Array)).")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[1] || (_cache[1] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "getElementById")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "querySelector")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "querySelectorAll")
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[2] || (_cache[2] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("0.33 points for each correct name "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Only 0.23 if spelling is wrong")
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[63] || (_cache[63] = createBaseVNode(
      "h3",
      {
        id: "question-2-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-2-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 2 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[3] || (_cache[3] = [
        createBaseVNode(
          "p",
          null,
          "Name two different events that can fire on a webpage and that cause the web browser to send an HTTP request to load a new webpage.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[4] || (_cache[4] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "click"),
              createTextVNode(" (when a "),
              createBaseVNode("code", null, "<a>"),
              createTextVNode(" element is clicked)")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "submit"),
              createTextVNode(" (when a "),
              createBaseVNode("code", null, "<form>"),
              createTextVNode(" element is submitted)")
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[5] || (_cache[5] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for each correct event name")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[64] || (_cache[64] = createBaseVNode(
      "h3",
      {
        id: "question-3-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-3-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 3 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[6] || (_cache[6] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Explain when and how many times the event "),
            createBaseVNode("code", null, "DOMContentLoaded"),
            createTextVNode(" fires on a webpage.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[7] || (_cache[7] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The "),
            createBaseVNode("code", null, "DOMContentLoaded"),
            createTextVNode(" event is fired by the web browser each time it has loaded a new webpage from the HTML code in an HTTP response, so it fires once for each webpage that is shown.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[8] || (_cache[8] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 point for when"),
            createBaseVNode("li", null, "0.5 points for how many times")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[65] || (_cache[65] = createBaseVNode(
      "h2",
      {
        id: "frontend-framework",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#frontend-framework",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Frontend framework")
      ],
      -1
      /* HOISTED */
    )),
    _cache[66] || (_cache[66] = createBaseVNode(
      "h3",
      {
        id: "question-4-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-4-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 4 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[9] || (_cache[9] = [
        createBaseVNode(
          "p",
          null,
          "In a frontend framework of your choice (name which one you choose), implement a component that works like this:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "The one using the component should be able to pass an array of integers to it"),
            createBaseVNode("li", null, [
              createTextVNode("If the array is empty, the component should display an HTML paragraph with the text "),
              createBaseVNode("code", null, "No integers")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("If the array is not empty, the component should display the integers in an HTML ordered list: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Each integer should be displayed in its own HTML list item"),
                createBaseVNode("li", null, [
                  createTextVNode("Each integer should be displayed as it is (e.g. "),
                  createBaseVNode("code", null, "5"),
                  createTextVNode(" should be displayed as "),
                  createBaseVNode("code", null, "5"),
                  createTextVNode("), except "),
                  createBaseVNode("code", null, "0"),
                  createTextVNode(", which should be displayed as the text "),
                  createBaseVNode("code", null, "Zero")
                ])
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[10] || (_cache[10] = [
        createBaseVNode(
          "p",
          null,
          "In Svelte:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          {
            class: "language-html line-numbers-mode",
            "data-ext": "html"
          },
          [
            createBaseVNode("pre", { class: "language-html" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("script")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createBaseVNode("span", { class: "token script" }, [
                  createBaseVNode("span", { class: "token language-javascript" }, [
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token keyword" }, "export"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "let"),
                    createTextVNode(" integers\n    \n")
                  ])
                ]),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("script")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n\n{#if integers.length == 0}\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("p")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("No integers"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("p")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n{:else}\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("ol")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        {#each integers as integer}\n            "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("li")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n                {#if integer == 0}\n                    Zero\n                {:else}\n                    {integer}\n                {/if}\n            "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("li")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        {/each}\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("ol")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n{/if}\n")
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[11] || (_cache[11] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for correct prop"),
            createBaseVNode("li", null, "0.5 points for using if correct"),
            createBaseVNode("li", null, "0.5 points for using loop correct"),
            createBaseVNode("li", null, "0.5 points for using else correct"),
            createBaseVNode("li", null, [
              createTextVNode("Point deductions for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for using "),
                  createBaseVNode("code", null, "array.count"),
                  createTextVNode("/"),
                  createBaseVNode("code", null, "array.isEmpty"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "array.length")
                ]),
                createBaseVNode("li", null, "-0.25 points for using extra variables not needed/not used"),
                createBaseVNode("li", null, "-0.25 points for not using else, but inverted condition in an extra if"),
                createBaseVNode("li", null, "-0.5 points for not naming which framework that is used"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.5 points for always showing "),
                  createBaseVNode("code", null, "<ul>")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("In Svelte: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createTextVNode("-0.1 points for "),
                      createBaseVNode("code", null, "of"),
                      createTextVNode(" instead of "),
                      createBaseVNode("code", null, "as"),
                      createTextVNode(" in "),
                      createBaseVNode("code", null, "#each")
                    ]),
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for not using the "),
                      createBaseVNode("code", null, "{ ... }"),
                      createTextVNode(" syntax in Svelte")
                    ]),
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for not using "),
                      createBaseVNode("code", null, "#each"),
                      createTextVNode(" correct")
                    ]),
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for using "),
                      createBaseVNode("code", null, "$"),
                      createTextVNode(" in front of variable name when it's not a store")
                    ])
                  ])
                ])
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[67] || (_cache[67] = createBaseVNode(
      "h2",
      {
        id: "http-rest-api",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#http-rest-api",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" HTTP/REST API")
      ],
      -1
      /* HOISTED */
    )),
    _cache[68] || (_cache[68] = createBaseVNode(
      "h3",
      {
        id: "question-5-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-5-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 5 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[12] || (_cache[12] = [
        createBaseVNode(
          "p",
          null,
          "Match each status code to its corresponding reason phrase.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Status codes:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "200"),
            createBaseVNode("li", null, "201"),
            createBaseVNode("li", null, "204"),
            createBaseVNode("li", null, "404"),
            createBaseVNode("li", null, "500")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Reason Phrases:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Internal Server Error"),
            createBaseVNode("li", null, "No Content"),
            createBaseVNode("li", null, "Not Found"),
            createBaseVNode("li", null, "Created"),
            createBaseVNode("li", null, "OK")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "You will get:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for all correct")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[13] || (_cache[13] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "200 - OK"),
            createBaseVNode("li", null, "201 - Created"),
            createBaseVNode("li", null, "204 - No Content"),
            createBaseVNode("li", null, "404 - Not Found"),
            createBaseVNode("li", null, "500 - Internal Server Error")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[14] || (_cache[14] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for all correct")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[69] || (_cache[69] = createBaseVNode(
      "h3",
      {
        id: "question-6-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-6-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 6 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[15] || (_cache[15] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("In HTTP, explain when the "),
            createBaseVNode("code", null, "Accept"),
            createTextVNode(" header can be used, what it represents, and give an example of a value it can have, and explain what using the header with that value means.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[16] || (_cache[16] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The "),
            createBaseVNode("code", null, "Accept"),
            createTextVNode(" header can be used in an HTTP request to indicate which data format the client wants the body in the HTTP response to be written in. For example, the value "),
            createBaseVNode("code", null, "application/json"),
            createTextVNode(" would mean that the body in the response should be written in JSON format.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[17] || (_cache[17] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.25 points for used in requests"),
            createBaseVNode("li", null, "0.25 points for what it represents"),
            createBaseVNode("li", null, "0.25 points sample value"),
            createBaseVNode("li", null, "0.25 points for what sample value means")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[70] || (_cache[70] = createBaseVNode(
      "h3",
      {
        id: "question-7-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-7-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 7 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[18] || (_cache[18] = [
        createBaseVNode(
          "p",
          null,
          "On a backend storing information about species, the following relational database table is used to store the species:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "table",
          null,
          [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "id"),
                createBaseVNode("th", null, "name"),
                createBaseVNode("th", null, "numberOfLegs")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "Snake"),
                createBaseVNode("td", null, "0")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "2"),
                createBaseVNode("td", null, "Dog"),
                createBaseVNode("td", null, "4")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "3"),
                createBaseVNode("td", null, "Human"),
                createBaseVNode("td", null, "2")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "4"),
                createBaseVNode("td", null, "Cat"),
                createBaseVNode("td", null, "4")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "...")
              ])
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Your task is to design a REST API clients can use to update a species with a specific "),
            createBaseVNode("code", null, "id"),
            createTextVNode(". The following validation rules should exist:")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "name"),
              createTextVNode(" must contain at least 1 character")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Two different species with the same "),
              createBaseVNode("code", null, "name"),
              createTextVNode(" may not exist")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "numberOfLegs"),
              createTextVNode(" must be 0 or more")
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Someone who implements or uses your API should be able to get all details they need to know about the API from your design, so be sure to mention all relevant details they need to use/implement it.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": You don't need to worry about authorization in this task; any (anonymous) client should be allowed to update any species.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": If you think you are missing some important information you have to know to be able to carry out the task in a good way, feel free to make your own assumptions about that information, but clearly state which those assumptions are in your answer.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[19] || (_cache[19] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Words "),
            createBaseVNode("code", null, "WRITTEN_LIKE_THIS"),
            createTextVNode(" are placeholders for actual values.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Request:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("URI: "),
              createBaseVNode("code", null, "/species/THE_ACTUAL_ID")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Method: "),
              createBaseVNode("code", null, "PUT")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Headers: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "Content-Type"),
                  createTextVNode(": "),
                  createBaseVNode("code", null, "application/json")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "Content-Length"),
                  createTextVNode(": "),
                  createBaseVNode("code", null, "THE_ACTUAL_NUMBER_OF_BYTES_IN_THE_BODY")
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Body:"),
              createBaseVNode("div", {
                class: "language-json line-numbers-mode",
                "data-ext": "json"
              }, [
                createBaseVNode("pre", { class: "language-json" }, [
                  createBaseVNode("code", null, [
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createBaseVNode("span", { class: "token property" }, '"id"'),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" THE_ACTUAL_ID"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token property" }, '"name"'),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string" }, '"THE_ACTUAL_NAME"'),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token property" }, '"numberOfLegs"'),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string" }, '"THE_ACTUAL_NUMBER_OF_LEGS"'),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n")
                  ])
                ]),
                createBaseVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  createBaseVNode("div", { class: "line-number" })
                ])
              ])
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Possible responses:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("If the server can't carry out the request because of some internal error: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("Status code: "),
                  createBaseVNode("code", null, "500")
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("If there doesn't exist a species resource with "),
              createBaseVNode("code", null, "THE_ACTUAL_ID"),
              createTextVNode(": "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("Status code: "),
                  createBaseVNode("code", null, "404")
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("If the resource was successfully updated "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("Status code: "),
                  createBaseVNode("code", null, "204")
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("If there are validation errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("Status code: "),
                  createBaseVNode("code", null, "400")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("Headers: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "Content-Type"),
                      createTextVNode(": "),
                      createBaseVNode("code", null, "application/json")
                    ]),
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "Content-Length"),
                      createTextVNode(": "),
                      createBaseVNode("code", null, "THE_ACTUAL_NUMBER_OF_BYTES_IN_THE_BODY")
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("Body:"),
                  createBaseVNode("div", {
                    class: "language-json line-numbers-mode",
                    "data-ext": "json"
                  }, [
                    createBaseVNode("pre", { class: "language-json" }, [
                      createBaseVNode("code", null, [
                        createBaseVNode("span", { class: "token punctuation" }, "["),
                        createBaseVNode("span", { class: "token string" }, '"ERROR_CODE_1"'),
                        createBaseVNode("span", { class: "token punctuation" }, ","),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token string" }, '"ERROR_CODE_2"'),
                        createBaseVNode("span", { class: "token punctuation" }, ","),
                        createTextVNode(" ..."),
                        createBaseVNode("span", { class: "token punctuation" }, "]"),
                        createTextVNode("\n")
                      ])
                    ]),
                    createBaseVNode("div", {
                      class: "line-numbers",
                      "aria-hidden": "true"
                    }, [
                      createBaseVNode("div", { class: "line-number" })
                    ])
                  ]),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createTextVNode("Available "),
                      createBaseVNode("code", null, "ERROR_CODE_X"),
                      createTextVNode(": "),
                      createBaseVNode("ul", null, [
                        createBaseVNode("li", null, [
                          createBaseVNode("code", null, "NAME_TOO_SHORT"),
                          createTextVNode(" (name must contain at least 1 character)")
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("code", null, "NAME_ALREADY_USED"),
                          createTextVNode(" (a species with the new name already exist)")
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("code", null, "NUMBER_OF_LEGS_TOO_FEW"),
                          createTextVNode(" (must be at least 0)")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[20] || (_cache[20] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for request"),
            createBaseVNode("li", null, "0.5 points for handling success response"),
            createBaseVNode("li", null, "0.5 points for handling not found response"),
            createBaseVNode("li", null, "0.5 points for validation errors response")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Point deduction:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("-0.1 points for each piece of information missing, such as: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "URI in request"),
                createBaseVNode("li", null, "Method in request"),
                createBaseVNode("li", null, [
                  createTextVNode("Crucial header in request (except "),
                  createBaseVNode("code", null, "Content-Length"),
                  createTextVNode(")")
                ]),
                createBaseVNode("li", null, "Body/property in body"),
                createBaseVNode("li", null, "Crucial header in response"),
                createBaseVNode("li", null, "Error code/message"),
                createBaseVNode("li", null, "Etc.")
              ])
            ]),
            createBaseVNode("li", null, "-0.1 points for each piece of information written that makes no sense")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[71] || (_cache[71] = createBaseVNode(
      "h3",
      {
        id: "question-8-3p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-8-3p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 8 (3p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[21] || (_cache[21] = [
        createBaseVNode(
          "p",
          null,
          "Name and describe each constraint REST consists of.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          _cache[23] || (_cache[23] = createTextVNode("See ")),
          createBaseVNode("a", _hoisted_1, [
            _cache[22] || (_cache[22] = createTextVNode("Chapter 5.1 Deriving REST")),
            createVNode(_component_ExternalLinkIcon)
          ]),
          _cache[24] || (_cache[24] = createTextVNode(" in ")),
          _cache[25] || (_cache[25] = createBaseVNode(
            "em",
            null,
            "Roy Thomas Fielding's",
            -1
            /* HOISTED */
          )),
          _cache[26] || (_cache[26] = createTextVNode(" dissertation ")),
          _cache[27] || (_cache[27] = createBaseVNode(
            "em",
            null,
            "Architectural Styles and the Design of Network-based Software Architectures",
            -1
            /* HOISTED */
          )),
          _cache[28] || (_cache[28] = createTextVNode("."))
        ])
      ]),
      "marking-guidelines": withCtx(() => _cache[29] || (_cache[29] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.25 points for each correct name"),
            createBaseVNode("li", null, "0.25 points for each correct description")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[72] || (_cache[72] = createBaseVNode(
      "h3",
      {
        id: "question-9-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-9-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 9 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[30] || (_cache[30] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Alice is assigned the task to design a REST API clients can use to login and then create new blogposts belonging to that account. She decides that when a user logs in, the client obtains an access token ("),
            createBaseVNode("code", null, "THE.ACCESS.TOKEN"),
            createTextVNode(") containing the user's account id, which can be used to act on the behalf of that user. Then when the user wants to create a new blogpost belonging to her own account, the client sends an HTTP "),
            createBaseVNode("code", null, "POST"),
            createTextVNode(" request to "),
            createBaseVNode("code", null, "/blogposts"),
            createTextVNode(" with the headers "),
            createBaseVNode("code", null, "Authorization: Bearer THE.ACCESS.TOKEN"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "Content-Type: application/json"),
            createTextVNode(", and in the body pass "),
            createBaseVNode("code", null, '{"title": "The actual title", "content": "The blogpost text."}'),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Is this a good or bad design? Justify your answer.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[31] || (_cache[31] = [
        createBaseVNode(
          "p",
          null,
          "It's a bad design, because the resource in the body of the request contains no information about which account the blogpost should belong to. In HTTP, the body should contain the entire resource, so if one for example logs the URI, method and the body on the server-side and look at it later, one should be able to understand what the entire request is about.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Alice is probably thinking the account id in the access token can be used to figure out which account the blogpost should belong to, but access tokens should only be used for authorization, and not containing a part of a resource, so the body should still contain a value that indicates which account the blogpost should belong to, and the account id in the access token should only be used to figure out if the user is allowed to create a blogpost belonging to that account (e.g. all users may create a blogpost belonging to their own account, but admins may also create a blogpost belonging to someone else's account, so one can't blindly use the account id in the access token).",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[32] || (_cache[32] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for correct answer and access token VS body justification")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[73] || (_cache[73] = createBaseVNode(
      "h3",
      {
        id: "question-10-3p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-10-3p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 10 (3p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[33] || (_cache[33] = [
        createBaseVNode(
          "p",
          null,
          "Describe the parts a JWT consists of. Then also explain why JWTs are secure to use (why a hacker can't fool a server by changing the data in the token or by creating her own token).",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          _cache[35] || (_cache[35] = createTextVNode("See for example ")),
          createBaseVNode("a", _hoisted_2, [
            _cache[34] || (_cache[34] = createTextVNode("Chapter 3.1 in the JWT Specification")),
            createVNode(_component_ExternalLinkIcon)
          ]),
          _cache[36] || (_cache[36] = createTextVNode("."))
        ])
      ]),
      "marking-guidelines": withCtx(() => _cache[37] || (_cache[37] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.25 points for each (somewhat) correct name"),
            createBaseVNode("li", null, [
              createTextVNode("0.50 points for each correct explanation "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "only 0.25 points if explanation lacks details or contains errors, but to some degree is correct")
              ])
            ]),
            createBaseVNode("li", null, "0.75 points for explaining why they are secure")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[74] || (_cache[74] = createBaseVNode(
      "h3",
      {
        id: "question-11-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-11-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 11 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[38] || (_cache[38] = [
        createBaseVNode(
          "p",
          null,
          "When adding login functionality to a REST API, explain why it's usually not enough for the server to only send back an Access Token, but the server also needs to send back an ID Token.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[39] || (_cache[39] = [
        createBaseVNode(
          "p",
          null,
          "When a user logs in, the client usually need to know information about the account the user logged in to, such as the account's id. Without that information, it would for example be impossible for the client to send requests and display information about resources belonging to that account, since the client can't identify the account.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Access Token are not designed to tell this information to the client, since they are only meant to be used for authorization. When implementing Access Tokens as JWT, it's possible for client to open up the Access Token and read information from it, but it's not something the client should rely on. For example, in the future, the server might change how it implements Access Token, so they are no longer implemented as JWT, and then the client code will no longer work.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "So, instead, server usually send back an ID Token with the explicit purpose to contain information about the account the user logged in to, and is intended to be opened by the clients.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[40] || (_cache[40] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct explanation")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[75] || (_cache[75] = createBaseVNode(
      "h3",
      {
        id: "question-12-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-12-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 12 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[41] || (_cache[41] = [
        createBaseVNode(
          "p",
          null,
          "Does an ID Token has to be implemented as a JWT? Justify your answer",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          _cache[43] || (_cache[43] = createTextVNode("Yes, the specification for ")),
          createBaseVNode("a", _hoisted_3, [
            _cache[42] || (_cache[42] = createTextVNode("OpenID Connect")),
            createVNode(_component_ExternalLinkIcon)
          ]),
          _cache[44] || (_cache[44] = createTextVNode(" states:"))
        ]),
        _cache[45] || (_cache[45] = createBaseVNode(
          "blockquote",
          null,
          [
            createBaseVNode("p", null, "The ID Token is represented as a JSON Web Token (JWT).")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      "marking-guidelines": withCtx(() => _cache[46] || (_cache[46] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct answer and valid justification")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[76] || (_cache[76] = createBaseVNode(
      "h3",
      {
        id: "question-13-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-13-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 13 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[47] || (_cache[47] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("If client-side JS code on a webpage tries to send an HTTP "),
            createBaseVNode("code", null, "DELETE"),
            createTextVNode(" request, will that always trigger a CORS pre-flight request? Justify your answer.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[48] || (_cache[48] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("No, not always, not, for example, if the "),
            createBaseVNode("code", null, "DELETE"),
            createTextVNode(" request is sent to the server as the origin of the client-side JS, because then it's not a Cross-site request, and the Same-Origin Policy won't stop the request from being sent to begin with, so CORS is not needed.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[49] || (_cache[49] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct answer and valid justification")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[77] || (_cache[77] = createBaseVNode(
      "h2",
      {
        id: "docker",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#docker",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Docker")
      ],
      -1
      /* HOISTED */
    )),
    _cache[78] || (_cache[78] = createBaseVNode(
      "h3",
      {
        id: "question-14-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-14-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 14 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[50] || (_cache[50] = [
        createBaseVNode(
          "p",
          null,
          "Explain what port mapping in Docker is, and give a practical example of when you need to use it.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[51] || (_cache[51] = [
        createBaseVNode(
          "p",
          null,
          "All containers in Docker are running in an isolated environment, so no application on the host computer can communicate with an application in the container. By using port mapping, you can tell Docker that one port on the host computer should lead to one port in the container, and then the host computer can use this to communicate with an app in the container.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "This is for example used when the container runs a web application, and you want to be able to send HTTP requests to it from a web browser running on the host computer.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[52] || (_cache[52] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for what it is"),
            createBaseVNode("li", null, "0.5 points for practical example")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[79] || (_cache[79] = createBaseVNode(
      "h3",
      {
        id: "question-15-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-15-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 15 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[53] || (_cache[53] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Explain what the Docker instruction "),
            createBaseVNode("code", null, "COPY"),
            createTextVNode(" can be used for, and explain when that instruction is executed.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[54] || (_cache[54] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("As all Docker instructions, the "),
            createBaseVNode("code", null, "COPY"),
            createTextVNode(" instruction is executed when you build a Docker image. It instructs Docker to copy a file on the file system on the host computer to the file system that will exists in the container running the image.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[55] || (_cache[55] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for what the instruction does"),
            createBaseVNode("li", null, "0.5 points for when it is executed")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[80] || (_cache[80] = createBaseVNode(
      "h2",
      {
        id: "scaling",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#scaling",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Scaling")
      ],
      -1
      /* HOISTED */
    )),
    _cache[81] || (_cache[81] = createBaseVNode(
      "h3",
      {
        id: "question-16-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-16-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 16 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[56] || (_cache[56] = [
        createBaseVNode(
          "p",
          null,
          "Explain how horizontal scaling works.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[57] || (_cache[57] = [
        createBaseVNode(
          "p",
          null,
          "When a web application runs on a server and it receives more HTTP requests than it has time to handle, you can scale the application horizontally. That means you run the application on multiple servers behind a server that act as a load balancer. All clients send their HTTP requests to the load balancer, and the load balancer then forwards and distributes the HTTP requests among the servers running the web application, which carryout out the requests they receive and send back responses to the clients.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[58] || (_cache[58] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for application running on multiple servers"),
            createBaseVNode("li", null, "0.25 points for explaining that the workload in distributed among the server"),
            createBaseVNode("li", null, "0.25 points for explaining how the workload is distributed (load balancer)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[82] || (_cache[82] = createBaseVNode(
      "h2",
      {
        id: "javascript",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#javascript",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" JavaScript")
      ],
      -1
      /* HOISTED */
    )),
    _cache[83] || (_cache[83] = createBaseVNode(
      "h3",
      {
        id: "question-17-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-17-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 17 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[59] || (_cache[59] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The function "),
            createBaseVNode("code", null, "getAccountByUsername()"),
            createTextVNode(" should receive the username of an account as an argument, and it returns a promise that resolves to a JS object with information about the account with that username. If the account object can't be retrieved, the promise is rejected to a JS error object containing information about what went wrong.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The function "),
            createBaseVNode("code", null, "getBlogpostsByAccount()"),
            createTextVNode(" should receive an account object as an argument, and it returns a promise that resolves to a JS array with objects representing blogposts that account has created. If the blogposts can't be retrieved, the promise is rejected to a JS error object containing information about what went wrong.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Implement the function "),
            createBaseVNode("code", null, "getAccountWithBlogpostsByUsername()"),
            createTextVNode(", that receives the username of an account as argument, and returns a promise that resolves to the account object with that username that also contains the property "),
            createBaseVNode("code", null, "blogposts"),
            createTextVNode(" that stores an array with all the blogposts created by that account.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("If you get an error from "),
            createBaseVNode("code", null, "getAccountByUsername()"),
            createTextVNode(" or "),
            createBaseVNode("code", null, "getBlogpostsByAccount()"),
            createTextVNode(", then your own promise should be rejected with the string "),
            createBaseVNode("code", null, '"getDataError"'),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("It is OK to use "),
            createBaseVNode("code", null, "async"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "await"),
            createTextVNode(" in your implementation.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[60] || (_cache[60] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "async"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getAccountWithBlogpostsByUsername"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "username"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	\n	"),
                createBaseVNode("span", { class: "token keyword" }, "try"),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		\n		"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" account "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "await"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getAccountByUsername"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("username"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		account"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("blogposts "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "await"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getBlogpostsByAccount"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("account"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" account\n		\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "catch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		\n		"),
                createBaseVNode("span", { class: "token keyword" }, "throw"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"getDataError"'),
                createTextVNode("\n		\n	"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n	\n"),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[61] || (_cache[61] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for a solution that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Point deductions for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for returning "),
                  createBaseVNode("code", null, "{account, blogposts}")
                ]),
                createBaseVNode("li", null, "-0.25 points for retuning error instead of throwing"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for not using "),
                  createBaseVNode("code", null, '"getDataError"'),
                  createTextVNode(" as the rejected value")
                ])
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    })
  ]);
}
const exam20230820_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-08-20.html.vue"]]);
export {
  exam20230820_html as default
};
