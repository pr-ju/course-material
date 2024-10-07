import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, g as createCommentVNode, d as createVNode, f as createStaticVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.android.com/guide/topics/ui/layout/relative",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://developer.android.com/jetpack/androidx/releases/constraintlayout#declaring_dependencies",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = { class: "custom-container tip" };
const _hoisted_5 = { class: "custom-container tip" };
const _hoisted_6 = { class: "custom-container tip" };
const _hoisted_7 = { class: "custom-container tip" };
const _hoisted_8 = { class: "custom-container tip" };
const _hoisted_9 = { class: "custom-container tip" };
const _hoisted_10 = { class: "custom-container tip" };
const _hoisted_11 = { class: "custom-container tip" };
const _hoisted_12 = { class: "custom-container tip" };
const _hoisted_13 = { class: "custom-container tip" };
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_Smartphone = resolveComponent("Smartphone");
  return openBlock(), createElementBlock("div", null, [
    _cache[67] || (_cache[67] = createBaseVNode(
      "h1",
      {
        id: "android-constraint-layout",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-constraint-layout",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android Constraint Layout")
      ],
      -1
      /* HOISTED */
    )),
    _cache[68] || (_cache[68] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Here's a short tutorial on how to use "),
        createBaseVNode("code", null, "ConstraintLayout"),
        createTextVNode(" in Android.")
      ],
      -1
      /* HOISTED */
    )),
    createCommentVNode(' <iframe width="560" height="314" src="https://www.youtube.com/embed/nJ-9jQw69SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '),
    _cache[69] || (_cache[69] = createBaseVNode(
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
        "ConstraintLayout",
        -1
        /* HOISTED */
      )),
      _cache[4] || (_cache[4] = createTextVNode(", and not a complete description of how to use all the functionality it contains. For all details about how to use it, check out ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("the documentation for ")),
        _cache[1] || (_cache[1] = createBaseVNode(
          "code",
          null,
          "ConstraintLayout",
          -1
          /* HOISTED */
        )),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[5] || (_cache[5] = createTextVNode("."))
    ]),
    _cache[70] || (_cache[70] = createBaseVNode(
      "h2",
      {
        id: "constraintlayout",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#constraintlayout",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(),
        createBaseVNode("code", null, "ConstraintLayout")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[7] || (_cache[7] = createTextVNode("The ")),
      _cache[8] || (_cache[8] = createBaseVNode(
        "code",
        null,
        "ConstraintLayout",
        -1
        /* HOISTED */
      )),
      _cache[9] || (_cache[9] = createTextVNode(" is a layout in which the children can be positioned relative to each other (a child can be positioned below another child, or above another child, or to the right of another child, etc.), or relative to the parent's edges (below the parent's top edge, or above the parent's bottom edge, or to the right of the parent's left edge, etc.). It is very similar to the ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[6] || (_cache[6] = createTextVNode("RelativeLayout")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[10] || (_cache[10] = createTextVNode(", but offers more functionality."))
    ]),
    createBaseVNode("p", null, [
      _cache[12] || (_cache[12] = createTextVNode("The ")),
      _cache[13] || (_cache[13] = createBaseVNode(
        "code",
        null,
        "ConstraintLayout",
        -1
        /* HOISTED */
      )),
      _cache[14] || (_cache[14] = createTextVNode(" is not part of the Android framework, but developed by Google in a separate library that is part of Android Jetpack. To add the library to your Android Studio Project, follow the instructions at the ")),
      createBaseVNode("a", _hoisted_3, [
        _cache[11] || (_cache[11] = createTextVNode("Declaring dependencies")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[15] || (_cache[15] = createTextVNode(" section."))
    ]),
    _cache[71] || (_cache[71] = createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">Use the correct namespace!</p><p>Since the <code>ConstraintLayout</code> is not part of the Android framework, it does not put its own specific attributes in the XML namespace <code>http://schemas.android.com/apk/res/android</code> (usually called <code>android</code>), but instead in the namespace <code>http://schemas.android.com/apk/res-auto</code>, which one usually call <code>app</code>.</p></div><p>A child in <code>ConstraintLayout</code> can have <code>layout_width</code> and <code>layout_height</code> set to <code>wrap_content</code>/<code>match_parent</code>, in which case the child will have the size specified by these two attributes (as usual).</p>', 2)),
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
          createTextVNode("Example showing how to add two "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s to a "),
          createBaseVNode("code", null, "ConstraintLayout"),
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
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                          createTextVNode("Text 1"),
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
                          createTextVNode("Text 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "1", "grid-row": "1" } }, " Text 2 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[72] || (_cache[72] = createStaticVNode('<p>In the example above, we haven&#39;t told the <code>ConstraintLayout</code> where the children should be positioned, so both <code>TextView</code>s are positioned in top left corner by default (that&#39;s why we can&#39;t see the first <code>TextView</code>; it&#39;s behind the second <code>TextView</code>!).</p><p>To tell the <code>ConstraintLayout</code> where a child should be positioned horizontally, we can add one of the following attributes (known as a <em>constraint</em>) to the child:</p><ul><li><code>app:layout_constraintLeft_toLeftOf</code></li><li><code>app:layout_constraintLeft_toRightOf</code></li><li><code>app:layout_constraintRight_toLeftOf</code></li><li><code>app:layout_constraintRight_toRightOf</code></li></ul><p>The value can either be <code>parent</code>, or the id of one of the other child <code>View</code>s in the <code>ConstraintLayout</code>.</p><p>Similarly, to tell the <code>ConstraintLayout</code> where a child should be positioned vertically, we can add one of the following attributes to the child:</p><ul><li><code>app:layout_constraintTop_toTopOf</code></li><li><code>app:layout_constraintTop_toBottomOf</code></li><li><code>app:layout_constraintBottom_toTopOf</code></li><li><code>app:layout_constraintBottom_toBottomOf</code></li></ul><p>The value can either be <code>parent</code>, or the id of one of the other child <code>View</code>s in the <code>ConstraintLayout</code>.</p><div class="custom-container tip"><p class="custom-container-title">Supporting Right-to-Left devices</p><p>To support layouts for people reading from right to left, use <code>Start</code> instead of <code>Left</code> and <code>End</code> instead of <code>Right</code> in the attribute names, e.g. use <code>layout_constraintStart_toEndOf</code> instead of <code>layout_constraintLeft_toRightOf</code>.</p></div>', 8)),
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
          createTextVNode("Example showing how to position one "),
          createBaseVNode("code", null, "View"),
          createTextVNode(" in the top right corner, and another "),
          createBaseVNode("code", null, "View"),
          createTextVNode(" in the bottom left corner.")
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
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("app")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res-auto"),
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
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
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
                          createTextVNode("Text 1"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintBottom_toBottomOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
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
                          createTextVNode("Text 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr auto", "grid-template-rows": "auto 1fr auto", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "3", "grid-row": "1" } }, " Text 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "1", "grid-row": "3" } }, " Text 2 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
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
          createTextVNode("Example showing how to position two "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s in the top right corner (one below the other).")
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
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("app")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res-auto"),
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
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/first_text_view"),
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
                          createTextVNode("Text 1"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toBottomOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/first_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
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
                          createTextVNode("Text 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "1fr auto", "grid-template-rows": "auto auto 1fr", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "3", "grid-row": "1" } }, " Text 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "3", "grid-row": "2" } }, " Text 2 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
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
          createTextVNode("Example showing how to position two "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s diagonally in the top right corner.")
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
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("app")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res-auto"),
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
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/first_text_view"),
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
                          createTextVNode("Text 1"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toBottomOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/first_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/first_text_view"),
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
                          createTextVNode("Text 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "1fr auto auto", "grid-template-rows": "auto auto 1fr", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "3", "grid-row": "1" } }, " Text 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "2", "grid-row": "2" } }, " Text 2 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[73] || (_cache[73] = createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">Repetition</p><p>To tell the <code>ConstraintLayout</code> where a child should be positioned horizontally, we can add one of the following attributes (known as a <em>constraint</em>) to the child:</p><ul><li><code>app:layout_constraintLeft_toLeftOf</code></li><li><code>app:layout_constraintLeft_toRightOf</code></li><li><code>app:layout_constraintRight_toLeftOf</code></li><li><code>app:layout_constraintRight_toRightOf</code></li></ul><p>The value can either be <code>parent</code>, or the id of one of the other child <code>View</code>s in the <code>ConstraintLayout</code>.</p><p>Similarly, to tell the <code>ConstraintLayout</code> where a child should be positioned vertically, we can add one of the following attributes to the child:</p><ul><li><code>app:layout_constraintTop_toTopOf</code></li><li><code>app:layout_constraintTop_toBottomOf</code></li><li><code>app:layout_constraintBottom_toTopOf</code></li><li><code>app:layout_constraintBottom_toBottomOf</code></li></ul><p>The value can either be <code>parent</code>, or the id of one of the other child <code>View</code>s in the <code>ConstraintLayout</code>.</p></div><p>Instead of giving a child it&#39;s size through the <code>layout_width</code> and <code>layout_height</code> attributes, you can specify two horizontal (or two vertical) constraints, and the child can get its width (or height) from the constraints instead. When a child has two horizontal constraints (or two vertical constraints) and you want the child to get its size through the constraints you should set the <code>layout_width</code> (or <code>layout_height</code>) to <code>0dp</code>.</p>', 2)),
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
          createTextVNode("Example showing how to position two "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s next to each other horizontally:")
        ],
        -1
        /* HOISTED */
      )),
      _cache[41] || (_cache[41] = createBaseVNode(
        "ul",
        null,
        [
          createBaseVNode("li", null, "The first one is as small as possible"),
          createBaseVNode("li", null, "The second one should occupy the rest of the remaining space")
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
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("app")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res-auto"),
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
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/first_text_view"),
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
                          createTextVNode("Text 1"),
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
                          createTextVNode("0dp"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/first_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
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
                          createTextVNode("Text 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "2", "grid-row": "1" } }, " Text 2 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[74] || (_cache[74] = createBaseVNode(
      "p",
      null,
      "If a child has a size smaller than what is specified by two horizontal/vertical constraints, the child will be centered instead of growing to cover the space.",
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_9, [
      _cache[45] || (_cache[45] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[46] || (_cache[46] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to position two "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s next to each other, and center the second "),
          createBaseVNode("code", null, "View"),
          createTextVNode(" in the rest of the available space.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[42] || (_cache[42] = [
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
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("app")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res-auto"),
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
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/first_text_view"),
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
                          createTextVNode("Text 1"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/first_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
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
                          createTextVNode("Text 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
            default: withCtx(() => _cache[43] || (_cache[43] = [
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
        default: withCtx(() => _cache[44] || (_cache[44] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr auto 1fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "3", "grid-row": "1" } }, " Text 2 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[75] || (_cache[75] = createStaticVNode("<p>To control where in the rest of the available space the child is positioned (center by default), use the <code>app:layout_constraintHorizontal_bias</code>/<code>app:layout_constraintVertical_bias</code> attribute. The value is number between <code>0</code> and <code>1</code>, where:</p><ul><li><code>0</code> means at the start</li><li>...</li><li><code>0.5</code> means in the middle (default)</li><li>...</li><li><code>1</code> means at the end</li></ul>", 2)),
    createBaseVNode("div", _hoisted_10, [
      _cache[50] || (_cache[50] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[51] || (_cache[51] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to position two "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s next to each other, and placing the second "),
          createBaseVNode("code", null, "View"),
          createTextVNode(" 90% to the right of the rest of the available space.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[47] || (_cache[47] = [
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
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("app")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res-auto"),
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
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/first_text_view"),
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
                          createTextVNode("Text 1"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/first_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintHorizontal_bias")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("0.9"),
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
                          createTextVNode("Text 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
            default: withCtx(() => _cache[48] || (_cache[48] = [
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
        default: withCtx(() => _cache[49] || (_cache[49] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 9fr auto 1fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "3", "grid-row": "1" } }, " Text 2 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[76] || (_cache[76] = createBaseVNode(
      "p",
      null,
      'When you have a multiple children getting their sizes from the constraints in the same "chain", they by default get an equal amount of the remaining space available.',
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_11, [
      _cache[55] || (_cache[55] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[56] || (_cache[56] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to position three "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s next to each other, and let the last two share the remaining available space equally.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[52] || (_cache[52] = [
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
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("app")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res-auto"),
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
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/first_text_view"),
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
                          createTextVNode("Text 1"),
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
                          createTextVNode("0dp"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/first_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/third_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/second_text_view"),
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
                          createTextVNode("Text 2"),
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
                          createTextVNode("0dp"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/second_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/third_text_view"),
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
                          createTextVNode("Text 3"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
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
            default: withCtx(() => _cache[53] || (_cache[53] = [
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
        default: withCtx(() => _cache[54] || (_cache[54] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr 1fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "2", "grid-row": "1" } }, " Text 2 "),
              createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-column": "3", "grid-row": "1" } }, " Text 3 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[77] || (_cache[77] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("If you want the remaining space to be distributed differently among the children, you can use the attribute "),
        createBaseVNode("code", null, "layout_constraintHorizontal_weight"),
        createTextVNode("/"),
        createBaseVNode("code", null, "layout_constraintVertical_weight"),
        createTextVNode(" to indicate how many shares of the remaining vertical space they should occupy.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_12, [
      _cache[60] || (_cache[60] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[61] || (_cache[61] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to position three "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s next to each other, and let the second occupy one third of the remaining space, and the third to occupy 2 thirds of the remaining space.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[57] || (_cache[57] = [
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
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("app")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res-auto"),
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
                          createTextVNode("wrap_content"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/first_text_view"),
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
                          createTextVNode("Text 1"),
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
                          createTextVNode("0dp"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/first_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/third_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintHorizontal_weight")
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
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/second_text_view"),
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
                          createTextVNode("Text 2"),
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
                          createTextVNode("0dp"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/second_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintHorizontal_weight")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/third_text_view"),
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
                          createTextVNode("Text 3"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
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
            default: withCtx(() => _cache[58] || (_cache[58] = [
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
        default: withCtx(() => _cache[59] || (_cache[59] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr 2fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
            [
              createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
              createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "2", "grid-row": "1" } }, " Text 2 "),
              createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-column": "3", "grid-row": "1" } }, " Text 3 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[78] || (_cache[78] = createBaseVNode(
      "h3",
      {
        id: "bigger-example",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#bigger-example",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Bigger example")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_13, [
      _cache[65] || (_cache[65] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[66] || (_cache[66] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to use a "),
          createBaseVNode("code", null, "<ConstraintLayout>"),
          createTextVNode(" to implement a layout with main content and a row with 3 navigation buttons at the bottom.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[62] || (_cache[62] = [
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
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                          createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                          createTextVNode("app")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("http://schemas.android.com/apk/res-auto"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintBottom_toTopOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/first_button"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/main_content_text_view"),
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
                          createTextVNode("Button")
                        ]),
                        createTextVNode("\n		"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toBottomOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/main_content_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintBottom_toBottomOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/second_button"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/first_button"),
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
                          createTextVNode("Page 1"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("Button")
                        ]),
                        createTextVNode("\n		"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toBottomOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/main_content_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintBottom_toBottomOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/first_button"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toLeftOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/third_button"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/second_button"),
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
                          createTextVNode("Page 2"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("Button")
                        ]),
                        createTextVNode("\n		"),
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
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintTop_toBottomOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/main_content_text_view"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintBottom_toBottomOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintLeft_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@id/second_button"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_constraintRight_toRightOf")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("parent"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/third_button"),
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
                          createTextVNode("Page 3"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
            default: withCtx(() => _cache[63] || (_cache[63] = [
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
        default: withCtx(() => _cache[64] || (_cache[64] = [
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
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
