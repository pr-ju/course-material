import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/guide/topics/ui/layout/recyclerview",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://commonsware.com/Jetpack/pages/chap-rv-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode(
      "h1",
      {
        id: "android-recyclerview",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-recyclerview",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android RecyclerView")
      ],
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("In Android, we have been able to use the "),
        createBaseVNode("code", null, "ListView"),
        createTextVNode(" from day 1 to display a list of items vertically. However, it was not designed to display items in another way, and did not have that good support for animations, etc. When Google released their Android implementation of Material Design, they also gave us the "),
        createBaseVNode("code", null, "RecyclerView"),
        createTextVNode(" as a new super version of the "),
        createBaseVNode("code", null, "ListView"),
        createTextVNode(". Let's take a look at how it works!")
      ],
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/2oiZSE1rZdY",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-recycler-view.pdf">android-recycler-view.pdf</a></li><li><a href="android-recycler-view.pptx">android-recycler-view.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("The Android Developer's Guide: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_1, [
              _cache[0] || (_cache[0] = createTextVNode("Create dynamic lists with RecyclerView")),
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
              _cache[2] || (_cache[2] = createTextVNode("Employing RecyclerView")),
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
