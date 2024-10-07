import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, g as createCommentVNode, d as createVNode, f as createStaticVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/training/appbar/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://commonsware.com/Jetpack/pages/chap-appbar-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = { class: "custom-container tip" };
const _hoisted_4 = { class: "custom-container tip" };
const _hoisted_5 = {
  href: "https://developer.android.com/about/versions/android-3.0.html#action-bar",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = { class: "custom-container tip" };
const _hoisted_7 = {
  href: "https://developer.android.com/training/search/setup",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = { class: "custom-container tip" };
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_smartphone = resolveComponent("smartphone");
  return openBlock(), createElementBlock("div", null, [
    _cache[47] || (_cache[47] = createBaseVNode(
      "h1",
      {
        id: "android-app-bar",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-app-bar",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android App Bar")
      ],
      -1
      /* HOISTED */
    )),
    _cache[48] || (_cache[48] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("In Android 3 the "),
        createBaseVNode("em", null, "Title Bar"),
        createTextVNode(" was changed to the "),
        createBaseVNode("em", null, "Action Bar"),
        createTextVNode(" and got a bit more powerful. Then Material Design started to call it for "),
        createBaseVNode("em", null, "App bar"),
        createTextVNode(". Let's take a look at some of the things we can use it for.")
      ],
      -1
      /* HOISTED */
    )),
    createCommentVNode("\n## Lecture material\n* [android-app-bar.pdf](android-app-bar.pdf)\n* [android-app-bar.pptx](android-app-bar.pptx)\n"),
    _cache[49] || (_cache[49] = createBaseVNode(
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
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("Android Developers Guide's page ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Add the app bar")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createTextVNode("."))
      ]),
      createBaseVNode("li", null, [
        _cache[4] || (_cache[4] = createTextVNode("In the course book Elements of Android Jetpack: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_2, [
              _cache[3] || (_cache[3] = createTextVNode("Configuring the App Bar")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ]),
    _cache[50] || (_cache[50] = createStaticVNode('<h2 id="the-title-bar" tabindex="-1"><a class="header-anchor" href="#the-title-bar" aria-hidden="true">#</a> The Title Bar</h2><p>When we first got Android, activities had a bar at the top called the <em>Title Bar</em>. As the name suggests, it was used to display the title of the activity (the value for the <code>label</code> attribute the <code>&lt;activity&gt;</code> has in the <code>AndroidManifest.xml</code> file, or (if that attribute is missing in the <code>&lt;activity&gt;</code>) the value for the <code>label</code> attribute the <code>&lt;application&gt;</code> element has).</p>', 2)),
    createBaseVNode("div", _hoisted_3, [
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
        "Example showing what the Title Bar looked like on the first versions of Android.",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
                          createTextVNode("manifest")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "..."),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("application")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "..."),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("activity")
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("name")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode(".TestActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("label")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("This is the Title Bar"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("application")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("manifest")
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
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
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
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Hello!"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode(" \n	\n"),
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
          createVNode(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
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
                      createTextVNode("Activity\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" TestActivity "),
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
                      createTextVNode(),
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
                      createTextVNode("activity_test"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n"),
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
      createVNode(_component_smartphone, null, {
        default: withCtx(() => _cache[8] || (_cache[8] = [
          createBaseVNode(
            "div",
            { style: { "background-color": "gray", "color": "white", "font-size": "75%", "font-weight": "bold", "padding": "1% 4%" } },
            " This is the Title Bar ",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "div",
            null,
            " Hello ",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[51] || (_cache[51] = createStaticVNode('<h2 id="the-options-menu" tabindex="-1"><a class="header-anchor" href="#the-options-menu" aria-hidden="true">#</a> The Options Menu</h2><p>An activity can contain a &quot;main&quot; menu, which is called the <em>Options Menu</em>. In the first versions of Android, an Android device was expected to contain a dedicated Menu hardware button (similar to the dedicated Back and Home hardware buttons), and when that button was clicked, the Options Menu is showed in front of the activity.</p><p>When the Options Menu should be shown (e.g. when the user clicks on the Menu hardware button), the method <code>Activity.onCreateOptionsMenu()</code> is called, and a <code>Menu</code> object is passed as an argument to it. That <code>Menu</code> object represents the Options Menu, and in this method you should populate the <code>Menu</code> object with the <code>MenuItem</code>s you want it to show. Then the GUI will visualize those <code>MenuItem</code>s on the screen.</p><div class="custom-container tip"><p class="custom-container-title">Populating the Menu</p><p>To populate a <code>Menu</code> with <code>MenuItems</code>, you can call various methods on the <code>Menu</code> object (e.g. <code>Menu.add()</code>), but most often you define the <code>MenuItem</code>s in an XML menu resource file in <code>res/menu/</code>, and then use a <code>MenuInflater</code> to populate the <code>Menu</code> based on the content in the menu resource file. See the example below for some of the details.</p></div><p>When the user clicks on one of the <code>MenuItem</code>s on the screen, the method <code>Activity.onOptionsItemSelected()</code> is called, and you receive the <code>MenuItem</code> the user clicked on as an argument, and you can react to the user&#39;s choice.</p><div class="custom-container tip"><p class="custom-container-title">More configurable!</p><p>Menus are more configurable than explained here. For example, each <code>MenuItem</code> can also have an icon that is shown instead of or in addition to the title of the <code>MenuItem</code>, etc.</p></div>', 6)),
    createBaseVNode("div", _hoisted_4, [
      _cache[16] || (_cache[16] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[17] || (_cache[17] = createBaseVNode(
        "p",
        null,
        "Example showing how the Options Menu worked on the first versions of Android.",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
                          createTextVNode("manifest")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "..."),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("application")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "..."),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("activity")
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("name")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode(".TestActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("label")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("This is the Title Bar"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("application")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("manifest")
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
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
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
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/the_text_view"),
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
                          createTextVNode("Hello!"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode(" \n	\n"),
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
          }),
          createVNode(_component_CodeGroupItem, { title: "res/menu/activity_test.xml" }, {
            default: withCtx(() => _cache[13] || (_cache[13] = [
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
                          createTextVNode("menu")
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
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token comment" }, "<!-- Should use string resources for the title attribute! -->"),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("item")
                        ]),
                        createTextVNode("\n        "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("title")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("The first choice"),
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
                          createTextVNode("@+id/first_menu_item"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("item")
                        ]),
                        createTextVNode("\n        "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("title")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("The second choice"),
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
                          createTextVNode("@+id/second_menu_item"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("menu")
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
          createVNode(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
            default: withCtx(() => _cache[14] || (_cache[14] = [
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
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("TextView\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" TestActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "lateinit"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "var"),
                      createTextVNode(" theTextView "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" TextView\n    \n	"),
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
                      createTextVNode("activity_test"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n        theTextView "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "findViewById"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("the_text_view"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token comment" }, "// Called when the menu needs to be created."),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreateOptionsMenu"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("menu"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Menu"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Boolean "),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token comment" }, "// Add menu items from the menu XML file."),
                      createTextVNode("\n        menuInflater"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "inflate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("menu"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_test"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" menu"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token comment" }, "// Add a menu item programmatically (should use string resources)."),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" menuItem "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" menu"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "add"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The third choice"')
                      ]),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        menuItem"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnMenuItemClickListener"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n            theTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The third one"')
                      ]),
                      createTextVNode("\n            "),
                      createBaseVNode("span", { class: "token boolean" }, "true"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// Return true to indicate we handled the click."),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token comment" }, "// Let the class we inherit from add menu items if it wants."),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token comment" }, "// Returning true means the menu was successfully created."),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token keyword" }, "return"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreateOptionsMenu"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("menu"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n    "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token comment" }, "// Called when the user has clicked on an Options Menu item."),
                      createTextVNode("\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onOptionsItemSelected"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("item"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" MenuItem"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Boolean "),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token comment" }, "// Check the id of the Menu Item to figure out which"),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token comment" }, "// it was."),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token keyword" }, "when"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("item"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("itemId"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n            R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("first_menu_item "),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(" theTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The first one"')
                      ]),
                      createTextVNode("\n            R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("second_menu_item "),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(" theTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The second one"')
                      ]),
                      createTextVNode("\n            "),
                      createBaseVNode("span", { class: "token comment" }, "// If we can't handle the clicked menu item, let"),
                      createTextVNode("\n            "),
                      createBaseVNode("span", { class: "token comment" }, "// the activity we inherit from try and handle it."),
                      createTextVNode("\n            "),
                      createBaseVNode("span", { class: "token keyword" }, "else"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "return"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onOptionsItemSelected"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("item"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token comment" }, "// Return true to indicate that we handled the click."),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token keyword" }, "return"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token boolean" }, "true"),
                      createTextVNode("\n\n    "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n	\n"),
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
      createVNode(_component_smartphone, null, {
        default: withCtx(() => _cache[15] || (_cache[15] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "position": "relative" } },
            [
              createBaseVNode("div", { style: { "background-color": "grey", "color": "white", "font-size": "75%", "font-weight": "bold", "padding": "1% 4%" } }, " This is the Title Bar "),
              createBaseVNode("div", { id: "text-6646456" }, " Hello "),
              createBaseVNode("div", {
                id: "menu-45345",
                style: { "position": "absolute", "text-align": "center", "bottom": "0", "background-color": "black", "color": "silver", "display": "grid", "grid-template-rows": "1fr", "grid-template-columns": "1fr 1fr 1fr", "border": "1px solid white", "visibility": "hidden", "cursor": "pointer" }
              }, [
                createBaseVNode("div", {
                  style: { "border-right": "1px solid white" },
                  onclick: "(document.getElementById('text-6646456').innerText = 'The first one') && (document.querySelector('#menu-45345').style.visibility = 'hidden')"
                }, " The first choice "),
                createBaseVNode("div", {
                  style: { "border-right": "1px solid white" },
                  onclick: "(document.getElementById('text-6646456').innerText = 'The second one') && (document.querySelector('#menu-45345').style.visibility = 'hidden')"
                }, " The second choice"),
                createBaseVNode("div", {
                  style: { "border-right": "1px solid white" },
                  onclick: "(document.getElementById('text-6646456').innerText = 'The third one') && (document.querySelector('#menu-45345').style.visibility = 'hidden')"
                }, " The third choice ")
              ])
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[18] || (_cache[18] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("The dedicated Menu hardware button: "),
          createBaseVNode("button", { onclick: "document.querySelector('#menu-45345').style.visibility = (document.querySelector('#menu-45345').style.visibility == 'visible' ? 'hidden' : 'visible')" }, "Menu")
        ],
        -1
        /* HOISTED */
      ))
    ]),
    _cache[52] || (_cache[52] = createBaseVNode(
      "h2",
      {
        id: "the-action-bar",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#the-action-bar",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" The Action Bar")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[20] || (_cache[20] = createTextVNode("In Android 3.0, when Android officially started to support tablets, the Title Bar was replaced with the ")),
      createBaseVNode("a", _hoisted_5, [
        _cache[19] || (_cache[19] = createTextVNode("Action Bar")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[21] || (_cache[21] = createTextVNode(". The Action Bar can be seen as a more powerful version of the Title Bar, because it can not only display the title of the activity, but also contains additional features. To get a reference to the Action Bar, use ")),
      _cache[22] || (_cache[22] = createBaseVNode(
        "code",
        null,
        "Activity.getActionBar()",
        -1
        /* HOISTED */
      )),
      _cache[23] || (_cache[23] = createTextVNode("."))
    ]),
    _cache[53] || (_cache[53] = createStaticVNode("<p>To display the logo of the application in the Action Bar, use <code>theActionBar.setDisplayUseLogoEnabled(true)</code> (discouraged from Android 5 and on).</p><p>By default, the Action Bar contains the Options Menu items as a dropdown list. That menu is now called the <em>Overflow Menu</em>, but in the code we still refer to it as the Options Menu (you don&#39;t need to do anything special to get the Overflow M; <code>Activity.onCreateOptionsMenu()</code> and <code>Activity.onOptionsItemSelected()</code> will be called when needed, just as before).</p><p>Each <code>MenuItem</code> can contain additional information about how it should be shown in the Action Bar/Overflow Menu. For example, by setting <code>showAsAction</code> to <code>ifRoom</code> on a <code>MenuItem</code>, that <code>MenuItem</code> will be shown directly in the Action Bar next to the dropdown list if the user&#39;s screen is wide enough.</p>", 3)),
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
        "Example showing how the Options Menu is shown on Android devices after Android 3.",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: withCtx(() => _cache[24] || (_cache[24] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token comment" }, "<!-- Same as before, but changed label. -->"),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("manifest")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "..."),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("application")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "..."),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("activity")
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("name")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode(".TestActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("label")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("The Action Bar"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("application")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("manifest")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
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
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
            default: withCtx(() => _cache[25] || (_cache[25] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token comment" }, "<!-- Same as before. -->"),
                      createTextVNode("\n"),
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
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/the_text_view"),
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
                          createTextVNode("Hello!"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode(" \n	\n"),
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
          createVNode(_component_CodeGroupItem, { title: "res/menu/activity_test.xml" }, {
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
                      createBaseVNode("span", { class: "token comment" }, "<!-- Added the app namespace and the showAsAction attribute, and changed the title attribute. -->"),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("menu")
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
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("item")
                        ]),
                        createTextVNode("\n        "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("title")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("The first choice"),
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
                          createTextVNode("@+id/first_menu_item"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("item")
                        ]),
                        createTextVNode("\n        "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("title")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Second"),
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
                          createTextVNode("@+id/second_menu_item"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n        "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("showAsAction")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("ifRoom"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("menu")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
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
          createVNode(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
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
                      createBaseVNode("span", { class: "token comment" }, "// Same as before."),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("app"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Activity\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("TextView\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" TestActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "lateinit"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "var"),
                      createTextVNode(" theTextView "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" TextView\n    \n	"),
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
                      createTextVNode("activity_test"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n        theTextView "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "findViewById"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("the_text_view"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreateOptionsMenu"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("menu"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Menu"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Boolean "),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n        \n        menuInflater"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "inflate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("menu"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_test"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" menu"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" menuItem "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" menu"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "add"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The third choice"')
                      ]),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        menuItem"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnMenuItemClickListener"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n            theTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The third one"')
                      ]),
                      createTextVNode("\n            "),
                      createBaseVNode("span", { class: "token boolean" }, "true"),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token keyword" }, "return"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreateOptionsMenu"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("menu"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n    "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onOptionsItemSelected"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("item"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" MenuItem"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Boolean "),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token keyword" }, "when"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("item"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("itemId"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n            R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("first_menu_item "),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(" theTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The first one"')
                      ]),
                      createTextVNode("\n            R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("second_menu_item "),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(" theTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The second one"')
                      ]),
                      createTextVNode("\n            "),
                      createBaseVNode("span", { class: "token keyword" }, "else"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "return"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onOptionsItemSelected"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("item"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token keyword" }, "return"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token boolean" }, "true"),
                      createTextVNode("\n        \n    "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n	\n"),
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
      createVNode(_component_smartphone, null, {
        default: withCtx(() => _cache[28] || (_cache[28] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "position": "relative", "box-sizing": "border-box" } },
            [
              createBaseVNode("div", { style: { "background-color": "blue", "color": "white", "font-size": "100%", "padding": "5% 1%", "display": "grid", "grid-template-columns": "auto 1fr auto auto" } }, [
                createBaseVNode("span", { style: { "grid-column": "1", "font-weight": "bold" } }, " The Action Bar "),
                createBaseVNode("span", { style: { "grid-column": "2" } }),
                createBaseVNode("span", {
                  style: { "grid-column": "3", "cursor": "pointer" },
                  onclick: "document.getElementById('text-5432').innerText = 'The second one'"
                }, " Second "),
                createBaseVNode("span", {
                  style: { "grid-column": "4", "padding": "0 0.5em", "cursor": "pointer" },
                  onclick: "document.getElementById('menu-789').style.visibility = 'visible'"
                }, " ⋮ ")
              ]),
              createBaseVNode("div", { id: "text-5432" }, " Hello "),
              createBaseVNode("div", {
                id: "menu-789",
                style: { "position": "absolute", "top": "1.5em", "right": "0.5em", "cursor": "pointer", "visibility": "hidden", "background-color": "white", "border": "1px solid black", "font-size": "90%" }
              }, [
                createBaseVNode("div", {
                  style: { "border-right": "1px solid white", "border-bottom": "1px solid black" },
                  onclick: "(document.getElementById('text-5432').innerText = 'The first one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
                }, " The first choice "),
                createBaseVNode("div", {
                  style: { "border-right": "1px solid white" },
                  onclick: "(document.getElementById('text-5432').innerText = 'The third one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
                }, " The third choice ")
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
    createBaseVNode("p", null, [
      _cache[32] || (_cache[32] = createTextVNode("When clicking on a ")),
      _cache[33] || (_cache[33] = createBaseVNode(
        "code",
        null,
        "MenuItem",
        -1
        /* HOISTED */
      )),
      _cache[34] || (_cache[34] = createTextVNode(", it's also possible to replace the main content in the Action Bar with another temporary widget. The typical example is the ")),
      _cache[35] || (_cache[35] = createBaseVNode(
        "code",
        null,
        "SearchView",
        -1
        /* HOISTED */
      )),
      _cache[36] || (_cache[36] = createTextVNode(", which kind of is an ")),
      _cache[37] || (_cache[37] = createBaseVNode(
        "code",
        null,
        "EditText",
        -1
        /* HOISTED */
      )),
      _cache[38] || (_cache[38] = createTextVNode(" the user can type text into to search for something (you need to handle the search yourself). For an example of this, see the Android Developer training ")),
      createBaseVNode("a", _hoisted_7, [
        _cache[31] || (_cache[31] = createTextVNode("Setting Up the Search Interface")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[39] || (_cache[39] = createTextVNode("."))
    ]),
    _cache[54] || (_cache[54] = createStaticVNode('<p>The Action Bar can also contain the tab titles, and clicking on them can change which fragment to show below the Action Bar. There are more things the Action Bar can be used for, read the documentation if you&#39;re curious.</p><p>Because the Action Bar was added in Android 3, applications running on older versions of Android won&#39;t have it. New features have also been added to it after Android 3, so even if your application runs on a version that contains the Action Bar, you can&#39;t use the latest features it contains, because they will only work on devices running the latest version of Android. Sight.</p><h3 id="the-app-bar" tabindex="-1"><a class="header-anchor" href="#the-app-bar" aria-hidden="true">#</a> The App Bar</h3><p>Material Design was released in Android 5, and they had a component named <em>App Bar</em>, which more or less served the same purpose as the Action Bar in Android. So from that time and on, the Action Bar is also often referred to as the App Bar, since that&#39;s the name it has in Material Design.</p><h3 id="the-toolbar" tabindex="-1"><a class="header-anchor" href="#the-toolbar" aria-hidden="true">#</a> The Toolbar</h3><p>In Android 5, they made it possible to use a view in the activity&#39;s GUI to function as the activity&#39;s Action Bar, and they created a dedicated view for this very purpose: the <code>Toolbar</code>. This way, it&#39;s possible to implement different type of bars to use as your Action Bar, and they are just as flexible as ordinary views in your GUI, so you can for example use them in animations (move them around, change their sizes, etc.).</p><p>If you want to use a <code>Toolbar</code> as you Action Bar in an activity, you:</p><ol><li>Tell the activity to not use its own default Action Bar. You do that in your Application/Activity theme by adding <code>&lt;item name=&quot;android:windowActionBar&quot;&gt;false&lt;/item&gt;</code> to the theme (or by inheriting from a theme ending with the name <code>.NoActionBar</code>, which already contains this item)</li><li>Add a <code>Toolbar</code> to your activity&#39;s GUI (i.e. in the XML layout file used by the activity)</li><li>Tell your activity that the <code>Toolbar</code> you have in the GUI should be used as the activity&#39;s Action Bar. You do that by calling the activity&#39;s method <code>setActionBar()</code> and pass it a reference to your <code>Toolbar</code></li></ol><p>However, to stay backward compatible, you use Android Jetpack implementations:</p><ol><li>Inherit from <code>AppCompatActivity</code> instead of <code>Activity</code></li><li>Use the <code>Toolbar</code> implementation from Android JetPack instead of the <code>Toolbar</code> implementation from Android</li><li>On the activity, call <code>setSupportActionBar()</code> instead of <code>setActionBar()</code></li></ol>', 10)),
    createBaseVNode("div", _hoisted_8, [
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
        "Example showing an app working the same way as before, but now in a backward compatible way.",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: withCtx(() => _cache[40] || (_cache[40] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token comment" }, "<!-- Same as before, but changed to a NoActionBar theme. -->"),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("manifest")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "..."),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("application")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "..."),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("activity")
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("name")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode(".TestActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("label")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("The Action Bar"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n            "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("theme")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Theme.MaterialComponents.DayNight.NoActionBar"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("application")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("manifest")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
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
          }),
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
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
                      createBaseVNode("span", { class: "token comment" }, "<!-- Same as before, but added a Toolbar. -->"),
                      createTextVNode("\n"),
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
                          createTextVNode("androidx.appcompat.widget.Toolbar")
                        ]),
                        createTextVNode("\n        "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/toolbar"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
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
                          createTextVNode("?attr/actionBarSize"),
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
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/the_text_view"),
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
                          createTextVNode("Hello!"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode(" \n	\n"),
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
          createVNode(_component_CodeGroupItem, { title: "res/menu/activity_test.xml" }, {
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
                      createBaseVNode("span", { class: "token comment" }, "<!-- Same as before. -->"),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("menu")
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
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("item")
                        ]),
                        createTextVNode("\n        "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("title")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("The first choice"),
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
                          createTextVNode("@+id/first_menu_item"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("item")
                        ]),
                        createTextVNode("\n        "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("title")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Second"),
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
                          createTextVNode("@+id/second_menu_item"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n        "),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "app:"),
                          createTextVNode("showAsAction")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("ifRoom"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("menu")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
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
          createVNode(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
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
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("TextView\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" TestActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "AppCompatActivity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n    "),
                      createBaseVNode("span", { class: "token keyword" }, "lateinit"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "var"),
                      createTextVNode(" theTextView "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" TextView\n    \n	"),
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
                      createTextVNode("activity_test"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token function" }, "setSupportActionBar"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token function" }, "findViewById"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("toolbar"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n        theTextView "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "findViewById"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("the_text_view"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onCreateOptionsMenu"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("menu"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Menu"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Boolean "),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n        \n        menuInflater"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "inflate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("menu"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_test"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" menu"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" menuItem "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" menu"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "add"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The third choice"')
                      ]),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        menuItem"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnMenuItemClickListener"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n            theTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The third one"')
                      ]),
                      createTextVNode("\n            "),
                      createBaseVNode("span", { class: "token boolean" }, "true"),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token keyword" }, "return"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onCreateOptionsMenu"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("menu"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        \n    "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n    "),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onOptionsItemSelected"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("item"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" MenuItem"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Boolean "),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token keyword" }, "when"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("item"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("itemId"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n            R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("first_menu_item "),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(" theTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The first one"')
                      ]),
                      createTextVNode("\n            R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("second_menu_item "),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(" theTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"The second one"')
                      ]),
                      createTextVNode("\n            "),
                      createBaseVNode("span", { class: "token keyword" }, "else"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "return"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "super"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "onOptionsItemSelected"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("item"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n        "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n        \n        "),
                      createBaseVNode("span", { class: "token keyword" }, "return"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token boolean" }, "true"),
                      createTextVNode("\n        \n    "),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n    \n	\n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
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
      createVNode(_component_smartphone, null, {
        default: withCtx(() => _cache[44] || (_cache[44] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "width": "100%", "position": "relative", "box-sizing": "border-box" } },
            [
              createBaseVNode("div", { style: { "background-color": "blue", "color": "white", "font-size": "100%", "padding": "5% 1%", "display": "grid", "grid-template-columns": "auto 1fr auto auto" } }, [
                createBaseVNode("span", { style: { "grid-column": "1", "font-weight": "bold" } }, " The Action Bar "),
                createBaseVNode("span", { style: { "grid-column": "2" } }),
                createBaseVNode("span", {
                  style: { "grid-column": "3", "cursor": "pointer" },
                  onclick: "document.getElementById('text-5432').innerText = 'The second one'"
                }, " Second "),
                createBaseVNode("span", {
                  style: { "grid-column": "4", "padding": "0 0.5em", "cursor": "pointer" },
                  onclick: "document.getElementById('menu-789').style.visibility = 'visible'"
                }, " ⋮ ")
              ]),
              createBaseVNode("div", { id: "text-5432" }, " Hello "),
              createBaseVNode("div", {
                id: "menu-789",
                style: { "position": "absolute", "top": "1.5em", "right": "0.5em", "cursor": "pointer", "visibility": "hidden", "background-color": "white", "border": "1px solid black", "font-size": "90%" }
              }, [
                createBaseVNode("div", {
                  style: { "border-right": "1px solid white", "border-bottom": "1px solid black" },
                  onclick: "(document.getElementById('text-5432').innerText = 'The first one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
                }, " The first choice "),
                createBaseVNode("div", {
                  style: { "border-right": "1px solid white" },
                  onclick: "(document.getElementById('text-5432').innerText = 'The third one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
                }, " The third choice ")
              ])
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
