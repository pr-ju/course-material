import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
  return openBlock(), createElementBlock("div", null, [
    _cache[17] || (_cache[17] = createStaticVNode('<h1 id="exam-2020-08-13" tabindex="-1"><a class="header-anchor" href="#exam-2020-08-13" aria-hidden="true">#</a> Exam 2020-08-13</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2020-08-13.</p><hr><p>Start by reading through all questions.</p><p>Max score is 30 points.</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use anything else except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><hr><h2 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h2>', 13)),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[0] || (_cache[0] = [
        createBaseVNode(
          "p",
          null,
          "Does it make sense to use the body in an HTTP GET request? Justify your answer.",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[18] || (_cache[18] = createBaseVNode(
      "h2",
      {
        id: "question-2-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-2-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 2 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[1] || (_cache[1] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Alice is assigned the task to design a REST API clients can use to login and then create new blogposts belonging to that account. She decides that when a user logs in, the client obtains an access token containing the user's account id, which can be used to act on the behalf of that user. Then when the user wants to create a new blogpost belonging to her own account, the client sends an HTTP "),
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
      _: 1
      /* STABLE */
    }),
    _cache[19] || (_cache[19] = createBaseVNode(
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
          [
            createTextVNode("Explain what the HTTP headers "),
            createBaseVNode("code", null, "Accept"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "Content-Type"),
            createTextVNode(" are used for respectively. Which of them can be used in requests and responses respectively?")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[20] || (_cache[20] = createBaseVNode(
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
          "Match each HTTP status code with its reason phrase.",
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
            createBaseVNode("li", null, "201"),
            createBaseVNode("li", null, "401"),
            createBaseVNode("li", null, "501"),
            createBaseVNode("li", null, "204"),
            createBaseVNode("li", null, "200")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Reason phrases:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "No Content"),
            createBaseVNode("li", null, "OK"),
            createBaseVNode("li", null, "Created"),
            createBaseVNode("li", null, "Not Implemented"),
            createBaseVNode("li", null, "Unauthorized")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[21] || (_cache[21] = createBaseVNode(
      "h2",
      {
        id: "question-5-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-5-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 5 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[4] || (_cache[4] = [
        createBaseVNode(
          "p",
          null,
          "Explain what the middlewares from the npm package body-parser do, and describe how one of them works. Try to be as detailed as possible. There is of course no need to mention any code.",
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
      question: withCtx(() => _cache[5] || (_cache[5] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("A REST architecture consists of a set of "),
            createBaseVNode("em", null, "architectural constraints"),
            createTextVNode(", as described by Roy Thomas Fielding. Explain what an architectural constraint is.")
          ],
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
        id: "question-7-3p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-7-3p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 7 (3p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[6] || (_cache[6] = [
        createBaseVNode(
          "p",
          null,
          "Name and describe each architectural constraint REST consists of.",
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
        id: "question-8-1-5p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-8-1-5p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 8 (1.5p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[7] || (_cache[7] = [
        createBaseVNode(
          "p",
          null,
          "Here is a short story:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "blockquote",
          null,
          [
            createBaseVNode("p", null, `Alice is going to an amusement park for adults only (only people older than 18 years are allowed). At the entrance she needs to show her driver license to prove that she's older than 18 years, and then she pays for a "ride pass" (a piece of paper you put around your wrist giving you free access to all the fun things inside the amusement park). She receives her ride pass and put it around her wrist. Then she goes to a merry-go-around, show her ride pass to the responsible personnel there, which let her onboard the merry-go-around, and then she have the time of her life.`)
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "In this story, we have one identity and places where authentication and authorization takes place. Which are (all of) them? You only need to mention those that are explicitly mentioned in the text.",
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
      question: withCtx(() => _cache[8] || (_cache[8] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Willy is assigned the task to design a REST API clients can use to compute mathematical expressions consisting of one operator (+, -, * or /) and two numbers. He decides that clients should send a "),
            createBaseVNode("code", null, "POST"),
            createTextVNode(" request to "),
            createBaseVNode("code", null, "/compute"),
            createTextVNode(", add the header "),
            createBaseVNode("code", null, "Content-Type: application/json"),
            createTextVNode(" and then in the body pass "),
            createBaseVNode("code", null, '{"leftOperand": 123, "operator": "+", "rightOperand": 321}'),
            createTextVNode(" ("),
            createBaseVNode("code", null, "123"),
            createTextVNode(", "),
            createBaseVNode("code", null, '"+"'),
            createTextVNode(" and "),
            createBaseVNode("code", null, "321"),
            createTextVNode(" are sample values). The response would then contain the result of the mathematical expression (i.e. a number).")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "This design is quite poor. Explain to Willy what he has done wrong and suggest a better design.",
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
        id: "question-10-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-10-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 10 (2p)")
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
            createTextVNode("Explain what "),
            createBaseVNode("em", null, "Cross-Origin Resources Sharing"),
            createTextVNode(" is and describe when it is used and how it works.")
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
        id: "question-11-3p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-11-3p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 11 (3p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[10] || (_cache[10] = [
        createBaseVNode(
          "p",
          null,
          "JWT tokens are self-contained. That means that the data the token represents is stored in the token itself. Therefore, when a client obtains an access token that has been implemented as a JWT token, the client can read the data in the token, and even change it, for example modify the data in it to mean that the client has access to resources it shouldn't have access to. But the server has a way to discover if the client has modified the token. Explain how the server does that by describing a detailed example.",
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
        id: "question-12-1-5p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-12-1-5p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 12 (1.5p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[11] || (_cache[11] = [
        createBaseVNode(
          "p",
          null,
          "When logging in over a REST API, explain why it's most often not is enough to only receive an access token, but you also need to receive an ID token.",
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
        id: "question-13-4p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-13-4p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 13 (4p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[12] || (_cache[12] = [
        createBaseVNode(
          "p",
          null,
          "OAuth 2.0 defines four different ways a client can obtain an access token. Explain how each of them works and when you are supposed to use which one.",
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
      question: withCtx(() => _cache[13] || (_cache[13] = [
        createBaseVNode(
          "p",
          null,
          "Must an ID Token from OpenID Connect be self-contained? Justify your answer.",
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
          "How can clients obtain an ID Token from a server that supports OpenID Connect?",
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
      question: withCtx(() => _cache[15] || (_cache[15] = [
        createBaseVNode(
          "p",
          null,
          "In relational databases, explain why it's better to use a foreign key constraint instead of first sending a query to check if a constraint is fulfilled and then go ahead and execute the actual query you wanted to send if the constraint was fulfilled. Also show an example of this with actual queries.",
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
      question: withCtx(() => _cache[16] || (_cache[16] = [
        createBaseVNode(
          "p",
          null,
          "The code below is taken from an Express application making use of an SQLite database.",
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
                createBaseVNode("span", { class: "token string" }, '"/humans"'),
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
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" data "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n  db"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "all"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"SELECT * FROM humans"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("error"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" fetchedHumans")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, "// For simplicity, let us assume no database error occurred."),
                createTextVNode("\n    data"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("humans "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" fetchedHumans\n  "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n  response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "json"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("data"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("humans"),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "The response back to the client never includes any human resources, although the database contains plenty of them. Why? Also, rewrite the code so it works as intended.",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    })
  ]);
}
const exam20200813_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2020-08-13.html.vue"]]);
export {
  exam20200813_html as default
};
