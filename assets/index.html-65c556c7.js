import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, g as createCommentVNode, d as createVNode, f as createStaticVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/reference/android/widget/LinearLayout",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = { class: "custom-container tip" };
const _hoisted_3 = { class: "custom-container tip" };
const _hoisted_4 = { class: "custom-container tip" };
const _hoisted_5 = { class: "custom-container tip" };
const _hoisted_6 = { class: "custom-container tip" };
const _hoisted_7 = { class: "custom-container tip" };
const _hoisted_8 = { class: "custom-container tip" };
const _hoisted_9 = { class: "custom-container tip" };
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_Smartphone = resolveComponent("Smartphone");
  return openBlock(), createElementBlock("div", null, [
    _cache[45] || (_cache[45] = createBaseVNode(
      "h1",
      {
        id: "android-linear-layout",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-linear-layout",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android Linear Layout")
      ],
      -1
      /* HOISTED */
    )),
    _cache[46] || (_cache[46] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Here's a short tutorial on how to use "),
        createBaseVNode("code", null, "LinearLayout"),
        createTextVNode(" in Android.")
      ],
      -1
      /* HOISTED */
    )),
    createCommentVNode(' <iframe width="560" height="314" src="https://www.youtube.com/embed/nJ-9jQw69SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '),
    _cache[47] || (_cache[47] = createBaseVNode(
      "h2",
      {
        id: "recommended-reading",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#recommended-reading",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Recommended reading")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode("The reading below on this page is intended to just be an introduction to ")),
      _cache[3] || (_cache[3] = createBaseVNode(
        "code",
        null,
        "LinearLayout",
        -1
        /* HOISTED */
      )),
      _cache[4] || (_cache[4] = createTextVNode(", and not a complete description of how to use all the functionality it contains. For all details about how to use it, check out ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("the documentation for ")),
        _cache[1] || (_cache[1] = createBaseVNode(
          "code",
          null,
          "LinearLayout",
          -1
          /* HOISTED */
        )),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[5] || (_cache[5] = createTextVNode("."))
    ]),
    _cache[48] || (_cache[48] = createStaticVNode('<h2 id="linearlayout" tabindex="-1"><a class="header-anchor" href="#linearlayout" aria-hidden="true">#</a> <code>LinearLayout</code></h2><p>The <code>LinearLayout</code> displays all it&#39;s children next to each other, either horizontally or vertically.</p><h3 id="the-orientation-property" tabindex="-1"><a class="header-anchor" href="#the-orientation-property" aria-hidden="true">#</a> The <code>orientation</code> property</h3><p>The <code>orientation</code> property controls which direction the children should be positioned in (either <code>horizontal</code> or <code>vertical</code>).</p>', 4)),
    createBaseVNode("div", _hoisted_2, [
      _cache[9] || (_cache[9] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[10] || (_cache[10] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to position "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s next to each other vertically.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("LinearLayout")
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("android")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res/android"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ff0000"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("orientation")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("vertical"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#00ff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#0000ff"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ffff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 3"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("LinearLayout")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
              )
            ])),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("app"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Activity\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("os"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Bundle\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Bundle"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_my"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[8] || (_cache[8] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "min-content min-content min-content", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1 / span 2" } }, " Hello 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "1 / span 1" } }, " Hello 2 "),
              createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-column": "1 / span 2" } }, " Hello 3 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("div", _hoisted_3, [
      _cache[14] || (_cache[14] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[15] || (_cache[15] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to position "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s next to each other horizontally.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[11] || (_cache[11] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("LinearLayout")
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("android")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res/android"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ff0000"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("orientation")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("horizontal"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#00ff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#0000ff"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ffff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 3"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("LinearLayout")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
              )
            ])),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => _cache[12] || (_cache[12] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("app"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Activity\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("os"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Bundle\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Bundle"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_my"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[13] || (_cache[13] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "max-content max-content max-content", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-row": "1 / span 2" } }, " Hello 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-row": "1 / span 1" } }, " Hello 2 "),
              createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-row": "1 / span 2" } }, " Hello 3 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[49] || (_cache[49] = createStaticVNode('<h3 id="the-gravity-property" tabindex="-1"><a class="header-anchor" href="#the-gravity-property" aria-hidden="true">#</a> The <code>gravity</code> property</h3><p>The <code>gravity</code> property on <code>LinearLayout</code> controls where the children should be placed in the parent (<code>top</code>, <code>center</code>, <code>bottom</code>, etc.).</p>', 2)),
    createBaseVNode("div", _hoisted_4, [
      _cache[19] || (_cache[19] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[20] || (_cache[20] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to position "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s next to each other vertically at the bottom of the "),
          createBaseVNode("code", null, "LinearLayout"),
          createTextVNode(".")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[16] || (_cache[16] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("LinearLayout")
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("android")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res/android"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ff0000"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("orientation")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("vertical"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("gravity")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("bottom"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#00ff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#0000ff"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ffff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 3"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("LinearLayout")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => _cache[17] || (_cache[17] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("app"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Activity\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("os"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Bundle\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Bundle"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_my"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[18] || (_cache[18] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "1fr min-content min-content min-content", "background-color": "#ff0000" } },
            [
              createBaseVNode("div"),
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1 / span 2" } }, " Hello 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "1 / span 1" } }, " Hello 2 "),
              createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-column": "1 / span 2" } }, " Hello 3 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[50] || (_cache[50] = createBaseVNode(
      "h3",
      {
        id: "the-layout-gravity-property",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#the-layout-gravity-property",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" The "),
        createBaseVNode("code", null, "layout_gravity"),
        createTextVNode(" property")
      ],
      -1
      /* HOISTED */
    )),
    _cache[51] || (_cache[51] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("The "),
        createBaseVNode("code", null, "layout_gravity"),
        createTextVNode(" property can be used to give a child an additional gravity/another gravity than the on specified in "),
        createBaseVNode("code", null, "gravity"),
        createTextVNode(" on "),
        createBaseVNode("code", null, "LinearLayout"),
        createTextVNode(".")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_5, [
      _cache[24] || (_cache[24] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[25] || (_cache[25] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to position "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s next to each other vertically at the bottom of the "),
          createBaseVNode("code", null, "LinearLayout"),
          createTextVNode(", and one of the children has the additional gravity "),
          createBaseVNode("code", null, "right"),
          createTextVNode(".")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[21] || (_cache[21] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("LinearLayout")
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("android")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res/android"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ff0000"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("orientation")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("vertical"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("gravity")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("bottom"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#00ff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_gravity")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("right"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#0000ff"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ffff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 3"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("LinearLayout")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
              )
            ])),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => _cache[22] || (_cache[22] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("app"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Activity\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("os"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Bundle\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Bundle"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_my"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[23] || (_cache[23] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "1fr auto", "grid-template-rows": "1fr min-content min-content min-content", "background-color": "#ff0000" } },
            [
              createBaseVNode("div"),
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1 / span 2" } }, " Hello 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "2 / span 1" } }, " Hello 2 "),
              createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-column": "1 / span 2" } }, " Hello 3 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[52] || (_cache[52] = createStaticVNode('<h3 id="the-layout-weight-property" tabindex="-1"><a class="header-anchor" href="#the-layout-weight-property" aria-hidden="true">#</a> The <code>layout_weight</code> property</h3><p>The <code>layout_weight</code> property can be used on a child to give it another size than <code>wrap_content</code> and <code>match_parent</code>. The number in this attribute corresponds to how many shares of the remaining available space in the <code>LinearLayout</code> the child should have after all the other children without this attribute has occupied their space.</p><p>When a child has the <code>layout_weight</code> attribute, its <code>layout_width</code> or <code>layout_height</code> (depending on if <code>orientation=&quot;horizontal&quot;</code> or <code>orientation=&quot;vertical&quot;</code>) won&#39;t be used, and <code>layout_width</code>/<code>layout_height</code> can be set to <code>0dp</code>. Optimally one would omit writing the <code>layout_width</code>/<code>layout_height</code> attribute that is not used, but they way Android is designed one has to write both of them.</p>', 3)),
    createBaseVNode("div", _hoisted_6, [
      _cache[29] || (_cache[29] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[30] || (_cache[30] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to position "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s next to each other vertically, and let two children occupy the rest of the available remaining space (1 fourth and 3 fourths respectively).")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[26] || (_cache[26] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("LinearLayout")
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("android")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res/android"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ff0000"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("orientation")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("vertical"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("0dp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_weight")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#00ff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#0000ff"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("0dp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_weight")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("3"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ffff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello 3"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("LinearLayout")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
              )
            ])),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => _cache[27] || (_cache[27] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("app"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Activity\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("os"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Bundle\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Bundle"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_my"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[28] || (_cache[28] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "1fr min-content 3fr", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1 / span 2" } }, " Hello 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "1 / span 1" } }, " Hello 2 "),
              createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-column": "1 / span 2" } }, " Hello 3 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[53] || (_cache[53] = createBaseVNode(
      "h3",
      {
        id: "handling-overflow",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#handling-overflow",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Handling overflow")
      ],
      -1
      /* HOISTED */
    )),
    _cache[54] || (_cache[54] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("If the children can't fit inside the "),
        createBaseVNode("code", null, "LinearLayout"),
        createTextVNode(`, the last children won't be shown (will be "outside" the screen).`)
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_7, [
      _cache[34] || (_cache[34] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[35] || (_cache[35] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how children don't fit in a "),
          createBaseVNode("code", null, "LinearLayout"),
          createTextVNode(".")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[31] || (_cache[31] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("LinearLayout")
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("android")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res/android"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ff0000"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("orientation")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("horizontal"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#00ff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello! I am the first child."),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#0000ff"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello! I am the second child."),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ffff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello! I am the third child."),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("LinearLayout")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
              )
            ])),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => _cache[32] || (_cache[32] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("app"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Activity\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("os"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Bundle\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Bundle"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_my"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[33] || (_cache[33] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "max-content max-content max-content", "grid-template-rows": "auto 1fr", "background-color": "#ff0000", "overflow": "hidden" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-row": "1 / span 2" } }, " Hello! I am the first child. "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-row": "1 / span 1" } }, " Hello! I am the second child. "),
              createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-row": "1 / span 2" } }, " Hello! I am the third child. ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[55] || (_cache[55] = createStaticVNode("<p>The best solution in this case is to put the <code>LinearLayout</code> inside a:</p><ul><li><code>ScrollView</code>, if you want the user to be able to scroll the <code>LinearLayout</code> vertically (i.e. when <code>orientation=&quot;vertical&quot;</code>)</li><li><code>HorizontalScrollView</code>, if you want the user to be able to scroll the <code>LinearLayout</code> (i.e. when <code>orientation=&quot;vertical&quot;</code>)</li></ul><p>And give the <code>LinearLayout</code>:</p><ul><li><code>layout_height=&quot;wrap_content&quot;</code> when <code>orientation=&quot;vertical&quot;</code></li><li><code>layout_width=&quot;wrap_content&quot;</code> when <code>orientation=&quot;horizontal&quot;</code></li></ul><p>The <code>layout_height</code>/<code>layout_width</code> needs to be set to <code>wrap_content</code> to allow the <code>LinearLayout</code> to grow and be as big as the children requires it to be (if it would be set to <code>match_parent</code>, it would be as tall/wide as the <code>ScrollView</code>/<code>HorizontalScrollView</code>, and you would not be able to scroll it).</p>", 5)),
    createBaseVNode("div", _hoisted_8, [
      _cache[39] || (_cache[39] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[40] || (_cache[40] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how children don't fit in a "),
          createBaseVNode("code", null, "LinearLayout"),
          createTextVNode(", but thanks to a "),
          createBaseVNode("code", null, "HorizontalScrollView"),
          createTextVNode(" can be scrolled.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[36] || (_cache[36] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("HorizontalScrollView")
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("android")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res/android"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("LinearLayout")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ff0000"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("orientation")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("horizontal"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#00ff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello! I am the first child."),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#0000ff"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello! I am the second child."),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ffff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello! I am the third child."),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("LinearLayout")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("HorizontalScrollView")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " ")
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
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => _cache[37] || (_cache[37] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("app"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Activity\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("os"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Bundle\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Bundle"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_my"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[38] || (_cache[38] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "max-content max-content max-content", "grid-template-rows": "auto 1fr", "background-color": "#ff0000", "overflow": "auto" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-row": "1 / span 2" } }, " Hello! I am the first child. "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-row": "1 / span 1" } }, " Hello! I am the second child. "),
              createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-row": "1 / span 2" } }, " Hello! I am the third child. ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[56] || (_cache[56] = createBaseVNode(
      "h3",
      {
        id: "nesting-linearlayouts",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#nesting-linearlayouts",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Nesting "),
        createBaseVNode("code", null, "LinearLayout"),
        createTextVNode("s")
      ],
      -1
      /* HOISTED */
    )),
    _cache[57] || (_cache[57] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("A single "),
        createBaseVNode("code", null, "LinearLayout"),
        createTextVNode(" can be useful, but by nesting them, you can create many different type of user interfaces.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_9, [
      _cache[44] || (_cache[44] = createStaticVNode('<p class="custom-container-title">Example</p><p>Example showing how to use a <code>&lt;LinearLayout orientation=&quot;vertical&quot;&gt;</code>s to first create two rows:</p><ul><li>The first row is for the main content on the screen</li><li>The second row is for the navigation buttons at the bottom of the screen</li></ul><p>The second row is a <code>&lt;LinearLayout orientation=&quot;horizontal&quot;&gt;</code> containing three <code>Button</code>s. The idea is that clicking on a navigation <code>Button</code> will change the main content shown on the screen.</p>', 4)),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[41] || (_cache[41] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("LinearLayout")
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("android")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res/android"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ff0000"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("orientation")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("vertical"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("0dp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_weight")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#00ff00"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("gravity")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("center"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("I'm the main content!"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("LinearLayout")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("match_parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("background")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("#ff0000"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("orientation")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("horizontal"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("Button")
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("0dp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_weight")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Page 1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("Button")
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("0dp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_weight")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Page 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("Button")
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_width")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("0dp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_height")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_weight")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Page 3"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("LinearLayout")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("LinearLayout")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => _cache[42] || (_cache[42] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("app"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Activity\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("os"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Bundle\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Bundle"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_my"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br")
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
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[43] || (_cache[43] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "1fr 1fr 1fr", "grid-template-rows": "1fr auto", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-row": "1", "grid-column": "1 / span 3", "display": "grid", "align-content": "center", "text-align": "center" } }, [
                createBaseVNode("div", null, " I'm the main content! ")
              ]),
              createBaseVNode("button", { style: { "grid-row": "2", "grid-column": "1" } }, " Page 1 "),
              createBaseVNode("button", { style: { "grid-row": "2", "grid-column": "2" } }, " Page 2 "),
              createBaseVNode("button", { style: { "grid-row": "2", "grid-column": "3" } }, " Page 3 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[58] || (_cache[58] = createBaseVNode(
      "div",
      { class: "custom-container warning" },
      [
        createBaseVNode("p", { class: "custom-container-title" }, "About nesting LinearLayouts"),
        createBaseVNode("p", null, [
          createTextVNode("Most GUIs can these days be implemented using a single "),
          createBaseVNode("code", null, "ConstraintLayout"),
          createTextVNode(", which is more performant than nesting multiple "),
          createBaseVNode("code", null, "LinearLayout"),
          createTextVNode("s.")
        ])
      ],
      -1
      /* HOISTED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
