import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
  return openBlock(), createElementBlock("div", null, [
    _cache[78] || (_cache[78] = createStaticVNode('<h1 id="exam-2023-01-14" tabindex="-1"><a class="header-anchor" href="#exam-2023-01-14" aria-hidden="true">#</a> Exam 2023-01-14</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-01-14.</p><hr><p>Peter will not visit the exam. If you find any question unclear, ask an exam supervisor (tentavakt in Swedish) to call Peter, and he will try to clarify.</p><p>Max score is 30 points:</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use any aids except:</p><ul><li>The computer you sit at to only enter answers to the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable will not receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><h3 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h3>', 13)),
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
            createBaseVNode("li", null, "Retrieving a resource"),
            createBaseVNode("li", null, "Creating a new resource"),
            createBaseVNode("li", null, "Updating a resource")
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
              createBaseVNode("code", null, "GET")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "POST")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "PUT")
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
            createTextVNode("In HTTP, explain what "),
            createBaseVNode("code", null, "application/x-www-form-urlencoded"),
            createTextVNode(" is, and when it's used.")
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
            createBaseVNode("code", null, "application/x-www-form-urlencoded"),
            createTextVNode(" is a name of a data format. It can be used as value for headers in HTTP requests and HTTP responses, for example the "),
            createBaseVNode("code", null, "Accept"),
            createTextVNode(" header and the "),
            createBaseVNode("code", null, "Content-Type"),
            createTextVNode(" header.")
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
            createBaseVNode("li", null, "0.5 points for explaining what it is (data format/MIME type)"),
            createBaseVNode("li", null, "0.5 points for when it's used"),
            createBaseVNode("li", null, "-0.1 points for writing something incorrect or confusing")
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
            createTextVNode("In HTTP, what would be a good URI one can use to delete the blogpost with id "),
            createBaseVNode("code", null, "175"),
            createTextVNode("?")
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
            createTextVNode("In HTTP, the URI should identify the resource the request is about, so the URI could for example be "),
            createBaseVNode("code", null, "/blogposts/175"),
            createTextVNode(".")
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
            createBaseVNode("li", null, "1 point for a URI only identifying the resource to be deleted, and nothing else"),
            createBaseVNode("li", null, [
              createTextVNode("-0.25 points for using an "),
              createBaseVNode("code", null, "id"),
              createTextVNode(" placeholder in the URI (HTTP don't contain the placeholder concept, only some web frameworks do that)")
            ])
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
            createBaseVNode("li", null, "Internal Server Error"),
            createBaseVNode("li", null, "Not Found"),
            createBaseVNode("li", null, "OK"),
            createBaseVNode("li", null, "Bad Request")
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
              createBaseVNode("code", null, "500")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "404")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "200")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "400")
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
              createBaseVNode("code", null, "<html>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<h1>Welcome!</h1>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "</body>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "<head>")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "</head>")
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
          [
            createTextVNode("When writing an HTML tutorial on a website, one often wants to write tags like "),
            createBaseVNode("code", null, "<p>"),
            createTextVNode(" that are shown as text, instead of being interpreted as a paragraph element by the web browser. Explain what you need to do to make the web browser display the text "),
            createBaseVNode("code", null, "<p>"),
            createTextVNode(" instead of interpreting it as the start tag for a paragraph.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": This question is only about HTML, and has nothing to do with Handlebars.")
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
            createTextVNode("You need to write "),
            createBaseVNode("code", null, "<"),
            createTextVNode(" and "),
            createBaseVNode("code", null, ">"),
            createTextVNode(" as their character entities instead, since these characters have special meaning in HTML (they are part of the syntax for tags). So you would write:")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("code", null, "&lt;p&gt;")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "To make the web browser display:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("code", null, "<p>")
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
            createBaseVNode("li", null, [
              createTextVNode("0.9 points for saying "),
              createBaseVNode("code", null, "<"),
              createTextVNode(" and "),
              createBaseVNode("code", null, ">"),
              createTextVNode(' needs to be written as their character entities/"escaped"')
            ]),
            createBaseVNode("li", null, "0.1 points for showing that you know how character entities are written (doesn't need to be perfect)")
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
            createTextVNode("Write the name of an HTML tag that can be placed in the "),
            createBaseVNode("code", null, "<head>"),
            createTextVNode(" element and that causes the web browser to send an HTTP request when it receives the HTML code for that tag.")
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
      "sample-answer": withCtx(() => _cache[19] || (_cache[19] = [
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
      "marking-guidelines": withCtx(() => _cache[20] || (_cache[20] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for a valid tag name")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          { class: "custom-container warning" },
          [
            createBaseVNode("p", { class: "custom-container-title" }, "Example of wrong tags"),
            createBaseVNode("p", null, [
              createTextVNode("Some students answered "),
              createBaseVNode("code", null, "img"),
              createTextVNode(". That is wrong, because the "),
              createBaseVNode("code", null, "<head>"),
              createTextVNode(" element should only contain meta information about the webpage, and not content.")
            ]),
            createBaseVNode("p", null, [
              createTextVNode("Some students answered "),
              createBaseVNode("code", null, "a"),
              createTextVNode(". That is wrong for the same reason as "),
              createBaseVNode("code", null, "img"),
              createTextVNode(". Also, an "),
              createBaseVNode("code", null, "<a>"),
              createTextVNode(" element does not cause the web browser to send a HTTP request when it receives the HTML code for it, but when the user clicks on it, so it's also wrong answer for that reason.")
            ])
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
            createTextVNode("Name 4 different "),
            createBaseVNode("strong", null, "block"),
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
          "You'll get:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for each correct answer (spelling needs to be correct)"),
            createBaseVNode("li", null, "-0.25 points for each incorrect answer"),
            createBaseVNode("li", null, "At lest 0 points on the question")
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
              createBaseVNode("code", null, "h1")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "p")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "ul")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "div")
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
            createBaseVNode("li", null, "0.5 points for each correct answer (spelling needs to be correct)"),
            createBaseVNode("li", null, "-0.25 points for each incorrect answer"),
            createBaseVNode("li", null, "At lest 0 points on the question")
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
                    createTextVNode("GET"),
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
              createBaseVNode("code", null, "/sum?x=123&y=456\n")
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
              createBaseVNode("code", null, "x"),
              createTextVNode(" name and value ("),
              createBaseVNode("code", null, "123"),
              createTextVNode(")")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for correct "),
              createBaseVNode("code", null, "y"),
              createTextVNode(" name and value ("),
              createBaseVNode("code", null, "456"),
              createTextVNode(")")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-0.1 points for surrounding value with quotes"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for using "),
                  createBaseVNode("code", null, "&&"),
                  createTextVNode(" or "),
                  createBaseVNode("code", null, "."),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "&")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for missing "),
                  createBaseVNode("code", null, "/sum"),
                  createTextVNode(" in the beginning")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for not having "),
                  createBaseVNode("code", null, "?")
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
            createTextVNode("To make a webpage display some text as a header, you can use the "),
            createBaseVNode("code", null, "<h1>"),
            createTextVNode(" element:")
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
                    createTextVNode("h1")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Sunny weather this weekend!"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("h1")
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
            createTextVNode("Another solution is to use a "),
            createBaseVNode("code", null, "<div>"),
            createTextVNode(" element that you then style to look like a header using CSS. Explain why it's better to use the "),
            createBaseVNode("code", null, "<h1>"),
            createTextVNode(" solution instead of the "),
            createBaseVNode("code", null, "<div>"),
            createTextVNode(" + CSS solution.")
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
            createTextVNode("The purpose of HTML is to mark up what type of data different text represents. "),
            createBaseVNode("code", null, "<h1>"),
            createTextVNode(" will mark the text as a header, so search engines, text to speech tools, etc. know this and can function properly. That information would be lost if you used the "),
            createBaseVNode("code", null, "<div>"),
            createTextVNode(" + CSS solution instead, so search engines and other tools will not be able to understand that that part of the text on the webpage is a header.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          { class: "custom-container tip" },
          [
            createBaseVNode("p", { class: "custom-container-title" }, "Extra info"),
            createBaseVNode("p", null, [
              createBaseVNode("code", null, "<div>"),
              createTextVNode(" has no semantic meaning at all in HTML, and should only be used in those cases we need extra block elements in our code to be able to implement the GUI we want using CSS.")
            ])
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
            createBaseVNode("li", null, [
              createTextVNode("1 point for the "),
              createBaseVNode("code", null, "<div>"),
              createTextVNode(" + CSS solution is missing the semantic meaning of the text")
            ])
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
                    createBaseVNode("span", { class: "token selector" }, "p"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token property" }, "color"),
                    createBaseVNode("span", { class: "token punctuation" }, ":"),
                    createTextVNode(" red"),
                    createBaseVNode("span", { class: "token punctuation" }, ";"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token selector" }, "#p"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token property" }, "color"),
                    createBaseVNode("span", { class: "token punctuation" }, ":"),
                    createTextVNode(" green"),
                    createBaseVNode("span", { class: "token punctuation" }, ";"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token selector" }, ".p"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token property" }, "color"),
                    createBaseVNode("span", { class: "token punctuation" }, ":"),
                    createTextVNode(" blue"),
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
            createBaseVNode("code", null, "green")
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
                createBaseVNode("span", { class: "token selector" }, "div div#em.p"),
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
                    createTextVNode("div")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "id"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("em"),
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
      "marking-guidelines": withCtx(() => _cache[38] || (_cache[38] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("For answers that are close to correct: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("0.5 points for "),
                  createBaseVNode("code", null, "<div>"),
                  createTextVNode(" in "),
                  createBaseVNode("code", null, "<body>")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("0.5 points for "),
                  createBaseVNode("code", null, '<div id="em" class="p">'),
                  createTextVNode(" in "),
                  createBaseVNode("code", null, "<div>")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("Point reductions for errors: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, "-0.1 points for each unnecessary HTML element"),
                    createBaseVNode("li", null, "-0.1 points for each unnecessary HTML attribute"),
                    createBaseVNode("li", null, "-0.25 points for each wrong value in/missing HTML attribute"),
                    createBaseVNode("li", null, "-0.5 points for syntax error")
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
                    createTextVNode("p")
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
                    createTextVNode("s"),
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
                createTextVNode(),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("span")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("some text"),
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
                    createTextVNode("div")
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
                createTextVNode("Here is some more text, "),
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
                    createTextVNode("s"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("and some more"),
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
                    createTextVNode("s"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
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
      "sample-answer": withCtx(() => _cache[40] || (_cache[40] = [
        createBaseVNode(
          "div",
          {
            class: "language-css line-numbers-mode",
            "data-ext": "css"
          },
          [
            createBaseVNode("pre", { class: "language-css" }, [
              createBaseVNode("code", null, "p.p .s\n")
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
            createBaseVNode("li", null, "1 point for an answer that works")
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
          "On a website, when a none-logged in user tries to access a page only logged in users should be able to access, the user is redirected to the login page. When the user has logged in on the login page, she is currently always taken to the start page.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Alice is assigned the task to change this, so the user instead comes to the page she first tried to access (the one she was redirected from) after she has successfully logged in. There exist different ways this functionality can be implemented. Suggest the best way you can think of to Alice.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[43] || (_cache[43] = [
        createBaseVNode(
          "p",
          null,
          "When redirecting the user to the login page, the web application needs to remember the URI for the page the user was on, so the web application later can redirect the user back to that page using that URI after she has successfully logged in. That URI can be remembered in different ways. The best way is to simply to remember it in a query string parameter when redirecting the user to the login page. That way, no additional data need to be stored neither on the client or the server, and users can bookmark the login page leading to a specific page after having logged in.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[44] || (_cache[44] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, '2 points for storing the "redirect back" URI in a query string parameter')
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
            createBaseVNode("li", null, '1.5 points for suggesting another way to store the "redirect back" URI that the server has access to')
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
          "On a website containing blogposts spread out over different pages using pagination, the Handlebars code below in a view file is used to show a link to the current page the user is on:",
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
                    createTextVNode("a")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "href"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("/projects/pages/{{currentPage}}"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("{{currentPage}}"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("a")
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
            createTextVNode("The "),
            createBaseVNode("code", null, "currentPage"),
            createTextVNode(" value is a number that comes from the model when the Handlebars view is rendered, and all works good.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Bob is then assigned the task to add a link to the next page with blogposts. To do that, Bob changes the code above to:",
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
                    createTextVNode("a")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "href"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("/projects/pages/{{currentPage}}"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("{{currentPage}}"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("a")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("a")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "href"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("/projects/pages/{{currentPage + 1}}"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("{{currentPage + 1}}"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("a")
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
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Will this work? If yes, then state so. If no, then explain what's wrong, and explain what Bob can do to make the code work as it should.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[46] || (_cache[46] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("We can't use arbitrary JavaScript expressions in Handlebars expressions, so "),
            createBaseVNode("code", null, "{{a + b}}"),
            createTextVNode(" in Handlebars doesn't work. Instead, Bob should add "),
            createBaseVNode("code", null, "currentPage + 1"),
            createTextVNode(" to the model (in the JS code), for example in a property called "),
            createBaseVNode("code", null, "nextPage"),
            createTextVNode(", and then in the Handlebar file use:")
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
                    createTextVNode("a")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "href"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("/projects/pages/{{currentPage}}"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("{{currentPage}}"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("a")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("a")
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "href"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("/projects/pages/{{nextPage}}"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("{{nextPage}}"),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("a")
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[47] || (_cache[47] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for explaining what's wrong"),
            createBaseVNode("li", null, "0.5 points for suggesting how to solve it")
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
          "On a website, give an example of something that is better stored in a cookie than in the user's session.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[49] || (_cache[49] = [
        createBaseVNode(
          "p",
          null,
          "Since sessions are short lived, they can't be used to remember information about the user that survives for a long time (for example when visiting the website two different days). But with cookies, such information can be remembered for a long time, so if the website is a store where users can put products in their online basket, then storing those products in a cookie instead of the session can be beneficial (if you want that information to be remembered for long).",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[50] || (_cache[50] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for a valid example")
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
            createBaseVNode("li", null, "0.5 points for a valid example that doesn't explain what to store in the cookie")
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
            createTextVNode("On a website where only the admin should be able to login and delete resources, the following Express code is used to handle requests for deleting a blogpost with a specific id ("),
            createBaseVNode("code", null, "request.session.isLoggedIn"),
            createTextVNode(" is "),
            createBaseVNode("code", null, "true"),
            createTextVNode(" when the user is logged in as the admin, and "),
            createBaseVNode("code", null, "false"),
            createTextVNode(" otherwise):")
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
                createBaseVNode("span", { class: "token string" }, "'/blogposts/:id/delete'"),
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
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token operator" }, "!"),
                createTextVNode("request"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("session"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("isLoggedIn"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "redirect"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'/login'"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" query "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"DELETE FROM blogposts WHERE id = ?"'),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" values "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("id"),
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
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("error"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "render"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"internal-error.hbs"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "redirect"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'/blogposts'"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n        \n    "),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Is the code good or bad? If yes, then justify why it's good. If bad, then explain why it's bad, and suggest how the code should change to become better.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[52] || (_cache[52] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The code is bad. If someone sends a POST request to "),
            createBaseVNode("code", null, "/blogposts/45/delete"),
            createTextVNode(" without being logged in, the blogpost with id "),
            createBaseVNode("code", null, "45"),
            createTextVNode(" will still be deleted, since the code execution doesn't stop at line 8, but the rest of the code in the function is executed as well. A "),
            createBaseVNode("code", null, "return"),
            createTextVNode(" statement is needed on line 8, or the rest of the code in the function needs to be put in an "),
            createBaseVNode("code", null, "else"),
            createTextVNode(" statement.")
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
            createBaseVNode("li", null, "0.5 points for explaining the authorization bug that exist"),
            createBaseVNode("li", null, "0.5 points for suggesting how to fix the bug")
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
            createTextVNode("On a website where the admin can create blogposts, an SQLite table is used to store all the blogposts. The table looks like this ("),
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
                createBaseVNode("th", null, "keyword"),
                createBaseVNode("th", null, "title"),
                createBaseVNode("th", null, "content"),
                createBaseVNode("th", null, "isPublished")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "html"),
                createBaseVNode("td", null, "HTML is fun!"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "1")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "css"),
                createBaseVNode("td", null, "CSS is fun too!"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "0")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "js"),
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
          [
            createTextVNode("When receiving an HTTP request to send back a blogpost with a specific "),
            createBaseVNode("code", null, "keyword"),
            createTextVNode(", it is handled like this:")
          ],
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
                createBaseVNode("span", { class: "token string" }, "'/blogposts/:keyword'"),
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
                createTextVNode(" keyword "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" request"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("params"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("keyword\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" query "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, `"SELECT * FROM blogposts WHERE isPublished = 1 AND keyword = '"`),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("keyword"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, `"'"`),
                createTextVNode("\n    \n    db"),
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
                    createTextVNode("p")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("{{blogpost.content}}"),
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
            createTextVNode("As your answer, write a URL a hacker can send to read a blogpost that hasn't been published yet (for example a URL that would send back the blogpost with keyword "),
            createBaseVNode("code", null, "css"),
            createTextVNode(").")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[55] || (_cache[55] = [
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("code", null, "/blogposts/' OR keyword='css")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[56] || (_cache[56] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for an answer that largely works"),
            createBaseVNode("li", null, [
              createTextVNode("-0.5 points for each error in an answer that almost works, such as: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("Not have inserted single quotes correct, e.g. "),
                  createBaseVNode("code", null, "/blogposts/ -1 OR keyword=css")
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
          [
            createTextVNode("On a website where only the admin should be able to create new blogposts, the following code is used ("),
            createBaseVNode("code", null, "request.session.isLoggedIn"),
            createTextVNode(" is "),
            createBaseVNode("code", null, "true"),
            createTextVNode(" when the user is logged in as the admin, and "),
            createBaseVNode("code", null, "false"),
            createTextVNode(" otherwise):")
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
                createBaseVNode("span", { class: "token function" }, "get"),
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
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" model "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token literal-property property" }, "isLoggedIn"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(" request"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("session"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("isLoggedIn\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "render"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'create-blogpost.hbs'"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" model"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
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
            createBaseVNode("strong", null, "views/create-blogpost.hbs"),
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
                createTextVNode("{{#if isLoggedIn}}\n    "),
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
                    createTextVNode("POST"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token attr-name" }, "action"),
                  createBaseVNode("span", { class: "token attr-value" }, [
                    createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                    createBaseVNode("span", { class: "token punctuation" }, '"'),
                    createTextVNode("/blogposts/create"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        Title: "),
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
                    createTextVNode("title"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        Content: "),
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
                    createTextVNode("content"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n        "),
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
                    createTextVNode("Create"),
                    createBaseVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("form")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n{{else}}\n    "),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "<"),
                    createTextVNode("p")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("Error: have to be logged in to see the create blogpost form."),
                createBaseVNode("span", { class: "token tag" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "</"),
                    createTextVNode("p")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ">")
                ]),
                createTextVNode("\n{{/if}}\n")
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
        ),
        createBaseVNode(
          "p",
          null,
          "Is this part of the website implemented in a secure way? Justify your answer.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[58] || (_cache[58] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("No, that part of the website is not implemented in a good way; anyone can send a POST request to "),
            createBaseVNode("code", null, "/blogposts/create"),
            createTextVNode(" to create a new blogpost. Sure, only the admin can retrieve the create blogpost form, but that doesn't stop a hacker from being able to send an equivalent POST request from his own computer.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[59] || (_cache[59] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct answer")
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
            createBaseVNode("li", null, "0.5 points for correct answer and stating other things as weaknesses without explaining how/being incorrect about those")
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
                createBaseVNode("td", null, "Alcie"),
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
            createBaseVNode("code", null, "name"),
            createTextVNode(" to "),
            createBaseVNode("code", null, "Alice"),
            createTextVNode(" for all humans that currently has the name "),
            createBaseVNode("code", null, "Alcie"),
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
                createTextVNode(" name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Alice"'),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "WHERE"),
                createTextVNode(" name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Alcie"'),
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
            createBaseVNode("li", null, "1 point for an answer that is largely correct")
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
            createBaseVNode("li", null, "0.5 points for a query that contains most required SQL parts, but in wrong order")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Point reductions for errors:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("-0.1 points for updating the name to "),
              createBaseVNode("code", null, "Alicie"),
              createTextVNode(" (it should be updated to "),
              createBaseVNode("code", null, "Alice"),
              createTextVNode(")")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("-0.1 points using "),
              createBaseVNode("code", null, "Alice"),
              createTextVNode(" in the "),
              createBaseVNode("code", null, "WHERE"),
              createTextVNode(" clause")
            ]),
            createBaseVNode("li", null, "-0.1 points for not using quotes around strings")
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
            createTextVNode("Write an SQL query that deletes all humans that are younger than "),
            createBaseVNode("code", null, "18"),
            createTextVNode(" (those who are "),
            createBaseVNode("code", null, "18"),
            createTextVNode(" should not be deleted).")
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
      "marking-guidelines": withCtx(() => _cache[65] || (_cache[65] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that is largely correct")
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
            createBaseVNode("li", null, "0.5 points for a query that contains most required SQL parts, but in wrong order")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Point reductions for errors:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("-0.1 points for using "),
              createBaseVNode("code", null, "DELETE something FROM"),
              createTextVNode(", or only "),
              createBaseVNode("code", null, "DELETE"),
              createTextVNode(", instead of "),
              createBaseVNode("code", null, "DELETE FROM")
            ]),
            createBaseVNode("li", null, "-0.25 points for writing JavaScript code that contains a syntax error")
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
            createBaseVNode("code", null, "getProductUpTo(lastFactor)"),
            createTextVNode(", that receives an integer as argument, and returns the product of the integers between "),
            createBaseVNode("code", null, "1"),
            createTextVNode(" and the integer it receives (including "),
            createBaseVNode("code", null, "1"),
            createTextVNode(" and the received integer).")
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
                createBaseVNode("span", { class: "token function" }, "getProductUpTo"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 6 (1 * 2 * 3)"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getProductUpTo"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 120 (1 * 2 * 3 * 4 * 5)"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "getProductUpTo"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 1"),
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
                createBaseVNode("span", { class: "token function" }, "getProductUpTo"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "lastFactor"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" product "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" factor"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ";"),
                createTextVNode(" factor"),
                createBaseVNode("span", { class: "token operator" }, "<="),
                createTextVNode("lastFactor"),
                createBaseVNode("span", { class: "token punctuation" }, ";"),
                createTextVNode(" factor"),
                createBaseVNode("span", { class: "token operator" }, "++"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        product "),
                createBaseVNode("span", { class: "token operator" }, "*="),
                createTextVNode(" factor\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" product\n    \n"),
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
                createBaseVNode("li", null, "-0.1 points for using global variable"),
                createBaseVNode("li", null, "-0.1 points for using bad name on variable"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for "),
                  createBaseVNode("code", null, "product"),
                  createTextVNode(" starting on "),
                  createBaseVNode("code", null, "0")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for iteration starting on "),
                  createBaseVNode("code", null, "0"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "1")
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
            createBaseVNode("code", null, "areAll5(numbers)"),
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
              createTextVNode(" if all the values in the array is "),
              createBaseVNode("code", null, "5")
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
                createBaseVNode("span", { class: "token function" }, "areAll5"),
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
                createBaseVNode("span", { class: "token function" }, "areAll5"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> false"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "areAll5"),
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
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> true"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token function" }, "areAll5"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
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
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("(if the array is empty, then returning "),
            createBaseVNode("code", null, "true"),
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
                createBaseVNode("span", { class: "token function" }, "areAll5"),
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
                createBaseVNode("span", { class: "token operator" }, "!="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token boolean" }, "false"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token boolean" }, "true"),
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
            createBaseVNode("code", null, "getMinutesToWatchMoviesInCategory(movies, category)"),
            createTextVNode(", which receives an array with movie objects and a category, and returns the number of minutes it takes to watch all the movies that has that category.")
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
                createBaseVNode("span", { class: "token function" }, "getMinutesToWatchMoviesInCategory"),
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
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"comedy"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// --> 288 (106 + 90 + 92)"),
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
                createBaseVNode("span", { class: "token function" }, "getMinutesToWatchMoviesInCategory"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("movies"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" category")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" minutes "),
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
                createTextVNode(" category"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            minutes "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(" movie"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("runtimeInMinutes\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" minutes\n    \n"),
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
            createTextVNode("Alice has created the synchronous function "),
            createBaseVNode("code", null, "add1(number)"),
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
                createBaseVNode("span", { class: "token parameter" }, "number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
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
          "Rewrite this function so the caller of the function receives the incremented number through a callback function instead of as a return value.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Then show that you know how to use the new version of the function by using it to increment "),
            createBaseVNode("code", null, "5"),
            createTextVNode(" to "),
            createBaseVNode("code", null, "6"),
            createTextVNode(", and then log the incremented number in the console using "),
            createBaseVNode("code", null, "console.log()"),
            createTextVNode(".")
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
                createBaseVNode("span", { class: "token function" }, "add1"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "incrementedNumber"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("incrementedNumber"),
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
              createTextVNode("0.5 points for implementing the function with the callback correct "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for not defining the "),
                  createBaseVNode("code", null, "callback"),
                  createTextVNode(" parameter")
                ])
              ])
            ]),
            createBaseVNode("li", null, "0.5 points for using the function with the callback correct")
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
const exam20230114_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-01-14.html.vue"]]);
export {
  exam20230114_html as default
};
