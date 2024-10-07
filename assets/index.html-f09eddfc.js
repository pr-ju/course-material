import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://www.w3.org/International/questions/qa-what-is-encoding",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://www.ascii-code.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://docs.oracle.com/javase/8/docs/api/java/nio/charset/StandardCharsets.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://www.w3.org/International/articles/http-charset/index",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _cache[51] || (_cache[51] = createBaseVNode(
      "h1",
      {
        id: "character-encodings",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#character-encodings",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Character Encodings")
      ],
      -1
      /* HOISTED */
    )),
    _cache[52] || (_cache[52] = createBaseVNode(
      "p",
      null,
      "Computers only understand bits, right? Then how can they display and work with text? Let's find out!",
      -1
      /* HOISTED */
    )),
    _cache[53] || (_cache[53] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/z0cSH2t8Hhc",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[54] || (_cache[54] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="character-encodings.pdf">character-encodings.pdf</a></li><li><a href="character-encodings.pptx">character-encodings.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Character encodings for beginners")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[1] || (_cache[1] = createTextVNode("The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[2] || (_cache[2] = createTextVNode("ascii-code.com")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[3] || (_cache[3] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Don't learn anything by heart, but look at the table at least once.")
          ],
          -1
          /* HOISTED */
        ))
      ])
    ]),
    _cache[55] || (_cache[55] = createBaseVNode(
      "h2",
      {
        id: "character-encodings-1",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#character-encodings-1",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Character Encodings")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode("Computer programs are pretty good at displaying text on the screen. A good example of that is this text you are currently reading 😀 But even though computers are good at displaying text on the screen, they can't actually store any text/characters in their memory, only numbers (or rather combinations of bits that represent different numbers). So how do they deal with this problem? Well, each type of character (")),
      _cache[5] || (_cache[5] = createBaseVNode(
        "code",
        null,
        "a",
        -1
        /* HOISTED */
      )),
      _cache[6] || (_cache[6] = createTextVNode(", ")),
      _cache[7] || (_cache[7] = createBaseVNode(
        "code",
        null,
        "b",
        -1
        /* HOISTED */
      )),
      _cache[8] || (_cache[8] = createTextVNode(", ")),
      _cache[9] || (_cache[9] = createBaseVNode(
        "code",
        null,
        "c",
        -1
        /* HOISTED */
      )),
      _cache[10] || (_cache[10] = createTextVNode(" etc.) is mapped to a number (like ")),
      _cache[11] || (_cache[11] = createBaseVNode(
        "code",
        null,
        "97",
        -1
        /* HOISTED */
      )),
      _cache[12] || (_cache[12] = createTextVNode(", ")),
      _cache[13] || (_cache[13] = createBaseVNode(
        "code",
        null,
        "98",
        -1
        /* HOISTED */
      )),
      _cache[14] || (_cache[14] = createTextVNode(", ")),
      _cache[15] || (_cache[15] = createBaseVNode(
        "code",
        null,
        "99",
        -1
        /* HOISTED */
      )),
      _cache[16] || (_cache[16] = createTextVNode(" etc.), and they store the number the characters is mapped to. Then when the character needs to be printed on the screen, the computer will print the character the number represents. An example of this is shown in ")),
      createVNode(_component_FigureNumber),
      _cache[17] || (_cache[17] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "A program in C printing 'Peter' on the screen." }, {
      default: withCtx(() => _cache[18] || (_cache[18] = [
        createBaseVNode(
          "div",
          {
            class: "language-c line-numbers-mode",
            "data-ext": "c"
          },
          [
            createBaseVNode("pre", { class: "language-c" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token macro property" }, [
                  createBaseVNode("span", { class: "token directive-hash" }, "#"),
                  createBaseVNode("span", { class: "token directive keyword" }, "include"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, "<stdio.h>")
                ]),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "int"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "main"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    string name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Peter"'),
                createBaseVNode("span", { class: "token punctuation" }, ";"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// This will actually store the numbers 80, 101, 116, 101 and 114."),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token function" }, "printf"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ";"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "// Here the printf() function receives the numbers 80, 101, 116, 101 and 114, but it will print the characters they represent instead of the numbers (P, e, t, e and r)."),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
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
      _: 1
      /* STABLE */
    }),
    _cache[56] || (_cache[56] = createStaticVNode('<p>An interesting question is: <em>Which characters are mapped to which numbers?</em> Unfortunately, the answer to this question is a bit more complicated than it would need to be these days, and this is also the reason why programmers needs to be aware of character encodings at all.</p><h3 id="charset-vs-character-encoding" tabindex="-1"><a class="header-anchor" href="#charset-vs-character-encoding" aria-hidden="true">#</a> Charset VS Character Encoding</h3><p>A <em>charset</em> (also known as <em>character set</em>) is a set of characters. For example, we could define the charset <code>plocko</code> as the set of the characters <code>a</code>, <code>b</code> and <code>c</code>.</p>', 3)),
    createBaseVNode("p", null, [
      _cache[19] || (_cache[19] = createTextVNode("A ")),
      _cache[20] || (_cache[20] = createBaseVNode(
        "em",
        null,
        "character encoding",
        -1
        /* HOISTED */
      )),
      _cache[21] || (_cache[21] = createTextVNode(" is the mapping of the characters in a charset into numbers. For example, the ")),
      _cache[22] || (_cache[22] = createBaseVNode(
        "code",
        null,
        "plocko",
        -1
        /* HOISTED */
      )),
      _cache[23] || (_cache[23] = createTextVNode(" charset could be mapped according to the table shown in in ")),
      createVNode(_component_FigureNumber),
      _cache[24] || (_cache[24] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "One way to map the characters in the plocko charset into numbers." }, {
      default: withCtx(() => _cache[25] || (_cache[25] = [
        createBaseVNode(
          "table",
          null,
          [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", { style: { "text-align": "center" } }, "Number"),
                createBaseVNode("th", { style: { "text-align": "center" } }, "Character")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", { style: { "text-align": "center" } }, "1"),
                createBaseVNode("td", { style: { "text-align": "center" } }, "a")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", { style: { "text-align": "center" } }, "2"),
                createBaseVNode("td", { style: { "text-align": "center" } }, "b")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", { style: { "text-align": "center" } }, "3"),
                createBaseVNode("td", { style: { "text-align": "center" } }, "c")
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
    createBaseVNode("p", null, [
      _cache[26] || (_cache[26] = createTextVNode("For one charset, there can exist multiple different character encodings. For example, the ")),
      _cache[27] || (_cache[27] = createBaseVNode(
        "code",
        null,
        "plocko",
        -1
        /* HOISTED */
      )),
      _cache[28] || (_cache[28] = createTextVNode(" charset could be mapped according to the table shown in in ")),
      createVNode(_component_FigureNumber),
      _cache[29] || (_cache[29] = createTextVNode(" below instead."))
    ]),
    createVNode(_component_Figure, { caption: "Another way to map the characters in the plocko charset into numbers." }, {
      default: withCtx(() => _cache[30] || (_cache[30] = [
        createBaseVNode(
          "table",
          null,
          [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", { style: { "text-align": "center" } }, "Number"),
                createBaseVNode("th", { style: { "text-align": "center" } }, "Character")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", { style: { "text-align": "center" } }, "1"),
                createBaseVNode("td", { style: { "text-align": "center" } }, "b")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", { style: { "text-align": "center" } }, "2"),
                createBaseVNode("td", { style: { "text-align": "center" } }, "a")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", { style: { "text-align": "center" } }, "3"),
                createBaseVNode("td", { style: { "text-align": "center" } }, "c")
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
    createBaseVNode("p", null, [
      _cache[35] || (_cache[35] = createTextVNode("It's always important to use the correct name on things to avoid confusion. Unfortunately, many programmers treat charsets and characters encoding as one and the same things. For example, in Java, the ")),
      createBaseVNode("a", _hoisted_4, [
        _cache[31] || (_cache[31] = createTextVNode("StandardCharsets")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[36] || (_cache[36] = createTextVNode(" class exists, but it rather defines character encodings. It's the same with ")),
      createBaseVNode("a", _hoisted_5, [
        _cache[32] || (_cache[32] = createTextVNode("the ")),
        _cache[33] || (_cache[33] = createBaseVNode(
          "code",
          null,
          "charset",
          -1
          /* HOISTED */
        )),
        _cache[34] || (_cache[34] = createTextVNode(" header in HTTP")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[37] || (_cache[37] = createTextVNode("; it specify which character encoding to use, and not the charset."))
    ]),
    _cache[57] || (_cache[57] = createStaticVNode('<p>Please contribute to a better world by using the correct name on things, instead of making it harder for the rest of us.</p><div class="custom-container warning"><p class="custom-container-title">Not a big problem</p><p>In practice it&#39;s not a big deal that some confuse charsets with character encodings, and vice versa, because most often each charset only have one character encoding.</p></div><h3 id="the-problem-with-character-encodings" tabindex="-1"><a class="header-anchor" href="#the-problem-with-character-encodings" aria-hidden="true">#</a> The problem with character encodings</h3><p>Each time you write some text, it will be written using a character encoding, so the computer knows which number each character you type should be mapped to. If you store the text (the numbers your typed characters have been mapped to) in a file and later wants to open the file to read the text, it&#39;s crucial that the computer uses the same character encoding to map the numbers back into characters, otherwise the wrong characters will be displayed on the screen after opening the file. This problem also exists when you send a file or a mail to a friend.</p><p>So it&#39;s crucial that one and the same text uses the same character encoding all the time. Unfortunately, there exists many different character encodings, and often the text/file itself doesn&#39;t contain any information about which character encoding that was used to create it, so sometimes files are opened with the wrong character encoding, and it displays characters that don&#39;t make sense. A common way to discover that the wrong character encoding has been used somewhere is that the text contains the <code>�</code> symbol or simply is unreadable.</p><h3 id="ascii" tabindex="-1"><a class="header-anchor" href="#ascii" aria-hidden="true">#</a> ASCII</h3>', 6)),
    createBaseVNode("p", null, [
      _cache[38] || (_cache[38] = createTextVNode("As computers have evolved, so have different character encodings. The earliest de facto standard character encoding was ")),
      _cache[39] || (_cache[39] = createBaseVNode(
        "em",
        null,
        "American Standard Code for Information Interchange",
        -1
        /* HOISTED */
      )),
      _cache[40] || (_cache[40] = createTextVNode(" (ASCII). In this encoding, each character is mapped to a 7 bits number, so it can map 2⁷ = 128 different characters to a number (between 0 and 127). The table in ")),
      createVNode(_component_FigureNumber),
      _cache[41] || (_cache[41] = createTextVNode(" below shows the mapping."))
    ]),
    createVNode(_component_Figure, { caption: "The ASCII character encoding." }, {
      default: withCtx(() => _cache[42] || (_cache[42] = [
        createBaseVNode(
          "table",
          null,
          [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "Number"),
                createBaseVNode("th", null, "Character")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "0-31"),
                createBaseVNode("td", null, "Control characters (not displayed on the screen but used to control how machines works (kind of)).")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "32"),
                createBaseVNode("td", null, "(space)")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "33"),
                createBaseVNode("td", null, "!")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "34"),
                createBaseVNode("td", null, '"')
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "35"),
                createBaseVNode("td", null, "#")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "36"),
                createBaseVNode("td", null, "$")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "37"),
                createBaseVNode("td", null, "%")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "38"),
                createBaseVNode("td", null, "&")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "39"),
                createBaseVNode("td", null, "'")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "40"),
                createBaseVNode("td", null, "(")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "41"),
                createBaseVNode("td", null, ")")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "42"),
                createBaseVNode("td", null, "*")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "43"),
                createBaseVNode("td", null, "+")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "44"),
                createBaseVNode("td", null, ",")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "45"),
                createBaseVNode("td", null, "-")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "46"),
                createBaseVNode("td", null, ".")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "47"),
                createBaseVNode("td", null, "/")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "48"),
                createBaseVNode("td", null, "0")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "49"),
                createBaseVNode("td", null, "1")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "50"),
                createBaseVNode("td", null, "2")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "51"),
                createBaseVNode("td", null, "3")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "52"),
                createBaseVNode("td", null, "4")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "53"),
                createBaseVNode("td", null, "5")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "54"),
                createBaseVNode("td", null, "6")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "55"),
                createBaseVNode("td", null, "7")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "56"),
                createBaseVNode("td", null, "8")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "57"),
                createBaseVNode("td", null, "9")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "58"),
                createBaseVNode("td", null, ":")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "59"),
                createBaseVNode("td", null, ";")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "60"),
                createBaseVNode("td", null, "<")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "61"),
                createBaseVNode("td", null, "=")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "62"),
                createBaseVNode("td", null, ">")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "63"),
                createBaseVNode("td", null, "?")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "64"),
                createBaseVNode("td", null, "@")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "65"),
                createBaseVNode("td", null, "A")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "66"),
                createBaseVNode("td", null, "B")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "67"),
                createBaseVNode("td", null, "C")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "68"),
                createBaseVNode("td", null, "D")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "69"),
                createBaseVNode("td", null, "E")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "70"),
                createBaseVNode("td", null, "F")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "71"),
                createBaseVNode("td", null, "G")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "72"),
                createBaseVNode("td", null, "H")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "73"),
                createBaseVNode("td", null, "I")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "74"),
                createBaseVNode("td", null, "J")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "75"),
                createBaseVNode("td", null, "K")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "76"),
                createBaseVNode("td", null, "L")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "77"),
                createBaseVNode("td", null, "M")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "78"),
                createBaseVNode("td", null, "N")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "79"),
                createBaseVNode("td", null, "O")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "80"),
                createBaseVNode("td", null, "P")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "81"),
                createBaseVNode("td", null, "Q")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "82"),
                createBaseVNode("td", null, "R")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "83"),
                createBaseVNode("td", null, "S")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "84"),
                createBaseVNode("td", null, "T")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "85"),
                createBaseVNode("td", null, "U")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "86"),
                createBaseVNode("td", null, "V")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "87"),
                createBaseVNode("td", null, "W")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "88"),
                createBaseVNode("td", null, "X")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "89"),
                createBaseVNode("td", null, "Y")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "90"),
                createBaseVNode("td", null, "Z")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "91"),
                createBaseVNode("td", null, "[")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "92"),
                createBaseVNode("td", null, "\\")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "93"),
                createBaseVNode("td", null, "]")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "94"),
                createBaseVNode("td", null, "^")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "95"),
                createBaseVNode("td", null, "_")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "96"),
                createBaseVNode("td", null, "`")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "97"),
                createBaseVNode("td", null, "a")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "98"),
                createBaseVNode("td", null, "b")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "99"),
                createBaseVNode("td", null, "c")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "100"),
                createBaseVNode("td", null, "d")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "101"),
                createBaseVNode("td", null, "e")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "102"),
                createBaseVNode("td", null, "f")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "103"),
                createBaseVNode("td", null, "g")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "104"),
                createBaseVNode("td", null, "h")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "105"),
                createBaseVNode("td", null, "i")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "106"),
                createBaseVNode("td", null, "j")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "107"),
                createBaseVNode("td", null, "k")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "108"),
                createBaseVNode("td", null, "l")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "109"),
                createBaseVNode("td", null, "m")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "110"),
                createBaseVNode("td", null, "n")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "111"),
                createBaseVNode("td", null, "o")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "112"),
                createBaseVNode("td", null, "p")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "113"),
                createBaseVNode("td", null, "q")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "114"),
                createBaseVNode("td", null, "r")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "115"),
                createBaseVNode("td", null, "s")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "116"),
                createBaseVNode("td", null, "t")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "117"),
                createBaseVNode("td", null, "u")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "118"),
                createBaseVNode("td", null, "v")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "119"),
                createBaseVNode("td", null, "w")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "120"),
                createBaseVNode("td", null, "x")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "121"),
                createBaseVNode("td", null, "y")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "122"),
                createBaseVNode("td", null, "z")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "123"),
                createBaseVNode("td", null, "{")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "124"),
                createBaseVNode("td", null, "|")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "125"),
                createBaseVNode("td", null, "}")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "126"),
                createBaseVNode("td", null, "~")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "127"),
                createBaseVNode("td", null, "DELETE (control character)")
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
    _cache[58] || (_cache[58] = createStaticVNode('<p>Although ASCII contains most characters Americans use and can be used within America without problem, it&#39;s not optimal for the rest of the world. For example, here in Sweden we also have the characters <code>å</code>, <code>ä</code>, <code>ö</code>, <code>Å</code>, <code>Ä</code> and <code>Ö</code> in our alphabet, but we can&#39;t use these characters in this character encoding. We usually solved that by using <code>a</code>, <code>o</code>, <code>A</code> and <code>O</code> instead, and hoped the reader would understand that we actually meant the other characters, but it was not a particular good solution.</p><p>Computers usually work in units of bytes (8 bits), so characters stored in ASCII usually wastes one bit. With that extra bit, 128 additional characters could be used (mapped to numbers 128 - 255). To use that extra bit, new character encodings were created that extended ASCII, meaning that the numbers 0-127 mapped to the same characters as in ASCII, but the numbers 128-255 are mapped to entirely new characters.</p><h3 id="iso-latin-1" tabindex="-1"><a class="header-anchor" href="#iso-latin-1" aria-hidden="true">#</a> ISO Latin-1</h3>', 3)),
    createBaseVNode("p", null, [
      _cache[43] || (_cache[43] = createBaseVNode(
        "em",
        null,
        "ISO Latin-1",
        -1
        /* HOISTED */
      )),
      _cache[44] || (_cache[44] = createTextVNode(" is one of the character encodings that extends ASCII. It's commonly used in Europe since it contains some extra characters that are used in many European countries. ")),
      createVNode(_component_FigureNumber),
      _cache[45] || (_cache[45] = createTextVNode(" below shows some of these extra characters."))
    ]),
    createVNode(_component_Figure, { caption: "Parts of the ISO Latin-1 character encoding." }, {
      default: withCtx(() => _cache[46] || (_cache[46] = [
        createBaseVNode(
          "table",
          null,
          [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "Number"),
                createBaseVNode("th", null, "Character")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "0-127"),
                createBaseVNode("td", null, "Same as in ASCII.")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "163"),
                createBaseVNode("td", null, "£")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "196"),
                createBaseVNode("td", null, "Ä")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "197"),
                createBaseVNode("td", null, "Å")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "214"),
                createBaseVNode("td", null, "Ö")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "220"),
                createBaseVNode("td", null, "Ü")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "223"),
                createBaseVNode("td", null, "ß")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "228"),
                createBaseVNode("td", null, "ä")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "229"),
                createBaseVNode("td", null, "å")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "246"),
                createBaseVNode("td", null, "ö")
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
    _cache[59] || (_cache[59] = createBaseVNode(
      "p",
      null,
      "This character encoding has been heavily used here in Sweden, because we can use all of our special characters in it.",
      -1
      /* HOISTED */
    )),
    _cache[60] || (_cache[60] = createBaseVNode(
      "h3",
      {
        id: "iso-latin-2",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#iso-latin-2",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" ISO Latin-2")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[47] || (_cache[47] = createBaseVNode(
        "em",
        null,
        "ISO Latin-2",
        -1
        /* HOISTED */
      )),
      _cache[48] || (_cache[48] = createTextVNode(" is an example of another character encoding extending ASCII. ")),
      createVNode(_component_FigureNumber),
      _cache[49] || (_cache[49] = createTextVNode(" below shows some of the extra characters it adds."))
    ]),
    createVNode(_component_Figure, { caption: "Parts of the ISO Latin-2 character encoding." }, {
      default: withCtx(() => _cache[50] || (_cache[50] = [
        createBaseVNode(
          "table",
          null,
          [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "Number"),
                createBaseVNode("th", null, "Character")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "0-127"),
                createBaseVNode("td", null, "Same as in ASCII.")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "163"),
                createBaseVNode("td", null, "Ł")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "196"),
                createBaseVNode("td", null, "Ä")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "197"),
                createBaseVNode("td", null, "Å")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "214"),
                createBaseVNode("td", null, "Ö")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "220"),
                createBaseVNode("td", null, "Ü")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "223"),
                createBaseVNode("td", null, "ß")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "228"),
                createBaseVNode("td", null, "ä")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "229"),
                createBaseVNode("td", null, "å")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "246"),
                createBaseVNode("td", null, "ö")
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
    _cache[61] || (_cache[61] = createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Example</p><p>As you can see, ISO Latin-2 is quite similar to ISO Latin-1. One difference is that the number 163 maps to different characters. So if one would save the text <code>Ä£Ö</code> in ISO Latin-1 and then open it in ISO Latin-2, it would display <code>ÄŁÖ</code>! This is a good example of why it&#39;s important to save the text and open it using the same character encoding.</p></div><h3 id="other-extensions-to-ascii" tabindex="-1"><a class="header-anchor" href="#other-extensions-to-ascii" aria-hidden="true">#</a> Other extensions to ASCII</h3><p>In addition to ISO Latin-1 and ISO Latin-2, there exists many other character encodings that extends ASCII. One of them is <em>Windows-1252</em>, another one is <em>Windows-1250</em>, etc.</p><h3 id="unicode" tabindex="-1"><a class="header-anchor" href="#unicode" aria-hidden="true">#</a> Unicode</h3><p>It is quite hard to work with text when you need to keep track of which character encoding to use. The <em>Unicode</em> project was started to solve this problem. It defines a charset that contains as good as all characters in the world, as well as several different character encodings that maps the characters to numbers.</p><h4 id="utf-32" tabindex="-1"><a class="header-anchor" href="#utf-32" aria-hidden="true">#</a> UTF-32</h4><p>In the character encoding <em>UTF-32</em>, each character is mapped to a 32 bit (4 bytes) number. This makes it easy to understand how it works, but each character takes 4 times more space compared to ASCII. Therefore this character encoding is rarely used.</p><h4 id="utf-8" tabindex="-1"><a class="header-anchor" href="#utf-8" aria-hidden="true">#</a> UTF-8</h4><p>In the character encoding <em>UTF-8</em>, each character is mapped to 8 bits (1 byte), 16 bits (2 bytes), 24 bits (3 bytes) or 32 bits (4 bytes). The characters used in ASCII (the most commonly used characters) are mapped to 8 bits the very same way as in ASCII, so UTF-8 is backward compatible with ASCII (you can save a text in ASCII and then open it in UTF-8 and read it correctly). The less commonly used characters are mapped to 16, 24 or 32 bits. This way the size of the text is still quite small (since the most common characters only takes 8 bits), and it&#39;s still possible to use all the less commonly used characters in the text.</p><p>The downside with UTF-8 compared to UTF-32 is that the text is a bit harder to process, since each character is implemented with either 1, 2, 3 or 4 bytes. For example, to figure out how many characters a string in UTF-32 contains, you just need to divide the number of bytes in it by 4. In UTF-8 you need to go through the string byte by byte and count each character you come across, which takes more time.</p><h3 id="which-encoding-to-use" tabindex="-1"><a class="header-anchor" href="#which-encoding-to-use" aria-hidden="true">#</a> Which encoding to use?</h3><p>These days you should most often use UTF-8. It&#39;s the default encoding used in more and more applications. Optimally, everyone would use the same character encoding, but today there still exists many old applications that use ASCII or one of the character encodings extending ASCII, so you still need to be aware of character encodings when you work with those applications.</p>', 12))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
