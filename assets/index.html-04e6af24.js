import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/reference/androidx/coordinatorlayout/widget/CoordinatorLayout",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = { class: "custom-container tip" };
const _hoisted_3 = { class: "custom-container tip" };
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_Smartphone = resolveComponent("Smartphone");
  return openBlock(), createElementBlock("div", null, [
    _cache[13] || (_cache[13] = createBaseVNode(
      "h1",
      {
        id: "android-coordinatorlayout",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-coordinatorlayout",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android CoordinatorLayout")
      ],
      -1
      /* HOISTED */
    )),
    _cache[14] || (_cache[14] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Let's take a look at one of the new layouts we got with material design: "),
        createBaseVNode("code", null, "CoordinatorLayout"),
        createTextVNode(".")
      ],
      -1
      /* HOISTED */
    )),
    _cache[15] || (_cache[15] = createBaseVNode(
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
    _cache[16] || (_cache[16] = createBaseVNode(
      "p",
      null,
      "Android documentation:",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("CoordinatorLayout")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _cache[17] || (_cache[17] = createStaticVNode('<h2 id="the-coordinatorlayout" tabindex="-1"><a class="header-anchor" href="#the-coordinatorlayout" aria-hidden="true">#</a> The CoordinatorLayout</h2><p>When we got Material Design components in Android, some views needed to be coordinated to appear and behave correct. By placing views in a <code>CoordinatorLayout</code>, each view can have a <em>behavior</em> attached to it that can tell the <code>CoordinatorLayout</code> which other views in the layout that view is dependent on. The <code>CoordinatorLayout</code> will then inform the behavior when any of the dependent views change in size or position, at which point the behavior should update its own view to behave correctly, such as to move it.</p><div class="custom-container tip"><p class="custom-container-title">Coordinating, not positioning</p><p>The <code>CoordinatorLayout</code> is primarily for coordinating views through behaviors added to them; it does not have much functionality for positioning the views in it. Therefor, we usually put another <code>Layout</code> in the <code>CoordinatorLayout</code> (such as a <code>ConstraintLayout</code>) to position the views. But we have some tools to position the views in a <code>CoordinatorLayout</code>, such as the tools we have to position views in a <code>FrameLayout</code>, such as <code>layout_gravity</code> and margins.</p></div><h3 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior" aria-hidden="true">#</a> Behavior</h3><p>The example below contains code that moves a <code>TextView</code> to the right when a <code>Button</code> is clicked the &quot;traditional&quot; way.</p>', 5)),
    createBaseVNode("div", _hoisted_2, [
      _cache[4] || (_cache[4] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
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
                          createTextVNode("androidx.coordinatorlayout.widget.CoordinatorLayout")
                        ]),
                        createTextVNode("\n  "),
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
                        createTextVNode("\n  "),
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
                        createTextVNode("\n  "),
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
                        createTextVNode("\n  "),
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
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Some text."),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n\n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_marginTop")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("30dp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Some other text."),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n\n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("Button")
                        ]),
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/move_button"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_marginTop")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("60dp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Move first text"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.coordinatorlayout.widget.CoordinatorLayout")
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
                    createBaseVNode("div", { class: "line-number" }),
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
          createVNode(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MainActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "AppCompatActivity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n  \n  "),
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
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_main"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" firstTextView "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" findViewById"),
                      createBaseVNode("span", { class: "token operator" }, "<"),
                      createTextVNode("TextView"),
                      createBaseVNode("span", { class: "token operator" }, ">"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("first_text_view"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" moveButton "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" findViewById"),
                      createBaseVNode("span", { class: "token operator" }, "<"),
                      createTextVNode("Button"),
                      createBaseVNode("span", { class: "token operator" }, ">"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("move_button"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token comment" }, "// Move the first TextView when the button is clicked."),
                      createTextVNode("\n    moveButton"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n      "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" layoutParams "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" firstTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layoutParams "),
                      createBaseVNode("span", { class: "token keyword" }, "as"),
                      createTextVNode(" ViewGroup"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("MarginLayoutParams\n      layoutParams"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("leftMargin "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" layoutParams"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("leftMargin "),
                      createBaseVNode("span", { class: "token operator" }, "+"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token number" }, "5"),
                      createTextVNode("\n      firstTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "requestLayout"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// Tell the framework to repaint this view."),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n  "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n  \n"),
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
        default: withCtx(() => _cache[3] || (_cache[3] = [
          createBaseVNode(
            "div",
            null,
            "Some text",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "div",
            null,
            "Some other text",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "button",
            { onclick: "this.previousElementSibling.previousElementSibling.innerHTML = ' '+this.previousElementSibling.previousElementSibling.innerHTML" },
            "Move first text",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[18] || (_cache[18] = createStaticVNode("<p>If we want the second <code>TextView</code> to be moved the same way as the first <code>TextView</code>, we can add a <code>Behavior</code> to it that tells the <code>CoordinatorLayout</code> that it depends on the first <code>TextView</code>. Then the <code>CoordinatorLayout</code> will notify the <code>Behavior</code> each time the first <code>TextView</code> is moved, and the <code>Behavior</code> can in turn change the position of the second <code>TextView</code> it has been added to, as in the example below.</p>", 1)),
    createBaseVNode("div", _hoisted_3, [
      _cache[9] || (_cache[9] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
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
                          createTextVNode("androidx.coordinatorlayout.widget.CoordinatorLayout")
                        ]),
                        createTextVNode("\n  "),
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
                        createTextVNode("\n  "),
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
                        createTextVNode("\n  "),
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
                        createTextVNode("\n  "),
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
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Some text."),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n\n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
                        ]),
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_marginTop")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("30dp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Some other text."),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("layout_behavior")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode(".MyBehavior"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "<!-- Only change from before. -->"),
                      createTextVNode("\n\n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("Button")
                        ]),
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
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
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/move_button"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("layout_marginTop")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("60dp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n      "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Move first text"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("androidx.coordinatorlayout.widget.CoordinatorLayout")
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
          createVNode(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token comment" }, "// Same as before."),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MainActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "AppCompatActivity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n  \n  "),
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
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("savedInstanceState"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_main"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" firstTextView "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" findViewById"),
                      createBaseVNode("span", { class: "token operator" }, "<"),
                      createTextVNode("TextView"),
                      createBaseVNode("span", { class: "token operator" }, ">"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("first_text_view"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" moveButton "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" findViewById"),
                      createBaseVNode("span", { class: "token operator" }, "<"),
                      createTextVNode("Button"),
                      createBaseVNode("span", { class: "token operator" }, ">"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("move_button"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n    \n    moveButton"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n      "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" layoutParams "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" firstTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layoutParams "),
                      createBaseVNode("span", { class: "token keyword" }, "as"),
                      createTextVNode(" ViewGroup"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("MarginLayoutParams\n      layoutParams"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("leftMargin "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" layoutParams"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("leftMargin "),
                      createBaseVNode("span", { class: "token operator" }, "+"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token number" }, "5"),
                      createTextVNode("\n      firstTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "requestLayout"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n  "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n  \n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
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
          createVNode(_component_CodeGroupItem, { title: "MyBehavior.kt" }, {
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
                      createBaseVNode("span", { class: "token comment" }, "// The type of view we specify in the super class should match the type of view the behavior can be added to."),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token comment" }, "// Currently it's <TextView>, but it could just as well be <View> in this case, since this behavior is"),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token comment" }, "// not dependent on any TextView specific functionality (for example, it would work equally well on an ImageView)."),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "MyBehavior"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("context"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Context"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" attrs"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" AttributeSet"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode("\n    CoordinatorLayout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Behavior"),
                      createBaseVNode("span", { class: "token operator" }, "<"),
                      createTextVNode("TextView"),
                      createBaseVNode("span", { class: "token operator" }, ">"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("context"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" attrs"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n  \n  "),
                      createBaseVNode("span", { class: "token comment" }, "// This function will be called by the CoordinatorLayout."),
                      createTextVNode("\n  "),
                      createBaseVNode("span", { class: "token comment" }, '// The parameter "child" is the view this behavior has been added to.'),
                      createTextVNode("\n  "),
                      createBaseVNode("span", { class: "token comment" }, '// We should return back true if we are dependent on the parameter "dependency", otherwise false.'),
                      createTextVNode("\n  "),
                      createBaseVNode("span", { class: "token comment" }, "// This function will be called once for all views in the CoordinatorLayout except the one the behavior has been added to."),
                      createTextVNode("\n  "),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "layoutDependsOn"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("\n    parent"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" CoordinatorLayout"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode("\n    child"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" TextView"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode("\n    dependency"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" View\n  "),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" dependency"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id "),
                      createBaseVNode("span", { class: "token operator" }, "=="),
                      createTextVNode(" R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("first_text_view\n  \n  "),
                      createBaseVNode("span", { class: "token comment" }, "// This function will be called whenever a view we depend on (according to layoutDependsOn())"),
                      createTextVNode("\n  "),
                      createBaseVNode("span", { class: "token comment" }, "// changes size or position. "),
                      createTextVNode("\n  "),
                      createBaseVNode("span", { class: "token comment" }, '// The parameter "child" is the view this behavior has been added to.'),
                      createTextVNode("\n  "),
                      createBaseVNode("span", { class: "token comment" }, '// The parameter "dependency" is the view that has changed size or position.'),
                      createTextVNode("\n  "),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onDependentViewChanged"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("\n    parent"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" CoordinatorLayout"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode("\n    child"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" TextView"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode("\n    dependency"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" View\n  "),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Boolean "),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token comment" }, "// Set our view's left margin to the same margin as the view we depend on (the first TextView)."),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" childLayoutParams "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" child"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layoutParams "),
                      createBaseVNode("span", { class: "token keyword" }, "as"),
                      createTextVNode(" ViewGroup"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("MarginLayoutParams\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" dependencyLayoutParams "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" dependency"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layoutParams "),
                      createBaseVNode("span", { class: "token keyword" }, "as"),
                      createTextVNode(" ViewGroup"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("MarginLayoutParams\n    childLayoutParams"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("leftMargin "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" dependencyLayoutParams"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("leftMargin\n    \n    "),
                      createBaseVNode("span", { class: "token comment" }, "// Tell the framework to repaint the view."),
                      createTextVNode("\n    child"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "requestLayout"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token comment" }, "// Return true to tell the CoordinatorLayout that we have changed this view."),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "return"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token boolean" }, "true"),
                      createTextVNode("\n    \n  "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n  \n"),
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
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
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
            null,
            "Some text",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "div",
            null,
            "Some other text",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "button",
            { onclick: "this.previousElementSibling.previousElementSibling.innerHTML = ' '+this.previousElementSibling.previousElementSibling.innerHTML; this.previousElementSibling.innerHTML = ' '+this.previousElementSibling.innerHTML" },
            "Move first text",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[19] || (_cache[19] = createStaticVNode('<p>Often we don&#39;t create our own behaviors (the code for behaviors usually get quite complicated), but instead use some behaviors others have created for us. The Android support library has some for different type of behaviors we can use.</p><h3 id="anchors" tabindex="-1"><a class="header-anchor" href="#anchors" aria-hidden="true">#</a> Anchors</h3><p>The <code>CoordinatorLayout</code> has one new way to position its views: using anchors. You can &quot;anchor&quot; a view to another view, and then that view will stick to that other view, even when that other view is moved.</p><p>Before we created our own <code>Behavior</code> to make one <code>TextView</code> follow another <code>TextView</code> as it moved. This is more or less what anchors are used for (implemented as a <code>Behavior</code>), so we could achieve similar functionality using the <code>layout_anchor*</code> attributes, as shown in the example below.</p><p>::::: Example</p>', 5)),
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
          default: withCtx(() => _cache[10] || (_cache[10] = [
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
                        createTextVNode("androidx.coordinatorlayout.widget.CoordinatorLayout")
                      ]),
                      createTextVNode("\n  "),
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
                      createTextVNode("\n  "),
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
                      createTextVNode("\n  "),
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
                      createTextVNode("\n  "),
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
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("TextView")
                      ]),
                      createTextVNode("\n      "),
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
                      createTextVNode("\n      "),
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
                      createTextVNode("\n      "),
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
                      createTextVNode("\n      "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("text")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("Some text."),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("TextView")
                      ]),
                      createTextVNode("\n      "),
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
                      createTextVNode("\n      "),
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
                      createTextVNode("\n      "),
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
                      createTextVNode("\n      "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("text")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("Some other text."),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode("\n      "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "app:"),
                        createTextVNode("layout_anchor")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@id/first_text_view"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode(" \n      "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "app:"),
                        createTextVNode("layout_anchorGravity")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("end|bottom"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode(" \n      "),
                    createBaseVNode("span", { class: "token comment" }, "<!-- Changes from before:\n           1. layout_marginTop has been removed.\n           1. Our own behavior has been removed.\n           2. Anchor this view to the end (right in LTR) and below the first TextView (the horizontal center of this view will match the end of the first TextView) -->"),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("Button")
                      ]),
                      createTextVNode("\n      "),
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
                      createTextVNode("\n      "),
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
                      createTextVNode("\n      "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/move_button"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode("\n      "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("layout_marginTop")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("60dp"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode("\n      "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("text")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("Move first text"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n\n"),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "</"),
                        createTextVNode("androidx.coordinatorlayout.widget.CoordinatorLayout")
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
                  createBaseVNode("div", { class: "highlight-line" }, " "),
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
        createVNode(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
          default: withCtx(() => _cache[11] || (_cache[11] = [
            createBaseVNode(
              "div",
              {
                class: "language-kotlin line-numbers-mode",
                "data-ext": "kt"
              },
              [
                createBaseVNode("pre", { class: "language-kotlin" }, [
                  createBaseVNode("code", null, [
                    createBaseVNode("span", { class: "token comment" }, "// Same as before."),
                    createTextVNode("\n"),
                    createBaseVNode("span", { class: "token keyword" }, "class"),
                    createTextVNode(" MainActivity "),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "AppCompatActivity"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n  \n  "),
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
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token keyword" }, "super"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "onCreate"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("savedInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token function" }, "setContentView"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("layout"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("activity_main"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" firstTextView "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" findViewById"),
                    createBaseVNode("span", { class: "token operator" }, "<"),
                    createTextVNode("TextView"),
                    createBaseVNode("span", { class: "token operator" }, ">"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("id"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("first_text_view"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" moveButton "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" findViewById"),
                    createBaseVNode("span", { class: "token operator" }, "<"),
                    createTextVNode("Button"),
                    createBaseVNode("span", { class: "token operator" }, ">"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("id"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("move_button"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n    \n    moveButton"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n      "),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" layoutParams "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" firstTextView"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("layoutParams "),
                    createBaseVNode("span", { class: "token keyword" }, "as"),
                    createTextVNode(" ViewGroup"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("MarginLayoutParams\n      layoutParams"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("leftMargin "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" layoutParams"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("leftMargin "),
                    createBaseVNode("span", { class: "token operator" }, "+"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token number" }, "5"),
                    createTextVNode("\n      firstTextView"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "requestLayout"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n    \n  "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n  \n"),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n")
                  ])
                ]),
                createBaseVNode("div", { class: "highlight-lines" }, [
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
      default: withCtx(() => _cache[12] || (_cache[12] = [
        createBaseVNode(
          "div",
          null,
          "Some text",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "div",
          null,
          "    Some other text",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "button",
          { onclick: "this.previousElementSibling.previousElementSibling.innerHTML = ' '+this.previousElementSibling.previousElementSibling.innerHTML; this.previousElementSibling.innerHTML = ' '+this.previousElementSibling.innerHTML" },
          "Move first text",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[20] || (_cache[20] = createBaseVNode(
      "p",
      null,
      ":::::",
      -1
      /* HOISTED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
