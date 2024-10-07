import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
  return openBlock(), createElementBlock("div", null, [
    _cache[78] || (_cache[78] = createStaticVNode('<h1 id="exam-2022-10-20" tabindex="-1"><a class="header-anchor" href="#exam-2022-10-20" aria-hidden="true">#</a> Exam 2022-10-20</h1><p>Here is the exam from 2022-10-20.</p><hr><p>Start by reading through all questions.</p><p><strong>PETER HAS GOT A COLD</strong> and won&#39;t visit the exam. If you find any question unclear, ask an exam supervisor (tentavakt in Swedish) to call him, and he will try to clarify.</p><p>Max score is 30 points:</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use any aids except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable will not receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><h3 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h3>', 14)),
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
            createBaseVNode("li", null, "Retrieving a resource"),
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
              createBaseVNode("code", null, "GET")
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
            createTextVNode("Give an example of an HTTP request where you need to use the "),
            createBaseVNode("code", null, "Content-Type"),
            createTextVNode(" header. Your answer is expected to be an HTTP request with as many details as you know.")
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
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("Method: "),
              createBaseVNode("code", null, "POST")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("URI: "),
              createBaseVNode("code", null, "/movies")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Content-Type: "),
              createBaseVNode("code", null, "application/x-www-form-urlencoded")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Content-Length: "),
              createBaseVNode("code", null, "19")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Body: "),
              createBaseVNode("code", null, "title=Shrek&year=2001")
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
            createBaseVNode("li", null, "0.25 points for a valid method"),
            createBaseVNode("li", null, "0.25 points for a valid URI"),
            createBaseVNode("li", null, "0.25 points for one relevant header name with a relevant value"),
            createBaseVNode("li", null, "0.25 points for valid body"),
            createBaseVNode("li", null, [
              createTextVNode("Point reduction for small mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.1 points for header value wrong"),
                createBaseVNode("li", null, "-0.1 points for body in wrong format")
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
          [
            createTextVNode("Explain why the URI "),
            createBaseVNode("code", null, "/get-all-movies"),
            createTextVNode(" is considered a bad URI in HTTP.")
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
      "sample-answer": withCtx(() => _cache[7] || (_cache[7] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("In HTTP, the URI should only identify which resource(s) the request is about. It should not contain the "),
            createBaseVNode("code", null, "get-"),
            createTextVNode(" part in this example, because the method should be used to indicate what to do with the resource(s) (e.g. GET to retrieve it/them).")
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
            createBaseVNode("li", null, "1 point for a valid justification for why the given URI is bad"),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for saying something more that is wrong: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.5 points for saying it's bad because "),
                  createBaseVNode("code", null, "-"),
                  createTextVNode(" is used in the URI")
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
            createBaseVNode("li", null, [
              createTextVNode("0.75 points for suggesting that "),
              createBaseVNode("code", null, "/movies"),
              createTextVNode(" is better, but with an incorrect justification (for example "),
              createBaseVNode("code", null, "/get-all-movies"),
              createTextVNode(" is too long)")
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
            createBaseVNode("li", null, "0.5 points for an answer that is on the right track but a bit vague")
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
          "Write the HTTP status code for the following reason phrases:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, "Bad Request"),
            createBaseVNode("li", null, "Not Found"),
            createBaseVNode("li", null, "Internal Server Error"),
            createBaseVNode("li", null, "OK")
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
            createBaseVNode("li", null, "0.25 points for each correct answer")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[10] || (_cache[10] = [
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "400")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "404")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "500")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "200")
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
            createBaseVNode("li", null, "0.25 points for each correct answer")
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
          "Write the name of one HTML tag that always causes the web browser to send an HTTP GET request when the user clicks on it.",
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
      "sample-answer": withCtx(() => _cache[16] || (_cache[16] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "a")
            ])
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
            createBaseVNode("li", null, "1 point for a valid tag name")
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
          "Write the name of one HTML tag that always causes the web browser to send an HTTP GET request when the web browser receives the HTML code for that tag.",
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
      "sample-answer": withCtx(() => _cache[19] || (_cache[19] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "img")
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
            createBaseVNode("li", null, "1 point for a valid tag name")
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
          "Name the HTML tag you would use to mark some text as:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, "a paragraph"),
            createBaseVNode("li", null, "the title of a main chapter on the webpage/the HTML document"),
            createBaseVNode("li", null, "the main content on the webpage/the HTML document"),
            createBaseVNode("li", null, "a list item in a list")
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
          "You'll get:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for each correct answer (spelling needs to be correct)")
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
              createBaseVNode("code", null, "p")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "h1")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "main")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "li")
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
            createBaseVNode("li", null, "0.5 points for each correct answer (spelling needs to be correct)")
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
          "If a user comes to a website with the form below and submits it without making any changes to it, what would the body of the request look like? Write the body as your answer.",
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
                    createTextVNode("/login"),
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
                createTextVNode("\n   Username: "),
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
                    createTextVNode("un"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "value"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("James"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n   Password: "),
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
                    createTextVNode("pw"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "value"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("Bond"),
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
                    createTextVNode("Login!"),
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
              createBaseVNode("code", null, "un=James&pw=Bond\n")
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
      "marking-guidelines": withCtx(() => _cache[26] || (_cache[26] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for correct "),
              createBaseVNode("code", null, "un"),
              createTextVNode(" name and value ("),
              createBaseVNode("code", null, "James"),
              createTextVNode(")")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for correct "),
              createBaseVNode("code", null, "pw"),
              createTextVNode(" name and value ("),
              createBaseVNode("code", null, "Bond"),
              createTextVNode(")")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.1 points for surrounding value with quotes"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for including "),
                  createBaseVNode("code", null, "/login?"),
                  createTextVNode(" in the body")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.5 points for using another data format than "),
                  createBaseVNode("code", null, "un=James&pw=Bond"),
                  createTextVNode(" (such as JSON)")
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
    _cache[88] || (_cache[88] = createBaseVNode(
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
    _cache[89] || (_cache[89] = createBaseVNode(
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
          "Name and describe 2 different CSS properties of your choice. For each, provide also an example of a value it can have, and explain the result of using the property with that value.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[28] || (_cache[28] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The CSS property "),
            createBaseVNode("code", null, "color"),
            createTextVNode(" determines which color the text should have. For example, the value "),
            createBaseVNode("code", null, "red"),
            createTextVNode(" would make the text red.")
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
            createTextVNode(" determines how big the text should be. For example, the value "),
            createBaseVNode("code", null, "16px"),
            createTextVNode(" would make the text 16 pixels big.")
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
            createBaseVNode("li", null, "1 point for an answer that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.5 points for only one good declaration"),
                createBaseVNode("li", null, "-0.25 points for no description of the result of applying the value to the property")
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
            createTextVNode("Explain what a "),
            createBaseVNode("em", null, "media query"),
            createTextVNode(" can be used for in CSS.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[31] || (_cache[31] = [
        createBaseVNode(
          "p",
          null,
          "A media query can be used to conditionally apply CSS rules based on properties of the device the webpage is being displayed on (for example based on how big the screen is).",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[32] || (_cache[32] = [
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
                createBaseVNode("span", { class: "token selector" }, "div#hello .p"),
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
      "sample-answer": withCtx(() => _cache[34] || (_cache[34] = [
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
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "id"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("hello"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        "),
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
                createTextVNode("I'm selected!"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("span")
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
              createBaseVNode("div", { class: "line-number" })
            ])
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
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for "),
              createBaseVNode("code", null, '<div id="hello">'),
              createTextVNode(" in "),
              createBaseVNode("code", null, "<body>")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for "),
              createBaseVNode("code", null, '<X class="p">'),
              createTextVNode(" in "),
              createBaseVNode("code", null, '<div id="hello">')
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.1 points for each unnecessary HTML element"),
                createBaseVNode("li", null, "-0.1 points for each unnecessary HTML attribute")
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
                    createTextVNode("p")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "id"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("p1"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Here is "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("some"),
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
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("p")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "class"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("c1"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Here is some more text "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("span")
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
                createTextVNode("."),
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
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("p")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Here is "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("some other"),
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
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("div")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "class"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("c1"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Here is "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("some additional"),
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
      "sample-answer": withCtx(() => _cache[37] || (_cache[37] = [
        createBaseVNode(
          "div",
          {
            class: "language-css line-numbers-mode",
            "data-ext": "css"
          },
          [
            createBaseVNode("pre", { class: "language-css" }, [
              createBaseVNode("code", null, "p.c1 span\n")
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
      "marking-guidelines": withCtx(() => _cache[38] || (_cache[38] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that works")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[93] || (_cache[93] = createBaseVNode(
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
    _cache[94] || (_cache[94] = createBaseVNode(
      "h3",
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
      question: withCtx(() => _cache[39] || (_cache[39] = [
        createBaseVNode(
          "p",
          null,
          "Explain how a middleware is implemented in Express. Don't explain how a specific middleware is implemented, just give a general description, so others that would like to implement their own middleware in Express know how to do it.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[40] || (_cache[40] = [
        createBaseVNode(
          "p",
          null,
          "A middleware in Express is implemented as a function. The function will be called each time the Express application receives an HTTP request. When it's called, it will be passed 3 arguments:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "request"),
              createTextVNode(", which is an object containing information about the HTTP request that is being received")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "response"),
              createTextVNode(", which is an object containing information about the HTTP response that should be sent back to the client")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "next"),
              createTextVNode(", which is a function one should call if the next middleware in the Express application should be invoked")
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
            createBaseVNode("li", null, "0.5 points for function"),
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for "),
              createBaseVNode("code", null, "req"),
              createTextVNode("/"),
              createBaseVNode("code", null, "request"),
              createTextVNode(" parameter")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for "),
              createBaseVNode("code", null, "res"),
              createTextVNode("/"),
              createBaseVNode("code", null, "response"),
              createTextVNode(" parameter")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for "),
              createBaseVNode("code", null, "next"),
              createTextVNode(" parameter")
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
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for mentioning the middleware is passed to "),
              createBaseVNode("code", null, "expressAppObject.use()")
            ]),
            createBaseVNode("li", null, "0.5 points for a general description of how a middleware works without mentioning any details about how a middleware is implemented in Express")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[95] || (_cache[95] = createBaseVNode(
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
      question: withCtx(() => _cache[42] || (_cache[42] = [
        createBaseVNode(
          "p",
          null,
          "Explain the difference between using a double curly bracket expression and a triple curly bracket expression in Handlebars.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[43] || (_cache[43] = [
        createBaseVNode(
          "p",
          null,
          "When using a triple curly bracket expression in Handlebars, the text from the expression will be inserted as it is.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("When using a double curly bracket expression in Handlebars, the characters in the text from the expression that has special meaning in HTML ("),
            createBaseVNode("code", null, "<"),
            createTextVNode(", "),
            createBaseVNode("code", null, ">"),
            createTextVNode(", ...) will be replaced by their character entities ("),
            createBaseVNode("code", null, "&lt;"),
            createTextVNode(", "),
            createBaseVNode("code", null, "&gt;"),
            createTextVNode(", ...).")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[44] || (_cache[44] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for explaining the difference")
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
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for saying something that is on the right track, such as "),
              createBaseVNode("em", null, "triple curly brackets is more secure/protects against XSS"),
              createTextVNode("), or being a bit vague about the actual difference")
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[96] || (_cache[96] = createBaseVNode(
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
    _cache[97] || (_cache[97] = createBaseVNode(
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
          "Alice has been told by her boss to create a website where users can create their own accounts by entering their email and a password. In case users forget their passwords, Alice's boss wants the website to have a page where the user can enter the same email address that was used when creating the account, and the website would then send an email with the user's password to the user.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Alice says this is a very bad idea, and she's right. Explain why Alice is right.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[46] || (_cache[46] = [
        createBaseVNode(
          "p",
          null,
          "For that functionality to work, the passwords on the website needs to be stored in plain text. That is very bad, because if a hacker manages to hack the database, he can see all users' passwords. It's better to store the hash values of the users' passwords, and not have that functionality.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Instead of having this functionality, most websites sends a link to the user's email that leads to a page where the user can enter a new password instead. This way, passwords never needs to be stored in plain text.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[47] || (_cache[47] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("1 point for explaining passwords should never be stored in plain text (neither in a database nor in an email) "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.25 points for saying something more that is wrong or not explained")
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
    _cache[98] || (_cache[98] = createBaseVNode(
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
          [
            createTextVNode("Explain why storing the information "),
            createBaseVNode("code", null, "isLoggedIn=true"),
            createTextVNode(" in a cookie is a bad idea.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[49] || (_cache[49] = [
        createBaseVNode(
          "p",
          null,
          "Since cookies are stored on the client, any user can create and change them without the server telling them to do so. The cookie in the question is obviously intended to be used to remember that a user has logged in, but there is nothing stopping a bad user (hacker) from creating her own cookie with that information without having logged in. When the server receives requests with that cookie, it would think the user has logged in before, but she hasn't.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "So this is not a secure way to remember that a user has logged in.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[50] || (_cache[50] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct explanation (users can create/change cookies manually)"),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.1 points for including irrelevant things to the question, such as sessions"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for saying something like "),
                  createBaseVNode("code", null, "cookie id"),
                  createTextVNode(" (unclear what that is)")
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
            createBaseVNode("li", null, "0.4 points for saying something like cookies remain in the web browser after the user is done using the website, so other users using the web browser later would be logged in too (not really a problem; could use a short-lived cookie, and even so, the big problem (the user create her own cookie) still exists)")
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
            createBaseVNode("li", null, [
              createTextVNode("0.25 points for answers not indicating that a hacker can create/change her own cookie, but saying something like: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("em", null, "it's insecure")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("em", null, "anyone has access to cookies")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("em", null, "hackers can come over cookies")
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
    _cache[99] || (_cache[99] = createBaseVNode(
      "h3",
      {
        id: "question-18-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-18-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 18 (2p)")
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
            createTextVNode("On a website where the admin can create blogposts, an SQLite table is used to store them. The table looks like this ("),
            createBaseVNode("code", null, "content"),
            createTextVNode(" is not shown, since that one is quite long, and not all rows are shown):")
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
                createBaseVNode("th", null, "title"),
                createBaseVNode("th", null, "content"),
                createBaseVNode("th", null, "isPublished")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "HTML is fun!"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "1")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "2"),
                createBaseVNode("td", null, "CSS is fun too!"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "0")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "3"),
                createBaseVNode("td", null, "JS is most fun!"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "0")
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
            createTextVNode("The idea is that a user should only be able to read the blogposts that have the value "),
            createBaseVNode("code", null, "1"),
            createTextVNode(" for "),
            createBaseVNode("code", null, "isPublished"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "When receiving an HTTP request to send back a blogpost with a specific id, it is handled like this:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "app.js")
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
                createBaseVNode("span", { class: "token string" }, "'/blogposts/:id'"),
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
                createTextVNode(" id "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" request"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("params"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("id\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" query "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, "'SELECT * FROM blogposts WHERE isPublished = 1 AND id = '"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("id\n    \n    db"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "get"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("query"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("error"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" blogpost")
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
                createTextVNode("\n            blogpost\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n        \n        response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "render"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'blogpost.hbs'"),
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
            createBaseVNode("strong", null, "views/blogpost.hbs")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          null,
          [
            createBaseVNode("div", { class: "language-handlebars ext-handlebars line-numbers-mode" }, [
              createBaseVNode("pre", { class: "language-handlebars" }, [
                createBaseVNode("code", null, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "<"),
                      createTextVNode("h1")
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ]),
                  createTextVNode("{{blogpost.title}}"),
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
                      createTextVNode("div")
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ]),
                  createTextVNode("{{blogpost.content}}"),
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "</"),
                      createTextVNode("div")
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
                createBaseVNode("div", { class: "line-number" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "As your answer, write a URL a hacker can send to read a blogpost that hasn't been published yet (for example a URL that would send back the blogpost with id 2).",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[52] || (_cache[52] = [
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("code", null, "/blgoposts/-1 OR id=2")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[53] || (_cache[53] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for an answer that largely works"),
            createBaseVNode("li", null, [
              createTextVNode("-0.5 points for each error in an answer that almost works, such as: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "/blogposts/"),
                  createTextVNode(" missing")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("No value for the "),
                  createBaseVNode("code", null, "id"),
                  createTextVNode(" field in the query is provided, e.g. "),
                  createBaseVNode("code", null, "/blogposts/OR id=2")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("Quotes are used, e.g. "),
                  createBaseVNode("code", null, '/blogposts/"-1 OR id=2"')
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("Wrong operator is used, e.g. "),
                  createBaseVNode("code", null, "/blogposts/-1 & id=2"),
                  createTextVNode(" (only -0.1 points for "),
                  createBaseVNode("code", null, "||"),
                  createTextVNode(")")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("Using an extra "),
                  createBaseVNode("code", null, "WHERE")
                ])
              ])
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          { class: "custom-container warning" },
          [
            createBaseVNode("p", { class: "custom-container-title" }, "Note"),
            createBaseVNode("p", null, [
              createTextVNode("The answer "),
              createBaseVNode("code", null, "/blogposts/1 OR id=2"),
              createTextVNode(" is really not correct, because that could send back the blogpost with id "),
              createBaseVNode("code", null, "1"),
              createTextVNode(", which has been published, and the task was to write a URL to send back a blogpost that hasn't been published, but these type of answers has been accepted anyway.")
            ])
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
      question: withCtx(() => _cache[54] || (_cache[54] = [
        createBaseVNode(
          "p",
          null,
          "Bob claims encoding and encrypting is the same thing. Alice points out that there is one very important difference between them. Which difference is that?",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[55] || (_cache[55] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Encoding is about representing data in another format, such as representing characters as numbers (e.g. "),
            createBaseVNode("code", null, "A"),
            createTextVNode(" as "),
            createBaseVNode("code", null, "65"),
            createTextVNode(", "),
            createBaseVNode("code", null, "B"),
            createTextVNode(" as "),
            createBaseVNode("code", null, "66"),
            createTextVNode(", etc.). How something has been encoded in not a secret, and anyone can decode the encoded data to obtain the original data.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Encrypting is about hiding the meaning of data, so others can't read it even if they can see it. To read encrypted data, it needs to be decrypted, which only the receiver of the encrypted data should be able to do.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[56] || (_cache[56] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for pointing out the difference")
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
            createBaseVNode("li", null, "0.5 points for explaining what encoding is"),
            createBaseVNode("li", null, "0.5 points for explaining what encrypting is")
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
          "Bob claims encryption and hashing are the same thing. Alice points out that there is one very important difference between them. Which difference is that?",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[58] || (_cache[58] = [
        createBaseVNode(
          "p",
          null,
          "Encryption is designed to be reversible (if you have encrypted a message, you can later decrypt it to obtain the original message). Hashing on the other hand is designed to be very hard (optimally impossible) to reverse (only available method is brute-force).",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[59] || (_cache[59] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for pointing out the difference (encryption is designed to be reversible, hashing is not)"),
            createBaseVNode("li", null, "-0.25 points for saying something that is not correct")
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
            createBaseVNode("li", null, "0.5 points for explaining what encryption is"),
            createBaseVNode("li", null, "0.5 points for explaining what hashing is"),
            createBaseVNode("li", null, "-0.25 points for saying something that is not correct")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          { class: "custom-container warning" },
          [
            createBaseVNode("p", { class: "custom-container-title" }, "Note"),
            createBaseVNode("p", null, [
              createTextVNode("Many students write that hash values consist of "),
              createBaseVNode("em", null, "random characters"),
              createTextVNode("/"),
              createBaseVNode("em", null, "hashing is random"),
              createTextVNode(". That is not the case; encryption and hashing are both deterministic, and you always end up with the same encrypted value/hash value for the same input as long as you use the same encryption/hashing algorithm.")
            ]),
            createBaseVNode("p", null, [
              createTextVNode("What can be OK to write is that the hash value consists of characters that "),
              createBaseVNode("em", null, "looks random"),
              createTextVNode(" to humans, or similar.")
            ])
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
            createTextVNode("Write an SQL query that sets "),
            createBaseVNode("code", null, "age"),
            createTextVNode(" to "),
            createBaseVNode("code", null, "18"),
            createTextVNode(" for all humans that currently has an "),
            createBaseVNode("code", null, "age"),
            createTextVNode(" lower than "),
            createBaseVNode("code", null, "18"),
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
            createTextVNode(": Don't use placeholders, like "),
            createBaseVNode("code", null, "?"),
            createTextVNode(", in your query. You don't need to worry about SQL injections, since this is a pure database question, and has nothing to do with web applications.")
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
                createBaseVNode("span", { class: "token keyword" }, "UPDATE"),
                createTextVNode(" humans "),
                createBaseVNode("span", { class: "token keyword" }, "SET"),
                createTextVNode(" age "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "18"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "WHERE"),
                createTextVNode(" age "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "18"),
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
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[62] || (_cache[62] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for small mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.1 points for putting numbers in quotes"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for using extra words that shouldn't be there, such as: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "FROM")
                    ]),
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "*")
                    ]),
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "TABLE")
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for using wrong words, such as: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "TO"),
                      createTextVNode(" instead of "),
                      createBaseVNode("code", null, "SET")
                    ]),
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "LESS THAN"),
                      createTextVNode(" instead of "),
                      createBaseVNode("code", null, "<")
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for having the wrong order of the "),
                  createBaseVNode("code", null, "SET"),
                  createTextVNode(" clause and the "),
                  createBaseVNode("code", null, "WHERE"),
                  createTextVNode(" clause")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.5 points for not having a "),
                  createBaseVNode("code", null, "WHERE"),
                  createTextVNode(" clause at all")
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
            createBaseVNode("li", null, [
              createTextVNode("0.75 points for an answer that has the "),
              createBaseVNode("code", null, "UPDATE humans"),
              createTextVNode(" part wrong, but otherwise is correct, like: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "SELECT * FROM humans SET age = 18 WHERE age < 18")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "SET age = 18 FROM humans WHERE age < 18")
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
            createBaseVNode("li", null, [
              createTextVNode("0.25 points for an answer that do contain most relevant parts but in wrong order/use the wrong keywords/syntax, like: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "SELECT * FROM humans WHERE age<18 and SET age = 18")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "SELECT * FROM humans WHERE age = <18 UPDATE age = 18")
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
            createTextVNode("Write an SQL query that deletes all humans with the name "),
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
            createTextVNode(": Don't use placeholders, like "),
            createBaseVNode("code", null, "?"),
            createTextVNode(", in your query. You don't need to worry about SQL injections, since this is a pure database question, and has nothing to do with web applications.")
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
                createBaseVNode("span", { class: "token keyword" }, "DELETE"),
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
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": In SQLite, "),
            createBaseVNode("code", null, "="),
            createTextVNode(" and "),
            createBaseVNode("code", null, "=="),
            createTextVNode(" both means to compare values, so either works in this case.")
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
              createTextVNode("Point reductions for small mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for not surrounding "),
                  createBaseVNode("code", null, "Bob"),
                  createTextVNode(" with quotes")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for using extra words that shouldn't be there, such as: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "*")
                    ]),
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "(id, name, age)")
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for missing word, such as: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "FROM")
                    ]),
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "WHERE")
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for using the wrong word, such as: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "if"),
                      createTextVNode(" instead of "),
                      createBaseVNode("code", null, "WHERE")
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for not using the "),
                  createBaseVNode("code", null, "name"),
                  createTextVNode(" field in the "),
                  createBaseVNode("code", null, "WHERE"),
                  createTextVNode(" clause")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for writing things in wrong order, e.g. "),
                  createBaseVNode("code", null, 'name="Bob"'),
                  createTextVNode(" before "),
                  createBaseVNode("code", null, "FROM humans")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.2 points for query not including the name of the table ("),
                  createBaseVNode("code", null, "humans"),
                  createTextVNode(")")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.4 points for using the wrong "),
                  createBaseVNode("code", null, "WHERE"),
                  createTextVNode(" clause")
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
            createBaseVNode("code", null, "getSumBetween(firstInt, lastInt)"),
            createTextVNode(", that receives two integers as argument and returns the sum of the integers between them (including the integers themselves).")
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
                createBaseVNode("span", { class: "token function" }, "getSumBetween"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "7"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 18 (5 + 6 + 7)"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getSumBetween"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 2 (-1 + 0 + 1 + 2)"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getSumBetween"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "8"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "8"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 8"),
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
            createTextVNode("You can assume "),
            createBaseVNode("code", null, "firstInt"),
            createTextVNode(" always is lower than "),
            createBaseVNode("code", null, "lastInt"),
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
                createBaseVNode("span", { class: "token function" }, "getSumBetween"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("firstInt"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" lastInt")
                ]),
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
                createTextVNode(" i"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode("firstInt"),
                createBaseVNode("span", { class: "token punctuation" }, ";"),
                createTextVNode(" i"),
                createBaseVNode("span", { class: "token operator" }, "<="),
                createTextVNode("lastInt"),
                createBaseVNode("span", { class: "token punctuation" }, ";"),
                createTextVNode(" i"),
                createBaseVNode("span", { class: "token operator" }, "++"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        sum "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(" i\n    "),
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
              createTextVNode("Point reduction for small mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.5 points for bad loop"),
                createBaseVNode("li", null, "-0.5 points for wrong result"),
                createBaseVNode("li", null, "-0.5 points for syntax errors"),
                createBaseVNode("li", null, "-0.5 points for not initializing the counter"),
                createBaseVNode("li", null, "-0.5 points for not retuning a value"),
                createBaseVNode("li", null, "-0.5 points for using arrays wrong")
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
            createBaseVNode("code", null, "containsNegativeNumber(numbers)"),
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
              createTextVNode(" if one or more numbers in the array is less than "),
              createBaseVNode("code", null, "0")
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
                createBaseVNode("span", { class: "token function" }, "containsNegativeNumber"),
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
                createBaseVNode("span", { class: "token function" }, "containsNegativeNumber"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createBaseVNode("span", { class: "token number" }, "99"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> true"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "containsNegativeNumber"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> false"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "containsNegativeNumber"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "6"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createBaseVNode("span", { class: "token number" }, "6"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "14"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> true"),
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
                createBaseVNode("span", { class: "token function" }, "containsNegativeNumber"),
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
                createTextVNode("number "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
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
              createTextVNode("Point reduction for smaller mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.5 points for misplaced return statement"),
                createBaseVNode("li", null, "-0.5 points for bad condition"),
                createBaseVNode("li", null, "-0.5 points for doing strange (and useless) things (such as adding all the numbers of the array)"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.5 points for not knowing how to write "),
                  createBaseVNode("code", null, "length")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.5 points for missing the keyword "),
                  createBaseVNode("code", null, "function"),
                  createTextVNode(" missing")
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
          "In JavaScript, a book with a title and a number of pages can be represented as an object like this:",
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
                createTextVNode(" book "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, `"Alice's Adventures in Wonderland"`),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token literal-property property" }, "numberOfPages"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "117"),
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
            createTextVNode("Implement the function "),
            createBaseVNode("code", null, "getNumberOfLongBooks(books)"),
            createTextVNode(", which receives an array with book objects and returns the number of books that contains "),
            createBaseVNode("code", null, "100"),
            createTextVNode(" or more pages.")
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
                createBaseVNode("span", { class: "token function" }, "getNumberOfLongBooks"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Book a"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "numberOfPages"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "50"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Book b"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "numberOfPages"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "150"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Book c"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "numberOfPages"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "120"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Book d"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "numberOfPages"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "10"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Book e"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "numberOfPages"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "300"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Book f"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "numberOfPages"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "500"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Book g"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "numberOfPages"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1000"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 5"),
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
                createBaseVNode("span", { class: "token function" }, "getNumberOfLongBooks"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "books"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" numberOfLongBooks "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" book "),
                createBaseVNode("span", { class: "token keyword" }, "of"),
                createTextVNode(" books"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "100"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "<="),
                createTextVNode(" book"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("numberOfPages"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            numberOfLongBooks "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" numberOfLongBooks\n    \n"),
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
      "marking-guidelines": withCtx(() => _cache[74] || (_cache[74] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for an answer that largely works"),
            createBaseVNode("li", null, [
              createTextVNode("Point reduction for smaller mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.5 points for not returning an integer"),
                createBaseVNode("li", null, "-0.5 points for returning more than one value"),
                createBaseVNode("li", null, "-0.5 points for incorrectly written loop"),
                createBaseVNode("li", null, "-0.5 points for not increasing the counter by 1"),
                createBaseVNode("li", null, "-0.5 points for not having an if condition for the books' number of pages"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.5 points for missing the keyword "),
                  createBaseVNode("code", null, "function"),
                  createTextVNode(" missing")
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
            createTextVNode("Alice has created the function "),
            createBaseVNode("code", null, "getMovieById()"),
            createTextVNode(", which asynchronously fetches the movie resource with the given id from a database (in this case we assume the communication with the database always works, so we don't need to worry about error handling). Sample usage with id "),
            createBaseVNode("code", null, "7"),
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
                createBaseVNode("span", { class: "token function" }, "getMovieById"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "7"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "movie"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, '// The "movie" parameter is an object that could look like this:'),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, '// {id: 7, title: "Shrek"}'),
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
            createBaseVNode("code", null, "getTwoMoviesByIds()"),
            createTextVNode(", which receives the id of two movies, and should fetch them both from the database (using the "),
            createBaseVNode("code", null, "getMovieById()"),
            createTextVNode(" function) and sends them back to the caller through a callback function. Sample usage with id "),
            createBaseVNode("code", null, "7"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "5"),
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
                createBaseVNode("span", { class: "token function" }, "getTwoMoviesByIds"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "7"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("firstMovie"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" secondMovie")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, '// The "firstMovie" parameter is an object that could look like this:'),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, '// {id: 7, title: "Shrek"}'),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, '// The "secondMovie" parameter is an object that could look like this:'),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, '// {id: 5, title: "Titanic"}'),
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
                createBaseVNode("span", { class: "token function" }, "getTwoMoviesByIds"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("id1"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" id2"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" callback")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token function" }, "getMovieById"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("id1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "firstMovie"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token function" }, "getMovieById"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("id2"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "secondMovie"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            \n            "),
                createBaseVNode("span", { class: "token function" }, "callback"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("firstMovie"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" secondMovie"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n            \n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
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
            createBaseVNode("li", null, [
              createTextVNode("1 point for an answer that largely works (must be nested calls to "),
              createBaseVNode("code", null, "getMovieById()"),
              createTextVNode(")")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for small mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for "),
                  createBaseVNode("code", null, "callback({firstMovie, secondMovie})")
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
            createBaseVNode("li", null, [
              createTextVNode("0.25 points for having the signature of the function correct (e.g. "),
              createBaseVNode("code", null, "function getTwoMoviesByIds(id1, id2, callback){ ... }"),
              createTextVNode(")")
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
const exam20221020_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2022-10-20.html.vue"]]);
export {
  exam20221020_html as default
};
