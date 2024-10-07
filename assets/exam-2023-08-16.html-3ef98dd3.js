import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
  return openBlock(), createElementBlock("div", null, [
    _cache[78] || (_cache[78] = createStaticVNode('<h1 id="exam-2023-08-16" tabindex="-1"><a class="header-anchor" href="#exam-2023-08-16" aria-hidden="true">#</a> Exam 2023-08-16</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-08-16.</p><hr><p>Peter will not visit the exam. If you find any question unclear, ask an exam supervisor (tentavakt in Swedish) to call Peter, and he will try to clarify.</p><p>Max score is 30 points:</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use any aids except:</p><ul><li>The computer you sit at to only enter answers to the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable will not receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><h3 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h3>', 13)),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[0] || (_cache[0] = [
        createBaseVNode(
          "p",
          null,
          "Name the method one should use in HTTP when the request is about:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, "Deleting a resource"),
            createBaseVNode("li", null, "Updating a resource"),
            createBaseVNode("li", null, "Creating a new resource")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": This question is about HTTP when used properly, and has nothing to do with HTML, web browsers, nor websites.")
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
            createBaseVNode("li", null, "0.33 points for each correct name (spelling must be correct)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[1] || (_cache[1] = [
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "DELETE")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "PUT")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "POST")
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
            createBaseVNode("li", null, "0.33 points for each correct name (spelling must be correct)")
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
            createTextVNode("Explain why the URI "),
            createBaseVNode("code", null, "/movies/search?title=Bond"),
            createTextVNode(" (that identifies all movies whose title contains the word/character sequence "),
            createBaseVNode("code", null, "Bond"),
            createTextVNode(") is considered a bad URI in HTTP.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": This question is about HTTP when used properly, and has nothing to do with HTML, web browsers, nor websites.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[4] || (_cache[4] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("In HTTP, the URI should only identify resources. It should not contain verbs, such as "),
            createBaseVNode("code", null, "search"),
            createTextVNode(", so the URI in this case should rather be "),
            createBaseVNode("code", null, "/movies?title=Bond"),
            createTextVNode(".")
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
            createBaseVNode("li", null, [
              createTextVNode("1 point for "),
              createBaseVNode("code", null, "search"),
              createTextVNode(" should not be in the URI")
            ])
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
          "Name an HTTP header of your choice, explain what it represents/means, show a sample value it can have, and explain how that sample value should be interpreted/what it means.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": This question is about HTTP when used properly, and has nothing to do with HTML, web browsers, nor websites.")
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
            createTextVNode("The HTTP header "),
            createBaseVNode("code", null, "Content-Type"),
            createTextVNode(" can be used in HTTP requests and responses, and it indicates in which data format the body of the request/response is written in. For example, the value "),
            createBaseVNode("code", null, "application/json"),
            createTextVNode(" means the body of the request/response is written in JSON format.")
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
            createBaseVNode("li", null, "0.25 points for name"),
            createBaseVNode("li", null, "0.25 points for explanation"),
            createBaseVNode("li", null, "0.25 points for sample value"),
            createBaseVNode("li", null, "0.25 points for explanation of sample value")
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
      question: withCtx(() => _cache[9] || (_cache[9] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Explain when the server should send back the status code "),
            createBaseVNode("code", null, "400"),
            createTextVNode(" in an HTTP response, and when it should send back the status code "),
            createBaseVNode("code", null, "500"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": This question is about HTTP when used properly, and has nothing to do with HTML, web browsers, nor websites.")
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
            createBaseVNode("li", null, "0.5 points for each correct answer")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[10] || (_cache[10] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The server should send back the status code "),
            createBaseVNode("code", null, "400"),
            createTextVNode(" when there is something wrong with the request, for example when the data in the request contains validation errors.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The server should send back the status code "),
            createBaseVNode("code", null, "500"),
            createTextVNode(" when there is nothing wrong with the request, but something is wrong on the server that prevents it from carrying out the request, for example if it needs to read data from a database, but it currently can't communicate with the database.")
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
            createBaseVNode("li", null, "0.5 points for each correct answer")
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
        id: "html",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#html",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" HTML")
      ],
      -1
      /* HOISTED */
    )),
    _cache[83] || (_cache[83] = createBaseVNode(
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
          "Place the lines of code below in such order that they form a valid HTML5 document (only place one line of code in each box).",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<h1>Welcome!</h1>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<!DOCTYPE html>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "</body>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "</head>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<body>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<title>Welcome!</title>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<head>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "</html>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<html>")
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
      "sample-answer": withCtx(() => _cache[13] || (_cache[13] = [
        createBaseVNode(
          "div",
          {
            class: "language-html line-numbers-mode",
            "data-ext": "html"
          },
          [
            createBaseVNode("pre", { class: "language-html" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token doctype" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "<!"),
                  createBaseVNode("span", { class: "token doctype-tag" }, "DOCTYPE"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token name" }, "html"),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("html")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("head")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("title")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Welcome!"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("title")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("head")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("body")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("h1")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Welcome!"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("h1")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("body")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("html")
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
              createBaseVNode("div", { class: "line-number" })
            ])
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
            createBaseVNode("li", null, "1 point for all in correct order")
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
            createTextVNode("Name the attribute "),
            createBaseVNode("code", null, "<a>"),
            createTextVNode(" elements can have that indicates which page the user should come to when the user clicks on the element.")
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
            createBaseVNode("code", null, "href")
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
            createBaseVNode("li", null, "1 point for correct answer"),
            createBaseVNode("li", null, "-0.25 points for answering with something more than just the attribute name that is wrong or makes it unclear what your answer is")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[85] || (_cache[85] = createBaseVNode(
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
            createTextVNode("What type of HTTP request (the name of the method) does the web browser send when it receives the HTML code for an "),
            createBaseVNode("code", null, "<img>"),
            createTextVNode(" element that contains the "),
            createBaseVNode("code", null, "src"),
            createTextVNode(" attribute?")
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
            createBaseVNode("code", null, "GET")
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
            createBaseVNode("li", null, "1 point for correct method name")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[86] || (_cache[86] = createBaseVNode(
      "h3",
      {
        id: "question-8-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-8-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 8 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[21] || (_cache[21] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Name 3 different "),
            createBaseVNode("strong", null, "inline"),
            createTextVNode(" elements in HTML.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": Just write the name of the tag; do not include "),
            createBaseVNode("code", null, "<"),
            createTextVNode(" and "),
            createBaseVNode("code", null, ">"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": Writing "),
            createBaseVNode("strong", null, "inline-block"),
            createTextVNode(" elements is also OK, but not "),
            createBaseVNode("strong", null, "block"),
            createTextVNode(" elements.")
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
            createBaseVNode("li", null, [
              createTextVNode("0.66 points for each correct answer (spelling needs to be correct) "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Only 0.5 points if spelling is wrong")
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[22] || (_cache[22] = [
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "a")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "span")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "i")
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[23] || (_cache[23] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("0.66 points for each correct answer (spelling needs to be correct) "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Only 0.5 points if spelling is wrong")
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
    _cache[87] || (_cache[87] = createBaseVNode(
      "h3",
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
      question: withCtx(() => _cache[24] || (_cache[24] = [
        createBaseVNode(
          "p",
          null,
          "If a user comes to a website with the form below and submits it without making any changes to it, what would the URI of the request look like? Write the URI as your answer.",
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
                    createTextVNode("/sum"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "method"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("POST"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n   Number 1: "),
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
                  createBaseVNode("span", { class: "token attr-name" }, "name"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("x"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "value"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("123"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n   Number 2: "),
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
                  createBaseVNode("span", { class: "token attr-name" }, "name"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("y"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "value"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("456"),
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
                    createTextVNode("Compute sum!"),
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
        )
      ])),
      "sample-answer": withCtx(() => _cache[25] || (_cache[25] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "/sum\n")
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
            createTextVNode("(Since the "),
            createBaseVNode("code", null, "method"),
            createTextVNode(" is "),
            createBaseVNode("code", null, "POST"),
            createTextVNode(", the web browser will send a POST request, and pass the data from the form in the body of the request ("),
            createBaseVNode("code", null, "x=123&y=456"),
            createTextVNode("). The data is only passed in the querystring of the URI if the "),
            createBaseVNode("code", null, "method"),
            createTextVNode(" is "),
            createBaseVNode("code", null, "GET"),
            createTextVNode(")")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[26] || (_cache[26] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct answer")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[88] || (_cache[88] = createBaseVNode(
      "h3",
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
      question: withCtx(() => _cache[27] || (_cache[27] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Name one HTML tag of your choice that is valid to write in the "),
            createBaseVNode("code", null, "<head>"),
            createTextVNode(" element in addition to "),
            createBaseVNode("code", null, "<title>"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": Just write the name of the tag; do not include "),
            createBaseVNode("code", null, "<"),
            createTextVNode(" and "),
            createBaseVNode("code", null, ">"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[28] || (_cache[28] = [
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("code", null, "link")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[29] || (_cache[29] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for a valid tag")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[89] || (_cache[89] = createBaseVNode(
      "h2",
      {
        id: "css",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#css",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" CSS")
      ],
      -1
      /* HOISTED */
    )),
    _cache[90] || (_cache[90] = createBaseVNode(
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
      question: withCtx(() => _cache[30] || (_cache[30] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Name and describe 2 different CSS properties of your choice except "),
            createBaseVNode("code", null, "color"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "width"),
            createTextVNode(". For each, provide also an example of a value it can have, and explain the result of using the property with that value.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[31] || (_cache[31] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The CSS property "),
            createBaseVNode("code", null, "background-color"),
            createTextVNode(" determines which background color the element should have. For example, the value "),
            createBaseVNode("code", null, "red"),
            createTextVNode(" would give the element a red background.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The CSS property "),
            createBaseVNode("code", null, "font-size"),
            createTextVNode(" determines how big the text in the element should be. For example, the value "),
            createBaseVNode("code", null, "16px"),
            createTextVNode(" would make the text in the element 16 pixels big.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[32] || (_cache[32] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.125 points for each valid property name"),
            createBaseVNode("li", null, "0.125 points for each correct property description"),
            createBaseVNode("li", null, "0.125 points for each valid sample value"),
            createBaseVNode("li", null, "0.125 points for each correct sample value description")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[91] || (_cache[91] = createBaseVNode(
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
      question: withCtx(() => _cache[33] || (_cache[33] = [
        createBaseVNode(
          "p",
          null,
          "What color will the text in the paragraph in the HTML code below have?",
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
                    createTextVNode("style")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createBaseVNode("span", { class: "token style" }, [
                  createBaseVNode("span", { class: "token language-css" }, [
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token selector" }, ".p"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token property" }, "color"),
                    createBaseVNode("span", { class: "token punctuation" }, ":"),
                    createTextVNode(" brown"),
                    createBaseVNode("span", { class: "token punctuation" }, ";"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token selector" }, "p"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token property" }, "color"),
                    createBaseVNode("span", { class: "token punctuation" }, ":"),
                    createTextVNode(" pink"),
                    createBaseVNode("span", { class: "token punctuation" }, ";"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token selector" }, "#p"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token property" }, "color"),
                    createBaseVNode("span", { class: "token punctuation" }, ":"),
                    createTextVNode(" white"),
                    createBaseVNode("span", { class: "token punctuation" }, ";"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n    \n")
                  ])
                ]),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("style")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("p")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "id"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("p"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "class"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("p"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Some text."),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("p")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[34] || (_cache[34] = [
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("code", null, "white")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[35] || (_cache[35] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for a correct answer")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[92] || (_cache[92] = createBaseVNode(
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
      question: withCtx(() => _cache[36] || (_cache[36] = [
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
                createBaseVNode("span", { class: "token selector" }, "div p #a.b"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token property" }, "width"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" 50%"),
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
          "Write HTML code that contains a match for the CSS selector in the code above. Write as little HTML code as possibly (don't write any extra elements or attributes that are not needed).",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": You should only write the HTML code found in the "),
            createBaseVNode("code", null, "<body>"),
            createTextVNode(" element (including the "),
            createBaseVNode("code", null, "<body>"),
            createTextVNode(" element), you should not write the code for an entire HTML document.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[37] || (_cache[37] = [
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
                    createTextVNode("body")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("p")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("span")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "id"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("a"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "class"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("b"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("I will be matched!"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("p")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("body")
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[38] || (_cache[38] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that is correct/close to correct"),
            createBaseVNode("li", null, [
              createTextVNode("Point deduction for small errors in close to correct answers: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for missing "),
                  createBaseVNode("code", null, "<body>")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for putting "),
                  createBaseVNode("code", null, "id"),
                  createTextVNode(" and/or "),
                  createBaseVNode("code", null, "class"),
                  createTextVNode(" on wrong element "),
                  createBaseVNode("code", null, "<p>")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for missing an element in "),
                  createBaseVNode("code", null, "<p>")
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
    _cache[93] || (_cache[93] = createBaseVNode(
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
      question: withCtx(() => _cache[39] || (_cache[39] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Write a CSS selector that selects the element in the HTML code below that contains the text "),
            createBaseVNode("code", null, "SELECT ME"),
            createTextVNode(". The selector should select only that element, and no other.")
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
                    createTextVNode("body")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Here is "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("span")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "class"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("p"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("SELECT ME"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode(" some text."),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Here "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("is some"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode(" text."),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Here "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("i")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "class"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("p"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("is some"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("i")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode(" text."),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("p")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Here "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("span")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "class"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("p"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("is some"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode(" text."),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("p")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("body")
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[40] || (_cache[40] = [
        createBaseVNode(
          "div",
          {
            class: "language-css line-numbers-mode",
            "data-ext": "css"
          },
          [
            createBaseVNode("pre", { class: "language-css" }, [
              createBaseVNode("code", null, "div span.p\n")
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
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[41] || (_cache[41] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that works"),
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for "),
              createBaseVNode("code", null, "div span .p")
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[94] || (_cache[94] = createBaseVNode(
      "h2",
      {
        id: "website",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#website",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Website")
      ],
      -1
      /* HOISTED */
    )),
    _cache[95] || (_cache[95] = createBaseVNode(
      "h3",
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
      question: withCtx(() => _cache[42] || (_cache[42] = [
        createBaseVNode(
          "p",
          null,
          "Explain what a session is, give one example of what it can be used for, and explain how sessions can be implemented (in general, and not in a specific framework/library/package).",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[43] || (_cache[43] = [
        createBaseVNode(
          "p",
          null,
          "A session is a collection of values the server wants to remember about a client/user that is stored on the server. They can for example be used to remember if the user has logged in on the website or not.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The sessions can for example be stored in a database on the server. Each session gets it's own id (known as the "),
            createBaseVNode("em", null, "session id"),
            createTextVNode("), which should be hard to guess (so a hacker can't guess other users' session ids), so they are usually long strings of random characters. When a user starts using the website, the server can insert a new post in the database that contains the information the server wants to remember about the user together with a new session id.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "The server can then send back the session id in a cookie in the response to the user, and the user should then send back this cookie to the server in all requests it sends to the server in the future. When the server receives these request, it can fetch the session from the database with the session id from the cookie in the request, and that way read out the information it wanted to remember about the user.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[44] || (_cache[44] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for what a session is (collection of values/information to remember about a user)"),
            createBaseVNode("li", null, "0.5 points for example"),
            createBaseVNode("li", null, "1 points for implementation details (session id + stored on server + cookie)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[96] || (_cache[96] = createBaseVNode(
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
      question: withCtx(() => _cache[45] || (_cache[45] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Explain the difference between a "),
            createBaseVNode("em", null, "webpage"),
            createTextVNode(" and a "),
            createBaseVNode("em", null, "website"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[46] || (_cache[46] = [
        createBaseVNode(
          "p",
          null,
          "A webpage is a single HTML document that can be shown in a web browser. All such HTML documents part of the same domain constitutes a website.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[47] || (_cache[47] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for explaining webpage"),
            createBaseVNode("li", null, "0.5 points for explaining website (multiple webpages)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[97] || (_cache[97] = createBaseVNode(
      "h3",
      {
        id: "question-17-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-17-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 17 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[48] || (_cache[48] = [
        createBaseVNode(
          "p",
          null,
          "Name two different middlewares one can add to an Express application, for example two middlewares you have used in the application you built in your project work, and briefly explain what they do.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[49] || (_cache[49] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "express.urlencoded()"),
              createTextVNode(" (previously "),
              createBaseVNode("code", null, "bodyParser.urlencoded()"),
              createTextVNode("): A middleware that makes it possible for us to access the body in HTTP requests using "),
              createBaseVNode("code", null, "request.body"),
              createTextVNode(" (if it's written in the data format "),
              createBaseVNode("code", null, "application/x-www-form-urlencoded"),
              createTextVNode(")")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "expressSession()"),
              createTextVNode(": A middleware that makes it possible for us to use "),
              createBaseVNode("code", null, "request.session"),
              createTextVNode(" to access the user's session")
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[50] || (_cache[50] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.25 points for each name"),
            createBaseVNode("li", null, "0.25 points for each explanation")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[98] || (_cache[98] = createBaseVNode(
      "h2",
      {
        id: "security",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#security",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Security")
      ],
      -1
      /* HOISTED */
    )),
    _cache[99] || (_cache[99] = createBaseVNode(
      "h3",
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
      question: withCtx(() => _cache[51] || (_cache[51] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("On a properly implemented website, is it likely that a user can get the session id "),
            createBaseVNode("code", null, "10"),
            createTextVNode("? Justify your answer.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[52] || (_cache[52] = [
        createBaseVNode(
          "p",
          null,
          `No, that is unlikely. Since session ids should be hard to guess, they should be big numbers or long strings, so a hacker can't "guess" user's session id. If a hacker knows or manages to guess another user's session id, then that hacker can start to use that session id too, and that way act as that user to the server, and that's a security risc.`,
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[53] || (_cache[53] = [
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
    _cache[100] || (_cache[100] = createBaseVNode(
      "h3",
      {
        id: "question-19-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-19-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 19 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[54] || (_cache[54] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("On a website with blogposts, the blogposts are stored in an SQLite database in a table named "),
            createBaseVNode("code", null, "blogposts"),
            createTextVNode(" that looks like this:")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "table",
          null,
          [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "keyword"),
                createBaseVNode("th", null, "title"),
                createBaseVNode("th", null, "content"),
                createBaseVNode("th", null, "author")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "html"),
                createBaseVNode("td", null, "HTML is fun!"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "Alice")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "css"),
                createBaseVNode("td", null, "CSS is fun too!"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "Bob")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "js"),
                createBaseVNode("td", null, "JS is most fun!"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "Alice")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "..."),
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
            createBaseVNode("code", null, "content"),
            createTextVNode(" is not shown in the table above, since that one is quite long, and not all rows are shown, since they are quite many.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Claire should add a webpage to the website users can use to search for blogposts matching an entered "),
            createBaseVNode("code", null, "keyword"),
            createTextVNode(" or an entered "),
            createBaseVNode("code", null, "title"),
            createTextVNode(". It should not be possible to search for blogposts matching an entered "),
            createBaseVNode("code", null, "author"),
            createTextVNode(", since easily retrieving all blogposts written by a specific user is considered to be a security vulnerability on this website.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Claire adds a webpage with the following HTML code:",
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
                    createTextVNode("h1")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Search blogposts"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("h1")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
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
                    createTextVNode("GET"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "action"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("/blogposts/search"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        Select field to search:\n        "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("select")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "name"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("field"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("option")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "value"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("keyword"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Keyword"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("option")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("option")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "value"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("title"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Title"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("option")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("select")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        Enter value to match in field:\n        "),
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
                    createTextVNode("value"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("div")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
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
          [
            createTextVNode("To handle the search request, she adds the following JS code to the "),
            createBaseVNode("code", null, "app.js"),
            createTextVNode(" file:")
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
                createTextVNode("app"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "get"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'/blogposts/search'"),
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
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" field "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" request"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("params"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("field\n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" value "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" request"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("params"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("value\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" query "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"SELECT * FROM blogposts WHERE "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("field"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" = ?"'),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" values "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("value"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    \n    db"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "all"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("query"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" values "),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("error"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" blogposts")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token comment" }, "// Let us assume no database error occurred, so we ignore that."),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" model "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            blogposts\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token comment" }, "// The file blogposts.hbs is not shown here, but it"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token comment" }, "// shows all the blogposts in the model to the user."),
                createTextVNode("\n        response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "render"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'blogposts.hbs'"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" model"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    \n"),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Does Claire's implementation contain a security vulnerability or not? Justify your answer.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[55] || (_cache[55] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Claire's implementation does contain a security vulnerability. In the HTML code for the "),
            createBaseVNode("code", null, "<form>"),
            createTextVNode(", it looks like the user can only choose among the fields "),
            createBaseVNode("code", null, "keyword"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "title"),
            createTextVNode(", but the HTML code can easily be changed client-side by a hacker, so a hacker can easily add "),
            createBaseVNode("code", null, "author"),
            createTextVNode(" as a third option in the "),
            createBaseVNode("code", null, "<select>"),
            createTextVNode(" element (i.e. "),
            createBaseVNode("code", null, '<option value="author">Author</option>'),
            createTextVNode("), and that way send a request that would search for blogpost written by a specific user. I.e.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "(in addition to that:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("A hacker can craft her own HTTP request from scratch, and write "),
              createBaseVNode("code", null, "author"),
              createTextVNode(" instead of "),
              createBaseVNode("code", null, "keyword"),
              createTextVNode(" or "),
              createBaseVNode("code", null, "title"),
              createTextVNode(" directly in the HTTP request")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("By using string concatenation in the SQL query, she has created an SQL injection vulnerability, so a hacker can easily modify the "),
              createBaseVNode("code", null, "WHERE"),
              createTextVNode(" part of the query to perform much more complicated searches than what is intended. Also note that using a placeholder ("),
              createBaseVNode("code", null, "?"),
              createTextVNode(") instead of "),
              createBaseVNode("code", null, '"+field+"'),
              createTextVNode(" won't work, since it's not a value in the SQL syntax that should be inserted, and this alone would not solve the problem anyway")
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          ")",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[56] || (_cache[56] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for correct answer and valid justification"),
            createBaseVNode("li", null, "Only 1.5 points for answers identifying an SQL vulnerability, and suggesting using placeholders solve the problem")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[101] || (_cache[101] = createBaseVNode(
      "h3",
      {
        id: "question-20-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-20-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 20 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[57] || (_cache[57] = [
        createBaseVNode(
          "p",
          null,
          "What is the biggest problem with the code below? Justify your answer.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": Any user should be able to anonymously create blogposts.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "app.js"),
            createTextVNode(":")
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
                createBaseVNode("span", { class: "token comment" }, "//..."),
                createTextVNode("\n\napp"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "post"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'/blogposts/create'"),
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
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" title "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" request"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("body"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("title\n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" content "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" request"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("body"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("content\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" errorMessages "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "50"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" title"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("length"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        errorMessages"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "push"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The title is too long."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "5000"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" content"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("length"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        errorMessages"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "push"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The content is too long."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" errorMessages"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("length"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" model "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            title"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n            content"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n            errorMessages"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n        \n        response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "render"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"create-blogpost.hbs"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" model"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" query "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"INSERT INTO blogposts (title, content) VALUES (?, ?)"'),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" values "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("title"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" content"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    \n    db"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "run"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("query"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" values"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "render"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'internal-server-error.hbs'"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "redirect"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'/blogposts/'"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token keyword" }, "this"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("lastID"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    \n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "//..."),
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
      "sample-answer": withCtx(() => _cache[58] || (_cache[58] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Looking at the code, one can see that it validates the blogpost that should be created, and given the conditional statement with the condition "),
            createBaseVNode("code", null, "0 < errorMessages.length"),
            createTextVNode(", the intent seems to be to only create the blogpost (store it in the database) if there are no validation errors. However, this if statement contains no "),
            createBaseVNode("code", null, "return"),
            createTextVNode(" statement, so even if we enter it and send back a response that shows the validation errors to the user, the rest of the code will continue to execute, so we will create blogposts that contains validation errors. That is the biggest problem with the code.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "(then there exist other problems as well, such as:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("the code will crash if a hacker sends a request without a "),
              createBaseVNode("code", null, "title"),
              createTextVNode(" or "),
              createBaseVNode("code", null, "content"),
              createTextVNode(" (that is bad, but no harm done)")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("the error message "),
              createBaseVNode("code", null, "The title is too long."),
              createTextVNode(" is not enough informative to the user (i.e. it doesn't mention what the allowed maximum length is))")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "50"),
              createTextVNode(" and "),
              createBaseVNode("code", null, "5000"),
              createTextVNode(" have been hardcoded")
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "but none of these are as problematic as creating a blogpost that contains validation errors)",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[59] || (_cache[59] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct answer"),
            createBaseVNode("li", null, "0.1 points for saying the database can be spammed")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[102] || (_cache[102] = createBaseVNode(
      "h2",
      {
        id: "database",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#database",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Database")
      ],
      -1
      /* HOISTED */
    )),
    _cache[103] || (_cache[103] = createBaseVNode(
      "h3",
      {
        id: "question-21-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-21-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 21 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[60] || (_cache[60] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Below is the table "),
            createBaseVNode("code", null, "humans"),
            createTextVNode(" found in an SQLite database (not all rows are shown).")
          ],
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
                createBaseVNode("th", null, "age")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "Alice"),
                createBaseVNode("td", null, "10")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "2"),
                createBaseVNode("td", null, "Bob"),
                createBaseVNode("td", null, "20")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "3"),
                createBaseVNode("td", null, "Claire"),
                createBaseVNode("td", null, "15")
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
            createTextVNode("Write an SQL query that sends back all information about all humans with the name "),
            createBaseVNode("code", null, "Bob"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": Don't use placeholders like "),
            createBaseVNode("code", null, "?"),
            createTextVNode(" in your query. You don't need to worry about SQL injections, since this is a pure database question, and has nothing to do with web applications.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[61] || (_cache[61] = [
        createBaseVNode(
          "div",
          {
            class: "language-sql line-numbers-mode",
            "data-ext": "sql"
          },
          [
            createBaseVNode("pre", { class: "language-sql" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "SELECT"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "FROM"),
                createTextVNode(" humans "),
                createBaseVNode("span", { class: "token keyword" }, "WHERE"),
                createTextVNode(" name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Bob"'),
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
            createTextVNode("(in SQLite, when testing for equality, both "),
            createBaseVNode("code", null, "="),
            createTextVNode(" and "),
            createBaseVNode("code", null, "=="),
            createTextVNode(" can be used)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[62] || (_cache[62] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Point deductions for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for missing "),
                  createBaseVNode("code", null, "*")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for "),
                  createBaseVNode("code", null, "SELECT humans"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "SELECT * FROM")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for "),
                  createBaseVNode("code", null, "'name = Bob'"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "name = 'Bob'")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.5 points for "),
                  createBaseVNode("code", null, "GET humans"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "SELECT * FROM")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.5 points for "),
                  createBaseVNode("code", null, "RETRIEVE humans"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "SELECT * FROM")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.75 points for "),
                  createBaseVNode("code", null, "get ALL"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "SELECT * FROM")
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
    _cache[104] || (_cache[104] = createBaseVNode(
      "h3",
      {
        id: "question-22-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-22-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 22 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[63] || (_cache[63] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Below is the table "),
            createBaseVNode("code", null, "humans"),
            createTextVNode(" found in an SQLite database (not all rows are shown).")
          ],
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
                createBaseVNode("th", null, "age")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "Alice"),
                createBaseVNode("td", null, "10")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "2"),
                createBaseVNode("td", null, "Bob"),
                createBaseVNode("td", null, "20")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "3"),
                createBaseVNode("td", null, "Claire"),
                createBaseVNode("td", null, "15")
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
            createTextVNode("Write an SQL query that changes the age of all humans named "),
            createBaseVNode("code", null, "Claire"),
            createTextVNode(" to "),
            createBaseVNode("code", null, "30"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": Don't use placeholders like "),
            createBaseVNode("code", null, "?"),
            createTextVNode(" in your query. You don't need to worry about SQL injections, since this is a pure database question, and has nothing to do with web applications.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[64] || (_cache[64] = [
        createBaseVNode(
          "div",
          {
            class: "language-sql line-numbers-mode",
            "data-ext": "sql"
          },
          [
            createBaseVNode("pre", { class: "language-sql" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "UPDATE"),
                createTextVNode(" humans "),
                createBaseVNode("span", { class: "token keyword" }, "SET"),
                createTextVNode(" age "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "30"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "WHERE"),
                createTextVNode(" name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Claire"'),
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
            createTextVNode("(in SQLite, when testing for equality, both "),
            createBaseVNode("code", null, "="),
            createTextVNode(" and "),
            createBaseVNode("code", null, "=="),
            createTextVNode(" can be used)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[65] || (_cache[65] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Point deduction for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.1 points for not using quotes around strings"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for changing the age to "),
                  createBaseVNode("code", null, "10"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "30")
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
          "OR:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for a query that contains most required SQL parts, but in wrong order"),
            createBaseVNode("li", null, [
              createTextVNode("Point deduction for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for using "),
                  createBaseVNode("code", null, "FROM"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "SET")
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
    _cache[105] || (_cache[105] = createBaseVNode(
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
    _cache[106] || (_cache[106] = createBaseVNode(
      "h3",
      {
        id: "question-23-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-23-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 23 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[66] || (_cache[66] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Implement the JavaScript function "),
            createBaseVNode("code", null, "getSumUntil(excludedTerm)"),
            createTextVNode(", that receives an integer as argument, and returns the sum of the integers between "),
            createBaseVNode("code", null, "0"),
            createTextVNode(" and the integer it receives (including "),
            createBaseVNode("code", null, "0"),
            createTextVNode(" BUT EXCLUDING the received integer).")
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
                createBaseVNode("span", { class: "token function" }, "getSumUntil"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 10 (0 + 1 + 2 + 3 + 4)"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getSumUntil"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 1 (0 + 1)"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getSumUntil"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 0"),
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
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": You can expect "),
            createBaseVNode("code", null, "excludedTerm"),
            createTextVNode(" to always be greater than "),
            createBaseVNode("code", null, "0"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[67] || (_cache[67] = [
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
                createBaseVNode("span", { class: "token function" }, "getSumUntil"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "excludedTerm"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" term"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ";"),
                createTextVNode(" term"),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode("excludedTerm"),
                createBaseVNode("span", { class: "token punctuation" }, ";"),
                createTextVNode(" term"),
                createBaseVNode("span", { class: "token operator" }, "++"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        sum "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(" term\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" sum\n    \n"),
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
      "marking-guidelines": withCtx(() => _cache[68] || (_cache[68] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that largely works"),
            createBaseVNode("li", null, [
              createTextVNode("Point deduction for small mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.1 points for using global variable"),
                createBaseVNode("li", null, "-0.1 points for using bad name on variable"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for "),
                  createBaseVNode("code", null, "Function"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "function")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for including "),
                  createBaseVNode("code", null, "excludedTerm"),
                  createTextVNode(" in the sum")
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
          "OR:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.25 points for iterating over correct values")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[107] || (_cache[107] = createBaseVNode(
      "h3",
      {
        id: "question-24-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-24-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 24 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[69] || (_cache[69] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Implement the JavaScript function "),
            createBaseVNode("code", null, "isAnyGreaterThan10(numbers)"),
            createTextVNode(", that receives an array with numbers and returns:")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "true"),
              createTextVNode(" if at least one of the numbers in the array is greater than "),
              createBaseVNode("code", null, "10")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "false"),
              createTextVNode(" otherwise")
            ])
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
                createBaseVNode("span", { class: "token function" }, "isAnyGreaterThan10"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "7"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "8"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> false"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "isAnyGreaterThan10"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "15"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> true"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "isAnyGreaterThan10"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "15"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "51"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "50"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> true"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "isAnyGreaterThan10"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> false"),
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
            createTextVNode("(if the array is empty, then returning "),
            createBaseVNode("code", null, "false"),
            createTextVNode(" is what makes most sense, so that's how your implementation should work as well)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[70] || (_cache[70] = [
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
                createBaseVNode("span", { class: "token function" }, "isAnyGreaterThan10"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "of"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "10"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token boolean" }, "true"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token boolean" }, "false"),
                createTextVNode("\n    \n"),
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
      "marking-guidelines": withCtx(() => _cache[71] || (_cache[71] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that largely works"),
            createBaseVNode("li", null, [
              createTextVNode("Point deduction for smaller mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.1 points for using global variable"),
                createBaseVNode("li", null, "-0.25 points for iterating over indexes instead of values")
              ])
            ])
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
            createBaseVNode("li", null, "0.25 points for correctly using the for of loop with good names")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[108] || (_cache[108] = createBaseVNode(
      "h3",
      {
        id: "question-25-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-25-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 25 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[72] || (_cache[72] = [
        createBaseVNode(
          "p",
          null,
          "In JavaScript, a movie with a title, a category and a runtime (in minutes) can be represented as an object like this:",
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
                createTextVNode(" movie "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Dumb and Dumber"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token literal-property property" }, "category"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"comedy"'),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "106"),
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
            createBaseVNode("code", null, "getNumberOfMoviesInCategories(movies, category1, category2)"),
            createTextVNode(", which receives an array with movie objects and two categories, and returns the number of movies in respective categories as an array containing the two numbers.")
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
                createBaseVNode("span", { class: "token function" }, "getNumberOfMoviesInCategories"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Dumb and Dumber"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "category"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"comedy"'),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "106"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Shrek"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "category"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"comedy"'),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "90"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Titanic"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "category"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"drama"'),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "195"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Shrek 2"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "category"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"comedy"'),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "92"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Love Actually"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "category"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"romantic"'),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "136"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"comedy"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"romantic"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> [3, 1]"),
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
      "sample-answer": withCtx(() => _cache[73] || (_cache[73] = [
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
                createBaseVNode("span", { class: "token function" }, "getNumberOfMoviesInCategories"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("movies"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" category1"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" category2")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" numberOfMovies1 "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" numberOfMovies2 "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" movie "),
                createBaseVNode("span", { class: "token keyword" }, "of"),
                createTextVNode(" movies"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("movie"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("category "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(" category1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            numberOfMovies1 "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("movie"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("category "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(" category2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            numberOfMovies2 "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("numberOfMovies1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" numberOfMovies2"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    \n"),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[74] || (_cache[74] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for an answer that largely works"),
            createBaseVNode("li", null, [
              createTextVNode("Point deduction for smaller mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.25 points for not returning an array"),
                createBaseVNode("li", null, "-0.25 points for iterating over indexes instead of values")
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
    _cache[109] || (_cache[109] = createBaseVNode(
      "h3",
      {
        id: "question-26-1p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-26-1p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 26 (1p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[75] || (_cache[75] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Alice has created the asynchronous functions "),
            createBaseVNode("code", null, "add1(number, callback)"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "add5(number, callback)"),
            createTextVNode(":")
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
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "add1"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("number"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" callback")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "add5"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("number"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" callback")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
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
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Implement the function "),
            createBaseVNode("code", null, "add6(number, callback)"),
            createTextVNode(", that can be used like this:")
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
                createBaseVNode("span", { class: "token function" }, "add6"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "10"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "numberPlus6"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"10 + 6 = "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("numberPlus6"),
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
            createTextVNode("In your implementation of "),
            createBaseVNode("code", null, "add6"),
            createTextVNode(" you may not use any mathematical operation yourself, but you have to call "),
            createBaseVNode("code", null, "add1"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "add5"),
            createTextVNode(" to compute the new number based on the number you receive.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[76] || (_cache[76] = [
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
                createBaseVNode("span", { class: "token function" }, "add6"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("number"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" callback")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token function" }, "add1"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "numberPlus1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token function" }, "add5"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("numberPlus1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "numberPlus6"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("numberPlus6"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[77] || (_cache[77] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that largely works")
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
const exam20230816_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-08-16.html.vue"]]);
export {
  exam20230816_html as default
};
