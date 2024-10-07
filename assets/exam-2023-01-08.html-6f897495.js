import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[55] || (_cache[55] = createStaticVNode('<h1 id="exam-2023-01-08" tabindex="-1"><a class="header-anchor" href="#exam-2023-01-08" aria-hidden="true">#</a> Exam 2023-01-08</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-01-08.</p><hr><p>If you need clarification of any question, ask the exam personnel (tentavakt in Swedish) to call Peter, and we can discuss it over the phone.</p><p>Max score is 30 points:</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use any aids except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable will not receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="question-1-2p" tabindex="-1"><a class="header-anchor" href="#question-1-2p" aria-hidden="true">#</a> Question 1 (2p)</h2>', 12)),
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
            createBaseVNode("li", null, "Updating a resource"),
            createBaseVNode("li", null, "Deleting a resource"),
            createBaseVNode("li", null, "Creating a new resource"),
            createBaseVNode("li", null, "Retrieving a resource")
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
            createBaseVNode("li", null, "0.5 points for each correct name (spelling must be correct)")
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
              createBaseVNode("code", null, "PUT")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "DELETE")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "POST")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "GET")
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
            createBaseVNode("li", null, "0.5 points for each correct name (spelling must be correct)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[56] || (_cache[56] = createBaseVNode(
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
      question: withCtx(() => _cache[3] || (_cache[3] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Is the URI "),
            createBaseVNode("code", null, "/movies/12/delete"),
            createTextVNode(" a good or bad URI? Justify your answer.")
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
            createTextVNode("In HTTP, the URI should only identify the resource the request is about. The URI "),
            createBaseVNode("code", null, "/movies/12/delete"),
            createTextVNode(" seems to identify the movie resource with id "),
            createBaseVNode("code", null, "12"),
            createTextVNode(", which is OK, but then it also contains "),
            createBaseVNode("code", null, "delete"),
            createTextVNode(", which suggests the URI is used to delete the resource. That is wrong; what to do with the identified resource (such as deleting it), should instead be identified by the method. So, therefor, the URI is a bad one.")
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
            createBaseVNode("li", null, '1 point for URI should only identify resources, not an "action"')
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[57] || (_cache[57] = createBaseVNode(
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
      question: withCtx(() => _cache[6] || (_cache[6] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Explain what the "),
            createBaseVNode("code", null, "Content-Type"),
            createTextVNode(" header is used for in HTTP. Also, give one example of a value it can have, and explain how that value should be interpreted.")
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
            createBaseVNode("code", null, "Content-Type"),
            createTextVNode(" header is used in HTTP requests and HTTP responses to indicate which data format the body of the request/response is written in. It can, for example, have the value "),
            createBaseVNode("code", null, "application/json"),
            createTextVNode(", which means that the body is written in JSON format.")
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
            createBaseVNode("li", null, "0.25 points for used in requests"),
            createBaseVNode("li", null, "0.25 points for used in responses"),
            createBaseVNode("li", null, "0.25 points for explanation"),
            createBaseVNode("li", null, "0.25 points for correct example")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[58] || (_cache[58] = createBaseVNode(
      "h2",
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
            createTextVNode("Name 3 different headers that exist in HTTP in addition to "),
            createBaseVNode("code", null, "Content-Type"),
            createTextVNode(".")
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
            createBaseVNode("li", null, "0.66 points for each correct header name")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[10] || (_cache[10] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Accept"),
            createBaseVNode("li", null, "Authorization"),
            createBaseVNode("li", null, "Host")
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
            createBaseVNode("li", null, "0.66 points for each largely correct header name"),
            createBaseVNode("li", null, "-0.25 points for a header name that is almost correct")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[59] || (_cache[59] = createBaseVNode(
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
      question: withCtx(() => _cache[12] || (_cache[12] = [
        createBaseVNode(
          "p",
          null,
          "Write the HTTP status code one should use in a response when the request:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, "The resource identified by the URI doesn't exist"),
            createBaseVNode("li", null, "Couldn't be carried out, because something on the server didn't work as expected (for example the web app couldn't communicate with the database)"),
            createBaseVNode("li", null, "The server successfully carried out the request, but no resource is sent back (the response contains no body)"),
            createBaseVNode("li", null, "The server successfully carried out the request, and a new resource was created")
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
            createBaseVNode("li", null, "0.5 points for each correct status code")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[13] || (_cache[13] = [
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, "404"),
            createBaseVNode("li", null, "500"),
            createBaseVNode("li", null, "204"),
            createBaseVNode("li", null, "201")
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
            createBaseVNode("li", null, "0.5 points for each correct status code")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[60] || (_cache[60] = createBaseVNode(
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
      question: withCtx(() => _cache[15] || (_cache[15] = [
        createBaseVNode(
          "p",
          null,
          "REST is built upon a set of constraints. In this context, give a general description of what a constraint is.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[16] || (_cache[16] = [
        createBaseVNode(
          "p",
          null,
          "A constraint means something that is limiting us in how to build the system. It prevents us from building the system in a bad way. The more of these constraints we use, the more of the bad ways of building the system we will avoid, and it is more likely that we will end up with a good system.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[17] || (_cache[17] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for a correct description")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[61] || (_cache[61] = createBaseVNode(
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
      question: withCtx(() => _cache[18] || (_cache[18] = [
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
          _cache[20] || (_cache[20] = createTextVNode("See ")),
          createBaseVNode("a", _hoisted_1, [
            _cache[19] || (_cache[19] = createTextVNode("CHAPTER 5, Representational State Transfer (REST)")),
            createVNode(_component_ExternalLinkIcon)
          ]),
          _cache[21] || (_cache[21] = createTextVNode(" in Roy Fielding's dissertation ")),
          _cache[22] || (_cache[22] = createBaseVNode(
            "em",
            null,
            "Architectural Styles and the Design of Network-based Software Architectures",
            -1
            /* HOISTED */
          )),
          _cache[23] || (_cache[23] = createTextVNode("."))
        ])
      ]),
      "marking-guidelines": withCtx(() => _cache[24] || (_cache[24] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.25 points for each correct name"),
            createBaseVNode("li", null, "0.25 points for each correct description")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "OR (if the code-on-demand constraint is not mentioned):",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.25 points for each correct name"),
            createBaseVNode("li", null, "0.25 points for each correct description"),
            createBaseVNode("li", null, "0.5 points for overall very good, accurate and correct descriptions")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[62] || (_cache[62] = createBaseVNode(
      "h2",
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
      question: withCtx(() => _cache[25] || (_cache[25] = [
        createBaseVNode(
          "p",
          null,
          "On a backend storing information about species, the following SQLite table is used to store the specifies:",
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
          "As you can see, there are many species, and some of them have the same number of legs.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Your task is to design the REST API clients can use to obtain:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, "all species"),
            createBaseVNode("li", null, "all species with a specific number of legs (provided by the client)")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "You need to design the HTTP requests and the HTTP responses, including all details another programmer needs to know to be able to use your API without having to look at implementation details on the server.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[26] || (_cache[26] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("To retrieve back all species, "),
            createBaseVNode("code", null, "GET /species"),
            createTextVNode(" should be used. This will send back all species in JSON format with the status code "),
            createBaseVNode("code", null, "200"),
            createTextVNode(". If something goes wrong while carrying out the request (for example communication with the database doesn't work), then status code "),
            createBaseVNode("code", null, "500"),
            createTextVNode(" will be sent back with no body.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("To retrieve all species with a specific number of legs (let's say "),
            createBaseVNode("code", null, "4"),
            createTextVNode("), one should send the request "),
            createBaseVNode("code", null, "GET /species?numberOfLegs=4"),
            createTextVNode(". This will work the same way as "),
            createBaseVNode("code", null, "GET /species"),
            createTextVNode(", but only send back the species with the provided number of legs.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[27] || (_cache[27] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("For each operation: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "0.25 points for correct method"),
                createBaseVNode("li", null, "0.25 points for a correct URI"),
                createBaseVNode("li", null, "0.25 points for data format/required headers"),
                createBaseVNode("li", null, "0.1 points for first status code"),
                createBaseVNode("li", null, "0.15 for second status code")
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for small mistakes: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for "),
                  createBaseVNode("code", null, "/animals"),
                  createTextVNode(" (much better to be consistent and call it "),
                  createBaseVNode("code", null, "species"),
                  createTextVNode(")")
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
    _cache[63] || (_cache[63] = createBaseVNode(
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
      question: withCtx(() => _cache[28] || (_cache[28] = [
        createBaseVNode(
          "p",
          null,
          "On a backend storing information about blogposts, the following SQLite table is used to store the blogposts:",
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
                createBaseVNode("th", null, "content")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "HTML"),
                createBaseVNode("td", null, "HTML is fun.")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "2"),
                createBaseVNode("td", null, "CSS"),
                createBaseVNode("td", null, "CSS is very fun!")
              ])
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "The backend is implemented in Express, and the following code is used to send back all blogposts:",
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
                createBaseVNode("span", { class: "token string" }, "'/blogposts'"),
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
                createTextVNode(" query "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"SELECT * FROM blogposts"'),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" values "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    \n    db"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "all"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("query"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" values"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("error"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" blogposts")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token comment" }, "// Let us assume no error occurs."),
                createTextVNode("\n        \n        response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "json"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("blogposts"),
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
            createTextVNode("Write the body the HTTP response would contain for the request "),
            createBaseVNode("code", null, "GET /blogposts"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[29] || (_cache[29] = [
        createBaseVNode(
          "div",
          {
            class: "language-json line-numbers-mode",
            "data-ext": "json"
          },
          [
            createBaseVNode("pre", { class: "language-json" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token property" }, '"id"'),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token property" }, '"title"'),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"HTML"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token property" }, '"content"'),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"HTML is fun"'),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token property" }, '"id"'),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token property" }, '"title"'),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"CSS"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token property" }, '"content"'),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"CSS is very fun!"'),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
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
      "marking-guidelines": withCtx(() => _cache[30] || (_cache[30] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for an answer that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Small point reductions for smaller errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "-2 points for not returning an array with two objects"),
                createBaseVNode("li", null, "-0.25 points for keys not being surrounded by quotes at all")
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
    _cache[64] || (_cache[64] = createBaseVNode(
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
      question: withCtx(() => _cache[31] || (_cache[31] = [
        createBaseVNode(
          "p",
          null,
          "Explain how a middleware is implemented in Express. Don't explain how a specific middleware is implemented, just give a general description.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[32] || (_cache[32] = [
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
      "marking-guidelines": withCtx(() => _cache[33] || (_cache[33] = [
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
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[65] || (_cache[65] = createBaseVNode(
      "h2",
      {
        id: "question-11-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-11-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 11 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[34] || (_cache[34] = [
        createBaseVNode(
          "p",
          null,
          "Explain how the purpose of an ID Token differs from the purpose of an Access Token.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[35] || (_cache[35] = [
        createBaseVNode(
          "p",
          null,
          "ID Tokens are used to contain information about a specific user, such as the user's account id, username, email, etc. ID Tokens should be opened up by clients to read out this information, and then the client can use this information however it wants.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Access Tokens on the other hand should contain information proving that the user is authorized to perform some operations. It should not be opened up by clients, but instead sent back to the server in future requests as proof of being authorized to carry out those type of requests.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[36] || (_cache[36] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.5 points for what ID Token contains"),
            createBaseVNode("li", null, "0.5 points for ID Token used by client"),
            createBaseVNode("li", null, "0.5 points for what Access Token contains/used for"),
            createBaseVNode("li", null, "0.5 points for Access Token sent to server from client as proof of authorization")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[66] || (_cache[66] = createBaseVNode(
      "h2",
      {
        id: "question-12-2p",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#question-12-2p",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Question 12 (2p)")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => _cache[37] || (_cache[37] = [
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
            createBaseVNode("p", null, "Alice is going to buy wine at Systembologat (a store in Sweden selling wines). To be allowed to buy wine at Systembologet, you must be at least 20 years old. She enters the store, pickup the wine she wants to buy, and then she waits in the checkout line. When it's her turn to pay, she shows her driver license to the cashier, and then she pays for the wine and exits the store with the wine and a receipt."),
            createBaseVNode("p", null, "After she has left the store, she remembers that drinking alcohol can be bad, so she enters the store, waits in line again, and when it's her turn, she shows the receipt to the cashier and gives back the receipt and the wine, and she receives back the money she paid for the wine before.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "In this story, authentication and authorization take place. Explain when and where these take place.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[38] || (_cache[38] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "When Alice pays for the wine: authentication (she proves she's the one on the driver license) and authorization (she proves she's over 20 (written on the driver license))"),
            createBaseVNode("li", null, "When Alice gives back the wine: authorization (she proves she's authorized to make the exchange by showing the receipt)")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[39] || (_cache[39] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.66 points for each correct identified authentication/authorization"),
            createBaseVNode("li", null, "-0.33 points for each identified authentication/authorization that doesn't exist")
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
      question: withCtx(() => _cache[40] || (_cache[40] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Below is the table "),
            createBaseVNode("code", null, "humans"),
            createTextVNode(" found in a database (not all rows are shown).")
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
        )
      ])),
      "sample-answer": withCtx(() => _cache[41] || (_cache[41] = [
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
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[42] || (_cache[42] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Point reductions for smaller errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.75 points for having all but "),
                  createBaseVNode("code", null, "UPDATE humans SET"),
                  createTextVNode(" wrong")
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
    _cache[68] || (_cache[68] = createBaseVNode(
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
      question: withCtx(() => _cache[43] || (_cache[43] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Below is the table "),
            createBaseVNode("code", null, "humans"),
            createTextVNode(" found in a database (not all rows are shown).")
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
            createTextVNode("Write an SQL query that deletes all humans that are younger than "),
            createBaseVNode("code", null, "18"),
            createTextVNode(" (those who are "),
            createBaseVNode("code", null, "18"),
            createTextVNode(" should not be deleted).")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[44] || (_cache[44] = [
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
      "marking-guidelines": withCtx(() => _cache[45] || (_cache[45] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Small point reductions for smaller errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for "),
                  createBaseVNode("code", null, "DELETE humans ...")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for "),
                  createBaseVNode("code", null, "age = age < 18")
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
    _cache[69] || (_cache[69] = createBaseVNode(
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
      question: withCtx(() => _cache[46] || (_cache[46] = [
        createBaseVNode(
          "p",
          null,
          "Can one and the same table contain two foreign keys? If no, explain why. If yes, show an example of a database structure (the tables in the database) where one table has two foreign keys.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[47] || (_cache[47] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Yes, one and the same table can contain multiple foreign keys. For example, on a platform where users can create accounts and send private/direct messages to each other, we would have an "),
            createBaseVNode("code", null, "accounts"),
            createTextVNode(" table to keep track of which accounts that exists on the platform, for example:")
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
                createBaseVNode("th", null, "username"),
                createBaseVNode("th", null, "password")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "Alice"),
                createBaseVNode("td", null, "abc123")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "2"),
                createBaseVNode("td", null, "Bob"),
                createBaseVNode("td", null, "bobby")
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
            createTextVNode("An we would have a "),
            createBaseVNode("code", null, "messages"),
            createTextVNode(" table to keep track of all the messages that have been written on the platform, for example:")
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
                createBaseVNode("th", null, "subject"),
                createBaseVNode("th", null, "message"),
                createBaseVNode("th", null, "fromAccountId"),
                createBaseVNode("th", null, "toAccountId")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "How are you?"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "2")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "2"),
                createBaseVNode("td", null, "Happe new year!"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "4"),
                createBaseVNode("td", null, "5")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "..."),
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
            createTextVNode("In the "),
            createBaseVNode("code", null, "messages"),
            createTextVNode(" table above, both "),
            createBaseVNode("code", null, "fromAccountId"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "toAccountId"),
            createTextVNode(" would be foreign keys to the "),
            createBaseVNode("code", null, "accounts"),
            createTextVNode(" table.")
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
            createBaseVNode("li", null, "2 points for correct answer and a good example")
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
      question: withCtx(() => _cache[49] || (_cache[49] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Describe an example where you would use "),
            createBaseVNode("code", null, "v-model"),
            createTextVNode(" in Vue. There is no need to write any code.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[50] || (_cache[50] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("If you implement a Vue app where the user should enter her username, then you can use "),
            createBaseVNode("code", null, "v-model"),
            createTextVNode(" on an "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" element to automatically store what the user has typed in the "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" element in a property in the model (the JS object returned from the "),
            createBaseVNode("code", null, "data()"),
            createTextVNode(" function).")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[51] || (_cache[51] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for a description of a good use-case"),
            createBaseVNode("li", null, [
              createTextVNode("-0.5 points for writing "),
              createBaseVNode("code", null, "<v-model>"),
              createTextVNode(" (it's not an HTML tag/component)")
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[71] || (_cache[71] = createBaseVNode(
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
      question: withCtx(() => _cache[52] || (_cache[52] = [
        createBaseVNode(
          "p",
          null,
          "Describe a Vue component (come up with one yourself) where it would be good to use one or more props. There is no need to write any code.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[53] || (_cache[53] = [
        createBaseVNode(
          "p",
          null,
          "If you implement a Vue component that should display a time in a fancy way, then it can be good to pass the time it should display as a prop, so the one using the component can choose which time that should be displayed, instead of hardcoding that in the component.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[54] || (_cache[54] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for a description of a good use-case"),
            createBaseVNode("li", null, "1 point if providing a general description without much details")
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
const exam20230108_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-01-08.html.vue"]]);
export {
  exam20230108_html as default
};
