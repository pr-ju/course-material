import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://xkcd.com/1513/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://xkcd.com/1695/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://xkcd.com/1833/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_ReportMistake = resolveComponent("ReportMistake");
  return openBlock(), createElementBlock("div", null, [
    _cache[31] || (_cache[31] = createStaticVNode('<h1 id="common-code-mistakes" tabindex="-1"><a class="header-anchor" href="#common-code-mistakes" aria-hidden="true">#</a> Common Code Mistakes</h1><p>In this lecture we take a look at common mistakes students do in the code they write. But first some introduction to why even small mistakes are very bad.</p><h2 id="why-are-small-mistakes-such-a-big-deal" tabindex="-1"><a class="header-anchor" href="#why-are-small-mistakes-such-a-big-deal" aria-hidden="true">#</a> Why are small mistakes such a big deal?</h2><p>Many students think that many of the common mistakes mentioned in this lecture are something they don&#39;t need to worry about. <em>My code compiles, it works as intended, so what&#39;s the problem?</em> Well, the problem is that these students have only thought about delivering a <em>functional</em> solution, not a <em>good</em> solution. These students often think that they are the only ones who ever will read the code they write, or maybe even that no one at all will ever read the code they write, but that is usually not the case:</p><ul><li>When the application has been fully implemented, a <em>quality assurance expert</em> might read all the code so she can guarantee customers you deliver what has been agreed on. Then it&#39;s very important the code is easy to read.</li><li>When the application has been fully implemented, a <em>security expert</em> might read all the code so she can guarantee customers the application doesn&#39;t contain any known security vulnerabilities. Then it&#39;s very important the code is easy to read.</li><li>After the application has been fully implemented, <em>customers might discover bugs</em> that needs to be fixed. A programmer other than you might be assigned the task to fix the bug (you might for example have started to work on other projects and are busy with them), and then it&#39;s very important the code is easy to read for the new programmer.</li><li>After the application has been fully implemented, <em>customers might want additional features</em> added to the application. A programmer other than you might be assigned the task to add it (you might for example have started to work on other projects and are busy with them), and then it&#39;s very important the code is easy to read for the new programmer.</li><li>Etc.</li></ul><p>When your code is executed by a computer, it is very important that the code is fully functional and, if not optimized, at least not terribly slow. But it is even more important that others easily can read your code, because humans are much more expensive to use than computers. For example, if you have written good code that is easy to read, a security expert might need one day to look through all the code in the application to verify that it doesn&#39;t contain any known security vulnerabilities. But if the code instead is hard to read, she might need a week to do that. And if she is having difficulties to read the code, so will the quality assurance guy, who also needs a week instead of a single day to look through the code. And when adding a new feature in the future, which would take 4 hours to do with good code, will take 3 days with the bad code, and most likely new bugs are introduced with this new feature because the programmer who added it didn&#39;t understand how all the existing code worked, so she made assumptions of how parts of the code worked instead of knowing, and some of these assumptions will be wrong and need to be corrected later.</p><p>So, a programmer that is lazy and considers himself to be finish when the code is functional is not a good programmer. <strong>When the code is functional, you are half way there</strong>: you have implemented the feature in such way that computers can execute your code. Half of your work remains: to improve the quality of the code by re-structuring it and making it more readable so other humans easily can understand how your code works.</p><h2 id="but-why-are-small-mistakes-such-a-big-deal" tabindex="-1"><a class="header-anchor" href="#but-why-are-small-mistakes-such-a-big-deal" aria-hidden="true">#</a> But why are <em>small</em> mistakes such a big deal?</h2><p><em>OK, I misspelled the name of a variable once, and at a few places I didn&#39;t stick to my indentation convention. Other humans can still read and understand my code although these small mistakes exist, what&#39;s the big deal?</em></p><p>Programmers are only humans, so one or two of these mistakes in 5 000 lines of code are understandable. But if more than that exists, it&#39;s simply a job poorly done by the programmer. Programming is quite abstract and can be hard to understand, so let&#39;s compare it to other professions:</p><ul><li>Do you think a painter do a good job if he paints 99.9% of the wall in one color, but there&#39;s a small line in the middle of the wall in another color?<br><em>What&#39;s the big deal, it&#39;s only a small line</em>?</li><li>Do you think a car manufacturer do a good job if the steering wheel only works 99.9% of the cases?<br><em>What&#39;s the big deal, you can still steer the car most of the time</em>?</li><li>Do you think an author do a good job if all sentences in her book always start with a lower case character?<br><em>What&#39;s the big deal, most characters are in the correct case</em>?</li></ul><p>Hopefully you agree in these other professions, even small mistakes, such as those listed above, are quite bad, so for students studying to these professions it&#39;s very important to learn that these small mistakes are not acceptable. The same is true for students studying programming, the only difference is that it&#39;s harder for beginners to realize that small programming mistakes are just as bad as the mistakes listed above.</p><p>Of course there are some nice xkcd:s about code quality:</p>', 13)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("https://xkcd.com/1513/")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[1] || (_cache[1] = createTextVNode("https://xkcd.com/1695/")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[2] || (_cache[2] = createTextVNode("https://xkcd.com/1833/")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _cache[32] || (_cache[32] = createBaseVNode(
      "h2",
      {
        id: "common-student-mistakes",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#common-student-mistakes",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Common student mistakes")
      ],
      -1
      /* HOISTED */
    )),
    _cache[33] || (_cache[33] = createBaseVNode(
      "p",
      null,
      "So, what are some of the common mistakes students do in their code?",
      -1
      /* HOISTED */
    )),
    _cache[34] || (_cache[34] = createBaseVNode(
      "h3",
      {
        id: "indent-wrong",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#indent-wrong",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Indent wrong")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ReportMistake, null, {
      "example-1-bad": withCtx(() => _cache[3] || (_cache[3] = [
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
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("x"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" y")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" x "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" y\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" sum\n"),
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
        )
      ])),
      "example-1-good": withCtx(() => _cache[4] || (_cache[4] = [
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
                createBaseVNode("span", { class: "token function" }, "getSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, [
                  createTextVNode("x"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" y")
                ]),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" x "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" y\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" sum\n"),
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
        )
      ])),
      "example-2-bad": withCtx(() => _cache[5] || (_cache[5] = [
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
                createBaseVNode("span", { class: "token function" }, "logSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "of"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        sum "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(" number\n        console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum"),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "example-2-good": withCtx(() => _cache[6] || (_cache[6] = [
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
                createBaseVNode("span", { class: "token function" }, "logSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "of"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        sum "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(" number\n    console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum"),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      mistake: withCtx(() => _cache[7] || (_cache[7] = [
        createBaseVNode(
          "p",
          null,
          "The code has been indented wrong.",
          -1
          /* HOISTED */
        )
      ])),
      problem: withCtx(() => _cache[8] || (_cache[8] = [
        createBaseVNode(
          "p",
          null,
          "Indentation is a tool we have to make the code more readable. Used wrong, it instead makes the code less readable, and it would be better to not indent the code at all. That way, at least the reader would not mistake an incorrect indentation for a correct indentation.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Compare to text in natural languages (e.g. English and Swedish): when you come across a word starting with an uppercase character you can assume that word is a name ("),
            createBaseVNode("em", null, "Alice"),
            createTextVNode(", "),
            createBaseVNode("em", null, "England"),
            createTextVNode(", etc.) (unless it's the first word in a sentence). Using this wrong makes the reader misinterpret the meaning of the text, for example:")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("em", null, "alice is young"),
              createTextVNode(" means that the reader won't interpret "),
              createBaseVNode("em", null, "alice"),
              createTextVNode(" as a name, and the text has another meaning than the writer intended.")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("em", null, "the Dog is old"),
              createTextVNode(" means the reader will interpret "),
              createBaseVNode("em", null, "Dog"),
              createTextVNode(" as a name, and the text has another meaning than the writer intended.")
            ])
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "Even if you only have 2-3 of these mistakes, the reader can't trust that you use lowercase/uppercase characters correct anywhere in your text, and she must read all your text very carefully, and that requires bigger concentration and takes longer time.",
          -1
          /* HOISTED */
        )
      ])),
      solution: withCtx(() => _cache[9] || (_cache[9] = [
        createBaseVNode(
          "p",
          null,
          "Always properly indent the code.",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[35] || (_cache[35] = createBaseVNode(
      "h3",
      {
        id: "multiple-indentation-conventions",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#multiple-indentation-conventions",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Multiple indentation conventions")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ReportMistake, null, {
      "example-1-bad": withCtx(() => _cache[10] || (_cache[10] = [
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
                createBaseVNode("span", { class: "token function" }, "logSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "of"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n          sum "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(" number\n  "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n  console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum"),
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
      "example-1-good": withCtx(() => _cache[11] || (_cache[11] = [
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
                createBaseVNode("span", { class: "token function" }, "logSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "of"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        sum "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(" number\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum"),
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
      "example-2-bad": withCtx(() => _cache[12] || (_cache[12] = [
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
                createBaseVNode("span", { class: "token function" }, "logSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("length"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n             "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n             "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "of"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n                     sum "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(" number\n             "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n             console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n         console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"No sum to log."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
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
      "example-2-good": withCtx(() => _cache[13] || (_cache[13] = [
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
                createBaseVNode("span", { class: "token function" }, "logSum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("length"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "let"),
                createTextVNode(" sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "of"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            sum "),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(" number\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n        console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"No sum to log."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
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
      mistake: withCtx(() => _cache[14] || (_cache[14] = [
        createBaseVNode(
          "p",
          null,
          'The code uses multiple indentation conventions ("indentation of different sizes").',
          -1
          /* HOISTED */
        )
      ])),
      problem: withCtx(() => _cache[15] || (_cache[15] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("It's hard to see how nested the code is when each indentation level is of different size. As always, it's "),
            createBaseVNode("strong", null, "better to be consistent"),
            createTextVNode(".")
          ],
          -1
          /* HOISTED */
        )
      ])),
      solution: withCtx(() => _cache[16] || (_cache[16] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Always use the same indentation convention (e.g. "),
            createBaseVNode("code", null, "2 spaces"),
            createTextVNode(", "),
            createBaseVNode("code", null, "4 spaces"),
            createTextVNode(", "),
            createBaseVNode("code", null, "8 spaces"),
            createTextVNode(" or "),
            createBaseVNode("code", null, "1 tab"),
            createTextVNode(", etc.) for all your code. Files of different types can use different indentation convention if that is suitable.")
          ],
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          { class: "custom-container tip" },
          [
            createBaseVNode("p", { class: "custom-container-title" }, "Show white spaces!"),
            createBaseVNode("p", null, [
              createTextVNode("Most code editors do by default show space and tab characters as transparent boxes. This makes it hard to see if one is mixing spaces and tabs when one indents the code. But any proper code editor has a setting you can change to display spaces as "),
              createBaseVNode("code", null, "·"),
              createTextVNode(" and tabs as "),
              createBaseVNode("code", null, "→"),
              createTextVNode(", or similar. We strongly recommend you to enable this, so you can be sure that you don't mix indentation conventions.")
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[36] || (_cache[36] = createBaseVNode(
      "h3",
      {
        id: "not-using-mnemonic-names",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#not-using-mnemonic-names",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Not using mnemonic names")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ReportMistake, null, {
      "example-1-bad": withCtx(() => _cache[17] || (_cache[17] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("username "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(" uname"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, "// Correct username entered!"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, `"The wrong username '"`),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("username"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, `"' was entered."`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n     "),
                createBaseVNode("span", { class: "token comment" }, "// By only looking at the line above, we can't be sure we used the correct variable."),
                createTextVNode("\n     "),
                createBaseVNode("span", { class: "token comment" }, "// Need to look at the definition of the variables to be certain... 😒"),
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
      "example-1-good": withCtx(() => _cache[18] || (_cache[18] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("enteredUsername "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(" correctUsername"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, "// Correct username entered!"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    console"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, `"The wrong username '"`),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("enteredUsername"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, `"' was entered."`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, "// We can be sure that we used the correct variable on the line above."),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, "// No need for us to look at the definition of the variables 😀"),
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
      "example-2-bad": withCtx(() => _cache[19] || (_cache[19] = [
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
                createTextVNode(" movies "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "4"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, '// "movies" sounds like a collection of multiple movie objects, like:'),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, '// movies = [{title: "Die Another Day", title: "Titanic"}]'),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// Much further down...:"),
                createTextVNode("\n\nconsole"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"I have "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("movies"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" movies."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// The line above seems wrong, should rather use movies.length?"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, '// Need to go to the definition of the "movies" variable to check... 😒'),
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
        )
      ])),
      "example-2-good": withCtx(() => _cache[20] || (_cache[20] = [
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
                createTextVNode(" numberOfMovies "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "4"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// Much further down...:"),
                createTextVNode("\n\nconsole"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"I have "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("numberOfMovies"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" movies."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// The line above is obviously correct 😀"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, '// No need to go to the definition of the "movies" variable to check.'),
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
          "OR",
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
                createTextVNode(" movies "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Die Another Day"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token literal-property property" }, "title"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Titanic"'),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// Much further down...:"),
                createTextVNode("\n\nconsole"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "log"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"I have "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("movies"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("length"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" movies."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token comment" }, "// The line above makes total sense, is probably correct 😀"),
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
      mistake: withCtx(() => _cache[21] || (_cache[21] = [
        createBaseVNode(
          "p",
          null,
          "The names on variables, functions, classes, files, etc. are not descriptive (the names don't describe what they represent).",
          -1
          /* HOISTED */
        )
      ])),
      problem: withCtx(() => _cache[22] || (_cache[22] = [
        createBaseVNode(
          "p",
          null,
          "The code becomes very hard to read, because the reader can't understand what a specific line of code using these names do, but have to go and look at the definition of these names elsewhere to understand what they represent, and then go back to the initial line of code to understand how that one works. Too much work...",
          -1
          /* HOISTED */
        )
      ])),
      solution: withCtx(() => _cache[23] || (_cache[23] = [
        createBaseVNode(
          "p",
          null,
          "Always use good descriptive names on everything. Optimally one should be able to understand what each line of code do/how each line of code works only by reading that line of code.",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[37] || (_cache[37] = createBaseVNode(
      "h3",
      {
        id: "using-hardcoded-values",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#using-hardcoded-values",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Using hardcoded values")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_ReportMistake, null, {
      "example-1-bad": withCtx(() => _cache[24] || (_cache[24] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token comment" }, '// The condition below contains no info about why username is compared to "Alice".'),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("username "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Alice"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, "// ..."),
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
        )
      ])),
      "example-1-good": withCtx(() => _cache[25] || (_cache[25] = [
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
                createTextVNode(),
                createBaseVNode("span", { class: "token constant" }, "ADMIN_USERNAME"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Alice"'),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// The condition below obviously checks if the user is an admin."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("username "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token constant" }, "ADMIN_USERNAME"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token comment" }, "// ..."),
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      "example-2-bad": withCtx(() => _cache[26] || (_cache[26] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-ext": "js"
          },
          [
            createBaseVNode("pre", { class: "language-javascript" }, [
              createBaseVNode("code", null, [
                createTextVNode("\n\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" errorCodes "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// The condition below contains no info about why we have this condition."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("length "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    errorCodes"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "push"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// No info about what 1 means. Is this really correct?"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// ..."),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "errorCodeToMessage"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "errorCode"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "switch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("errorCode"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "case"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// No easy way to check that this translation is correct."),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Name needs to contain at least 3 characters."'),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token comment" }, "// ..."),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
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
      "example-2-good": withCtx(() => _cache[27] || (_cache[27] = [
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
                createTextVNode(),
                createBaseVNode("span", { class: "token constant" }, "MIN_NAME_LENGTH"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(),
                createBaseVNode("span", { class: "token constant" }, "ERROR_CODE_NAME_TOO_SHORT"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "const"),
                createTextVNode(" errorCodes "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// The condition below obviously checks if the name is too short."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("length "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(),
                createBaseVNode("span", { class: "token constant" }, "MIN_NAME_LENGTH"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    errorCodes"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createBaseVNode("span", { class: "token function" }, "push"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token constant" }, "ERROR_CODE_NAME_TOO_SHORT"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// Using this error code here is obviously correct."),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token comment" }, "// ..."),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "function"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "errorCodeToMessage"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token parameter" }, "errorCode"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "switch"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("errorCode"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "case"),
                createTextVNode(),
                createBaseVNode("span", { class: "token constant" }, "ERROR_CODE_NAME_TOO_SHORT"),
                createBaseVNode("span", { class: "token operator" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// The translation here is obviously correct."),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Name needs to contain at least "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token constant" }, "MIN_NAME_LENGTH"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" characters."'),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token comment" }, "// ..."),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
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
      mistake: withCtx(() => _cache[28] || (_cache[28] = [
        createBaseVNode(
          "p",
          null,
          "Harcoded values are used in the middle of the code.",
          -1
          /* HOISTED */
        )
      ])),
      problem: withCtx(() => _cache[29] || (_cache[29] = [
        createBaseVNode(
          "p",
          null,
          [
            createTextVNode("A hardcoded value contains no information about what that value represent; when someone reads a hardcoded value, they must guess what the value represents. This makes the code hard to understand. For example, when comparing "),
            createBaseVNode("code", null, "username"),
            createTextVNode(" to "),
            createBaseVNode("code", null, '"Alice"'),
            createTextVNode(", is that because "),
            createBaseVNode("code", null, '"Alice"'),
            createTextVNode(" is admin or because "),
            createBaseVNode("code", null, '"Alice"'),
            createTextVNode(" is a banned member? The reader won't know until she has read the other lines of code close to this one (should not be needed!).")
          ],
          -1
          /* HOISTED */
        )
      ])),
      solution: withCtx(() => _cache[30] || (_cache[30] = [
        createBaseVNode(
          "p",
          null,
          "Don't use hardcoded values in the middle of the code. Put the values in descriptive constants instead. This way, the code becomes more readable, and it's also easy to change these values in the future (if a hardcoded value is used at multiple values, you just need to change it where you create the constant, and not at each place you use the hardcoded value).",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    })
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
