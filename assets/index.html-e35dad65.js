import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/topic/libraries/architecture/viewmodel",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://commonsware.com/Jetpack/pages/chap-viewmodel-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode(
      "h1",
      {
        id: "android-viewmodel",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-viewmodel",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android ViewModel")
      ],
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("To help our data survive runtime configuration changes, Google gave us a few classes we can use, the main one being the "),
        createBaseVNode("code", null, "ViewModel"),
        createTextVNode(" class. Let's take a look at them!")
      ],
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/nuReSbPkpsI",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-view-model.pdf">android-view-model.pdf</a></li><li><a href="android-view-model.pptx">android-view-model.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("The Android Developer's Guide: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_1, [
              _cache[0] || (_cache[0] = createTextVNode("ViewModel Overview ")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[3] || (_cache[3] = createTextVNode("In the course book ")),
        _cache[4] || (_cache[4] = createBaseVNode(
          "em",
          null,
          "Elements of Android Jetpack",
          -1
          /* HOISTED */
        )),
        _cache[5] || (_cache[5] = createTextVNode(": ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_2, [
              _cache[2] || (_cache[2] = createTextVNode("Integrating ViewModel")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
