import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://commonsware.com/AndExplore/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.android.com/guide",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = { class: "custom-container tip" };
const _hoisted_4 = { class: "custom-container tip" };
const _hoisted_5 = { class: "custom-container tip" };
const _hoisted_6 = { class: "custom-container tip" };
const _hoisted_7 = { class: "custom-container tip" };
const _hoisted_8 = { class: "custom-container tip" };
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_Smartphone = resolveComponent("Smartphone");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[49] || (_cache[49] = createBaseVNode(
      "h1",
      {
        id: "android-activities",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-activities",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android Activities")
      ],
      -1
      /* HOISTED */
    )),
    _cache[50] || (_cache[50] = createBaseVNode(
      "p",
      null,
      "Activities are one of the four different fundamental application components all Android applications consists of. We use them to specify what the graphical user interface (GUI) should look like. Let's take a look at how they work!",
      -1
      /* HOISTED */
    )),
    _cache[51] || (_cache[51] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/2clnFgc69nA",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[52] || (_cache[52] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-activities.pdf">android-activities.pdf</a></li><li><a href="android-activities.pptx">android-activities.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("The following chapters from the course book ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Exploring Android")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createStaticVNode(": <ul><li>What We Are Building</li><li>Installing the Tools</li><li>Creating a Starter Project</li><li>Modifying the Manifest</li><li>Changing Our Icon</li><li>Adding a Library</li><li>Constructing a Layout</li><li>Setting up the App Bar</li><li>Setting up an Activity</li></ul>", 2))
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode("The ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[3] || (_cache[3] = createTextVNode("Android Developers Guide")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[5] || (_cache[5] = createTextVNode(" is a free alternative."))
    ]),
    _cache[53] || (_cache[53] = createStaticVNode('<h2 id="activities" tabindex="-1"><a class="header-anchor" href="#activities" aria-hidden="true">#</a> Activities</h2><p>An <em>activity</em> is a fundamental application component you can use to show a graphical user interface to the user, and which the user can interact with to give input to your application. Your application usually consist of multiple activities, each with its own purpose, such as:</p><ul><li>One activity to display and handle interaction with a login form</li><li>One activity to display and handle interaction with a registration form</li><li>One activity to display and handle interaction with all accounts in the application</li><li>Etc.</li></ul><p>Only one activity at a time is shown on the user&#39;s screen.</p><h3 id="creating-a-new-activity" tabindex="-1"><a class="header-anchor" href="#creating-a-new-activity" aria-hidden="true">#</a> Creating a new activity</h3><p>A general activity is represented by the Android framework class <code>Activity</code>. When you want to create your own activity, you should create your own class that inherits from the <code>Activity</code> class, and in which you override some methods to give your own activity the specific behavior you want it to have.</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, there&#39;s a convention to let all your own activity classes end with the name <code>Activity</code>, such as <code>LoginActivity</code>. Good programmers follow this convention, so their code is easier to understand for other programmers reading it.</p></div><p>Just creating a new class that inherits from the <code>Activity</code> class is not enough for the Android framework to recognize your class as an activity. You must also register this class as an activity in the <code>AndroidManifest.xml</code> file using the <code>&lt;activity&gt;</code> element in the <code>&lt;application&gt;</code> element (further down is an example of all this). When using the <code>&lt;activity&gt;</code> element, you must add the following attributes to it:</p><ul><li><code>android:name</code>, which should be: <ul><li>The full identifier for the class (i.e package name followed by the class name, e.g. <code>se.ju.larpet.myapp.LoginActivity</code>), or:</li><li>An identifier for the class relative the your application&#39;s package name (e.g. if you have <code>&lt;manifest android:package=&quot;se.ju.larpet.myapp&quot;</code>), then you can just write <code>.LoginActivity</code></li></ul></li><li><code>android:exported</code>, which should be: <ul><li><code>true</code>, if you want the OS/other applications to be able to start the activity (typically used for the activity that should be started when the user starts your application)</li><li><code>false</code>, if you only want your own code to be able to start the activity (typically the case for most of your activities)</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">Creating a new activity in Android Studio</p><p>When you ask Android Studio to create a new activity for you, it will create a new Java/Kotlin file containing your own class inheriting from the <code>Activity</code> class AND register this class as an activity in <code>AndroidManifest.xml</code> for you, so you don&#39;t need to remember all this by heart.</p></div>', 10)),
    createBaseVNode("div", _hoisted_3, [
      _cache[8] || (_cache[8] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[9] || (_cache[9] = createBaseVNode(
        "p",
        null,
        "Example showing a project with a single activity only your own app can start.",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
                          createTextVNode("manifest")
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
                        createBaseVNode("span", { class: "token attr-name" }, "package"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("se.ju.larpet.myapp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
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
                          createTextVNode(".MyActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("exported")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("false"),
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
                      createTextVNode("Activity\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token comment" }, "// Override methods here to give your own activity"),
                      createTextVNode("\n	"),
                      createBaseVNode("span", { class: "token comment" }, "// the specific behavior you want it to have."),
                      createTextVNode("\n	\n"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", { class: "highlight-lines" }, [
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
    _cache[54] || (_cache[54] = createStaticVNode('<p>The <code>&lt;activity&gt;</code> element has more attributes you can use to add more information about the activity, such as:</p><ul><li><code>android:label</code>: A string with the name of the activity (used for example when the user is asked to select an activity to complete an action)</li><li><code>android:theme</code>: A theme to use in the activity (when you want another one than the one specified in <code>&lt;application android:theme=&quot;XXX&quot;&gt;</code>)</li><li>Etc.</li></ul><p>Most often you don&#39;t need to provide these extra attributes, but do be aware of the possibility.</p><h3 id="adding-an-activity-to-the-launcher" tabindex="-1"><a class="header-anchor" href="#adding-an-activity-to-the-launcher" aria-hidden="true">#</a> Adding an activity to the launcher</h3><p>The launcher app in Android is the &quot;desktop&quot; app that runs directly when the device starts, and that app typically shows all installed apps the user can start by clicking on them. It actually doesn&#39;t show apps that can be started, but activities in them that can be started, so one and the same app can actually display multiple activities in the launcher, and not just one, but just one is of course most common.</p><p>So, if you want the launcher to show one of your activities here, the activity must have <code>android:exported=&quot;true&quot;</code> (so the other apps are allowed to start the activity). Then you must also add an <code>&lt;intent-filter&gt;</code> to your activity to tell other apps information about the activity, such as:</p><ul><li>The <code>android:name</code> attribute in the <code>&lt;category&gt;</code> element to indicate which a category the activity belongs to (for launcher activities, use the value <code>android.intent.category.LAUNCHER</code>)</li><li>The <code>android:name</code> attribute in the <code>&lt;action&gt;</code> element to indicate which <em>actions</em> the activity can handle (the launcher app will start the activity with the action <code>android.intent.action.MAIN</code> (meaning no additional info is passed to the activity), so your activity must explicitly say it can handle that type of action)</li></ul>', 7)),
    createBaseVNode("div", _hoisted_4, [
      _cache[12] || (_cache[12] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[13] || (_cache[13] = createBaseVNode(
        "p",
        null,
        "Example showing a project with one launcher activity.",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
                          createTextVNode("manifest")
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
                        createBaseVNode("span", { class: "token attr-name" }, "package"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("se.ju.larpet.myapp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
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
                          createTextVNode(".MyActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("exported")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("true"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("intent-filter")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("category")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "name"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("android.intent.category.LAUNCHER"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("action")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "name"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("android.intent.action.MAIN"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("intent-filter")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n			\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("activity")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
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
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
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
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("app"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Activity\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MyActivity "),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token comment" }, "// Override methods here to give your own activity"),
                      createTextVNode("\n	"),
                      createBaseVNode("span", { class: "token comment" }, "// the specific behavior you want it to have."),
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
      _cache[14] || (_cache[14] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("The "),
          createBaseVNode("code", null, "MyActivity"),
          createTextVNode(" will now be shown in the user's launcher, and when the user clicks on it, the "),
          createBaseVNode("code", null, "MyActivity"),
          createTextVNode(" will be started.")
        ],
        -1
        /* HOISTED */
      ))
    ]),
    _cache[55] || (_cache[55] = createStaticVNode('<h3 id="specifying-the-gui" tabindex="-1"><a class="header-anchor" href="#specifying-the-gui" aria-hidden="true">#</a> Specifying the GUI</h3><p>By default, the activity has no GUI, and a blank screen is shown when the activity is started. If you want to add a GUI to your activity, override the method <code>onCreate()</code>, and specify what the GUI should be by calling the method <code>setContentView()</code>. Most often the GUI is specified in XML files you put in the <code>res/layout/</code> folder, and to <code>setContentView()</code> you pass an identifier to the XML file to use for the GUI.</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, there&#39;s a convention to name layouts that are used by activities as <code>activity_XXX.xml</code>, such as <code>activity_login.xml</code>. Good programmers follow this convention, so their code is easier to understand for other programmers reading it.</p></div><p><code>onCreate()</code> will be called with a <code>Bundle</code> as argument called <code>savedInstanceState</code>. That argument is very important to handle <em>runtime configuration changes</em> properly, which we will cover in another lecture. For now, it&#39;s enough for you to know that you must pass this <code>Bundle</code> to the <code>onCreate()</code> method you override.</p>', 4)),
    createBaseVNode("div", _hoisted_5, [
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
        "Example showing how to create an activity with a GUI.",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: withCtx(() => _cache[15] || (_cache[15] = [
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
                        createBaseVNode("span", { class: "token attr-name" }, "package"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("se.ju.larpet.myapp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
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
                          createTextVNode(".MyActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("exported")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("true"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("intent-filter")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("category")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "name"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("android.intent.category.LAUNCHER"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("action")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "name"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("android.intent.action.MAIN"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("intent-filter")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n			\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("activity")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
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
                          createTextVNode("Hello, world!"),
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
                      createTextVNode("activity_main"),
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
            { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto", "grid-template-rows": "auto" } },
            [
              createBaseVNode("div", { style: { "grid-column": "1", "grid-row": "1" } }, " Hello, world! ")
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
      _cache[22] || (_cache[22] = createTextVNode("To learn more about how to create graphical user interfaces in Android, checkout the lecture ")),
      createVNode(_component_RouterLink, { to: "/lectures/android-views-and-layouts/" }, {
        default: withCtx(() => _cache[21] || (_cache[21] = [
          createTextVNode("Android Views and Layouts")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[23] || (_cache[23] = createTextVNode("."))
    ]),
    _cache[56] || (_cache[56] = createStaticVNode('<h3 id="starting-another-activity" tabindex="-1"><a class="header-anchor" href="#starting-another-activity" aria-hidden="true">#</a> Starting another activity</h3><p>To navigate the user to another activity, call the method <code>startActivity()</code> on a <code>Context</code>. <code>Activity</code> inherits from <code>Context</code>, so you can call <code>startActivity()</code> on the <code>Activity</code> itself. When you call this method, you pass it an <code>Intent</code> indicating which other activity in your app to start. To the <code>Intent</code> constructor you pass a <code>Context</code> (e.g. the <code>Activity</code> itself) and the runtime class of the <code>Activity</code> that should be started, like <code>LoginActivity::class.java</code> to start the <code>LoginActivity</code>.</p>', 2)),
    createBaseVNode("div", _hoisted_6, [
      _cache[30] || (_cache[30] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Example",
        -1
        /* HOISTED */
      )),
      _cache[31] || (_cache[31] = createBaseVNode(
        "p",
        null,
        "Example showing how to create an activity with a GUI.",
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
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("manifest")
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
                        createBaseVNode("span", { class: "token attr-name" }, "package"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("se.ju.larpet.myapp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
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
                          createTextVNode(".MainActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("exported")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("true"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("intent-filter")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("category")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "name"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("android.intent.category.LAUNCHER"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("action")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "name"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("android.intent.action.MAIN"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("intent-filter")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n			\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("activity")
                        ]),
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
                          createTextVNode(".SecondActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("exported")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("false"),
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
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
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
                          createTextVNode("Go to SecondActivity"),
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
                          createTextVNode("@+id/button"),
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
            default: withCtx(() => _cache[26] || (_cache[26] = [
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
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Button\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("content"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Intent\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MainActivity "),
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
                      createTextVNode("activity_main"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Find the button from the layout file."),
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
                      createTextVNode("button"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Call setOnClickListener on the button and pass it a function"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// that will be called when the user clicks on the button."),
                      createTextVNode("\n		button"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token comment" }, "// When the user clicks on the button, this function (between"),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token comment" }, "// { and }) will be called."),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token comment" }, "// Start and take the user to SecondActivity."),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token function" }, "startActivity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token function" }, "Intent"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token keyword" }, "this"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// Pass this activity as the Context."),
                      createTextVNode("\n				SecondActivity"),
                      createBaseVNode("span", { class: "token operator" }, "::"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("java\n			"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			\n		"),
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
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_second.xml" }, {
            default: withCtx(() => _cache[27] || (_cache[27] = [
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
                          createTextVNode("I'm SecondActivity!"),
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
          createVNode(_component_CodeGroupItem, { title: "SecondActivity.kt" }, {
            default: withCtx(() => _cache[28] || (_cache[28] = [
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
                      createTextVNode(" SecondActivity "),
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
                      createTextVNode("activity_second"),
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
        default: withCtx(() => _cache[29] || (_cache[29] = [
          createBaseVNode(
            "div",
            {
              id: "screen897987",
              style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr" }
            },
            [
              createBaseVNode("button", {
                style: { "grid-column": "1", "grid-row": "1" },
                onclick: "document.querySelector('#screen897987').style.display = 'none'; document.querySelector('#screen85426').style.display = 'grid';"
              }, " Go to SecondActivity ")
            ],
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "div",
            {
              id: "screen85426",
              style: { "height": "100%", "width": "100%", "display": "none", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr" }
            },
            [
              createBaseVNode("div", { style: { "grid-column": "1", "grid-row": "1" } }, " I'm SecondActivity! ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[32] || (_cache[32] = createBaseVNode(
        "p",
        null,
        "If the user would press the back button on the Android device when she has come to the second activity, she would be taken back to the first activity.",
        -1
        /* HOISTED */
      ))
    ]),
    _cache[57] || (_cache[57] = createStaticVNode('<h3 id="passing-information-to-another-activity" tabindex="-1"><a class="header-anchor" href="#passing-information-to-another-activity" aria-hidden="true">#</a> Passing information to another activity</h3><p>Often when you start another activity you need to pass additional information to the activity you start. For example, maybe you have:</p><ul><li><code>ListNewsArticlesActivity</code>, which list news articles, and when you click on one of them the user should come to:</li><li><code>ViewNewsArticleActivity</code>, which shows all information about a specific news article</li></ul><p><code>ViewNewsArticleActivity</code> needs to know which article to show information about, so when you start this activity, you need to pass along an identifier to the article to show. That type of information can be passed in a <code>Bundle</code> in the <code>Intent</code> you use to start the activity. <code>Intent</code> has a method called <code>putExtra()</code>, that you can call to add such information to the <code>Bundle</code> in the <code>Intent</code>. When you call <code>putExtra()</code> you pass it two arguments:</p><ul><li>The first argument is a string used as a key for the value you want to pass along</li><li>The second argument is the actual value you want to pass along</li></ul><p>The receiving activity can then through the <code>Intent</code> starting it (stored in the class&#39; <code>intent</code> property) obtain the value passed along using the same key by calling a <code>get*Extra()</code> method (like <code>getIntExtra()</code>, or <code>getStringExtra()</code>, etc., depending on the datatype of the value). When calling the <code>get*Extra()</code> you also need to pass a value that should be returned if the one starting the activity forgot to pass along the extra information.</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, the convention is to put the keys in constants named <code>EXTRA_XXX</code> in the receiving activity file, and always refer to these constants whenever you call <code>putExtra()</code> or <code>get*Extra()</code>. This way, you don&#39;t risking misspelling the name of the key, so you don&#39;t risk compiling an app that will crash when it runs. If you now misspell the constant instead, you will get a compiler error you are immediately aware of.</p><p>The constants also serve as documentation; by looking at the <code>EXTRA_XXX</code> constants you can easily see what extra information you need to pass along to the activity when you start it.</p></div>', 7)),
    createBaseVNode("div", _hoisted_7, [
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
        "Example showing how to create an activity with a GUI.",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
                          createTextVNode("manifest")
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
                        createBaseVNode("span", { class: "token attr-name" }, "package"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("se.ju.larpet.myapp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
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
                          createTextVNode(".MainActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("exported")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("true"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("intent-filter")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("category")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "name"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("android.intent.category.LAUNCHER"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("action")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "name"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("android.intent.action.MAIN"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("intent-filter")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n			\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("activity")
                        ]),
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
                          createTextVNode(".ShowSumActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("exported")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("false"),
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
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: withCtx(() => _cache[34] || (_cache[34] = [
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
                          createTextVNode("Show 4 + 8"),
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
                          createTextVNode("Show 7 + 2"),
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
          createVNode(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
            default: withCtx(() => _cache[35] || (_cache[35] = [
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
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Button\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("content"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Intent\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MainActivity "),
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
                      createTextVNode("activity_main"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Find the buttons from the layout file."),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" firstButton "),
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
                      createTextVNode("first_button"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" secondButton "),
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
                      createTextVNode("second_button"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Add click listeners to the buttons starting ShowSumActivity."),
                      createTextVNode("\n		firstButton"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" intent "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "Intent"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token keyword" }, "this"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" ShowSumActivity"),
                      createBaseVNode("span", { class: "token operator" }, "::"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("java"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			intent"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "putExtra"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("EXTRA_FIRST_TERM"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token number" }, "4"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			intent"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "putExtra"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("EXTRA_SECOND_TERM"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token number" }, "8"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token function" }, "startActivity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("intent"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			\n		"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n		\n		secondButton"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token function" }, "startActivity"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token function" }, "Intent"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token keyword" }, "this"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" ShowSumActivity"),
                      createBaseVNode("span", { class: "token operator" }, "::"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("java"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "apply"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token function" }, "putExtra"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("EXTRA_FIRST_TERM"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token number" }, "7"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token function" }, "putExtra"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("EXTRA_SECOND_TERM"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token number" }, "2"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			\n		"),
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
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_show_sum.xml" }, {
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
                          createTextVNode("@+id/sum_text_view"),
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
          createVNode(_component_CodeGroupItem, { title: "ShowSumActivity.kt" }, {
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
                      createTextVNode("Bundle\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("TextView\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "const"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" EXTRA_FIRST_TERM "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"EXTRA_FIRST_TERM"')
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token keyword" }, "const"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" EXTRA_SECOND_TERM "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"EXTRA_SECOND_TERM"')
                      ]),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" ShowSumActivity "),
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
                      createTextVNode(" firstTerm "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" intent"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "getIntExtra"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("EXTRA_FIRST_TERM"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" secondTerm "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" intent"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "getIntExtra"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("EXTRA_SECOND_TERM"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" sum "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" firstTerm "),
                      createBaseVNode("span", { class: "token operator" }, "+"),
                      createTextVNode(" secondTerm\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setContentView"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("R"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("layout"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("activity_show_sum"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" sumTextView "),
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
                      createTextVNode("sum_text_view"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		sumTextView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"'),
                        createBaseVNode("span", { class: "token interpolation" }, [
                          createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
                          createBaseVNode("span", { class: "token expression" }, "firstTerm")
                        ]),
                        createBaseVNode("span", { class: "token string" }, " + "),
                        createBaseVNode("span", { class: "token interpolation" }, [
                          createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
                          createBaseVNode("span", { class: "token expression" }, "secondTerm")
                        ]),
                        createBaseVNode("span", { class: "token string" }, " = "),
                        createBaseVNode("span", { class: "token interpolation" }, [
                          createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
                          createBaseVNode("span", { class: "token expression" }, "sum")
                        ]),
                        createBaseVNode("span", { class: "token string" }, '"')
                      ]),
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
            {
              id: "screen7294037",
              style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto auto 1fr" }
            },
            [
              createBaseVNode("button", {
                style: { "grid-column": "1", "grid-row": "1" },
                onclick: "document.querySelector('#screen7294037').style.display = 'none'; document.querySelector('#screen1038362').style.display = 'grid';"
              }, " Show 4 + 8 "),
              createBaseVNode("button", {
                style: { "grid-column": "1", "grid-row": "2" },
                onclick: "document.querySelector('#screen7294037').style.display = 'none'; document.querySelector('#screen7749372').style.display = 'grid';"
              }, " Show 7 + 2 ")
            ],
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "div",
            {
              id: "screen1038362",
              style: { "height": "100%", "width": "100%", "display": "none", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr" }
            },
            [
              createBaseVNode("div", { style: { "grid-column": "1", "grid-row": "1" } }, " 4 + 8 = 12 ")
            ],
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "div",
            {
              id: "screen7749372",
              style: { "height": "100%", "width": "100%", "display": "none", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr" }
            },
            [
              createBaseVNode("div", { style: { "grid-column": "1", "grid-row": "1" } }, " 7 + 2 = 9 ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[58] || (_cache[58] = createStaticVNode('<h3 id="passing-information-back" tabindex="-1"><a class="header-anchor" href="#passing-information-back" aria-hidden="true">#</a> Passing information back</h3><p>When an activity starts another activity, that other activity can pass information back to the first activity. This is useful when you need to re-use the same functionality at multiple places. For example, maybe the user should be able to select a color for multiple different parts of your application (one background color, one text color, one favorite color, etc.). Then you can put the &quot;Select color&quot; functionality in its own activity, and then other activities can start this activity whenever they need the user to select a color. When the user has selected her color, the activity sends back that color to the first activity.</p><p>To start an activity that should send back a value, call <code>startActivityForResult()</code> instead of <code>startActivity()</code>. In addition to the <code>Intent</code> identifying the activity to start, you should also pass along a <em>request code</em> (an integer) that you later will get back when the user has made her choice in the other activity. This is useful if the first activity makes multiple different calls to <code>startActivityForResult()</code> (the request code can be used to distinguish the calls).</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, the convention is to put request codes in constants named <code>REQUEST_CODE_XXX</code> in the activity file calling <code>startActivityForResult()</code>. By using constants, you&#39;ll get a compiler error if you make a typing mistake, and it&#39;s easy to see which request code numbers the activity is using, so you don&#39;t risk re-using one and the same by mistake.</p></div><p>In the activity where the user should make her decision, call the method <code>setResult()</code> to indicate that the user has made her decision. Here you need to pass two values:</p><ul><li>A <em>result code</em> (integer) indicating if the selection succeeded or not (one typically use the constants <code>Activity.RESULT_OK</code> if the user made the choice, and <code>Activity.RESULT_CANCELED</code> if the user didn&#39;t/couldn&#39;t make a choice)</li><li>An <code>Intent</code> with more information about the choice the user made</li></ul><p>After the user has made her choice, you typically call <code>finish()</code> on the activity to close it, at which point the user will get back to the previous activity.</p><p>In the activity that called <code>startActivityForResult()</code>, override the method <code>onActivityResult()</code>, which will be called when the user gets back to the activity. Here you receive the following as arguments:</p><ul><li>The request code you used to start the activity</li><li>The result code</li><li>The <code>Intent</code> with more information about the user&#39;s choice</li></ul>', 9)),
    createBaseVNode("div", _hoisted_8, [
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
        "Example showing how to create an activity with a GUI.",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
                          createTextVNode("manifest")
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
                        createBaseVNode("span", { class: "token attr-name" }, "package"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("se.ju.larpet.myapp"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
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
                          createTextVNode(".MainActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("exported")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("true"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("intent-filter")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("category")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "name"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("android.intent.category.LAUNCHER"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "<"),
                          createTextVNode("action")
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token attr-name" }, "name"),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("android.intent.action.MAIN"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("intent-filter")
                        ]),
                        createBaseVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      createTextVNode("\n			\n		"),
                      createBaseVNode("span", { class: "token tag" }, [
                        createBaseVNode("span", { class: "token tag" }, [
                          createBaseVNode("span", { class: "token punctuation" }, "</"),
                          createTextVNode("activity")
                        ]),
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
                          createTextVNode(".SelectColorActivity"),
                          createBaseVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        createTextVNode("\n			"),
                        createBaseVNode("span", { class: "token attr-name" }, [
                          createBaseVNode("span", { class: "token namespace" }, "android:"),
                          createTextVNode("exported")
                        ]),
                        createBaseVNode("span", { class: "token attr-value" }, [
                          createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                          createBaseVNode("span", { class: "token punctuation" }, '"'),
                          createTextVNode("false"),
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
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
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
                          createTextVNode("This view can be styled!"),
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
                          createTextVNode("@+id/text_view"),
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
                          createTextVNode("Select background color"),
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
                          createTextVNode("@+id/select_background_color_button"),
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
                          createTextVNode("Select text color"),
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
                          createTextVNode("@+id/select_text_color_button"),
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("div", { class: "highlight-line" }, " "),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
                    createBaseVNode("br"),
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
                      createTextVNode("Bundle\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Button\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("TextView\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("content"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Intent\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("graphics"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Color\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" REQUEST_CODE_SELECT_BACKGROUND_COLOR "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token number" }, "1234"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// Actual numbers here doesn't"),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" REQUEST_CODE_SELECT_TEXT_COLOR "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token number" }, "4321"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// matter as long as they are uniq."),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" MainActivity "),
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
                      createTextVNode(" textView"),
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
                      createTextVNode("activity_main"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Find the views."),
                      createTextVNode("\n		textView "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(" findViewById"),
                      createBaseVNode("span", { class: "token operator" }, "<"),
                      createTextVNode("TextView"),
                      createBaseVNode("span", { class: "token operator" }, ">"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("r"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("id"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("text_view"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" selectBackgroundColorButton "),
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
                      createTextVNode("select_background_color_button"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" selectTextColorButton "),
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
                      createTextVNode("select_text_color_button"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Add click listeners to the buttons starting SelectColorActivity."),
                      createTextVNode("\n		selectBackgroundColorButton"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token function" }, "startActivityForResult"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token function" }, "Intent"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token keyword" }, "this"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" SelectColorActivity"),
                      createBaseVNode("span", { class: "token operator" }, "::"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("java"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode("\n				REQUEST_CODE_SELECT_BACKGROUND_COLOR\n			"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			\n		"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n		\n		selectTextColorButton"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n			\n			"),
                      createBaseVNode("span", { class: "token function" }, "startActivityForResult"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token function" }, "Intent"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token keyword" }, "this"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" SelectColorActivity"),
                      createBaseVNode("span", { class: "token operator" }, "::"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("java"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode("\n				REQUEST_CODE_SELECT_TEXT_COLOR\n			"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			\n		"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "override"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "onActivityResult"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("requestCode"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Int"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" resultCode"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Int"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "data"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Intent"),
                      createBaseVNode("span", { class: "token operator" }, "?"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// In this example, resultCode will always be Activity.RESULT_OK, so let's ignore that parameter."),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" color "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "data"),
                      createBaseVNode("span", { class: "token operator" }, "!!"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "getStringExtra"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("RESULT_EXTRA_COLOR"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "when"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("requestCode"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n			REQUEST_CODE_SELECT_BACKGROUND_COLOR "),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(" textView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setBackground"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("color"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			REQUEST_CODE_SELECT_TEXT_COLOR "),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(" textView"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setTextColor"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("color"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token keyword" }, "else"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token operator" }, "->"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "throw"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "IllegalStateException"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"Unknown request code '),
                        createBaseVNode("span", { class: "token interpolation" }, [
                          createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
                          createBaseVNode("span", { class: "token expression" }, "requestCode")
                        ]),
                        createBaseVNode("span", { class: "token string" }, '"')
                      ]),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// Should never happen."),
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
                    createBaseVNode("div", { class: "highlight-line" }, " "),
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
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_select_color.xml" }, {
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
                          createTextVNode("Red"),
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
                          createTextVNode("@+id/select_red_button"),
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
                          createTextVNode("Blue"),
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
                          createTextVNode("@+id/select_blue_button"),
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
          createVNode(_component_CodeGroupItem, { title: "SelectColorActivity.kt" }, {
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
                      createTextVNode("widget"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("TextView\n"),
                      createBaseVNode("span", { class: "token keyword" }, "import"),
                      createTextVNode(" android"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("graphics"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("Color\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "const"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" RESULT_EXTRA_COLOR "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string-literal singleline" }, [
                        createBaseVNode("span", { class: "token string" }, '"RESULT_EXTRA_COLOR"')
                      ]),
                      createTextVNode("\n\n"),
                      createBaseVNode("span", { class: "token keyword" }, "class"),
                      createTextVNode(" SelectColorActivity "),
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
                      createTextVNode("activity_select_color"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Find the buttons from the layout file."),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" selectRedButton "),
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
                      createTextVNode("select_red_button"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token keyword" }, "val"),
                      createTextVNode(" selectBlueButton "),
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
                      createTextVNode("select_blue_button"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token comment" }, "// Add click listeners to the buttons."),
                      createTextVNode("\n		selectBackgroundColorButton"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token function" }, "sendBackColor"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("Color"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("RED"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n		\n		selectTextColorButton"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token function" }, "sendBackColor"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("Color"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("BLUE"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n		\n	"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n	\n	"),
                      createBaseVNode("span", { class: "token comment" }, "// Method to send back a color."),
                      createTextVNode("\n	"),
                      createBaseVNode("span", { class: "token keyword" }, "fun"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token function" }, "sendBackColor"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("color"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(" Int"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "setResult"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("\n			Activity"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("RESULT_OK"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token function" }, "Intent"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "apply"),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode("\n				"),
                      createBaseVNode("span", { class: "token function" }, "putExtra"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("RESULT_EXTRA_COLOR"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(" color"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n			"),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createTextVNode("\n		"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createTextVNode("\n		\n		"),
                      createBaseVNode("span", { class: "token function" }, "finish"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
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
            {
              id: "screen573957",
              style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto auto  auto 1fr" }
            },
            [
              createBaseVNode("div", {
                class: "text",
                style: { "grid-column": "1", "grid-row": "1" }
              }, " This view can be styled! "),
              createBaseVNode("button", {
                style: { "grid-column": "1", "grid-row": "2" },
                onclick: "document.querySelector('#screen573957').style.display = 'none'; document.querySelector('#screen74832726').style.display = 'grid';"
              }, " Select background color "),
              createBaseVNode("button", {
                style: { "grid-column": "1", "grid-row": "3" },
                onclick: "document.querySelector('#screen573957').style.display = 'none'; document.querySelector('#screen7887865').style.display = 'grid';"
              }, " Select text color ")
            ],
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "div",
            {
              id: "screen74832726",
              style: { "height": "100%", "width": "100%", "display": "none", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto auto 1fr" }
            },
            [
              createBaseVNode("button", {
                style: { "grid-column": "1", "grid-row": "1" },
                onclick: "document.querySelector('#screen74832726').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.backgroundColor = 'red';"
              }, " Red "),
              createBaseVNode("button", {
                style: { "grid-column": "1", "grid-row": "2" },
                onclick: "document.querySelector('#screen74832726').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.backgroundColor = 'blue';"
              }, " Blue ")
            ],
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "div",
            {
              id: "screen7887865",
              style: { "height": "100%", "width": "100%", "display": "none", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto auto 1fr" }
            },
            [
              createBaseVNode("button", {
                style: { "grid-column": "1", "grid-row": "1" },
                onclick: "document.querySelector('#screen7887865').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.color = 'red';"
              }, " Red "),
              createBaseVNode("button", {
                style: { "grid-column": "1", "grid-row": "2" },
                onclick: "document.querySelector('#screen7887865').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.color = 'blue';"
              }, " Blue ")
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
