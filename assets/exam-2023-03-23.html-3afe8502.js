import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://www.rfc-editor.org/rfc/rfc7519#section-3.1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://www.rfc-editor.org/rfc/rfc6749#section-1.1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://www.rfc-editor.org/rfc/rfc6749#section-4.1",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[67] || (_cache[67] = createStaticVNode('<h1 id="exam-2023-03-23" tabindex="-1"><a class="header-anchor" href="#exam-2023-03-23" aria-hidden="true">#</a> Exam 2023-03-23</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-03-23.</p><hr><p>Start by reading through all questions. Peter will visit the exam 45 minutes after it has started to clarify the questions you find unclear.</p><p>Max score is 25 points.</p><ul><li>For grade 3, 40% of max score (10 points) is required</li><li>For grade 4, 60% of max score (15 points) is required</li><li>For grade 5, 80% of max score (20 points) is required</li></ul><p>You are not allowed to use anything else except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. Write proper sentences (spelling, upper/lower case characters, punctuation, etc.). Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions,</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="client-side-js" tabindex="-1"><a class="header-anchor" href="#client-side-js" aria-hidden="true">#</a> Client-Side JS</h2><h3 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h3>', 13)),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[0] || (_cache[0] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Explain why most websites with Client-Side JS code need to listen for the "),
            createBaseVNode("code", null, "DOMContentLoaded"),
            createTextVNode(" event.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[1] || (_cache[1] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("When using Client-Side JavaScript, one often needs to modify the Document Object Model (DOM), such as inserting an HTML element into it, or remove an HTML element from it, etc. To carry out these operations, we need references to the HTML elements in the DOM we want to work with. To obtain those references, we can use "),
            createBaseVNode("code", null, "document"),
            createTextVNode(" methods such as "),
            createBaseVNode("code", null, "getElementById()"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "querySelector()"),
            createTextVNode(". However, the call to these methods must happen when the web browser is done parsing the HTML code on the webpage (hence is done building the DOM), and not before that. So we need to listen to the "),
            createBaseVNode("code", null, "DOMContentLoaded"),
            createTextVNode(" event so our code that makes use of these methods will run after the web browser has created the HTML elements in the DOM.")
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
            createBaseVNode("li", null, "1 point for correct explanation")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[68] || (_cache[68] = createBaseVNode(
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
          [
            createTextVNode("Alice has a webpage with the following HTML code in "),
            createBaseVNode("code", null, "<body>"),
            createTextVNode(":")
          ],
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
                    createTextVNode("input")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "type"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("number"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "id"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("number1"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("input")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "type"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("number"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "id"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("number2"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("button")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "id"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("showSum"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Show sum"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("button")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The user should enter two numbers in the "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" elements, and then when the user clicks the button, the sum should be shown in an alert dialog (an alert dialog can be shown by calling the "),
            createBaseVNode("code", null, "alert()"),
            createTextVNode(" function). To make that happen, she adds the following HTML code to the page:")
          ],
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
                    createTextVNode("\n	\n	document"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "addEventListener"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token string" }, "'DOMContentLoaded'"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "function"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n		\n		"),
                    createBaseVNode("span", { class: "token keyword" }, "const"),
                    createTextVNode(" number1 "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "parseInt"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("document"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "getElementById"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token string" }, "'number1'"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("value"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token number" }, "10"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token keyword" }, "const"),
                    createTextVNode(" number2 "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "parseInt"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("document"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "getElementById"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token string" }, "'number2'"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("value"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token number" }, "10"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n		\n		document"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "getElementById"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token string" }, "'showSum'"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "addEventListener"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token string" }, "'click'"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "function"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n			\n			"),
                    createBaseVNode("span", { class: "token function" }, "alert"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("number1 "),
                    createBaseVNode("span", { class: "token operator" }, "+"),
                    createTextVNode(" number2"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n			\n		"),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n		\n	"),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n	\n")
                  ])
                ]),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("script")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
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
        ),
        createBaseVNode(
          "p",
          null,
          "When the button is clicked, an alert dialog is shown, but it does not display the sum of the numbers the user has entered. Explain what Alice has done wrong, and suggest how the code should be changed to work as it should.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[4] || (_cache[4] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The problem is that the values in the "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" elements are read when the "),
            createBaseVNode("code", null, "DOMContentLoaded"),
            createTextVNode(" event happens, and at that time, the user hasn't entered any numbers in them yet. The numbers should instead be read when the "),
            createBaseVNode("code", null, "click"),
            createTextVNode(" event happens on the "),
            createBaseVNode("code", null, "<button>"),
            createTextVNode(", so moving the two lines of code creating the two variables into the innermost function would solve the problem.")
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
            createBaseVNode("li", null, "0.5 points for explaining the problem"),
            createBaseVNode("li", null, "0.5 points for also explaining a solution"),
            createBaseVNode("li", null, [
              createTextVNode("-0.1 points for each claim that is not true (except what "),
              createBaseVNode("code", null, "parseInt(inputField.value, 10"),
              createTextVNode(" evaluates to initially)")
            ])
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
          "When the user clicks on an anchor element on a webpage, an event is fired by the web browser. What is the name of that event?",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": Spelling must be correct to get any points")
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
            createBaseVNode("code", null, "click")
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
            createBaseVNode("li", null, "1 point for correct name (spelling must be correct)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[70] || (_cache[70] = createBaseVNode(
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
    _cache[71] || (_cache[71] = createBaseVNode(
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
          [
            createTextVNode("In a frontend framework of your choice (name which one you choose), implement a component that contains two "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" elements the user can use to enter two numbers. The component should also contain a "),
            createBaseVNode("code", null, "<span>"),
            createTextVNode(" element that automatically shows the sum of the entered numbers (should be updated automatically as soon as the user changes one of the numbers in the "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" elements).")
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
                    createBaseVNode("span", { class: "token keyword" }, "let"),
                    createTextVNode(" leftTerm "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token number" }, "0"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token keyword" }, "let"),
                    createTextVNode(" rightTerm "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token number" }, "0"),
                    createTextVNode("\n    \n")
                  ])
                ]),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("script")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("input")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "type"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("number"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, [
                    createBaseVNode("span", { class: "token namespace" }, "bind:"),
                    createTextVNode("value")
                  ]),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createTextVNode("{leftTerm}")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode(" +\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("input")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "type"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("number"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, [
                    createBaseVNode("span", { class: "token namespace" }, "bind:"),
                    createTextVNode("value")
                  ]),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createTextVNode("{rightTerm}")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode(" =\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("{leftTerm + rightTerm}"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
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
            createBaseVNode("li", null, "2 points for an answer that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.5 points for not naming which framework that is used"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for using "),
                  createBaseVNode("code", null, "var"),
                  createTextVNode(" when it's better to use "),
                  createBaseVNode("code", null, "let")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("In Svelte: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for not having the "),
                      createBaseVNode("code", null, "<script>"),
                      createTextVNode(" element")
                    ]),
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for using "),
                      createBaseVNode("code", null, "const"),
                      createTextVNode(" instead of "),
                      createBaseVNode("code", null, "let"),
                      createTextVNode(" for the variables")
                    ]),
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for not using "),
                      createBaseVNode("code", null, 'type="number"')
                    ]),
                    createBaseVNode("li", null, "-0.25 points for binding to the wrong variables"),
                    createBaseVNode("li", null, "-0.25 points for using the wrong syntax for binding the variables to the input elements, but close to correct"),
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for listening to the "),
                      createBaseVNode("code", null, "change"),
                      createTextVNode(" event wrong")
                    ]),
                    createBaseVNode("li", null, "-0.25 points for using the wrong syntax to show the sum"),
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for a "),
                      createBaseVNode("code", null, "sum"),
                      createTextVNode(" variable that is not recomputed when the number variables change")
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("In React: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for forgetting "),
                      createBaseVNode("code", null, "function"),
                      createTextVNode(" keyword")
                    ]),
                    createBaseVNode("li", null, "-0.25 points for creating state outside the component"),
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for creating state for "),
                      createBaseVNode("code", null, "sum"),
                      createTextVNode(" (no point in doing that, ordinary variable suffice, and you open up for the possibility that someone changes the "),
                      createBaseVNode("code", null, "sum"),
                      createTextVNode(" without changing the number variables, which makes no sense)")
                    ]),
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for not setting the "),
                      createBaseVNode("code", null, "value"),
                      createTextVNode(" attribute to the correct value")
                    ]),
                    createBaseVNode("li", null, [
                      createTextVNode("-0.25 points for setting the "),
                      createBaseVNode("code", null, "onChange"),
                      createTextVNode(" handler wrong")
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
    _cache[72] || (_cache[72] = createBaseVNode(
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
    _cache[73] || (_cache[73] = createBaseVNode(
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
          "Match each status code with its corresponding reason phrase.",
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
            createBaseVNode("li", null, "400"),
            createBaseVNode("li", null, "404")
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
            createBaseVNode("li", null, "OK"),
            createBaseVNode("li", null, "Created"),
            createBaseVNode("li", null, "No Content"),
            createBaseVNode("li", null, "Bad Request"),
            createBaseVNode("li", null, "Not Found")
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
            createBaseVNode("li", null, "400 - Bad Request"),
            createBaseVNode("li", null, "404 - Not Found")
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
    _cache[74] || (_cache[74] = createBaseVNode(
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
            createTextVNode("In a REST API, to create a new account, one should send an HTTP request like the one below ("),
            createBaseVNode("code", null, "WORDS_WRITTEN_LIKE_THIS"),
            createTextVNode(" are placeholders for actual values).")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          {
            class: "language-http line-numbers-mode",
            "data-ext": "http"
          },
          [
            createBaseVNode("pre", { class: "language-http" }, [
              createBaseVNode("code", null, [
                createTextVNode("POST /create-account\n"),
                createBaseVNode("span", { class: "token header" }, [
                  createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token header-value" }, "ACTUAL_DOMAIN")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token header" }, [
                  createBaseVNode("span", { class: "token header-name keyword" }, "Content-Type"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token header-value" }, "application/json")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token header" }, [
                  createBaseVNode("span", { class: "token header-name keyword" }, "Content-Length"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token header-value" }, "ACTUAL_LENGTH")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token application-json" }, [
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createBaseVNode("span", { class: "token property" }, '"username"'),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"ACTUAL_USERNAME"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token property" }, '"password"'),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"ACTUAL_PASSWORD"'),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode("\n")
                ])
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
        ),
        createBaseVNode(
          "p",
          null,
          "Is this HTTP request good designed? Justify your answer.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[16] || (_cache[16] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("No, it is not good designed, because the URL doesn't identify resources, but instead indicates what the request is about. The URL should only identify resources, the method should indicate what to do. So, if the request is about creating a new resource, the URL should rather identify the collection of resources the new resources should be added to, i.e. "),
            createBaseVNode("code", null, "/accounts"),
            createTextVNode(" in this case.")
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
            createBaseVNode("li", null, "1 point for justifying why the URL is bad"),
            createBaseVNode("li", null, "-0.1 points for stating something strange/that is not true")
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
        id: "question-7-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-7-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 7 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[18] || (_cache[18] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("In REST, explain what a "),
            createBaseVNode("em", null, "constraint"),
            createTextVNode(" is.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[19] || (_cache[19] = [
        createBaseVNode(
          "p",
          null,
          "A constraint is like a rule that you should follow, and if you do follow it, it will help preventing you from building a bad solution from a certain point of view, such as preventing you from building a solution that is not scalable.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[20] || (_cache[20] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for a correct explanation")
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
    _cache[77] || (_cache[77] = createBaseVNode(
      "h3",
      {
        id: "question-9-3p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-9-3p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 9 (3p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[30] || (_cache[30] = [
        createBaseVNode(
          "p",
          null,
          "Describe the parts a JWT consists of. Then also explain why JWTs are secure to use (how a server can trust a JWT it receives from a client).",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          _cache[32] || (_cache[32] = createTextVNode("For a description of the parts, see ")),
          createBaseVNode("a", _hoisted_2, [
            _cache[31] || (_cache[31] = createTextVNode("Chapter 3.1. Example JWT")),
            createVNode(_component_ExternalLinkIcon)
          ]),
          _cache[33] || (_cache[33] = createTextVNode(" in the ")),
          _cache[34] || (_cache[34] = createBaseVNode(
            "em",
            null,
            "JSON Web Token (JWT)",
            -1
            /* HOISTED */
          )),
          _cache[35] || (_cache[35] = createTextVNode(" specification."))
        ]),
        _cache[36] || (_cache[36] = createBaseVNode(
          "p",
          null,
          "When the server signs the JWT, it will compute a hash from the Header, the Payload and a secret only the server knows. When the server receives a JWT from a client, it will compute the hash again from the Header, the Payload and the secret only the server knows. If the computed hash isn't the same as the signature in the received JWT, then server knows the JWT was created with another secret, hence not created by the server itself, and the server won't trust the token. Otherwise it can trust that the JWT was created by the server itself (under the assumption no one knows the secret on the server, or has been lucky using the same one).",
          -1
          /* HOISTED */
        ))
      ]),
      "marking-guidelines": withCtx(() => _cache[37] || (_cache[37] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.25 points for each name"),
            createBaseVNode("li", null, "0.25 points for each description/purpose"),
            createBaseVNode("li", null, "0.25 points for each how to generate the parts (JSON, base64, etc.)"),
            createBaseVNode("li", null, "0.75 points for explaining how a server can trust a JWT/discover a tempered JWT")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[78] || (_cache[78] = createBaseVNode(
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
      question: withCtx(() => _cache[38] || (_cache[38] = [
        createBaseVNode(
          "p",
          null,
          "In OAuth 2.0, name and describe the 4 different roles that exists. Then also describe how the Authorization Code flow works.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          _cache[40] || (_cache[40] = createTextVNode("For the roles, see ")),
          createBaseVNode("a", _hoisted_3, [
            _cache[39] || (_cache[39] = createTextVNode("Chapter 1.1. Roles")),
            createVNode(_component_ExternalLinkIcon)
          ]),
          _cache[41] || (_cache[41] = createTextVNode(" in the OAuth 2.0 specification."))
        ]),
        createBaseVNode("p", null, [
          _cache[43] || (_cache[43] = createTextVNode("For the Authorization Code flow, see ")),
          createBaseVNode("a", _hoisted_4, [
            _cache[42] || (_cache[42] = createTextVNode("Chapter 4.1. Authorization Code Grant")),
            createVNode(_component_ExternalLinkIcon)
          ]),
          _cache[44] || (_cache[44] = createTextVNode(" in the OAuth 2.0 specification."))
        ])
      ]),
      "marking-guidelines": withCtx(() => _cache[45] || (_cache[45] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("Roles: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "0.25 points for each correct name"),
                createBaseVNode("li", null, "0.25 points for each correct description")
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Authorization Code flow: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, '1 point for full description with most events ("trades") happening (small point deduction for small misses)')
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
    _cache[79] || (_cache[79] = createBaseVNode(
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
      question: withCtx(() => _cache[46] || (_cache[46] = [
        createBaseVNode(
          "p",
          null,
          "Give an example of a value that makes sense to put in an ID Token, but that most likely won't be needed in an Access Token. Justify your answer.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[47] || (_cache[47] = [
        createBaseVNode(
          "p",
          null,
          "Since ID Tokens should contain information about the account a user has logged in to, it makes sense to put information such as the user's first name in it.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Access Tokens on the other hand should contain information the server can use to figure out what a user is allowed to do, and that is probably independent of the user's first name, so that is probably not put in an Access Token.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("So an example is the user's first name, such as "),
            createBaseVNode("code", null, "Alice"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          { class: "custom-container warning" },
          [
            createBaseVNode("p", { class: "custom-container-title" }, "Authentication VS Authorization"),
            createBaseVNode("p", null, [
              createTextVNode("Many students use the word "),
              createBaseVNode("em", null, "authentication"),
              createTextVNode(" wrong in their answers. Authentication happens when a user logs in, and proves ownership of an identity (for example by providing username and password), and thereafter obtains the token(s). When a user uses an access token, authorization happens (the user proves that it's authorized to send the request).")
            ]),
            createBaseVNode("p", null, "This time, no point reduction has been made for using the terms wrong, but think about this for the future.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          { class: "custom-container warning" },
          [
            createBaseVNode("p", { class: "custom-container-title" }, "Account id"),
            createBaseVNode("p", null, "Some students claim that a user's account id makes sense to put in the ID Token, but not in an Access Token. That usually makes little sense, since the server usually must know which account the user has logged in to during the authorization process, so the user's account id usually needs to be stored in the Access Token as well.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[48] || (_cache[48] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for valid example and valid justification, OR"),
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for writing a valid justification, but without giving an example of a value (does not to have to be as specific as "),
              createBaseVNode("code", null, "Alice"),
              createTextVNode(", "),
              createBaseVNode("em", null, "first name"),
              createTextVNode(" is accepted)")
            ]),
            createBaseVNode("li", null, "-0.1 points for claiming something that is incorrect")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[80] || (_cache[80] = createBaseVNode(
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
      question: withCtx(() => _cache[49] || (_cache[49] = [
        createBaseVNode(
          "p",
          null,
          "Does it make sense to put the user's plain text password in an ID Token or in an Access Token? Justify your answer.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[50] || (_cache[50] = [
        createBaseVNode(
          "p",
          null,
          "No, because there is no use-case for putting the user's password in the ID Token (the whole point with OpenID Connect is to let users login with their account on another platform without exposing their password on that platform), and nor is the user's password needed in an Access Token during the authorization process.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Also, one should never store users' passwords in plain text.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[51] || (_cache[51] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct answer and valid justification"),
            createBaseVNode("li", null, "-0.1 points for claiming something that is not true"),
            createBaseVNode("li", null, "0 points to answers suggesting that one can store the encrypted/hashed version of the password in any of the tokens")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[81] || (_cache[81] = createBaseVNode(
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
      question: withCtx(() => _cache[52] || (_cache[52] = [
        createBaseVNode(
          "p",
          null,
          "In Client-Side JS, give an example of/describe an HTTP request that will always trigger the web browser to send a CORS pre-flight request.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[53] || (_cache[53] = [
        createBaseVNode(
          "p",
          null,
          "An HTTP request to a domain other than the one the Client-Side JS comes from and that uses the method PUT.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[54] || (_cache[54] = [
        createBaseVNode(
          "div",
          { class: "custom-container warning" },
          [
            createBaseVNode("p", { class: "custom-container-title" }, "Note!"),
            createBaseVNode("p", null, "Most students didn't mention that the request must go to a different domain (so the Same-Origin Policy kicks in, and CORS is needed), but this time you can get full score on the question even without having mentioned that.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct example/description"),
            createBaseVNode("li", null, "-0.1 points for claiming something small that is incorrect, but otherwise provide a correct example/description")
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
    _cache[83] || (_cache[83] = createBaseVNode(
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
      question: withCtx(() => _cache[55] || (_cache[55] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("When using Docker Compose, each service entered in the "),
            createBaseVNode("code", null, "compose.yaml"),
            createTextVNode(" file can have its own "),
            createBaseVNode("code", null, "volumes"),
            createTextVNode(" section. Explain what that section can be used for.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[56] || (_cache[56] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("When an application in a Docker container opens a path leading to a file or folder, that path does by default lead to a file or folder on the file system in the container. By adding a value to the "),
            createBaseVNode("code", null, "volumes"),
            createTextVNode(" section in the "),
            createBaseVNode("code", null, "compose.yaml"),
            createTextVNode(" file, you can make a path in the container lead to a file or folder on the host computer running Docker instead.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "So, by using volumes, an application in a container can get access to a part of the file system on the host computer, and for example store data there.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[57] || (_cache[57] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct answer, OR"),
            createBaseVNode("li", null, "0.5 points for saying something vague about giving the container access to the latest version of code stored on the file system on the host computer")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[84] || (_cache[84] = createBaseVNode(
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
      question: withCtx(() => _cache[58] || (_cache[58] = [
        createBaseVNode(
          "p",
          null,
          "Explain when and why you need to use port mapping in Docker, and explain how it works (using words, not commands).",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[59] || (_cache[59] = [
        createBaseVNode(
          "p",
          null,
          "A Docker container is an isolated environment; an app running inside the container has (by default) not access to anything on the host computer, and nor (by default) does the host computer have access to anything inside the container. This is problematic when the app in the container is a web app, and we want to use a web browser on the host computer to send HTTP requests to it.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("In such situations, we can use port mapping to make the container a little bit less isolated, and allow such communication. Using port mapping, we can tell Docker that one port on the host computer, for example port "),
            createBaseVNode("code", null, "5555"),
            createTextVNode(", should be mapped to one port in a container, for example port "),
            createBaseVNode("code", null, "8080"),
            createTextVNode(". This way, the web browser on the host computer can send HTTP requests on port "),
            createBaseVNode("code", null, "5555"),
            createTextVNode(", and the web app in the container will receive those requests on port "),
            createBaseVNode("code", null, "8080"),
            createTextVNode(" in the container.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[60] || (_cache[60] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for when and why"),
            createBaseVNode("li", null, "0.5 points for explanation")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[85] || (_cache[85] = createBaseVNode(
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
    _cache[86] || (_cache[86] = createBaseVNode(
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
      question: withCtx(() => _cache[61] || (_cache[61] = [
        createBaseVNode(
          "p",
          null,
          "What is the main difference between vertical scaling and horizontal scaling?",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": You don't need to explain each scaling approach in detail, only what the main difference between them is.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[62] || (_cache[62] = [
        createBaseVNode(
          "p",
          null,
          "In vertical scaling, you simply replace the computer your application runs on with another one that is more powerful, i.e. a computer with a faster CPU, or more main memory, or more storage, etc.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "In horizontal scaling, you instead run your application on multiple different computers at the same time, each of them doing a small part of the work that needs to be done in total.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[63] || (_cache[63] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for explaining that vertical scaling is using a more powerful computer"),
            createBaseVNode("li", null, "0.5 points for explaining that horizontal scaling is using more computers")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "OR:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.25 points for correct explanations of both terms but having mixed them up")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[87] || (_cache[87] = createBaseVNode(
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
    _cache[88] || (_cache[88] = createBaseVNode(
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
      question: withCtx(() => _cache[64] || (_cache[64] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The function "),
            createBaseVNode("code", null, "getAccountById(id)"),
            createTextVNode(" returns a promise that resolves to a JS object with information about the account with the given "),
            createBaseVNode("code", null, "id"),
            createTextVNode(". If the account object can't be retrieved, the promise is rejected to a JS error object containing information about what went wrong.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The function "),
            createBaseVNode("code", null, "getSentMessagesByAccountId(accountId)"),
            createTextVNode(" returns a promise that resolves to a JS array containing all messages an account with the given "),
            createBaseVNode("code", null, "accountId"),
            createTextVNode(" has sent. If the array can't be retrieved, the promise is rejected to a JS error object containing information about what went wrong.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Implement the function "),
            createBaseVNode("code", null, "getAccountAndSentMessagesByAccountId(accountId)"),
            createTextVNode(", that returns a promise that resolves to:")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token literal-property property" }, "account"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "THE_ACCOUNT_RETRIEVED_USING_getAccountById"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token literal-property property" }, "sentMessages"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "THE_MESSAGES_RETRIEVED_USING_getSentMessagesByAccountId"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("If you get an error from "),
            createBaseVNode("code", null, "getAccountById()"),
            createTextVNode(" or "),
            createBaseVNode("code", null, "getSentMessagesByAccountId()"),
            createTextVNode(", then your own promise should be rejected with the JS error object you get from the first one that was rejected.")
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
      "sample-answer": withCtx(() => _cache[65] || (_cache[65] = [
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
                createBaseVNode("span", { class: "token function" }, "getAccountAndSentMessagesByAccountId"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "accountId"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n	\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" account "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "await"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getAccountById"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("accountId"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" sentMessages "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "await"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "getSentMessagesByAccountId"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("accountId"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	\n	"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n		account"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n		sentMessages"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n	"),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[66] || (_cache[66] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for a solution that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for naming variables bad, such as ending with "),
                  createBaseVNode("code", null, "promise"),
                  createTextVNode(" when it doesn't store a promise")
                ]),
                createBaseVNode("li", null, "-0.1 points for returning and throwing (both stops code execution in function, so no need to use return when you want to throw)"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for creating local variables (e.g. in a "),
                  createBaseVNode("code", null, "try"),
                  createTextVNode(") and try to access them outside")
                ]),
                createBaseVNode("li", null, "-0.25 points for using try and catch"),
                createBaseVNode("li", null, "-0.25 points for returning error instead of throwing"),
                createBaseVNode("li", null, "-0.25 points for returning/throwing wrong error"),
                createBaseVNode("li", null, "-0.25 points for having unnecessary code")
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("0 points for a solution that: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Have a callback parameter/function, or"),
                createBaseVNode("li", null, "Try to read status codes or parse the response body (none of the given functions use HTTP)"),
                createBaseVNode("li", null, "Have SQL code (the data is not stored in a relational database)")
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
const exam20230323_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-03-23.html.vue"]]);
export {
  exam20230323_html as default
};
