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
    _cache[58] || (_cache[58] = createStaticVNode('<h1 id="exam-2022-10-19" tabindex="-1"><a class="header-anchor" href="#exam-2022-10-19" aria-hidden="true">#</a> Exam 2022-10-19</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2022-10-19.</p><hr><p>Start by reading through all questions</p><p><strong>PETER HAVE GOT A COLD</strong> and won&#39;t visit the exam. If you need clarification of any question, ask the exam personnel (tentavakt in Swedish) to call Peter, and we can discuss it over the phone.</p><p>Max score is 30 points:</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use any aids except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable will not receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="question-1-2p" tabindex="-1"><a class="header-anchor" href="#question-1-2p" aria-hidden="true">#</a> Question 1 (2p)</h2>', 13)),
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
            createBaseVNode("li", null, "Creating a new resource"),
            createBaseVNode("li", null, "Updating a new resource")
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
              createBaseVNode("code", null, "DELETE")
            ]),
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
            createBaseVNode("li", null, "0.5 points for each correct name (spelling must be correct)")
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
            createBaseVNode("code", null, "/create-movie"),
            createTextVNode(" is no good URI to use in a REST API.")
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
            createBaseVNode("code", null, "/create-movie"),
            createTextVNode(" do not only identify that the request is about a movie resource, but it also suggests that the request is about creating a movie resource. That part ("),
            createBaseVNode("code", null, "create-"),
            createTextVNode(") should not be in the URI, but the method (e.g. POST) should indicate that the request is about creating a resource.")
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
            createBaseVNode("li", null, '1 point for URI should only identify resources, not "action"')
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
            createTextVNode("Explain when the "),
            createBaseVNode("code", null, "Accept"),
            createTextVNode(" header is used in HTTP. Also, give one example of a value it can have, and explain how that value should be interpreted.")
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
            createBaseVNode("code", null, "Accept"),
            createTextVNode(" header is used in HTTP requests. It can, for example, have the value "),
            createBaseVNode("code", null, "application/json"),
            createTextVNode(", which means that the client would like to get back the body of the response in JSON format.")
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
            createBaseVNode("li", null, "0.33 points for used in request"),
            createBaseVNode("li", null, [
              createTextVNode("0.33 points for sample value "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "(0.23 points if provided value is too far from correct value)")
              ])
            ]),
            createBaseVNode("li", null, "0.33 points for explanation of sample value")
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
          "Name the HTTP header that is used to indicate in which data format the body of the request is written in.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[10] || (_cache[10] = [
        createBaseVNode(
          "p",
          null,
          "Content-Type",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[11] || (_cache[11] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("1 point for correct answer "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "(0.75 points for spelling errors)")
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
    _cache[62] || (_cache[62] = createBaseVNode(
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
            createBaseVNode("li", null, "Couldn't be carried out, because something on the server didn't work as expected (for example the web app couldn't communicate with the database)"),
            createBaseVNode("li", null, "The server successfully carried out the request, and a new resource was created"),
            createBaseVNode("li", null, "The server successfully carried out the request, but no resource is sent back (the response contains no body)"),
            createBaseVNode("li", null, "The resource identified by the URI doesn't exist")
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
            createBaseVNode("li", null, "500"),
            createBaseVNode("li", null, "201"),
            createBaseVNode("li", null, "204"),
            createBaseVNode("li", null, "404")
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
    _cache[63] || (_cache[63] = createBaseVNode(
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
    _cache[64] || (_cache[64] = createBaseVNode(
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
    _cache[65] || (_cache[65] = createBaseVNode(
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
          "On a backend storing information about humans, the following SQLite table is used to store the humans:",
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
                createBaseVNode("td", null, "15")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "3"),
                createBaseVNode("td", null, "Alice"),
                createBaseVNode("td", null, "15")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "4"),
                createBaseVNode("td", null, "Claire"),
                createBaseVNode("td", null, "20")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "5"),
                createBaseVNode("td", null, "Claire"),
                createBaseVNode("td", null, "10")
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
          "As you can see, there are many humans, and some of them have the same name, or the same age. To find one that you are looking for without knowing all details about, it would be good to support filtering, so clients can obtain only the humans that have a specific name, or a specific age, or both.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Your task is to design the REST API for this request, so clients in the HTTP request can specify the name, or age, or both, and would only get back the humans matching those values.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "You only need to design the HTTP request, not the response.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[26] || (_cache[26] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Since the request is about retrieving resources, the "),
            createBaseVNode("code", null, "GET"),
            createTextVNode(" method should be used.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Since the request is about human resources, the URI "),
            createBaseVNode("code", null, "/humans"),
            createTextVNode(" is a good choice.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "To filter, the query string parameters can be used:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "/humans"),
              createTextVNode(" would send back all humans")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "/humans?age=AGE"),
              createTextVNode(" would send back all humans with the age "),
              createBaseVNode("code", null, "AGE"),
              createTextVNode(" (an actual number, like "),
              createBaseVNode("code", null, "10"),
              createTextVNode(")")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "/humans?name=NAME"),
              createTextVNode(" would send back all humans with the name "),
              createBaseVNode("code", null, "NAME"),
              createTextVNode(" (an actual name, like "),
              createBaseVNode("code", null, "Alice"),
              createTextVNode(")")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "/humans?age=AGE&name=NAME"),
              createTextVNode(" would send back all humans with the age "),
              createBaseVNode("code", null, "AGE"),
              createTextVNode(" (an actual number, like "),
              createBaseVNode("code", null, "10"),
              createTextVNode(") and the name "),
              createBaseVNode("code", null, "NAME"),
              createTextVNode(" (an actual name, like "),
              createBaseVNode("code", null, "Alice"),
              createTextVNode(")")
            ])
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
            createBaseVNode("li", null, "0.25 points for GET"),
            createBaseVNode("li", null, [
              createTextVNode("0.25 points for "),
              createBaseVNode("code", null, "/humans"),
              createTextVNode(" (or similar)")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("1.5 points for suggesting query string parameters "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("0.5 points for instead suggesting "),
                  createBaseVNode("code", null, "/humans/age/THE_AGE"),
                  createTextVNode(" and "),
                  createBaseVNode("code", null, "/humans/name/THE_NAME")
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
    _cache[66] || (_cache[66] = createBaseVNode(
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
          "The backend is implemented in Express, and the following code is used to send back a blogpost with a specific id:",
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
                createBaseVNode("span", { class: "token string" }, '"SELECT * FROM blogposts WHERE id = ?"'),
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
                createBaseVNode("span", { class: "token function" }, "get"),
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
                  createTextVNode(" blogpost")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token comment" }, "// Let us assume no error occurs."),
                createTextVNode("\n        \n        response"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "json"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("blogpost"),
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
            createTextVNode("Write the body the HTTP response would contain for the request GET "),
            createBaseVNode("code", null, "/blogposts/2"),
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
      "marking-guidelines": withCtx(() => _cache[30] || (_cache[30] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for an answer that is largely correct"),
            createBaseVNode("li", null, [
              createTextVNode("Small point reductions for smaller errors: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for keys/string values being surrounded by "),
                  createBaseVNode("code", null, "'"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, '"'),
                  createTextVNode(" (has to be "),
                  createBaseVNode("code", null, '"'),
                  createTextVNode(" in JSON)")
                ]),
                createBaseVNode("li", null, "-0.25 points for keys not being surrounded by quotes at all"),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 points for "),
                  createBaseVNode("code", null, '"2"'),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "2")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.5 points for excluding the "),
                  createBaseVNode("code", null, "id"),
                  createTextVNode(" property")
                ]),
                createBaseVNode("li", null, "-0.5 points for string values not being surrounded by quotes at all"),
                createBaseVNode("li", null, "-0.5 points for including a JSON array")
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
    _cache[68] || (_cache[68] = createBaseVNode(
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
      question: withCtx(() => _cache[34] || (_cache[34] = [
        createBaseVNode(
          "p",
          null,
          "Does it make sense to put the user's favorite color in an ID Token? Justify your answer.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[35] || (_cache[35] = [
        createBaseVNode(
          "p",
          null,
          "The ID Token should contain information about the user, and if the frontend needs to know which the user's favorite color is, then putting that information in the ID Token makes sense.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[36] || (_cache[36] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for an answer with a correct and valid justification")
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
          "Explain why it's very important that the secret the server use to generate a JWT Access Token is known only by the server.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[38] || (_cache[38] = [
        createBaseVNode(
          "p",
          null,
          "If someone else knows the secret, then that someone else is able to create his own JWT Access Token and put whatever information in it he wants, which the server then would trust.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          `For example, when a user logs in, the server might put the user's account id in the Access Token, which means "Anyone with this Access Token is authorized to act on the behalf of the user with this account id". If Alice knows the secret the server uses to generate the Access Token, she can create her own Access Token and put Bob's account id in it, which gives her the permission to act on behalf of Bob's account, which she shouldn't have permission to do.`,
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[39] || (_cache[39] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for a valid answer")
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
      question: withCtx(() => _cache[40] || (_cache[40] = [
        createBaseVNode(
          "p",
          null,
          "Explain what the difference between authorization and authentication is.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[41] || (_cache[41] = [
        createBaseVNode(
          "p",
          null,
          "Authentication is about proving who you are, for example by providing a username and a password, to prove that you are the owner of a specific account.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Authorization is about checking if a user is allowed to do something. For example, if a user should only be allowed to remove her own account on a website (and not anyone else's), then when the website receives the delete request it must check that the user is logged in to the account that should be removed.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[42] || (_cache[42] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for correct description of authentication"),
            createBaseVNode("li", null, "1 point for correct description of authorization")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "OR",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point if each term describes the other one")
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
      "marking-guidelines": withCtx(() => _cache[45] || (_cache[45] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "0.25 points for an answer that has most of the correct SQL parts, but in wrong order")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "OR",
          -1
          /* HOISTED */
        ),
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
                  createBaseVNode("code", null, "humans SET ...")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for "),
                  createBaseVNode("code", null, "UPDATE * FROM humans ...")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for using "),
                  createBaseVNode("code", null, "to"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "=")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.25 for having "),
                  createBaseVNode("code", null, "SET"),
                  createTextVNode(" and "),
                  createBaseVNode("code", null, "WHERE"),
                  createTextVNode(" in wrong order")
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
      question: withCtx(() => _cache[46] || (_cache[46] = [
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
            createTextVNode("Write an SQL query that deletes all humans with the name "),
            createBaseVNode("code", null, "Bob"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[47] || (_cache[47] = [
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
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[48] || (_cache[48] = [
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
                  createTextVNode("-0.1 points for "),
                  createBaseVNode("code", null, "DELETE * FROM humans ...")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for "),
                  createBaseVNode("code", null, "DELETE id, name, age FROM humans ...")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.1 points for "),
                  createBaseVNode("code", null, ":"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "=")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.2 points for not having quotes around "),
                  createBaseVNode("code", null, "Bob")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("-0.2 points for writing "),
                  createBaseVNode("code", null, "bob"),
                  createTextVNode(" instead of "),
                  createBaseVNode("code", null, "Bob")
                ]),
                createBaseVNode("li", null, "-0.5 points for not including name of table in query")
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
    _cache[73] || (_cache[73] = createBaseVNode(
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
          "Explain what a foreign key is. Also, give an example of a database (tables and fields) that would contain a foreign key.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[50] || (_cache[50] = [
        createBaseVNode(
          "p",
          null,
          "A foreign key is a field in one database table that (in most cases) refers to the primary key field in another table. This way we can have relations between data, and use it to, for example, keep track of which user that created which blogpost.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The "),
            createBaseVNode("code", null, "accounts"),
            createTextVNode(" table:")
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
            createTextVNode("The "),
            createBaseVNode("code", null, "blogposts"),
            createTextVNode(" table:")
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
                createBaseVNode("th", null, "accountId")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "HTML is fun"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "1")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "2"),
                createBaseVNode("td", null, "CSS is also fun"),
                createBaseVNode("td", null, "..."),
                createBaseVNode("td", null, "1")
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
            createTextVNode("In the "),
            createBaseVNode("code", null, "blogposts"),
            createTextVNode(" table above, the "),
            createBaseVNode("code", null, "accountId"),
            createTextVNode(" field is a foreign key to the primary key field "),
            createBaseVNode("code", null, "id"),
            createTextVNode(" in the "),
            createBaseVNode("code", null, "accounts"),
            createTextVNode(" table, and we can see that Alice har written the two blogposts "),
            createBaseVNode("em", null, "HTML is fun"),
            createTextVNode(" and "),
            createBaseVNode("em", null, "CSS is also fun"),
            createTextVNode(".")
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
            createBaseVNode("li", null, "1 point for correct explanation"),
            createBaseVNode("li", null, "1 point for correct example")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[74] || (_cache[74] = createBaseVNode(
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
          [
            createTextVNode("Explain what "),
            createBaseVNode("code", null, "v-model"),
            createTextVNode(" is used for in Vue.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[53] || (_cache[53] = [
        createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("code", null, "v-model"),
            createTextVNode(" in Vue is used on HTML element the user can enter input through, such as "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(". It will map what the user enters in the element to a value in the model of the Vue component. It also works the other way around, so if the program changes the value stored in the model, "),
            createBaseVNode("code", null, "v-model"),
            createTextVNode(" will update the HTML element to show the new value.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[54] || (_cache[54] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "1 point for storing what the user types in input elements in the model"),
            createBaseVNode("li", null, "1 point for setting what is stored in the model to the input element")
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[75] || (_cache[75] = createBaseVNode(
      "h2",
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
      question: withCtx(() => _cache[55] || (_cache[55] = [
        createBaseVNode(
          "p",
          null,
          "Explain what props are used for in Vue.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[56] || (_cache[56] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("When one Vue component (the parent) makes use of another Vue component (the child), the parent can pass values to the child through "),
            createBaseVNode("code", null, "props"),
            createTextVNode(" (almost like HTML attributes) to give the child access to information it needs to function as it should.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[57] || (_cache[57] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for passing data to child component")
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
const exam20221019_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2022-10-19.html.vue"]]);
export {
  exam20221019_html as default
};
