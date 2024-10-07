import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, g as createCommentVNode, F as Fragment, i as renderList } from "./app-dfab54cf.js";
const StudyGuideInfo_vue_vue_type_style_index_0_scoped_7abbe495_lang = "";
const _sfc_main = {
  props: {
    courseName: String,
    ladokCode: String,
    credits: String,
    year: String,
    courseCoordinator: String,
    examiner: String,
    pingPongEvent: String,
    pingPongPassword: String,
    canvasCourseId: String,
    canvasCourses: Array
  }
};
const _hoisted_1 = { class: "study-guide-information" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { key: 2 };
const _hoisted_5 = { key: 3 };
const _hoisted_6 = { key: 4 };
const _hoisted_7 = { key: 5 };
const _hoisted_8 = { key: 6 };
const _hoisted_9 = { key: 7 };
const _hoisted_10 = ["href"];
const _hoisted_11 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode(
      "p",
      null,
      "This study guide contains information about the implementation of the course. If you ever have any question about something in the course, look for the answer in this study guide or one of the other pages it refers to. ",
      -1
      /* HOISTED */
    )),
    createBaseVNode("dl", _hoisted_1, [
      _cache[1] || (_cache[1] = createBaseVNode(
        "dt",
        null,
        "Course name",
        -1
        /* HOISTED */
      )),
      createBaseVNode(
        "dd",
        null,
        toDisplayString($props.courseName),
        1
        /* TEXT */
      ),
      _cache[2] || (_cache[2] = createBaseVNode(
        "dt",
        null,
        "Ladok code",
        -1
        /* HOISTED */
      )),
      createBaseVNode(
        "dd",
        null,
        toDisplayString($props.ladokCode),
        1
        /* TEXT */
      ),
      _cache[3] || (_cache[3] = createBaseVNode(
        "dt",
        null,
        "Credits",
        -1
        /* HOISTED */
      )),
      createBaseVNode(
        "dd",
        null,
        toDisplayString($props.credits),
        1
        /* TEXT */
      ),
      $props.year ? (openBlock(), createElementBlock("dt", _hoisted_2, "Year")) : createCommentVNode("v-if", true),
      $props.year ? (openBlock(), createElementBlock(
        "dd",
        _hoisted_3,
        toDisplayString($props.year),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      _cache[4] || (_cache[4] = createBaseVNode(
        "dt",
        null,
        "Course coordinator",
        -1
        /* HOISTED */
      )),
      createBaseVNode(
        "dd",
        null,
        toDisplayString($props.courseCoordinator),
        1
        /* TEXT */
      ),
      _cache[5] || (_cache[5] = createBaseVNode(
        "dt",
        null,
        "Examiner",
        -1
        /* HOISTED */
      )),
      createBaseVNode(
        "dd",
        null,
        toDisplayString($props.examiner),
        1
        /* TEXT */
      ),
      $props.pingPongEvent ? (openBlock(), createElementBlock("dt", _hoisted_4, "Ping Pong event")) : createCommentVNode("v-if", true),
      $props.pingPongEvent ? (openBlock(), createElementBlock(
        "dd",
        _hoisted_5,
        toDisplayString($props.pingPongEvent),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      $props.pingPongPassword ? (openBlock(), createElementBlock("dt", _hoisted_6, "Ping Pong password")) : createCommentVNode("v-if", true),
      $props.pingPongPassword ? (openBlock(), createElementBlock(
        "dd",
        _hoisted_7,
        toDisplayString($props.pingPongPassword),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      $props.canvasCourseId ? (openBlock(), createElementBlock("dt", _hoisted_8, "Canvas Room")) : createCommentVNode("v-if", true),
      $props.canvasCourseId ? (openBlock(), createElementBlock("dd", _hoisted_9, [
        createBaseVNode("a", {
          href: "https://ju.instructure.com/courses/" + $props.canvasCourseId,
          target: "_blank"
        }, toDisplayString($props.courseName), 9, _hoisted_10)
      ])) : createCommentVNode("v-if", true),
      $props.canvasCourses ? (openBlock(), createElementBlock(
        Fragment,
        { key: 8 },
        [
          _cache[0] || (_cache[0] = createBaseVNode(
            "dt",
            null,
            "Canvas Rooms",
            -1
            /* HOISTED */
          )),
          createBaseVNode("dd", null, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($props.canvasCourses, (course) => {
                  return openBlock(), createElementBlock("li", {
                    key: course.id
                  }, [
                    createBaseVNode("a", {
                      href: "https://ju.instructure.com/courses/" + course.id,
                      target: "_blank"
                    }, toDisplayString(course.name), 9, _hoisted_11)
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true)
    ])
  ]);
}
const StudyGuideInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7abbe495"], ["__file", "StudyGuideInfo.vue"]]);
export {
  StudyGuideInfo as default
};
