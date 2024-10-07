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
    _cache[55] || (_cache[55] = createStaticVNode('<h1 id="exam-2023-08-15" tabindex="-1"><a class="header-anchor" href="#exam-2023-08-15" aria-hidden="true">#</a> Exam 2023-08-15</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-08-15.</p><hr><p>If you need clarification of any question, ask the exam personnel (tentavakt in Swedish) to call Peter, and we can discuss it over the phone.</p><p>Max score is 30 points:</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use any aids except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable will not receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="question-1-2p" tabindex="-1"><a class="header-anchor" href="#question-1-2p" aria-hidden="true">#</a> Question 1 (2p)</h2>', 12)),
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
            createBaseVNode("li", null, "Updating a resource"),
            createBaseVNode("li", null, "Creating a new resource"),
            createBaseVNode("li", null, "Deleting a resource")
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
              createBaseVNode("code", null, "GET")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "PUT")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "POST")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "DELETE")
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
            createBaseVNode("code", null, "/movies/search"),
            createTextVNode(" a good or bad URI to use when a client needs to be able to search for different movies, and only get back the movies that matches the search criteria? Justify your answer.")
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
            createTextVNode("The URI should only identify the resources the request is about. The "),
            createBaseVNode("code", null, "search"),
            createTextVNode(" part does not contribute to identifying any resources since it's a verb, so that should not be part of the URI, hence it's bad.")
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
              createTextVNode("1 point for explaining that "),
              createBaseVNode("code", null, "search"),
              createTextVNode(" is bad")
            ])
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
            createTextVNode("Name 2 different headers that exist in HTTP in addition to "),
            createBaseVNode("code", null, "Accept"),
            createTextVNode(", and for each of them also write a value they can have.")
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
            createBaseVNode("li", null, "0.5 points for each correct header name"),
            createBaseVNode("li", null, "0.5 points for each valid header value")
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
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "Content-Type"),
              createTextVNode(": "),
              createBaseVNode("code", null, "application/json")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("code", null, "Location"),
              createTextVNode(": "),
              createBaseVNode("code", null, "/movies/123")
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
            createBaseVNode("li", null, "0.5 points for each correct header name"),
            createBaseVNode("li", null, "0.5 points for each valid header value")
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
          "Write the HTTP status code one should use in a response when:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, "The server successfully carried out the request, and a new resource was created"),
            createBaseVNode("li", null, "The URI in the request identifies a resource that doesn't exist"),
            createBaseVNode("li", null, "The server successfully carried out the request, and the requested resource is being sent back in the body of the response"),
            createBaseVNode("li", null, "The server can't carry out the request because something on the server didn't work as expected (for example the web app couldn't read from a file on the file system, which it must be able to do to carry out the request)")
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
            createBaseVNode("li", null, "201"),
            createBaseVNode("li", null, "404"),
            createBaseVNode("li", null, "200"),
            createBaseVNode("li", null, "500")
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
          "On a backend storing information about species, the following SQLite table is used to store the species:",
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
          [
            createTextVNode("Your task is to design the REST API clients can use to update a species with a specific "),
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
          "You need to design the HTTP request and the HTTP responses, including all details another programmer needs to know to be able to use your API without having to look at implementation details on the server.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[26] || (_cache[26] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Words written "),
            createBaseVNode("code", null, "IN_THIS_FORMAT"),
            createTextVNode(" are placeholders for actual values:")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("The request: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("Method: "),
                  createBaseVNode("code", null, "PUT")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("URI: "),
                  createBaseVNode("code", null, "/species/THE_ID")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("Headers: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "Host"),
                      createTextVNode(": "),
                      createBaseVNode("code", null, "THE_HOST")
                    ]),
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "Accept"),
                      createTextVNode(": "),
                      createBaseVNode("code", null, "application/json")
                    ]),
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "Content-Type"),
                      createTextVNode(": "),
                      createBaseVNode("code", null, "application/json")
                    ]),
                    createBaseVNode("li", null, [
                      createBaseVNode("code", null, "Content-Length"),
                      createTextVNode(": "),
                      createBaseVNode("code", null, "THE_CONTENT_LENGTH")
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("Body: Content: "),
                  createBaseVNode("code", null, '{"id": "THE_ID", "name": "THE_NAME", "numberOfLegs": THE_NUMBER_OF_LEGS}')
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("The response if something doesn't work on the server, so the request can't be carried out: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("Status code: "),
                  createBaseVNode("code", null, "500")
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("The response if no resource with the given id exists: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("Status code: "),
                  createBaseVNode("code", null, "404")
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("The response if there are validation errors: "),
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
                      createBaseVNode("code", null, "THE_CONTENT_LENGTH")
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("Body: "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createTextVNode("Content: "),
                      createBaseVNode("code", null, '["ERROR_CODE_1", "ERROR_CODE_2", ...]')
                    ]),
                    createBaseVNode("li", null, [
                      createTextVNode("Possible error codes: "),
                      createBaseVNode("ul", null, [
                        createBaseVNode("li", null, [
                          createBaseVNode("code", null, "nameTooShort")
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("code", null, "numberOfLegsTooFew")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("The response if the resource is successfully updated: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode("Status code: "),
                  createBaseVNode("code", null, "204")
                ])
              ])
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
            createBaseVNode("li", null, [
              createTextVNode("For each operation: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "0.25 points for request method"),
                createBaseVNode("li", null, "0.25 points for request URI"),
                createBaseVNode("li", null, "0.25 points for at least 2 relevant request headers"),
                createBaseVNode("li", null, "0.25 points for request body"),
                createBaseVNode("li", null, [
                  createTextVNode("0.50 points for two or three of "),
                  createBaseVNode("code", null, "500"),
                  createTextVNode(", "),
                  createBaseVNode("code", null, "404"),
                  createTextVNode(" and "),
                  createBaseVNode("code", null, "204"),
                  createTextVNode("/"),
                  createBaseVNode("code", null, "200")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("0.25 points for one of "),
                  createBaseVNode("code", null, "500"),
                  createTextVNode(", "),
                  createBaseVNode("code", null, "404"),
                  createTextVNode(" and "),
                  createBaseVNode("code", null, "204"),
                  createTextVNode("/"),
                  createBaseVNode("code", null, "200")
                ]),
                createBaseVNode("li", null, [
                  createTextVNode("0.25 points for "),
                  createBaseVNode("code", null, "400"),
                  createTextVNode(" response "),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createTextVNode("0.25 points for much additional info about "),
                      createBaseVNode("code", null, "400"),
                      createTextVNode(" response")
                    ])
                  ])
                ])
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
            createTextVNode("Write the body the HTTP response would contain for the request "),
            createBaseVNode("code", null, "GET /blogposts/2"),
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
                createBaseVNode("li", null, "-1 point for returning an array with an object"),
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
          [
            createTextVNode("Express comes with some middlewares built into it, such as "),
            createBaseVNode("code", null, "express.json()"),
            createTextVNode(" (previously "),
            createBaseVNode("code", null, "bodyParser.json()"),
            createTextVNode("). Explain how one of these built in middlewares work. Choose whichever one you want.")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[32] || (_cache[32] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The "),
            createBaseVNode("code", null, "express.json()"),
            createTextVNode(" middleware will check if the request contains a body. If so, it will check if the "),
            createBaseVNode("code", null, "Content-Type"),
            createTextVNode(" header has the value "),
            createBaseVNode("code", null, "application/json"),
            createTextVNode(". If so, it will parse the body in the JSON format, and assign the parsed value to "),
            createBaseVNode("code", null, "request.body"),
            createTextVNode(", so the middlewares next in the chain can access the parsed value that way.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "In all cases, it will invoke end with invoking the next middleware in the chain.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[33] || (_cache[33] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for "),
              createBaseVNode("code", null, "Content-Type")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for "),
              createBaseVNode("code", null, "application/json")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("0.5 points for "),
              createBaseVNode("code", null, "request.body")
            ]),
            createBaseVNode("li", null, "0.5 points for invoking next middleware")
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
          "Mention a value that makes sense to put in an ID Token, but that you most likely won't find in an Access Token.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[35] || (_cache[35] = [
        createBaseVNode(
          "p",
          null,
          "The ID Token should contain information about the user, while the Access Token should contain information about what the user is allowed to do. Therefor, the user's first name would make sense to put in the ID Token, but not in the Access Token, since authorization is usually not granted based on a user's first name.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[36] || (_cache[36] = [
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "2 points for a valid example")
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
            createBaseVNode("p", null, "Alice has got a ticket for a football game. When she arrives to the football arena, she shows her ticket to the personnel there, who let her enter the arena.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Questions:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, "Does an identity exist in the story? If so, which identity is that?"),
            createBaseVNode("li", null, "Does authentication take place in the story? If so, when and where?"),
            createBaseVNode("li", null, "Does authorization take place in the story? If so, when and where?")
          ],
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[38] || (_cache[38] = [
        createBaseVNode(
          "ol",
          null,
          [
            createBaseVNode("li", null, "Yes. Alice is the identity in the story."),
            createBaseVNode("li", null, "No."),
            createBaseVNode("li", null, "Yes. Authorization takes place when Alice shows her ticket to the personnel, which authorizes her to enter the arena.")
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
            createBaseVNode("li", null, "0.66 points for each correct identified identiy/authentication/authorization"),
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
            createTextVNode("Write an SQL query that changes the age of the human with "),
            createBaseVNode("code", null, "id"),
            createTextVNode(),
            createBaseVNode("code", null, "3"),
            createTextVNode(" to "),
            createBaseVNode("code", null, "30"),
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
                createTextVNode(" age "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "30"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "WHERE"),
                createTextVNode(" id "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3"),
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
            createTextVNode("Write an SQL query that deletes the human with id "),
            createBaseVNode("code", null, "2"),
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
                createBaseVNode("span", { class: "token keyword" }, "DELETE"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "FROM"),
                createTextVNode(" humans "),
                createBaseVNode("span", { class: "token keyword" }, "WHERE"),
                createTextVNode(" id "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
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
          "Explain what a foreign key is. Also, give an example of a database (tables and fields) that would contain a foreign key.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[47] || (_cache[47] = [
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
          "The accounts table:",
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
          "The blogposts table:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "| id | title | content | accountId | | 1 | HTML is fun | ... | 1 | | 2 | CSS is also fun ... | 1 | | ... | ... | ... | ... |",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "In the blogposts table above, the accountId field is a foreign key to the primary key field id in the accounts table, and we can see that Alice har written the two blogposts HTML is fun and CSS is also fun.",
          -1
          /* HOISTED */
        )
      ])),
      "marking-guidelines": withCtx(() => _cache[48] || (_cache[48] = [
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
            createTextVNode("In plain JavaScript, to read out what the user has written in an "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" element, one gets a reference to the "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" element and read out the value in the element's "),
            createBaseVNode("code", null, "value"),
            createTextVNode(" property.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("If you want to retrieve what the user has written in an "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" element in Vue, one does it a bit differently. Explain how. There is no need to write any code (explaining using words is enough), but feel free to show with code if you prefer.")
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
            createTextVNode("To read out what the user has written in an "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" element in Vue, you first create a reactive variable in the component by returning it as part of the object in the "),
            createBaseVNode("code", null, "data()"),
            createTextVNode(" function, and then you add the attribute "),
            createBaseVNode("code", null, 'v-model="theReactiveVariableName"'),
            createTextVNode(" to the "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" element. Then "),
            createBaseVNode("code", null, "this.theReactiveVariableName"),
            createTextVNode(" will store the text written in the "),
            createBaseVNode("code", null, "<input>"),
            createTextVNode(" element.")
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
            createBaseVNode("li", null, [
              createTextVNode("0.66 points for "),
              createBaseVNode("code", null, "data()")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("0.66 points for "),
              createBaseVNode("code", null, 'v-model="theReactiveVariableName"')
            ]),
            createBaseVNode("li", null, [
              createTextVNode("0.66 points for "),
              createBaseVNode("code", null, "this.theReactiveVariableName")
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
          "Explain how you would implement a Vue component others can use that should display two numbers (which numbers should be determined by the ones who use the component) and the sum of the two numbers. Feel free to write code implementing the component if you want, but explaining how the component should be implemented using words is OK too.",
          -1
          /* HOISTED */
        )
      ])),
      "sample-answer": withCtx(() => _cache[53] || (_cache[53] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The component should first declare that it can receive two numbers through props, so it first needs to declare two props with their names, for example "),
            createBaseVNode("code", null, "x"),
            createTextVNode(" and "),
            createBaseVNode("code", null, "y"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("The one using the components can then use attribute bindings to pass JavaScript numbers as props, e.g. "),
            createBaseVNode("code", null, '<TheComponentName :x="3" :y="5">'),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "The component can then display:",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("The value for the "),
              createBaseVNode("code", null, "x"),
              createTextVNode(" prop in the HTML code using "),
              createBaseVNode("code", null, "{{x}}")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("The value for the "),
              createBaseVNode("code", null, "y"),
              createTextVNode(" prop in the HTML code using "),
              createBaseVNode("code", null, "{{y}}")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("The sum of the "),
              createBaseVNode("code", null, "x"),
              createTextVNode(" and "),
              createBaseVNode("code", null, "y"),
              createTextVNode(" props in the HTML code using "),
              createBaseVNode("code", null, "{{x + y}}")
            ])
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
            createBaseVNode("li", null, "0.50 points for each prop mentioned"),
            createBaseVNode("li", null, "0.25 points for each prop shown in the HTML"),
            createBaseVNode("li", null, "0.5 points for showing the sum in the HTML")
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
const exam20230815_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-08-15.html.vue"]]);
export {
  exam20230815_html as default
};
