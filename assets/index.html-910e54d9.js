import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/reference/androidx/fragment/app/Fragment.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.android.com/guide/components/fragments",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://commonsware.com/Jetpack/pages/chap-fragments-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  return openBlock(), createElementBlock("div", null, [
    _cache[16] || (_cache[16] = createBaseVNode(
      "h1",
      {
        id: "android-fragments",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-fragments",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android Fragments")
      ],
      -1
      /* HOISTED */
    )),
    _cache[17] || (_cache[17] = createBaseVNode(
      "p",
      null,
      "With fragments we can re-use a part of the GUI in different activities or swap one part the GUI for another part.",
      -1
      /* HOISTED */
    )),
    _cache[18] || (_cache[18] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/c8KZkWdXkTY",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[19] || (_cache[19] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-fragments.pdf">android-fragments.pdf</a></li><li><a href="android-fragments.pptx">android-fragments.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("The documentation for the ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Fragment")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createTextVNode(" class."))
      ]),
      createBaseVNode("li", null, [
        _cache[4] || (_cache[4] = createTextVNode("Android Developers Guide's page ")),
        createBaseVNode("a", _hoisted_2, [
          _cache[3] || (_cache[3] = createTextVNode("Fragments")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[5] || (_cache[5] = createTextVNode("."))
      ]),
      createBaseVNode("li", null, [
        _cache[7] || (_cache[7] = createTextVNode("In the course book Elements of Android Jetpack: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_3, [
              _cache[6] || (_cache[6] = createTextVNode("Adopting Fragments")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ]),
    _cache[20] || (_cache[20] = createStaticVNode('<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="static-counter-fragment" tabindex="-1"><a class="header-anchor" href="#static-counter-fragment" aria-hidden="true">#</a> Static counter fragment</h3><p>The <code>CounterFragment</code> contains a counter <code>Button</code> starting on 0. Its state is retained across runtime configuration changes. Three instances of it are statically inserted into the <code>MainActivity</code> using the <code>&lt;fragment&gt;</code> tag.</p>', 3)),
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
          default: withCtx(() => _cache[8] || (_cache[8] = [
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("fragment")
                      ]),
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("name")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("your.package.CounterFragment"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/counterFragment1"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("fragment")
                      ]),
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("name")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("your.package.CounterFragment"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/counterFragment2"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("fragment")
                      ]),
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("name")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("your.package.CounterFragment"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/counterFragment3"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n    \n"),
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
        createVNode(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
          default: withCtx(() => _cache[9] || (_cache[9] = [
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
                    createTextVNode("\n    \n    "),
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
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "super"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "onCreate"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("savedInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token function" }, "setContentView"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("layout"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("activity_main"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
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
        createVNode(_component_CodeGroupItem, { title: "res/layout/fragment_counter.xml" }, {
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
                        createTextVNode("LinearLayout")
                      ]),
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("Button")
                      ]),
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/button"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n    \n"),
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
        }),
        createVNode(_component_CodeGroupItem, { title: "CounterFragment.kt" }, {
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
                    createBaseVNode("span", { class: "token keyword" }, "const"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" KEY_COUNTER "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string-literal singleline" }, [
                      createBaseVNode("span", { class: "token string" }, '"COUNTER"')
                    ]),
                    createTextVNode("\n\n"),
                    createBaseVNode("span", { class: "token keyword" }, "class"),
                    createTextVNode(" CounterFragment "),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "Fragment"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token keyword" }, "private"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "var"),
                    createTextVNode(" counter "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token number" }, "0"),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token keyword" }, "override"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "fun"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "onCreateView"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("\n        inflater"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" LayoutInflater"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode("\n        container"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" ViewGroup"),
                    createBaseVNode("span", { class: "token operator" }, "?"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode("\n        savedInstanceState"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Bundle"),
                    createBaseVNode("span", { class: "token operator" }, "?"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" View"),
                    createBaseVNode("span", { class: "token operator" }, "?"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "return"),
                    createTextVNode(" inflater"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "inflate"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("\n            R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("layout"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("fragment_counter"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode("\n            container"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode("\n            "),
                    createBaseVNode("span", { class: "token boolean" }, "false"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token keyword" }, "override"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "fun"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "onViewCreated"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("view"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" View"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" savedInstanceState"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Bundle"),
                    createBaseVNode("span", { class: "token operator" }, "?"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "super"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "onViewCreated"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("view"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" savedInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        \n        counter "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "when"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("savedInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n            "),
                    createBaseVNode("span", { class: "token keyword" }, "null"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token operator" }, "->"),
                    createTextVNode("\n                "),
                    createBaseVNode("span", { class: "token number" }, "0"),
                    createTextVNode("\n            "),
                    createBaseVNode("span", { class: "token keyword" }, "else"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token operator" }, "->"),
                    createTextVNode("\n                savedInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "getInt"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("KEY_COUNTER"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n        \n        "),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" button "),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Button "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" view"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "findViewById"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("id"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("button"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        \n        button"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("text "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string-literal singleline" }, [
                      createBaseVNode("span", { class: "token string" }, '"'),
                      createBaseVNode("span", { class: "token interpolation" }, [
                        createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
                        createBaseVNode("span", { class: "token expression" }, "counter")
                      ]),
                      createBaseVNode("span", { class: "token string" }, '"')
                    ]),
                    createTextVNode("\n        \n        button"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n            counter "),
                    createBaseVNode("span", { class: "token operator" }, "+="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token number" }, "1"),
                    createTextVNode("\n            button"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("text "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string-literal singleline" }, [
                      createBaseVNode("span", { class: "token string" }, '"'),
                      createBaseVNode("span", { class: "token interpolation" }, [
                        createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
                        createBaseVNode("span", { class: "token expression" }, "counter")
                      ]),
                      createBaseVNode("span", { class: "token string" }, '"')
                    ]),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n        \n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token keyword" }, "override"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "fun"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "onSaveInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("outState"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Bundle"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "super"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "onSaveInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("outState"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        outState"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "putInt"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("KEY_COUNTER"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" counter"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
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
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
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
    _cache[21] || (_cache[21] = createStaticVNode('<h3 id="dynamic-countdown-fragment" tabindex="-1"><a class="header-anchor" href="#dynamic-countdown-fragment" aria-hidden="true">#</a> Dynamic countdown fragment</h3><p>The <code>CounterFragment</code> functions as a countdown. The start value is configurable and retained across runtime configuration changes using the arguments <code>Bundle</code>. Its state is retained across runtime configuration changes using the <code>savedInstanceState</code> <code>Bundle</code>. Three instances of it are dynamically inserted into the <code>MainActivity</code>.</p>', 2)),
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
          default: withCtx(() => _cache[12] || (_cache[12] = [
            createBaseVNode(
              "div",
              {
                class: "language-xml line-numbers-mode",
                "data-ext": "xml"
              },
              [
                createBaseVNode("pre", { class: "language-xml" }, [
                  createBaseVNode("code", null, [
                    createBaseVNode("span", { class: "token prolog" }, '<?xml version="1.0" encoding="utf-8"?>'),
                    createTextVNode("\n"),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("LinearLayout")
                      ]),
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("FrameLayout")
                      ]),
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/frameLayout1"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("FrameLayout")
                      ]),
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/frameLayout2"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n    \n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("FrameLayout")
                      ]),
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/frameLayout3"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n    \n"),
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
        createVNode(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
          default: withCtx(() => _cache[13] || (_cache[13] = [
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
                    createTextVNode("\n    \n    "),
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
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "super"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "onCreate"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("savedInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token function" }, "setContentView"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("layout"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("activity_main"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        \n        "),
                    createBaseVNode("span", { class: "token keyword" }, "if"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("savedInstanceState "),
                    createBaseVNode("span", { class: "token operator" }, "=="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "null"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n            supportFragmentManager\n                "),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "beginTransaction"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n                "),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "add"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("id"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("frameLayout1"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" CounterFragment"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "newInstance"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token number" }, "5"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n                "),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "add"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("id"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("frameLayout2"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" CounterFragment"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "newInstance"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token number" }, "6"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n                "),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "add"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("id"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("frameLayout3"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" CounterFragment"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "newInstance"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token number" }, "3"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n                "),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "commit"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n        \n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
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
        createVNode(_component_CodeGroupItem, { title: "res/layout/fragment_counter.xml" }, {
          default: withCtx(() => _cache[14] || (_cache[14] = [
            createBaseVNode(
              "div",
              {
                class: "language-xml line-numbers-mode",
                "data-ext": "xml"
              },
              [
                createBaseVNode("pre", { class: "language-xml" }, [
                  createBaseVNode("code", null, [
                    createBaseVNode("span", { class: "token prolog" }, '<?xml version="1.0" encoding="utf-8"?>'),
                    createTextVNode("\n"),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("LinearLayout")
                      ]),
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
                        createTextVNode("tools")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("http://schemas.android.com/tools"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
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
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "tools:"),
                        createTextVNode("context")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode(".CounterFragment"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createBaseVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("TextView")
                      ]),
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/textView"),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("text")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("-"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/decrementButton"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token punctuation" }, "<"),
                        createTextVNode("Button")
                      ]),
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
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
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("text")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("Reset"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token attr-name" }, [
                        createBaseVNode("span", { class: "token namespace" }, "android:"),
                        createTextVNode("id")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode("@+id/resetButton"),
                        createBaseVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      createBaseVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    createTextVNode("\n\n"),
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
        createVNode(_component_CodeGroupItem, { title: "CounterFragment.kt" }, {
          default: withCtx(() => _cache[15] || (_cache[15] = [
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
                    createTextVNode(" CounterFragment "),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "Fragment"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token keyword" }, "companion"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "object"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "const"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" KEY_COUNTER "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string-literal singleline" }, [
                      createBaseVNode("span", { class: "token string" }, '"COUNTER"')
                    ]),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "const"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" ARG_START_VALUE "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string-literal singleline" }, [
                      createBaseVNode("span", { class: "token string" }, '"START_VALUE"')
                    ]),
                    createTextVNode("\n\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "fun"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "newInstance"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("startValue"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Int"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "CounterFragment"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "apply"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n            arguments "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "Bundle"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "apply"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n                "),
                    createBaseVNode("span", { class: "token function" }, "putInt"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("ARG_START_VALUE"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" startValue"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n            "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token keyword" }, "private"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "var"),
                    createTextVNode(" counter "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token number" }, "0"),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token keyword" }, "override"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "fun"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "onCreateView"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("\n        inflater"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" LayoutInflater"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode("\n        container"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" ViewGroup"),
                    createBaseVNode("span", { class: "token operator" }, "?"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode("\n        savedInstanceState"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Bundle"),
                    createBaseVNode("span", { class: "token operator" }, "?"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" View"),
                    createBaseVNode("span", { class: "token operator" }, "?"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "return"),
                    createTextVNode(" inflater"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "inflate"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("\n            R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("layout"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("fragment_counter"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode("\n            container"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode("\n            "),
                    createBaseVNode("span", { class: "token boolean" }, "false"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token keyword" }, "override"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "fun"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "onViewCreated"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("view"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" View"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" savedInstanceState"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Bundle"),
                    createBaseVNode("span", { class: "token operator" }, "?"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "super"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "onViewCreated"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("view"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" savedInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n\n        counter "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "when"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("savedInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n            "),
                    createBaseVNode("span", { class: "token keyword" }, "null"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token operator" }, "->"),
                    createTextVNode("\n                arguments"),
                    createBaseVNode("span", { class: "token operator" }, "!!"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "getInt"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("ARG_START_VALUE"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n            "),
                    createBaseVNode("span", { class: "token keyword" }, "else"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token operator" }, "->"),
                    createTextVNode("\n                savedInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "getInt"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("KEY_COUNTER"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" textView"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" TextView "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" view"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "findViewById"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("id"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("textView"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" resetButton "),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Button "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" view"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "findViewById"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("id"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("resetButton"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" decrementButton "),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Button "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" view"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "findViewById"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("id"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("decrementButton"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n\n        textView"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("text "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string-literal singleline" }, [
                      createBaseVNode("span", { class: "token string" }, '"'),
                      createBaseVNode("span", { class: "token interpolation" }, [
                        createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
                        createBaseVNode("span", { class: "token expression" }, "counter")
                      ]),
                      createBaseVNode("span", { class: "token string" }, '"')
                    ]),
                    createTextVNode("\n\n        decrementButton"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n            counter "),
                    createBaseVNode("span", { class: "token operator" }, "-="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token number" }, "1"),
                    createTextVNode("\n            textView"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("text "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string-literal singleline" }, [
                      createBaseVNode("span", { class: "token string" }, '"'),
                      createBaseVNode("span", { class: "token interpolation" }, [
                        createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
                        createBaseVNode("span", { class: "token expression" }, "counter")
                      ]),
                      createBaseVNode("span", { class: "token string" }, '"')
                    ]),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n        resetButton"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n            counter "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" arguments"),
                    createBaseVNode("span", { class: "token operator" }, "!!"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "getInt"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("ARG_START_VALUE"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n            textView"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("text "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string-literal singleline" }, [
                      createBaseVNode("span", { class: "token string" }, '"'),
                      createBaseVNode("span", { class: "token interpolation" }, [
                        createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
                        createBaseVNode("span", { class: "token expression" }, "counter")
                      ]),
                      createBaseVNode("span", { class: "token string" }, '"')
                    ]),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n\n    "),
                    createBaseVNode("span", { class: "token keyword" }, "override"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "fun"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "onSaveInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("outState"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Bundle"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token keyword" }, "super"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "onSaveInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("outState"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        outState"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "putInt"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("KEY_COUNTER"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" counter"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n    "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n\n"),
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
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
                  createBaseVNode("div", { class: "line-number" }),
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
    })
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
