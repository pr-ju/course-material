import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
  return openBlock(), createElementBlock("div", null, [
    _cache[21] || (_cache[21] = createStaticVNode('<h1 id="exam-2021-08-16" tabindex="-1"><a class="header-anchor" href="#exam-2021-08-16" aria-hidden="true">#</a> Exam 2021-08-16</h1><p>Here is the exam from 2021-08-16.</p><hr><p>Start by reading through all questions.</p><p>Max score is 30 points.</p><ul><li>For grade 3, 40% of max score (12 points) is required.</li><li>For grade 4, 60% of max score (18 points) is required.</li><li>For grade 5, 80% of max score (24 points) is required.</li></ul><p>You are not allowed to use anything else except:</p><ul><li>The computer you sit at to only answer the questions on this exam.</li><li>A dictionary to translate to/from English from/to your native language.</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h2>', 12)),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[0] || (_cache[0] = [
        createBaseVNode(
          "p",
          null,
          "On one server, the HTTP request one should send when one wants to delete the account with id 123 is:",
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
              createBaseVNode("code", null, "GET /accounts/delete/123\n")
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Is this a good or bad way to do it? If good, justify why. If bad, explain why and suggest a better way to do it.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": This question is about HTTP, and not about websites, and you don't need to worry about security.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[22] || (_cache[22] = createBaseVNode(
      "h2",
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
      question: withCtx(() => _cache[1] || (_cache[1] = [
        createBaseVNode(
          "p",
          null,
          "To update a resource on a server, one should according to the HTTP specification send a PUT request. However, websites usually use another method. Why do websites not use the PUT method to update a resource, which method do they use instead, and why do they use that one?",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[23] || (_cache[23] = createBaseVNode(
      "h2",
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
      question: withCtx(() => _cache[2] || (_cache[2] = [
        createBaseVNode(
          "p",
          null,
          "Write the HTTP status code for the following reason phrases:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Bad Request"),
            createBaseVNode("li", null, "OK"),
            createBaseVNode("li", null, "Internal Server Error")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "You'll get:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.33 points for each correct answer."),
            createBaseVNode("li", null, "-0.33 points for each incorrect answer."),
            createBaseVNode("li", null, "0 points for each blank answer."),
            createBaseVNode("li", null, "1 point for all correct answers."),
            createBaseVNode("li", null, "Minimum is 0 points on the question.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[24] || (_cache[24] = createBaseVNode(
      "h2",
      {
        id: "question-4-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-4-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 4 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[3] || (_cache[3] = [
        createBaseVNode(
          "p",
          null,
          "What is the name of the HTTP header used to indicate which format the body of the request is written in?",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "What is the name of the HTTP header used to indicate which format the body of the response should preferably be written in?",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "You'll get:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for each correct answer."),
            createBaseVNode("li", null, "-0.5 points for each incorrect answer."),
            createBaseVNode("li", null, "0 points for each blank answer."),
            createBaseVNode("li", null, "1 point for all correct answers."),
            createBaseVNode("li", null, "Minimum is 0 points on the question.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("("),
            createBaseVNode("strong", null, "small"),
            createTextVNode(" spelling mistakes are acceptable but might give point reduction)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[25] || (_cache[25] = createBaseVNode(
      "h2",
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
      question: withCtx(() => _cache[4] || (_cache[4] = [
        createBaseVNode(
          "p",
          null,
          "Place the lines of code below in such order that they form a valid HTML5 document (only place one line of code in each box).",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<head>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<h1>Welcome!</h1>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "</body>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<title>Welcome!</title>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<!DOCTYPE html>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "</html>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "</head>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<html>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<body>")
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": All must be correct to get points on this question.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[26] || (_cache[26] = createBaseVNode(
      "h2",
      {
        id: "question-6-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-6-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 6 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[5] || (_cache[5] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Which of the following tags "),
            createBaseVNode("strong", null, "do not exist"),
            createTextVNode(" in HTML?")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "h1"),
            createBaseVNode("li", null, "table"),
            createBaseVNode("li", null, "language"),
            createBaseVNode("li", null, "tr"),
            createBaseVNode("li", null, "column"),
            createBaseVNode("li", null, "h6")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "You'll get:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for each correct checked answer."),
            createBaseVNode("li", null, "-1 point for each incorrect checked answer."),
            createBaseVNode("li", null, "0 points for each unchecked answer."),
            createBaseVNode("li", null, "Minimum is 0 points on the question.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[27] || (_cache[27] = createBaseVNode(
      "h2",
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
      question: withCtx(() => _cache[6] || (_cache[6] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Which of the following statements about HTML attributes "),
            createBaseVNode("strong", null, "are false"),
            createTextVNode("?")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("The "),
              createBaseVNode("code", null, "id"),
              createTextVNode(" attribute can be used on any element.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("The "),
              createBaseVNode("code", null, "button"),
              createTextVNode(" element has an attribute called "),
              createBaseVNode("code", null, "value"),
              createTextVNode(".")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("The "),
              createBaseVNode("code", null, "class"),
              createTextVNode(" attribute can be used on any element.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("The "),
              createBaseVNode("code", null, "lang"),
              createTextVNode(" attribute can be used on any element.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("An element can have the "),
              createBaseVNode("code", null, "id"),
              createTextVNode(" attribute and the "),
              createBaseVNode("code", null, "class"),
              createTextVNode(" attribute set at the same time.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Different elements can have the same value in their "),
              createBaseVNode("code", null, "id"),
              createTextVNode(" attributes.")
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "You'll get:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for each correct checked answer."),
            createBaseVNode("li", null, "-1 point for each incorrect checked answer."),
            createBaseVNode("li", null, "0 points for each unchecked answer."),
            createBaseVNode("li", null, "Minimum is 0 points on the question.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[28] || (_cache[28] = createBaseVNode(
      "h2",
      {
        id: "question-8-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-8-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 8 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[7] || (_cache[7] = [
        createBaseVNode(
          "p",
          null,
          "The form below can be used on a website that, when receiving the request, searches other websites for products matching the search string, and lists the price for those products, so the user easily can find the cheapest one on the searched websites.",
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
                    createTextVNode("form")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "action"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "method"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("XXX"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n   Search: "),
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
                    createTextVNode("text"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "name"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("query"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n   "),
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
                    createTextVNode("submit"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "value"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("Search!"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("form")
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
            createTextVNode("Which method should be used when submitting the HTML form above (i.e. what should "),
            createBaseVNode("code", null, "XXX"),
            createTextVNode(" in the HTML code above be)? Justify your answer.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[29] || (_cache[29] = createBaseVNode(
      "h2",
      {
        id: "question-9-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-9-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 9 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[8] || (_cache[8] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Explain what a "),
            createBaseVNode("em", null, "declaration"),
            createTextVNode(" is in CSS, give an example of one and explain how that one works.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[30] || (_cache[30] = createBaseVNode(
      "h2",
      {
        id: "question-10-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-10-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 10 (1p)")
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
            createTextVNode("Explain what a "),
            createBaseVNode("em", null, "media query"),
            createTextVNode(" can be used for in CSS.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[31] || (_cache[31] = createBaseVNode(
      "h2",
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
      question: withCtx(() => _cache[10] || (_cache[10] = [
        createBaseVNode(
          "p",
          null,
          "Here is some CSS code:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          {
            class: "language-css line-numbers-mode",
            "data-ext": "css"
          },
          [
            createBaseVNode("pre", { class: "language-css" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token selector" }, "p.span b#i"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token property" }, "background-color"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" black"),
                createBaseVNode("span", { class: "token punctuation" }, ";"),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Write HTML code that contains a match for the CSS selector in the code above.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": You only need to write the HTML code found in the "),
            createBaseVNode("code", null, "<body>"),
            createTextVNode(" element (including the "),
            createBaseVNode("code", null, "<body>"),
            createTextVNode(" element), you do not need to write the HTML code for an entire HTML document.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[32] || (_cache[32] = createBaseVNode(
      "h2",
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
      question: withCtx(() => _cache[11] || (_cache[11] = [
        createBaseVNode(
          "p",
          null,
          "On a website with user accounts, before any user has started to use it, the developer adds some code that, if a user's password is longer than 20 characters, only makes use of the first 20 characters in the password, and ignores the rest. The programmer is reasoning that passwords consisting of 20 characters are long enough to be considered secure anyway, and the database will now use less space.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Does the developer's reasoning make sense? Does it seem to be a good implemented website? Justify your answer.",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[33] || (_cache[33] = createBaseVNode(
      "h2",
      {
        id: "question-13-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-13-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 13 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[12] || (_cache[12] = [
        createBaseVNode(
          "p",
          null,
          "Are there any benefits using HTTPS on a website that only contains static HTML files, so users can only fetch content, and never send any content to the website?",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[34] || (_cache[34] = createBaseVNode(
      "h2",
      {
        id: "question-14-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-14-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 14 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[13] || (_cache[13] = [
        createBaseVNode(
          "p",
          null,
          "Here is an HTML form on a website one can use to login on that website:",
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
                    createTextVNode("form")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "method"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("post"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "action"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("/login"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    Username: "),
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
                    createTextVNode("text"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode("     "),
                  createBaseVNode("span", { class: "token attr-name" }, "name"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("username"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    Password: "),
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
                    createTextVNode("password"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "name"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("password"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n              "),
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
                    createTextVNode("submit"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode("   "),
                  createBaseVNode("span", { class: "token attr-name" }, "value"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("Sign in!"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("form")
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Here is the code on the server handling the HTTP request sent when the form is submitted:",
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
                createTextVNode("app"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "post"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'/login'"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("request"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" response")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" username "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" request"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("body"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("username\n  "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" password "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" request"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("body"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("password\n  "),
                createBaseVNode("span", { class: "token comment" }, "// Query to be sent to the database to check if password and username are correct."),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" query "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, `'SELECT id FROM members WHERE username = "'`),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("username"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, `'" AND password = "'`),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("password"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, `'"'`),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token comment" }, "// Query sent to database, the id of the user is retrieved, etc."),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token comment" }, "// ..."),
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
            createTextVNode("As your answer, write a username and a password you can use to login as the member having the password "),
            createBaseVNode("code", null, "abc123"),
            createTextVNode(", no matter which username that member has (this can be used to see if a member/which member that has that password).")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Be explicit about what you enter as username and what you enter as password.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": As you can see in the code, passwords are stored as plain text in the database.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[35] || (_cache[35] = createBaseVNode(
      "h2",
      {
        id: "question-15-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-15-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 15 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[14] || (_cache[14] = [
        createBaseVNode(
          "p",
          null,
          "Explain what a session is, give two examples of what they can be used for and explain how they work/can be implemented.",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[36] || (_cache[36] = createBaseVNode(
      "h2",
      {
        id: "question-16-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-16-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 16 (2p)")
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
            createBaseVNode("code", null, "Website A"),
            createTextVNode(" contains a cross site request forgery vulnerability. Explain what they need to do to fix the vulnerability. Don't mention any library/framework; give a general description of how they can fix the vulnerability (mention details).")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[37] || (_cache[37] = createBaseVNode(
      "h2",
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
      question: withCtx(() => _cache[16] || (_cache[16] = [
        createBaseVNode(
          "p",
          null,
          "Explain what a foreign key constraints is, give an example of a web application that would use a foreign key constraint, and give an example of what could go wrong if the web application wouldn't have used a foreign key constraint.",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[38] || (_cache[38] = createBaseVNode(
      "h2",
      {
        id: "question-18-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-18-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 18 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[17] || (_cache[17] = [
        createBaseVNode(
          "p",
          null,
          "This is a question about GDPR. The scenario is that you are the owner of a website, and you want to collect the IP addresses of your visitors, so you can see how many unique visitors you have. Which of the statements below are true for you to comply with GDPR?",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "It's OK for me to collect the IP addresses of my visitors without informing them about it."),
            createBaseVNode("li", null, "It's OK for me to collect the IP addresses of my visitors as long as I inform them about it in advance."),
            createBaseVNode("li", null, "I have to ask the visitors if I may collect their IP addresses, and I may only collect the IP addresses from the visitors that say yes. If they later regret their decision and say no I have to delete their IP addresses."),
            createBaseVNode("li", null, "I can start collecting the IP addresses of my visitors and then ask my visitors if I may collect their IP addresses, but I have to delete the IP addresses from the visitors that say no."),
            createBaseVNode("li", null, "I have to ask the visitors if I may collect their IP addresses, and I may only collect the IP addresses from the visitors that say yes. If some visitors later regret their decision and say no I don't have to delete their IP addresses, because I had their permission to collect them when I collected them.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "You'll get:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for each correct checked answer."),
            createBaseVNode("li", null, "-1 point for each incorrect checked answer."),
            createBaseVNode("li", null, "0 points for each unchecked answer."),
            createBaseVNode("li", null, "Minimum is 0 points on the question.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[39] || (_cache[39] = createBaseVNode(
      "h2",
      {
        id: "question-19-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-19-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 19 (1p)")
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
            createTextVNode("Implement the JavaScript function "),
            createBaseVNode("code", null, "getSums(numbers_1, numbers_2)"),
            createTextVNode(", that receives two arrays with numbers (both arrays contains the same number of numbers) as argument and returns a new array that contains the pairwise sum of the numbers in the array.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Sample usage:",
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
                createBaseVNode("span", { class: "token function" }, "getSums"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> [4, 6]"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getSums"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "7"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> [12, 7, 8]"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
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
    _cache[40] || (_cache[40] = createBaseVNode(
      "h2",
      {
        id: "question-20-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-20-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 20 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[19] || (_cache[19] = [
        createBaseVNode(
          "p",
          null,
          "In JavaScript, a human with name and an age (in years) can be represented as an object like this:",
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
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" human "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "name"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Alice"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "age"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "10"),
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
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Implement the function "),
            createBaseVNode("code", null, "containsAdult(humans)"),
            createTextVNode(", which receives an array with human objects and returns "),
            createBaseVNode("code", null, "true"),
            createTextVNode(" if any human in the array is 18 years or older, otherwise "),
            createBaseVNode("code", null, "false"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[41] || (_cache[41] = createBaseVNode(
      "h2",
      {
        id: "question-21-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-21-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 21 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[20] || (_cache[20] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("In JavaScript, implement the synchronous function "),
            createBaseVNode("code", null, "duplicateString(string)"),
            createTextVNode(", which receives a string as argument and returns a string containing that string twice, e.g. "),
            createBaseVNode("code", null, "duplicateString('ab')"),
            createTextVNode(" ➔ "),
            createBaseVNode("code", null, "abab"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Then implement the synchronous function "),
            createBaseVNode("code", null, "duplicateStringTwice(string)"),
            createTextVNode(", which receives a string as argument and returns a string containing that string four times, e.g. "),
            createBaseVNode("code", null, "duplicateStringTwice('ab')"),
            createTextVNode(" ➔ "),
            createBaseVNode("code", null, "abababab"),
            createTextVNode(". The only allowed operation to use in the implementation of "),
            createBaseVNode("code", null, "duplicateStringTwice(string)"),
            createTextVNode(" is function calls to "),
            createBaseVNode("code", null, "duplicateString(string)"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Then implement asynchronous versions of these two functions using callback functions instead of return values. The asynchronous version of "),
            createBaseVNode("code", null, "duplicateStringTwice"),
            createTextVNode(" may only be implemented using the asynchronous version of "),
            createBaseVNode("code", null, "duplicateString"),
            createTextVNode(", no other operations are allowed.")
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
const exam20210816_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2021-08-16.html.vue"]]);
export {
  exam20210816_html as default
};
