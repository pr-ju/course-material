import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://wares.commonsware.com/app/internal/book/Android/page/chap-preface-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.android.com/training/location/request-updates",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createStaticVNode('<h1 id="android-gps" tabindex="-1"><a class="header-anchor" href="#android-gps" aria-hidden="true">#</a> Android GPS</h1><p>So, you need to figure out where in the world the user is? Then meet your new best friend: the GPS receiver. Let&#39;s take a look at how to use it in Android, with and without Google Play Services.</p><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-gps.pdf">android-gps.pdf</a></li><li><a href="android-gps.pptx">android-gps.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 5)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("The following chapters from the course book ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("The Busy Coder's Guide to Android Development")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createTextVNode(": ")),
        _cache[3] || (_cache[3] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Accessing Location-Based Services"),
            createBaseVNode("li", null, "The Fused Location Provider")
          ],
          -1
          /* HOISTED */
        ))
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[5] || (_cache[5] = createTextVNode("The Android Developers Guide's page on ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[4] || (_cache[4] = createTextVNode("Request location updates")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[6] || (_cache[6] = createTextVNode("."))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
