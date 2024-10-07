import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = { class: "custom-container tip" };
const _hoisted_2 = { class: "custom-container tip" };
const _hoisted_3 = { class: "custom-container tip" };
const _hoisted_4 = { class: "custom-container tip" };
const _hoisted_5 = { class: "custom-container tip" };
const _hoisted_6 = { class: "custom-container tip" };
const _hoisted_7 = { class: "custom-container tip" };
const _hoisted_8 = { class: "custom-container tip" };
const _hoisted_9 = {
  href: "https://developer.android.com/topic/libraries/view-binding#setup",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = { class: "custom-container tip" };
const _hoisted_11 = { class: "custom-container tip" };
function _sfc_render(_ctx, _cache) {
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_Smartphone = resolveComponent("Smartphone");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[50] || (_cache[50] = createBaseVNode(
      "h1",
      {
        id: "android-views-and-layouts",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-views-and-layouts",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android Views and Layouts")
      ],
      -1
      /* HOISTED */
    )),
    _cache[51] || (_cache[51] = createBaseVNode(
      "p",
      null,
      "Here's a short tutorial on how to create basic graphical user interfaces in Android Studio.",
      -1
      /* HOISTED */
    )),
    _cache[52] || (_cache[52] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/nJ-9jQw69SU",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[53] || (_cache[53] = createStaticVNode('<h2 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> Views</h2><p>The graphical user interface (GUI) used in Android consists of <em>views</em>. The <code>View</code> class represents a general view, and sub-classes to <code>View</code> represent specific views, for example:</p><ul><li>The sub-class <code>Button</code> represents a view displaying a button the user can click on</li><li>The sub-class <code>TextView</code> represents a view displaying some text</li><li>The sub-class <code>ImageView</code> represents a view displaying an image</li><li>Etc.</li></ul><p>The GUI can be specified either:</p><ul><li>Programmatically, in which case you create new instances of the <code>View</code> classes you need to use yourself in the programming language you use (Java/Kotlin/whatever)</li><li>Declaratively in XML, in which case you can use functionality from the Android framework to create the <code>View</code> instances you need based on the content of an XML file</li></ul><p>Most often you specify the GUI in an XML file, since that&#39;s usually easier to read and write. This is especially true when the GUI consists of many <code>View</code>s. XML files specifying what the GUI should look like are put in the folder <code>res/layout/</code>, and named <code>in_this_convention.xml</code>.</p><div class="custom-container warning"><p class="custom-container-title">About the context</p><p>Most of the constructors in classes from the Android framework has a parameter called <code>context</code>. Here you should pass an instance of the <code>Context</code> class. The <code>Context</code> class keeps track of information the classes needs to function properly, such as which preferred language the user has selected on the device. Whenever you write your own code making use of these classes, the framework will provide you with a reference to a <code>Context</code> you can use. For example, the <code>Activity</code> class inherits from <code>Context</code>, so you can use an <code>Activity</code> as the context.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of how to create a new <code>TextView</code> programmatically in Kotlin.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">// Import the classes we need from the framework.</span>\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>TextView\n\n<span class="token comment">// Find a context, e.g. the Activity this code runs in.</span>\n<span class="token keyword">val</span> aContext <span class="token operator">=</span> theActivity <span class="token comment">// (does not work as it is, but imagine)</span>\n\n<span class="token comment">// Create and configure the TextView.</span>\n<span class="token keyword">val</span> myTextView <span class="token operator">=</span> <span class="token function">TextView</span><span class="token punctuation">(</span>aContext<span class="token punctuation">)</span>\nmyTextView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;This is the text the TextView should show!&quot;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>', 8)),
    createBaseVNode("div", _hoisted_1, [
      _cache[2] || (_cache[2] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[3] || (_cache[3] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example of how to create a new "),
          createBaseVNode("code", null, "TextView"),
          createTextVNode(" declaratively in XML and Kotlin.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/my_view.xml" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createBaseVNode(
                "div",
                {
                  class: "language-xml line-numbers-mode",
                  "data-ext": "xml"
                },
                [
                  createBaseVNode("pre", { class: "language-xml" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token comment" }, '<!-- The URL-thing looks strange, but it simply defines the\n     the "android" namespace, which most attributes comes from -->'),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
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
                          createTextVNode("text")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("This is the text the TextView should show!"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n"),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
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
          createVNode(_component_CodeGroupItem, { title: "Kotlin code" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode(
                "div",
                {
                  class: "language-kotlin line-numbers-mode",
                  "data-ext": "kt"
                },
                [
                  createBaseVNode("pre", { class: "language-kotlin" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token comment" }, "// Import the classes we need from the framework."),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("TextView\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("view"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("LayoutInflater\n\n"),
                      createBaseVNode("span", { class: "token comment" }, "// Find a context, e.g. the Activity this code runs in."),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" aContext "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" theActivity "),
                      createBaseVNode("span", { class: "token comment" }, "// (does not work as it is, but imagine)"),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token comment" }, "// Obtain a layoutInflater."),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" layoutInflater "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" LayoutInflater"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "from"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("aContext"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token comment" }, "// Use the layoutInflater to convert the XML structure to View objects."),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" myTextView "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" layoutInflater"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "inflate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("\n	R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("my_view"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// This is an identifier to the XML file to use."),
                      createTextVNode("\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "null"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// This should be a reference to View the inflated View will be added to, but in this case we don't have that."),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "as"),
                      createTextVNode(" TextView "),
                      createBaseVNode("span", { class: "token comment" }, "// The inflate method always returns a general View, but we know that we will always get back a TextView when we use R.layout.my_view, so can safely downcast here."),
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
    ]),
    _cache[54] || (_cache[54] = createStaticVNode('<h2 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> Layouts</h2><p>The mentioned views (<code>Button</code>, <code>TextView</code>, <code>ImageView</code>) display something on the screen the user can see. Another category of views that exists is called <em>layouts</em>. Layouts don&#39;t display anything on the screen, but they are instead designed to contain other views (called <em>children</em>), and a layout is used to position its children. Example of layouts are:</p><ul><li>The class <code>LinearLayout</code>, which positions it&#39;s children next to each other, either horizontally or vertically</li><li>The class <code>FrameLayout</code>, which positions it&#39;s children independent of each other (the children can overlap)</li><li>The class <code>RelativeLayout</code>, which positions it&#39;s children relative to each other or relative to the layout (above, or below, or to the right of, or to the left of, etc.)</li><li>Etc.</li></ul><h2 id="layoutparams" tabindex="-1"><a class="header-anchor" href="#layoutparams" aria-hidden="true">#</a> LayoutParams</h2><p>When a view is used inside a layout, you need to add information to the view telling the layout how the view should be positioned. This information is represented through a class called <code>LayoutParams</code>. In this class, a view can indicate how tall and wide it wants to be. If a layout needs more information than that (which usually is the case), the layout can define a sub-class to <code>LayoutParams</code> the child should use. For example:</p><ul><li>Views in a <code>LinearLayout</code> should use the class <code>LinearLayout.LayoutParams</code></li><li>Views in a <code>FrameLayout</code> should use the class <code>FrameLayout.LayoutParams</code></li><li>Views in a <code>RelativeLayout</code> should use the class <code>RelativeLayout.LayoutParams</code></li><li>Etc.</li></ul><p>So, when using a <code>View</code>, you do not only specify the properties of the <code>View</code> itself, but also the properties of the <code>LayoutParams</code> corresponding to the layout the <code>View</code> will be used in, and these properties will differ depending on which layout you use.</p><p>The width and height of a view can be defined in <code>LayoutParams</code> through the two constants <code>wrap_content</code> and <code>match_parent</code>:</p><ul><li>If the width in <code>LayoutParams</code> is set to <code>wrap_content</code>, the width of the <code>View</code> will just be big enough to surround its content</li><li>If the width in <code>LayoutParams</code> is set to <code>match_parent</code>, the width of the <code>View</code> will be as wide as the layout</li><li>If the height in <code>LayoutParams</code> is set to <code>wrap_content</code>, the height of the <code>View</code> will just be big enough to surround its content</li><li>If the height in <code>LayoutParams</code> is set to <code>match_parent</code>, the height of the <code>View</code> will be as tall as the layout</li></ul>', 9)),
    createBaseVNode("div", _hoisted_2, [
      _cache[5] || (_cache[5] = createStaticVNode('<p class="custom-container-title">Example</p><p>Example of how to create a new <code>FrameLayout</code> containing two <code>TextView</code>s programmatically in Kotlin.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">// Import the classes we need from the framework.</span>\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>TextView\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>FrameLayout\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>Gravity\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>ViewGroup\n\n<span class="token comment">// Find a context, e.g. the Activity this code runs in.</span>\n<span class="token keyword">val</span> aContext <span class="token operator">=</span> theActivity\n\n<span class="token comment">// Create the GUI!.</span>\n<span class="token keyword">val</span> theLayout <span class="token operator">=</span> <span class="token function">FrameLayout</span><span class="token punctuation">(</span>aContext<span class="token punctuation">)</span>\n\n<span class="token keyword">val</span> theFirstTextView <span class="token operator">=</span> <span class="token function">TextView</span><span class="token punctuation">(</span>aContext<span class="token punctuation">)</span>\ntheFirstTextView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;I&#39;m the first text view!&quot;</span></span>\ntheFirstTextView<span class="token punctuation">.</span>layoutParams <span class="token operator">=</span> FrameLayout<span class="token punctuation">.</span><span class="token function">LayoutParams</span><span class="token punctuation">(</span>\n	ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>MATCH_PARENT<span class="token punctuation">,</span> <span class="token comment">// The width the view should have.</span>\n	ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span> <span class="token comment">// The height the view should have.</span>\n	Gravity<span class="token punctuation">.</span>CENTER <span class="token comment">// The &quot;gravity&quot; the view should have (where it should be positioned in the FrameLayout).</span>\n<span class="token punctuation">)</span>\ntheLayout<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>theFirstTextView<span class="token punctuation">)</span>\n\n<span class="token keyword">val</span> theSecondTextView <span class="token operator">=</span> <span class="token function">TextView</span><span class="token punctuation">(</span>aContext<span class="token punctuation">)</span>\ntheSecondTextView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;I&#39;m the second text view!&quot;</span></span>\ntheSecondTextView<span class="token punctuation">.</span>layoutParams <span class="token operator">=</span> FrameLayout<span class="token punctuation">.</span><span class="token function">LayoutParams</span><span class="token punctuation">(</span>\n	ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span>\n	ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span>\n	Gravity<span class="token punctuation">.</span>BOTTOM\n<span class="token punctuation">)</span>\ntheLayout<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>theSecondTextView<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The GUI would look something like this:</p>', 4)),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[4] || (_cache[4] = [
          createBaseVNode(
            "div",
            { style: { "position": "relative", "height": "100%" } },
            [
              createBaseVNode("div", { style: { "position": "absolute", "width": "100%", "top": "50%", "transform": "translateY(-50%)" } }, "I'm the first text view!"),
              createBaseVNode("div", { style: { "position": "absolute", "bottom": "0" } }, "I'm the second text view!")
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
          createTextVNode("Example of how to create a new "),
          createBaseVNode("code", null, "TextView"),
          createTextVNode(" declaratively in XML and Kotlin.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/my_view.xml" }, {
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
                          createTextVNode("FrameLayout")
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
                        createTextVNode("\n"),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token comment" }, '<!-- All attributes starting with "layout_" are used in the\n	     LayoutParams, so which "layout_*" attributes you can use\n	     depends on which Layout you are using. -->'),
                      createTextVNode("\n	"),
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
                          createTextVNode("layout_gravity")
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
                          createTextVNode("I'm the first text view!"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
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
                          createTextVNode("bottom"),
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
                          createTextVNode("I'm the second text view!"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("FrameLayout")
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
          createVNode(_component_CodeGroupItem, { title: "Kotlin code" }, {
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
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("FrameLayout\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("view"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("LayoutInflater\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" aContext "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" theActivity\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" layoutInflater "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" LayoutInflater"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "from"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("aContext"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" myFrameLayout "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" layoutInflater"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "inflate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("\n	R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("my_view"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode("\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "null"),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "as"),
                      createTextVNode(" FrameLayout "),
                      createBaseVNode("span", { class: "token comment" }, "// This time we know we will get back a FrameLayout, since that's the root element in the XML file."),
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
          })
        ]),
        _: 1
        /* STABLE */
      }),
      _cache[11] || (_cache[11] = createBaseVNode(
        "p",
        null,
        "The GUI would look something like this:",
        -1
        /* HOISTED */
      )),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[8] || (_cache[8] = [
          createBaseVNode(
            "div",
            { style: { "position": "relative", "height": "100%" } },
            [
              createBaseVNode("div", { style: { "position": "absolute", "width": "100%", "top": "50%", "transform": "translateY(-50%)" } }, "I'm the first text view!"),
              createBaseVNode("div", { style: { "position": "absolute", "bottom": "0" } }, "I'm the second text view!")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[55] || (_cache[55] = createStaticVNode('<h2 id="showing-the-gui-in-an-activity" tabindex="-1"><a class="header-anchor" href="#showing-the-gui-in-an-activity" aria-hidden="true">#</a> Showing the GUI in an Activity</h2><p>So far we have just looked at how to create the GUI, we haven&#39;t actually written any code for displaying it on the screen!</p><p>In an <code>Activity</code>, call the method <code>setContentView()</code> to tell it which GUI it should show. You can either pass it the identifier for an XML file with the GUI specified, or the root <code>View</code> of the GUI. The root view of your GUI will be added to another layout, so one typically gives the root view (which typically is a layout) the width and height <code>MATCH_PARENT</code>.</p>', 3)),
    createBaseVNode("div", _hoisted_4, [
      _cache[13] || (_cache[13] = createStaticVNode('<p class="custom-container-title">Example</p><p>Example of how to show a <code>FrameLayout</code> containing two <code>TextView</code>s programmatically in an <code>Activity</code>. Background colors are added to the <code>View</code>s so you can see the space they occupy.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">import</span> android<span class="token punctuation">.</span>app<span class="token punctuation">.</span>Activity\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>TextView\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>FrameLayout\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>Gravity\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>ViewGroup\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>os<span class="token punctuation">.</span>Bundle\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>Color\n\n<span class="token keyword">class</span> MyActivity <span class="token operator">:</span> <span class="token function">Activity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n	\n	<span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">:</span> Bundle<span class="token operator">?</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n		<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span>\n		\n		<span class="token comment">/* The root element of our GUI will be added to a ViewGroup\n		   (base class for all layouts) in the Activity, so the root\n		   element can use the default LayoutParams. */</span>\n		<span class="token keyword">val</span> theLayout <span class="token operator">=</span> <span class="token function">FrameLayout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n		theLayout<span class="token punctuation">.</span>layoutParams <span class="token operator">=</span> ViewGroup<span class="token punctuation">.</span><span class="token function">LayoutParams</span><span class="token punctuation">(</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>MATCH_PARENT<span class="token punctuation">,</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>MATCH_PARENT\n		<span class="token punctuation">)</span>\n		theLayout<span class="token punctuation">.</span><span class="token function">setBackgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>RED<span class="token punctuation">)</span>\n		\n		<span class="token keyword">val</span> theFirstTextView <span class="token operator">=</span> <span class="token function">TextView</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n		theFirstTextView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;I&#39;m the first text view!&quot;</span></span>\n		theFirstTextView<span class="token punctuation">.</span>layoutParams <span class="token operator">=</span> FrameLayout<span class="token punctuation">.</span><span class="token function">LayoutParams</span><span class="token punctuation">(</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>MATCH_PARENT<span class="token punctuation">,</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span>\n			Gravity<span class="token punctuation">.</span>CENTER\n		<span class="token punctuation">)</span>\n		theFirstTextView<span class="token punctuation">.</span><span class="token function">setBackgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>GREEN<span class="token punctuation">)</span>\n		theLayout<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>theFirstTextView<span class="token punctuation">)</span>\n		\n		<span class="token keyword">val</span> theSecondTextView <span class="token operator">=</span> <span class="token function">TextView</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n		theSecondTextView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;I&#39;m the second text view!&quot;</span></span>\n		theSecondTextView<span class="token punctuation">.</span>layoutParams <span class="token operator">=</span> FrameLayout<span class="token punctuation">.</span><span class="token function">LayoutParams</span><span class="token punctuation">(</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span>\n			Gravity<span class="token punctuation">.</span>BOTTOM\n		<span class="token punctuation">)</span>\n		theSecondTextView<span class="token punctuation">.</span><span class="token function">setBackgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>BLUE<span class="token punctuation">)</span>\n		theLayout<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>theSecondTextView<span class="token punctuation">)</span>\n		\n		<span class="token function">setContentView</span><span class="token punctuation">(</span>theLayout<span class="token punctuation">)</span>\n		\n	<span class="token punctuation">}</span>\n	\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The GUI would look something like this:</p>', 4)),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[12] || (_cache[12] = [
          createBaseVNode(
            "div",
            { style: { "position": "relative", "height": "100%", "background-color": "red" } },
            [
              createBaseVNode("div", { style: { "position": "absolute", "width": "100%", "top": "50%", "transform": "translateY(-50%)", "background-color": "green" } }, " I'm the first text view! "),
              createBaseVNode("div", { style: { "position": "absolute", "bottom": "0", "background-color": "blue" } }, "I'm the second text view!")
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
      "div",
      { class: "custom-container warning" },
      [
        createBaseVNode("p", { class: "custom-container-title" }, "Convention for naming layouts!"),
        createBaseVNode("p", null, [
          createTextVNode("XML files containing GUI code that will be used by an "),
          createBaseVNode("code", null, "Activity"),
          createTextVNode(" should be named per the convention "),
          createBaseVNode("code", null, "activity_*.xml"),
          createTextVNode(". This is not a requirement, but good programmers sticks to using conventions to facilitate for other programmers working on the same project.")
        ])
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_5, [
      _cache[17] || (_cache[17] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[18] || (_cache[18] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example of how to show a "),
          createBaseVNode("code", null, "FrameLayout"),
          createTextVNode(" containing two "),
          createBaseVNode("code", null, "TextView"),
          createTextVNode("s declaratively in an "),
          createBaseVNode("code", null, "Activity"),
          createTextVNode(". Background colors are added to the "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s so you can see the space they occupy.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
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
                      createBaseVNode("span", { class: "token comment" }, "<!-- The root element of our GUI will be added to a ViewGroup\n     (base class for all layouts) in the Activity, so the root\n     element can use the default LayoutParams. -->"),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("FrameLayout")
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
                        createTextVNode("\n"),
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
                          createTextVNode("layout_gravity")
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
                          createTextVNode("I'm the first text view!"),
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
                        createTextVNode("\n	"),
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
                          createTextVNode("bottom"),
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
                          createTextVNode("I'm the second text view!"),
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
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("FrameLayout")
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
                    createBaseVNode("br"),
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
      _cache[19] || (_cache[19] = createBaseVNode(
        "p",
        null,
        "The GUI would look something like this:",
        -1
        /* HOISTED */
      )),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => _cache[16] || (_cache[16] = [
          createBaseVNode(
            "div",
            { style: { "position": "relative", "height": "100%", "background-color": "red" } },
            [
              createBaseVNode("div", { style: { "position": "absolute", "width": "100%", "top": "50%", "transform": "translateY(-50%)", "background-color": "green" } }, " I'm the first text view! "),
              createBaseVNode("div", { style: { "position": "absolute", "bottom": "0", "background-color": "blue" } }, "I'm the second text view!")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[57] || (_cache[57] = createStaticVNode('<h2 id="obtaining-references-to-the-views" tabindex="-1"><a class="header-anchor" href="#obtaining-references-to-the-views" aria-hidden="true">#</a> Obtaining references to the <code>View</code>s</h2><p>To work with the <code>View</code>s (listen for clicks on them, changing their background, etc.) you must have a reference to them in your code. This is of course no problem when you specify the GUI programmatically and create the instances of all <code>View</code>s yourself, but when you specify the GUI in an XML file, it&#39;s the Android framework that instantiates the <code>View</code>s for you, and you have no reference to them.</p><p>To get references to the <code>View</code>s the Android framework instantiates for you, you can add unique identifiers to them in the XML code using the <code>id</code> attribute, and then call the method <code>findViewById(theIdentifier)</code> on the <code>Activity</code>, which will send back the <code>View</code> with that identifier.</p>', 3)),
    createBaseVNode("div", _hoisted_6, [
      _cache[22] || (_cache[22] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[23] || (_cache[23] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to obtain references to "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s instantiated through the Android framework.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[20] || (_cache[20] = [
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
                          createTextVNode("FrameLayout")
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
                        createTextVNode("\n"),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token comment" }, "<!--\n		@id/SOME_NAME is a reference to the identifier SOME_NAME.\n		@+id/SOME_NAME means we create a new identifier with SOME_NAME.\n	-->"),
                      createTextVNode("\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("TextView")
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
                          createTextVNode("layout_gravity")
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
                          createTextVNode("I'm the first text view!"),
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
                        createTextVNode("\n	"),
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
                          createTextVNode("bottom"),
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
                          createTextVNode("I'm the second text view!"),
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
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("FrameLayout")
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
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
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
            default: withCtx(() => _cache[21] || (_cache[21] = [
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
                      createTextVNode("TextView\n"),
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
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Obtain references to our TextViews!"),
                      createTextVNode("\n		"),
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
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" secondTextView "),
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
                      createTextVNode("second_text_view"),
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
    ]),
    _cache[58] || (_cache[58] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Very often you store the references to your "),
        createBaseVNode("code", null, "View"),
        createTextVNode("s in instance variables in your "),
        createBaseVNode("code", null, "Activity"),
        createTextVNode(", so you can access them in other methods in your "),
        createBaseVNode("code", null, "Activity"),
        createTextVNode(". Then it's very common to use instance variables of type "),
        createBaseVNode("code", null, "lateinit var"),
        createTextVNode(".")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_7, [
      _cache[26] || (_cache[26] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[27] || (_cache[27] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to obtain and store references to "),
          createBaseVNode("code", null, "View"),
          createTextVNode("s in instance variables.")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
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
                      createBaseVNode("span", { class: "token comment" }, "<!-- Same as in previous example. -->"),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("FrameLayout")
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
                        createTextVNode("\n"),
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
                          createTextVNode("layout_gravity")
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
                          createTextVNode("I'm the first text view!"),
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
                        createTextVNode("\n	"),
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
                          createTextVNode("bottom"),
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
                          createTextVNode("I'm the second text view!"),
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
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("FrameLayout")
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
            default: withCtx(() => _cache[25] || (_cache[25] = [
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
                      createTextVNode("TextView\n"),
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
                      createBaseVNode("span", { class: "token keyword" }, "lateinit"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "var"),
                      createTextVNode(" firstTextView"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" TextView\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "lateinit"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "var"),
                      createTextVNode(" secondTextView"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" TextView\n	\n	"),
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
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Don't need to use findViewById<TextView>() since Kotlin can figure out the type from the variable."),
                      createTextVNode("\n		firstTextView "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "findViewById"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("first_text_view"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		secondTextView "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "findViewById"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("second_text_view"),
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
    ]),
    _cache[59] || (_cache[59] = createStaticVNode('<h3 id="using-view-binding" tabindex="-1"><a class="header-anchor" href="#using-view-binding" aria-hidden="true">#</a> Using View Binding</h3><p>When you have many <code>View</code>s in your GUI, there are many calls to <code>findViewById(theIdentifier)</code> you need to make to get references to them. Writing all this commonly seen code is boring, and there&#39;s always the risk you use the wrong identifier, or cast the <code>View</code>s to wrong type, etc.</p><p>There exists a feature in Google&#39;s Android Jetpack libraries called <em>View Binding</em>. By adding this feature to your project, you&#39;ll get an auto-compiled class that contains all references to the <code>View</code>s, and if you instantiate the <code>View</code>s in the XML file through this feature, you get back an instance of the auto-compiled class, and can access your <code>View</code>s through that instance, so much less code to write for you 😁</p><p>The name of the auto-compiled class will be derived from the name of the XML file. For example, the XML file <code>res/layout/activity_my.xml</code> will result in an auto-generated class called <code>ActivityMyBinding</code> placed in the package <code>your.package.databinding</code>.</p><div class="custom-container warning"><p class="custom-container-title">Groove VS Kotlin</p><p>Files having the extension <code>.gradle</code> contains code written in a language called <em>Groove</em>. This has been, and currently is, the default build file language used in Android Studio projects. There exists a newer version of build files for Gradle written in Kotlin instead. Those files have the extension <code>.gradle.kts</code>. Build files in Android Studio projects might in the future use that as the default build file language.</p></div>', 5)),
    createBaseVNode("div", _hoisted_8, [
      _cache[35] || (_cache[35] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      createBaseVNode("p", null, [
        _cache[29] || (_cache[29] = createTextVNode("Example showing how to use Android Jetpack's feature View Binding to obtain references to ")),
        _cache[30] || (_cache[30] = createBaseVNode(
          "code",
          null,
          "View",
          -1
          /* HOISTED */
        )),
        _cache[31] || (_cache[31] = createTextVNode("s. To add View Binding to your Android project, follow the ")),
        createBaseVNode("a", _hoisted_9, [
          _cache[28] || (_cache[28] = createTextVNode("Setup instructions")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[32] || (_cache[32] = createTextVNode(" on View Binding's documentation page."))
      ]),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[33] || (_cache[33] = [
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
                          createTextVNode("FrameLayout")
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
                        createTextVNode("\n"),
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
                          createTextVNode("layout_gravity")
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
                          createTextVNode("I'm the first text view!"),
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
                        createTextVNode("\n	"),
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
                          createTextVNode("bottom"),
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
                          createTextVNode("I'm the second text view!"),
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
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("FrameLayout")
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
            default: withCtx(() => _cache[34] || (_cache[34] = [
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
                      createTextVNode("Bundle\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" your"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("package"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("databinding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("ActivityMyBinding\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "lateinit"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "var"),
                      createTextVNode(" binding"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" ActivityMyBinding\n	\n	"),
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
                      createTextVNode("\n		\n		binding "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" ActivityMyBinding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "inflate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("layoutInflater"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("binding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("root"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, '// The root element in the XML file can always be accessed through the "root" property.'),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Can use:"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token comment" }, "//  - binding.firstTextView to access the first TextView"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token comment" }, "//  - binding.secondTextView to access the second TextView"),
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
    ]),
    _cache[60] || (_cache[60] = createStaticVNode('<h2 id="buttons" tabindex="-1"><a class="header-anchor" href="#buttons" aria-hidden="true">#</a> Buttons</h2><p>The view <code>Button</code> represents a button the user can click on. To listen for when the user clicks on the button, call the method <code>setOnClickListener()</code>, and pass it an object implementing the interface <code>View.OnClickListener</code>. That object&#39;s <code>onClick()</code> method will be called when the user clicks on the button.</p><div class="custom-container tip"><p class="custom-container-title">Listening for clicks on other views</p><p>Do you find it strange that a click listener interface for <code>Button</code> is put inside the <code>View</code> class? Because that doesn&#39;t make any sense!</p><p><code>View.OnClickListener</code> is actually not only a click listener interface for <code>Button</code>, but for any <code>View</code>, so you can call <code>setOnClickListener()</code> on any <code>View</code>. But often we do that only for buttons.</p></div><p>The <code>onClick()</code> method will be passed one argument, which is a reference to the <code>View</code> that was clicked. This way, you can use the same click listener for multiple <code>View</code>s, and inside the click listener look at the <code>View</code>s id to figure out which <code>View</code> that was clicked, but most often it&#39;s better to create multiple different click listener instead.</p><p>Below you have three different examples of how can add a click listener to a button.</p>', 5)),
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "MyActivity1.kt" }, {
          default: withCtx(() => _cache[36] || (_cache[36] = [
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
                    createTextVNode("view"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("View\n"),
                    createBaseVNode("span", { class: "token keyword" }, "import"),
                    createTextVNode(" android"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("widget"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("Button\n"),
                    createBaseVNode("span", { class: "token keyword" }, "import"),
                    createTextVNode(" android"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("os"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("Bundle\n\n"),
                    createBaseVNode("span", { class: "token keyword" }, "class"),
                    createTextVNode(" MyActivity1 "),
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
                    createBaseVNode("span", { class: "token comment" }, '// Set a layout with a button that has the id "the_button".'),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token function" }, "setContentView"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("layout"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("activity_my"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n		\n		"),
                    createBaseVNode("span", { class: "token comment" }, "// Find a reference to the button."),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" button "),
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
                    createTextVNode("the_button"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n		\n		"),
                    createBaseVNode("span", { class: "token comment" }, "// Create a new instance of an anonymous class that implements View.OnClickListener."),
                    createTextVNode("\n		button"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token keyword" }, "object"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" View"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "OnClickListener"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n			"),
                    createBaseVNode("span", { class: "token keyword" }, "override"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "fun"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "onClick"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("theClickedView"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" View"),
                    createBaseVNode("span", { class: "token operator" }, "?"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n				"),
                    createBaseVNode("span", { class: "token comment" }, "// Code here will run when the button is clicked!"),
                    createTextVNode("\n			"),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
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
        createVNode(_component_CodeGroupItem, { title: "MyActivity2.kt" }, {
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
                    createTextVNode("view"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("View\n"),
                    createBaseVNode("span", { class: "token keyword" }, "import"),
                    createTextVNode(" android"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("widget"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("Button\n"),
                    createBaseVNode("span", { class: "token keyword" }, "import"),
                    createTextVNode(" android"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("os"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("Bundle\n\n"),
                    createBaseVNode("span", { class: "token keyword" }, "class"),
                    createTextVNode(" MyActivity2 "),
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
                    createBaseVNode("span", { class: "token comment" }, '// Set a layout with a button that has the id "the_button".'),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token function" }, "setContentView"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("layout"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("activity_my"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n		\n		"),
                    createBaseVNode("span", { class: "token comment" }, "// Find a reference to the button."),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" button "),
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
                    createTextVNode("the_button"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n		\n		"),
                    createBaseVNode("span", { class: "token comment" }, "// Use the anonymous function expression syntax to create a new instance"),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token comment" }, "// of an anonymous class that implements View.OnClickListener."),
                    createTextVNode("\n		button"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n			"),
                    createBaseVNode("span", { class: "token comment" }, "// Code here will run when the button is clicked!"),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
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
        createVNode(_component_CodeGroupItem, { title: "MyActivity3.kt" }, {
          default: withCtx(() => _cache[38] || (_cache[38] = [
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
                    createTextVNode("view"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("View\n"),
                    createBaseVNode("span", { class: "token keyword" }, "import"),
                    createTextVNode(" android"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("widget"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("Button\n"),
                    createBaseVNode("span", { class: "token keyword" }, "import"),
                    createTextVNode(" android"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("os"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("Bundle\n\n"),
                    createBaseVNode("span", { class: "token keyword" }, "class"),
                    createTextVNode(" MyActivity3 "),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "Activity"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" View"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "OnClickListener"),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token comment" }, "// Let the activity implement the interface."),
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
                    createBaseVNode("span", { class: "token comment" }, '// Set a layout with a button that has the id "the_button".'),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token function" }, "setContentView"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("R"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("layout"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("activity_my"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n		\n		"),
                    createBaseVNode("span", { class: "token comment" }, "// Find a reference to the button."),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token keyword" }, "val"),
                    createTextVNode(" button "),
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
                    createTextVNode("the_button"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n		\n		"),
                    createBaseVNode("span", { class: "token comment" }, "// Pass the activity as the click listener."),
                    createTextVNode("\n		button"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token keyword" }, "this"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode("\n		\n	"),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createTextVNode("\n	\n	"),
                    createBaseVNode("span", { class: "token comment" }, "// Implement the method from the interface."),
                    createTextVNode("\n	"),
                    createBaseVNode("span", { class: "token keyword" }, "override"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "fun"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "onClick"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("theClickedView"),
                    createBaseVNode("span", { class: "token operator" }, ":"),
                    createTextVNode(" View"),
                    createBaseVNode("span", { class: "token operator" }, "?"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{"),
                    createTextVNode("\n		"),
                    createBaseVNode("span", { class: "token comment" }, "// Code here will run when the button is clicked!"),
                    createTextVNode("\n	"),
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
                  createBaseVNode("div", { class: "highlight-line" }, " "),
                  createBaseVNode("br"),
                  createBaseVNode("br"),
                  createBaseVNode("br"),
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
    createBaseVNode("div", _hoisted_10, [
      _cache[42] || (_cache[42] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[43] || (_cache[43] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how clicking a "),
          createBaseVNode("code", null, "Button"),
          createTextVNode(" changes the number in the "),
          createBaseVNode("code", null, "Button"),
          createTextVNode(".")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[39] || (_cache[39] = [
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
                          createTextVNode("FrameLayout")
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
                        createTextVNode("\n"),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
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
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/the_button"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
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
                          createTextVNode("0"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n	"),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("FrameLayout")
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => _cache[40] || (_cache[40] = [
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
                      createTextVNode("Bundle\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" your"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("package"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("databinding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("ActivityMyBinding\n\n"),
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
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" binding "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" ActivityMyBinding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "inflate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("layoutInflater"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("binding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("root"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		binding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("theButton"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n			binding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("theButton"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"'),
                        createBaseVNode("span", { class: "token interpolation" }, [
                          createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "${"),
                          createBaseVNode("span", { class: "token expression" }, [
                            createTextVNode("Math"),
                            createBaseVNode("span", { class: "token punctuation" }, "."),
                            createBaseVNode("span", { class: "token function" }, "random"),
                            createBaseVNode("span", { class: "token punctuation" }, "("),
                            createBaseVNode("span", { class: "token punctuation" }, ")")
                          ]),
                          createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "}")
                        ]),
                        createBaseVNode("span", { class: "token string" }, '"')
                      ]),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
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
        default: withCtx(() => _cache[41] || (_cache[41] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "display": "grid", "grid-template-rows": "1fr auto 1fr", "grid-template-columns": "1fr auto 1fr" } },
            [
              createBaseVNode("button", {
                onclick: "this.innerText = Math.random()",
                style: { "grid-row": "2", "grid-column": "2" }
              }, " 0 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[61] || (_cache[61] = createStaticVNode('<h2 id="edittexts" tabindex="-1"><a class="header-anchor" href="#edittexts" aria-hidden="true">#</a> EditTexts</h2><p>The view <code>EditText</code> represents a field into which the user can enter some data. The property <code>inputType</code> indicates what type of data the user can enter:</p><ul><li>The value <code>text</code> means the user should enter a text</li><li>The value <code>number</code> means the user should enter a number</li><li>The value <code>textEmailAddress</code> means the user should enter an email address</li><li>The value <code>date</code> means the user should enter a date</li><li>Etc.</li></ul><p>When the user clicks on the <code>EditText</code>, a virtual keyboard will be shown on the screen, with keys the user can click to type characters into the <code>EditText</code>. Which keys they virtual keyboard shows depends on which <code>inputType</code> the <code>EditText</code> has. For example, if <code>inputType=&quot;number&quot;</code>, mostly numeric keys are shown. Precisely what it will look like depends on which virtual keyboard the user has installed and is using.</p><p>When you have a reference to an <code>EditText</code>, you can read out what the user has typed in it by using <code>theEditText.text.toString()</code>.</p><p>To listen for when the text in the <code>EditText</code> is changing, call the method <code>addTextChangedListener()</code>, and pass it an instance of a class implementing the interface <code>TextWatcher</code>. This interface defines three methods:</p><ul><li>The <code>beforeTextChanged()</code> method is called before the user&#39;s change to the text has been applied, and the arguments indicate which change that will be applied to the text shortly</li><li>The <code>onTextChanged()</code> method is called after the user&#39;s change to the text has been applied, and the arguments indicates which changes to the text was applied</li><li>The <code>afterTextChanged()</code> method is called after the user&#39;s change to the text has been applied, and its single argument indicates what the text looks like now</li></ul><p>In most cases, you can simply use <code>afterTextChanged()</code>.</p><p>The <code>hint</code> property can be used to display a text in the <code>EditText</code> when it&#39;s empty.</p>', 9)),
    createBaseVNode("div", _hoisted_11, [
      _cache[47] || (_cache[47] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[48] || (_cache[48] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Example showing how to mirror what the user has typed in an "),
          createBaseVNode("code", null, "EditText"),
          createTextVNode(" in a "),
          createBaseVNode("code", null, "TextView"),
          createTextVNode(".")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => _cache[44] || (_cache[44] = [
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
                          createTextVNode("FrameLayout")
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
                        createTextVNode("\n"),
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
                          createTextVNode("layout_gravity")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("top"),
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
                          createTextVNode("Text: "),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n\n	"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("EditText")
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("id")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("@+id/the_edit_text"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
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
                          createTextVNode("layout_gravity")
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
                          createTextVNode("inputType")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("number"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("hint")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("Enter your age (in years)"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n		"),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("FrameLayout")
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
            default: withCtx(() => _cache[45] || (_cache[45] = [
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
                      createTextVNode("Bundle\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("TextWatcher\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Editable\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" your"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("package"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("databinding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("ActivityMyBinding\n\n"),
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
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" binding "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" ActivityMyBinding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "inflate"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("layoutInflater"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("binding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("root"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		binding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("theEditText"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "addTextChangedListener"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token keyword" }, "object"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" TextWatcher "),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onTextChanged"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("s"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" CharSequence"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" start"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Int"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" before"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Int"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" count"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Int"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "beforeTextChanged"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("s"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" CharSequence"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" start"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Int"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" count"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Int"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" after"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Int"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token comment" }, "// The s parameter is in this case the same as binding.theEditText.text."),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "afterTextChanged"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("s"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Editable"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n					binding"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("theTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"Text: '),
                        createBaseVNode("span", { class: "token interpolation" }, [
                          createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "${"),
                          createBaseVNode("span", { class: "token expression" }, [
                            createTextVNode("s"),
                            createBaseVNode("span", { class: "token punctuation" }, "."),
                            createBaseVNode("span", { class: "token function" }, "toString"),
                            createBaseVNode("span", { class: "token punctuation" }, "("),
                            createBaseVNode("span", { class: "token punctuation" }, ")")
                          ]),
                          createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "}")
                        ]),
                        createBaseVNode("span", { class: "token string" }, '"')
                      ]),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n			\n		"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
        default: withCtx(() => _cache[46] || (_cache[46] = [
          createBaseVNode(
            "div",
            { style: { "height": "100%", "display": "grid", "grid-template-rows": "auto 1fr auto 1fr auto", "grid-template-columns": "1fr" } },
            [
              createBaseVNode("div", { style: { "grid-row": "1", "grid-column": "1" } }, [
                createTextVNode("Text: "),
                createBaseVNode("span", { id: "text-134134234" })
              ]),
              createBaseVNode("input", {
                style: { "grid-row": "3", "grid-column": "1" },
                oninput: "document.querySelector('#text-134134234').innerText = this.value",
                type: "number",
                placeholder: "Enter your age (in years)"
              }),
              createBaseVNode("div", { style: { "grid-row": "5", "grid-column": "1" } }, " ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[49] || (_cache[49] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("(the "),
          createBaseVNode("code", null, "EditText"),
          createTextVNode(" will look and behave a little bit different in a real Android application)")
        ],
        -1
        /* HOISTED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
