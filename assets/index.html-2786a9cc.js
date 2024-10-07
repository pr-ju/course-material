import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/guide/topics/resources/runtime-changes",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://commonsware.com/Jetpack/pages/chap-config-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createBaseVNode(
      "h1",
      {
        id: "android-runtime-configuration-changes",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-runtime-configuration-changes",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android Runtime Configuration Changes")
      ],
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createBaseVNode(
      "p",
      null,
      "So, how can Android so easily support i18n? The secret is through how it handles runtime configuration changes. When the user changes language, all the GUI is destroyed and then re-created. The hard part is to make sure that it's re-created exactly the way the user left it!",
      -1
      /* HOISTED */
    )),
    _cache[9] || (_cache[9] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/P107Qcnnyys",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-runtime-configuration-changes.pdf">android-runtime-configuration-changes.pdf</a></li><li><a href="android-runtime-configuration-changes.pptx">android-runtime-configuration-changes.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("Android Developers Guide's page ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Handle configuration changes")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createTextVNode("."))
      ]),
      createBaseVNode("li", null, [
        _cache[4] || (_cache[4] = createTextVNode("In the course book Elements of Android Jetpack: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_2, [
              _cache[3] || (_cache[3] = createTextVNode("Coping with Configurations")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ]),
    _cache[11] || (_cache[11] = createBaseVNode(
      "h2",
      {
        id: "example",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#example",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Example")
      ],
      -1
      /* HOISTED */
    )),
    _cache[12] || (_cache[12] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("code", null, "MainActivity"),
        createTextVNode(" with a button functioning as a counter starting on 0. It retains its state using the "),
        createBaseVNode("code", null, "savedInstanceState"),
        createTextVNode(" parameter.")
      ],
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
                        createBaseVNode("span", { class: "token namespace" }, "tools:"),
                        createTextVNode("context")
                      ]),
                      createBaseVNode("span", { class: "token attr-value" }, [
                        createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                        createBaseVNode("span", { class: "token punctuation" }, '"'),
                        createTextVNode(".MainActivity"),
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
                    createTextVNode(" MainActivity "),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "AppCompatActivity"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n    \n    "),
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
                    createTextVNode("\n        \n        counter "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "when"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("savedInstanceState"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
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
                    createTextVNode(" button"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" Button "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "findViewById"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("id"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("button"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token function" }, "with"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("button"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n            text "),
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
                    createTextVNode("\n            setOnClickListener "),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n                counter "),
                    createBaseVNode("span", { class: "token operator" }, "+="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token number" }, "1"),
                    createTextVNode("\n                text "),
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
                    createTextVNode("\n            "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n        "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n    \n    "),
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
