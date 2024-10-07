import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://ju.instructure.com/courses/6658/groups",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://commonsware.com/catalog",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://commonsware.com/Kotlin",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://commonsware.com/Coroutines",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://commonsware.com/Room",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = {
  href: "https://commonsware.com/Jetpack",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = {
  href: "https://commonsware.com/AndExplore",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://commonsware.com/R/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_StudyGuideInfo = resolveComponent("StudyGuideInfo");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_Figure = resolveComponent("Figure");
  const _component_Teacher = resolveComponent("Teacher");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ILOsActivitiesMapping = resolveComponent("ILOsActivitiesMapping");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_AcademicYearFigure = resolveComponent("AcademicYearFigure");
  return openBlock(), createElementBlock("div", null, [
    _cache[31] || (_cache[31] = createBaseVNode(
      "h1",
      {
        id: "study-guide",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#study-guide",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Study Guide")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_StudyGuideInfo, {
      "course-name": "Android Development",
      "ladok-code": "TAGK19",
      credits: "7.5",
      year: "2023",
      "course-coordinator": "Peter Larsson-Green",
      examiner: "Jérôme Landré",
      "canvas-course-id": "4825"
    }),
    _cache[32] || (_cache[32] = createBaseVNode(
      "h2",
      {
        id: "introduction",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#introduction",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Introduction")
      ],
      -1
      /* HOISTED */
    )),
    _cache[33] || (_cache[33] = createBaseVNode(
      "p",
      null,
      "Smartphones and tablets have a huge potential to facilitate for us humans. Often, they can not only replace old none-digital products we have, but also provide us with an even better solution. As an example, when you play a song on an instrument you need to see which notes you should play, which traditionally have been printed on papers. How easy is it to turn to the next side as you play and hold an instrument in your hands? And consequently, the notes are usually quite small to fit as many as possible on the same paper, making them hard to read from a distance.",
      -1
      /* HOISTED */
    )),
    _cache[34] || (_cache[34] = createBaseVNode(
      "p",
      null,
      "Imagine the notes instead are shown on a tablet, which just displays the notes you need to play at the moment, and that automatically switches to the notes after that as you play them. Furthermore, it is also possible to record what you play on the instrument, and then re-play it to hear what you need to practice a bit more on. Then you can compare a recording today with a recording you did three weeks ago to see how much you have improved. Used correctly, the potential benefits of these devices are huge!",
      -1
      /* HOISTED */
    )),
    _cache[35] || (_cache[35] = createBaseVNode(
      "p",
      null,
      "In this course you will learn how to create applications running smartphones and tablets running Android. Focus will be on learning the fundamental application components all Android applications consists of, but you will also be given the opportunity to dig deeper into specific areas, such as:",
      -1
      /* HOISTED */
    )),
    _cache[36] || (_cache[36] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "Using Bluetooth to connect to other devices."),
        createBaseVNode("li", null, "Using Beacons to detect when the device is close to something and react accordingly."),
        createBaseVNode("li", null, "Using the Internet (e.g. Firestore) to synchronize data between devices.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("At course start you are expected to possess knowledge corresponding to the pre-requisite courses shown in ")),
      createVNode(_component_FigureNumber),
      _cache[1] || (_cache[1] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Prerequisites for this course." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n	introCompTech[Introduction to Computer Technology 7.5 Credits]\n	introProg[Introduction to Programming 7.5 Credits]\n	discMath[Discrete Mathematics 7.5 Credits]\n	dalg[Data Structures and Algorithms 7.5 Credits]\n	oop[Object-Oriented Programming 7.5 Credits]\n	oop2[Object-Oriented Software Development 6 Credits OR Object-Oriented Software Development with Design Patterns 7.5 Credits]\n	andDev[Android Development 7.5 Credits]\n	introCompTech --> introProg\n	introProg --> dalg\n	discMath --> dalg\n	dalg --> oop\n	oop --> oop2\n	oop2 --> andDev\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[37] || (_cache[37] = createBaseVNode(
      "h2",
      {
        id: "teachers",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#teachers",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Teachers")
      ],
      -1
      /* HOISTED */
    )),
    _cache[38] || (_cache[38] = createBaseVNode(
      "h3",
      {
        id: "peter-larsson-green",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#peter-larsson-green",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Peter Larsson-Green")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Teacher, {
      name: "Peter Larsson-Green",
      photo: "peter-larsson-green.jpeg",
      roles: ["Course coordinator", "lecturer", "lab assistant"],
      description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
      email: "Peter.Larsson-Green@ju.se",
      phone: "036 - 10 17 35",
      website: "https://ju.se/en/personinfo.html?sign=LarPet"
    }),
    _cache[39] || (_cache[39] = createBaseVNode(
      "h3",
      {
        id: "martin-lindh",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#martin-lindh",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Martin Lindh")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Teacher, {
      name: "Martin Lindh",
      photo: "martin-lindh.jpeg",
      roles: ["Lecturer"],
      description: "Experienced graphical designer.",
      email: "martin.lindh@ju.se",
      phone: "036 - 10 19 23",
      website: "https://ju.se/en/personinfo.html?sign=lindma",
      zoomLink: "https://ju.instructure.com/courses/3421/pages/zoom-links?module_item_id=76266"
    }),
    _cache[40] || (_cache[40] = createBaseVNode(
      "h3",
      {
        id: "jerome-landre",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#jerome-landre",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Jérôme Landré")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Teacher, {
      name: "Jérôme Landré",
      photo: "jerome-landre.jpeg",
      roles: ["Examiner"],
      description: "Assistant Professor.",
      email: "jerome.landre@ju.se",
      phone: "",
      website: "https://ju.se/en/personinfo.html?sign=LanJer"
    }),
    _cache[41] || (_cache[41] = createBaseVNode(
      "h2",
      {
        id: "intended-learning-outcomes",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#intended-learning-outcomes",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Intended Learning Outcomes")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode("The intended learning outcomes of the course are found in ")),
      createVNode(_component_RouterLink, { to: "/courses/android-development/course-syllabus/" }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode("the course syllabus")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[4] || (_cache[4] = createTextVNode(" in force. Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity helping you learn which intended learning outcome."))
    ]),
    createVNode(_component_ILOsActivitiesMapping, { description: "\nDisplay an understanding for the consequences of the Android technical and economical ecosystems\n-Project work\n+Recorded Lectures\n+Tutorials\n+Lab Sessions\n---\nDisplay an understanding for human interface guidelines for mobile devices\n-Project work\n+Lecture\n+Lab Sessions\n---\nDisplay an ability to use the Android SDK and toolchain to develop high quality Android apps\n-Project work\n+Recorded Lectures\n+Tutorials\n+Lab Sessions\n---\nDisplay an ability to use sensor systems using Android APIs\n-Project work\n+Recorded Lectures\n+Tutorials\n+Lab Sessions\n---\nDisplay an ability to use common APIs for Android\n-Project work\n-Laboratory work\n+Recorded Lectures\n+Tutorials\n+Lab Sessions\n---\nDisplay an ability to employ established methods to develop user interfaces for small screens with touch input\n-Project work\n+Lectures\n+Lab Sessions\n---\nDisplay an ability to evaluate the Android system architecture\n-Project work\n+Recorded Lectures\n+Tutorials\n+Lab Sessions\n" }),
    _cache[42] || (_cache[42] = createStaticVNode('<h2 id="learning-activities" tabindex="-1"><a class="header-anchor" href="#learning-activities" aria-hidden="true">#</a> Learning Activities</h2><p>Here are short introduction to the learning activities offered in the course.</p><h3 id="recorded-lectures" tabindex="-1"><a class="header-anchor" href="#recorded-lectures" aria-hidden="true">#</a> Recorded Lectures</h3><p>There exists some pre-recorded lectures that will help you learn the basics of Android Development.</p><h3 id="tutorials" tabindex="-1"><a class="header-anchor" href="#tutorials" aria-hidden="true">#</a> Tutorials</h3><p>At the lectures on campus, the teacher won&#39;t have power point presentations. Instead, these sessions are called &quot;tutorials&quot; to reflect that the teacher instead will show you how to implement different things in an Android app.</p><h3 id="lectures" tabindex="-1"><a class="header-anchor" href="#lectures" aria-hidden="true">#</a> Lectures</h3><p>Martin Lindh will give you one lecture on Campus focused on designing graphical user interfaces and creating mockup applications for smartphones.</p><h3 id="lab-sessions" tabindex="-1"><a class="header-anchor" href="#lab-sessions" aria-hidden="true">#</a> Lab Sessions</h3><p>Each week you may attend a 4 hours lab session. At the lab session you may ask the teacher there for help with your laboratory work and your project work. When you have completed your laboratory work you should also present your solution to a teacher at a lab sessions.</p>', 10)),
    createBaseVNode("p", null, [
      _cache[6] || (_cache[6] = createTextVNode("There are 3 different lab sessions each week, but you may only come to one of them. To distribute you, join one of the ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[5] || (_cache[5] = createTextVNode("Lab Session Groups")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[7] || (_cache[7] = createTextVNode(" on Canvas. First come, first served. Feel free to attend the other lab sessions as well, but students that have signed up for a specific lab session should of course be prioritized by the teacher."))
    ]),
    _cache[43] || (_cache[43] = createBaseVNode(
      "h2",
      {
        id: "examination-tests",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#examination-tests",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Examination Tests")
      ],
      -1
      /* HOISTED */
    )),
    _cache[44] || (_cache[44] = createBaseVNode(
      "p",
      null,
      "The course contains two examination tests.",
      -1
      /* HOISTED */
    )),
    _cache[45] || (_cache[45] = createBaseVNode(
      "h3",
      {
        id: "_1-laboratory-work",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_1-laboratory-work",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" 1. Laboratory Work")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[9] || (_cache[9] = createTextVNode("More information about the ")),
      _cache[10] || (_cache[10] = createBaseVNode(
        "code",
        null,
        "Laboratory Work",
        -1
        /* HOISTED */
      )),
      _cache[11] || (_cache[11] = createTextVNode(" can be found on the page ")),
      createVNode(_component_RouterLink, { to: "/courses/android-development/laboratory-work/" }, {
        default: withCtx(() => _cache[8] || (_cache[8] = [
          createTextVNode("Laboratory Work")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[12] || (_cache[12] = createTextVNode("."))
    ]),
    _cache[46] || (_cache[46] = createBaseVNode(
      "h3",
      {
        id: "_2-project-work",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_2-project-work",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" 2. Project Work")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[14] || (_cache[14] = createTextVNode("More information about the ")),
      _cache[15] || (_cache[15] = createBaseVNode(
        "code",
        null,
        "Project Work",
        -1
        /* HOISTED */
      )),
      _cache[16] || (_cache[16] = createTextVNode(" can be found on the page ")),
      createVNode(_component_RouterLink, { to: "/courses/android-development/project-work/" }, {
        default: withCtx(() => _cache[13] || (_cache[13] = [
          createTextVNode("Project Work")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[17] || (_cache[17] = createTextVNode("."))
    ]),
    _cache[47] || (_cache[47] = createBaseVNode(
      "h3",
      {
        id: "re-examination",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#re-examination",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Re-examination")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      createVNode(_component_FigureNumber),
      _cache[18] || (_cache[18] = createTextVNode(" below shows the study and exam periods during a year. The small yellow circle sectors shows when the (re-)examinations are offered in this course (at the re-exam periods in June and August)."))
    ]),
    createVNode(_component_AcademicYearFigure),
    _cache[48] || (_cache[48] = createStaticVNode('<p>If you need to know a precise date and time for the re-examination in advance, email the course coordinator at <code>peter.larsson-green@ju.se</code>. An announcement on Canvas with more information will be posted soon before the re-examination periods for this course.</p><p>The project work will only be graded 3/U (U=fail) at re-examination.</p><p>If you haven&#39;t passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run, and that you should take them according to the new instructions.</p><h3 id="final-grade" tabindex="-1"><a class="header-anchor" href="#final-grade" aria-hidden="true">#</a> Final grade</h3><p>To receive a final grade in the course you need to pass all examination tests. The final grade will be based on the grade for the <code>Project Work</code>.</p><h2 id="course-literature-and-other-teaching-aids" tabindex="-1"><a class="header-anchor" href="#course-literature-and-other-teaching-aids" aria-hidden="true">#</a> Course Literature and Other Teaching Aids</h2>', 6)),
    createBaseVNode("p", null, [
      _cache[20] || (_cache[20] = createTextVNode("The following ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[19] || (_cache[19] = createTextVNode("CommonsWare’s Books")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[21] || (_cache[21] = createTextVNode(":"))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[22] || (_cache[22] = createTextVNode("Elements of Kotlin")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_4, [
          _cache[23] || (_cache[23] = createTextVNode("Elements of Kotlin Coroutines")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_5, [
          _cache[24] || (_cache[24] = createTextVNode("Elements of Android Room")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_6, [
          _cache[25] || (_cache[25] = createTextVNode("Elements of Android Jetpack")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_7, [
          _cache[26] || (_cache[26] = createTextVNode("Exploring Android")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_8, [
          _cache[27] || (_cache[27] = createTextVNode("Elements of Android R")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _cache[49] || (_cache[49] = createBaseVNode(
      "h2",
      {
        id: "time-plan",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#time-plan",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Time Plan")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[29] || (_cache[29] = createTextVNode("A time plan is available on the page ")),
      createVNode(_component_RouterLink, { to: "/courses/android-development/time-plan/" }, {
        default: withCtx(() => _cache[28] || (_cache[28] = [
          createTextVNode("Time Plan")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[30] || (_cache[30] = createTextVNode("."))
    ])
  ]);
}
const studyGuide_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "study-guide.html.vue"]]);
export {
  studyGuide_html as default
};
