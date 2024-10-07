import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, g as createCommentVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://ju.instructure.com/files/1121481/download?download_frd=1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.android.com/guide",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[26] || (_cache[26] = createBaseVNode(
      "h1",
      {
        id: "lectures",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#lectures",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Lectures")
      ],
      -1
      /* HOISTED */
    )),
    _cache[27] || (_cache[27] = createBaseVNode(
      "p",
      null,
      "Here you find the lectures in the course.",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[2] || (_cache[2] = createTextVNode("To help you getting started with the project: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/teamwork/" }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("Teamwork")
              ])),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/report-writing/" }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("Report Writing")
              ])),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[6] || (_cache[6] = createTextVNode("To help you getting started with Android development: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/kotlin/" }, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("Kotlin")
              ])),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-introduction/" }, {
              default: withCtx(() => _cache[4] || (_cache[4] = [
                createTextVNode("Android Introduction")
              ])),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-fundamental-application-components/" }, {
              default: withCtx(() => _cache[5] || (_cache[5] = [
                createTextVNode("Android Fundamental Application Components")
              ])),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[8] || (_cache[8] = createTextVNode("Martins lecture on GUI: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_1, [
              _cache[7] || (_cache[7] = createTextVNode("The slides UI Prototyping for Android")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[10] || (_cache[10] = createTextVNode("Most other things you need to learn for the application you create in your Project Work you can most likely learn from Android's ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[9] || (_cache[9] = createTextVNode("Developer Guides")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[11] || (_cache[11] = createTextVNode("."))
    ]),
    _cache[28] || (_cache[28] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Below are some old lectures you "),
        createBaseVNode("em", null, "might"),
        createTextVNode(" have use of. Feel free to use them if you want, but many of them are in Java and the old way we implemented GUI in Android (not Jetpack Compose), and some of them might be outdated.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[14] || (_cache[14] = createTextVNode("Using threads/asynchronous operations: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-asynchronous-operations/" }, {
              default: withCtx(() => _cache[12] || (_cache[12] = [
                createTextVNode("Android Asynchronous Operations")
              ])),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/kotlin-asynchronous-operations/" }, {
              default: withCtx(() => _cache[13] || (_cache[13] = [
                createTextVNode("Kotlin Asynchronous Operations")
              ])),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[17] || (_cache[17] = createTextVNode("Running in the background: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-services/" }, {
              default: withCtx(() => _cache[15] || (_cache[15] = [
                createTextVNode("Android Services")
              ])),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-notifications/" }, {
              default: withCtx(() => _cache[16] || (_cache[16] = [
                createTextVNode("Android Notifications")
              ])),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[20] || (_cache[20] = createTextVNode("Using Cloud Firestore: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/cloud-firestore/" }, {
              default: withCtx(() => _cache[18] || (_cache[18] = [
                createTextVNode("Cloud Firestore")
              ])),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-cloud-firestore/" }, {
              default: withCtx(() => _cache[19] || (_cache[19] = [
                createTextVNode("Android Cloud Firestore")
              ])),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[25] || (_cache[25] = createTextVNode("Various: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-bluetooth-classic/" }, {
              default: withCtx(() => _cache[21] || (_cache[21] = [
                createTextVNode("Android Bluetooth Classic")
              ])),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-broadcast-receivers/" }, {
              default: withCtx(() => _cache[22] || (_cache[22] = [
                createTextVNode("Android Broadcast Receivers")
              ])),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-content-providers/" }, {
              default: withCtx(() => _cache[23] || (_cache[23] = [
                createTextVNode("Android Content Providers")
              ])),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-file-storage/" }, {
              default: withCtx(() => _cache[24] || (_cache[24] = [
                createTextVNode("Android File Storage")
              ])),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    createCommentVNode(`



Added at start of Course Week 3:


* Martins Design Lecture:
	* [Recording](https://ju.instructure.com/courses/4825/pages/recordings?module_item_id=166072)
	* [Slides](https://ju.instructure.com/files/726278/download?download_frd=1)
	* [Marvel App](https://marvelapp.com/) (don't forget to checkout their [templates](https://marvelapp.com/sketchpad))
	* [Design Patterns at UI Patterns](https://ui-patterns.com/patterns)
	* [Material Design 3](https://m3.material.io/)
	* [Adobe Color](https://color.adobe.com)





* [Android App Bar](../../lectures/android-app-bar/)
* [Android Permissions](../../lectures/android-permissions/)
* [Android Conditional Resources](../../lectures/android-conditional-resources/)
* [Android CoordinatorLayout](../../lectures/android-coordinator-layout/)
* [Android Backward Compatible](../../lectures/android-backward-compatible/)

Added Course Week 2:

* [Android Backward Compatible](../../lectures/android-backward-compatible/)
* [Martin's Design Lecture #1](https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645)

<div v-if="false">

* [Android GPS](../../lectures/android-gps/)
* [Android Scheduling](../../lectures/android-scheduling/)
* [Android Content Providers](../../lectures/android-content-providers/)
* [Android File System](../../lectures/android-file-system/)
* [Android Sensors](../../lectures/android-sensors/)
* Android 
* [Android Menus](../../lectures/android-menus/)
* [Android Activities](../../lectures/android-activities/)

* [Android Views and Layouts](../../lectures/android-views-and-layouts/)
* [Android Linear Layouts](../../lectures/android-linear-layout/)
* [Android Constraint Layouts](../../lectures/android-constraint-layout/)
* [Android ListView](../../lectures/android-list-view/)* [Android Runtime Configuration Changes](../../lectures/android-runtime-configuration-changes/)
* [Android Fragment](../../lectures/android-fragments/)
* [Android ViewModel](../../lectures/android-view-model/)
* [Android Bottom Navigation View and Drawer Layout](../../lectures/android-bottom-navigation-view-and-drawer-layout/)
* [Android Dialogs](../../lectures/android-dialogs/)
* [Android RecyclerView](../../lectures/android-recycler-view/)
</div>

`)
  ]);
}
const lectures_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "lectures.html.vue"]]);
export {
  lectures_html as default
};
