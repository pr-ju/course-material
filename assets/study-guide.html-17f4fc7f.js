import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://ju.instructure.com/courses/6738/groups",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://ju.instructure.com/courses/6738/groups",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://launchschool.com/books/http",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://marksheet.io/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://eloquentjavascript.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_StudyGuideInfo = resolveComponent("StudyGuideInfo");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_Figure = resolveComponent("Figure");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_Teacher = resolveComponent("Teacher");
  const _component_ILOsActivitiesMapping = resolveComponent("ILOsActivitiesMapping");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_AcademicYearFigure = resolveComponent("AcademicYearFigure");
  return openBlock(), createElementBlock("div", null, [
    _cache[32] || (_cache[32] = createBaseVNode(
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
      "course-name": "Web Development Fundamentals",
      "ladok-code": "TGWK12",
      credits: "7.5",
      year: "2022",
      "course-coordinator": "Peter Larsson-Green",
      examiner: "Jérôme Landré",
      "canvas-course-id": "6738"
    }),
    _cache[33] || (_cache[33] = createBaseVNode(
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
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("In this course you will learn what the web is and how you can create web applications running on it. ")),
      createVNode(_component_FigureNumber),
      _cache[1] || (_cache[1] = createTextVNode(" below displays the architecture of a typical web application."))
    ]),
    createVNode(_component_Figure, { caption: "Common web application architecture." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n	users[Users]\n	subgraph Users' computers\n		webBrowser[Web Browser]\n	end\n	subgraph Web Server\n		webApp[Web Application]\n	end\n	subgraph Database Server\n		db[Database]\n	end\n	users -- Use --> webBrowser\n	webBrowser -- HTTP --> webApp\n	webApp -- SQL --> db\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[34] || (_cache[34] = createBaseVNode(
      "p",
      null,
      "More specifically you will learn how to create a web application to which a single user can login to modify the resources on it, such as blog posts and guestbook posts. To accomplish this your web application will use an SQLite database to store the resources and the web framework Express to handle incoming HTTP requests. To avoid spending too much time on the graphical design of the web application you will also learn how to use a CSS framework with pre-styled graphical user interface components you can use. Your web application must of course also be secure, so you will also learn about common vulnerabilities in web applications and how you can prevent them.",
      -1
      /* HOISTED */
    )),
    _cache[35] || (_cache[35] = createBaseVNode(
      "h2",
      {
        id: "prerequisites",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#prerequisites",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Prerequisites")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode("At course start you are expected to already possess knowledge corresponding to the prerequisite courses mentioned in the ")),
      createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/course-syllabus/" }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode("Course Syllabus")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[4] || (_cache[4] = createTextVNode(". These are either those shown in ")),
      createVNode(_component_FigureNumber),
      _cache[5] || (_cache[5] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Prerequisites for Development for Mobile Platforms students taking this course." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n	introComp[Introduction to Computing 7.5 Credits]\n	introProg[Introduction to Programming 9 Credits]\n	db[Databases 6 Credits]\n	discMath[Discrete Mathematics 6 Credits]\n	dalg[Data Structures and Algorithms 7.5 Credits]\n	oop[Object-oriented Programming 7.5 Credits]\n	webDevFund[Web Development Fundamentals 7.5 Credits]\n	introComp --> introProg\n	introProg --> db\n	db --> webDevFund\n	introProg --> dalg\n	discMath --> dalg\n	dalg --> oop\n	oop --> webDevFund\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[6] || (_cache[6] = createTextVNode("Or those shown in ")),
      createVNode(_component_FigureNumber),
      _cache[7] || (_cache[7] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Prerequisites for New Media Design students taking this course." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n	ihci[Introduction to Human-Computer Interaction 7.5 Credits]\n	fop[Foundations of Programming 7.5 Credits]\n	wuid[Web and User Interface Design 15 Credits]\n	webDevFund[Web Development Fundamentals 7.5 Credits]\n	ihci --> wuid\n	fop --> webDevFund\n	wuid --> fop\n	wuid --> webDevFund\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[36] || (_cache[36] = createBaseVNode(
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
    _cache[37] || (_cache[37] = createBaseVNode(
      "p",
      null,
      "Here are short presentations of the teachers involved in the course.",
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
      roles: ["Course coordinator", "lecturer"],
      description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
      email: "Peter.Larsson-Green@ju.se",
      phone: "036 - 10 17 35",
      website: "https://ju.se/en/personinfo.html?sign=LarPet"
    }),
    _cache[39] || (_cache[39] = createBaseVNode(
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
      roles: ["Lab assistant"],
      description: "Assistant Professor.",
      email: "jerome.landre@ju.se",
      phone: "",
      website: "https://ju.se/en/personinfo.html?sign=LanJer"
    }),
    _cache[40] || (_cache[40] = createBaseVNode(
      "h3",
      {
        id: "eveline-ingesson",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#eveline-ingesson",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Eveline Ingesson")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Teacher, {
      name: "Eveline Ingesson",
      photo: "eveline-ingesson.jpeg",
      roles: ["Lab assistant"],
      description: "Graduated User Experience Design student now working as teacher at JU.",
      email: "eveline.ingesson@ju.se",
      phone: "",
      website: "https://ju.se/en/personinfo.html?sign=ingeve"
    }),
    _cache[41] || (_cache[41] = createBaseVNode(
      "h3",
      {
        id: "hasan-khalaf",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#hasan-khalaf",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Hasan Khalaf")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Teacher, {
      name: "Hasan Khalaf",
      photo: "hasan-khalaf.jpeg",
      roles: ["Lab assistant"],
      description: "Third year student studying the bachelor program Software Engineering and Mobile Platforms.",
      email: "khha20qz@student.ju.se",
      phone: "",
      website: "https://ju.se/en/personinfo.html?sign=ingeve"
    }),
    _cache[42] || (_cache[42] = createBaseVNode(
      "h3",
      {
        id: "garrit-schaap",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#garrit-schaap",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Garrit Schaap")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Teacher, {
      name: "Garrit Schaap",
      photo: "garrit-schaap.jpeg",
      roles: ["Lecturer", "lab assistant"],
      description: "Experienced web developer currently working as teacher at JU.",
      email: "garrit.schaap@ju.se",
      phone: "",
      website: "https://ju.se/en/personinfo.html?sign=SCHGAR"
    }),
    _cache[43] || (_cache[43] = createBaseVNode(
      "h3",
      {
        id: "jasmin-jakupovic",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#jasmin-jakupovic",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Jasmin Jakupovic")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Teacher, {
      name: "Jasmin Jakupovic",
      photo: "jasmin-jakupovic.jpeg",
      roles: ["Lecturer"],
      description: "Program manager for the bachelor program Software Engineering and Mobile Platforms.",
      email: "jasmin.jakupovic@ju.se",
      phone: "036 - 10 12 16",
      website: "https://ju.se/en/personinfo.html?sign=jakjas"
    }),
    _cache[44] || (_cache[44] = createBaseVNode(
      "h3",
      {
        id: "susanne-smithberger",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#susanne-smithberger",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Susanne Smithberger")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Teacher, {
      name: "Susanne Smithberger",
      photo: "susanne-smithberger.jpeg",
      roles: ["Lecturer", "seminar leader"],
      description: "Lecturer at the Department of Language, Aesthetic Learning and Literature at JU.",
      email: "susanne.smithberger@ju.se",
      phone: "073 - 910 16 90",
      website: "https://ju.se/en/personinfo.html?sign=smisus"
    }),
    _cache[45] || (_cache[45] = createBaseVNode(
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
      _cache[9] || (_cache[9] = createTextVNode("The intended learning outcomes of the course are found in the ")),
      createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/course-syllabus/" }, {
        default: withCtx(() => _cache[8] || (_cache[8] = [
          createTextVNode("Course Syllabus")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[10] || (_cache[10] = createTextVNode(". Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity help you learn which intended learning outcome."))
    ]),
    createVNode(_component_ILOsActivitiesMapping, { description: "\nDisplay an understanding of the fundamental building blocks of the web (HTTP and HTML).\n-Project work\n-Written examination\n+Recorded lecture: Internet\n+Recorded lecture: Web Applications & HTTP\n+Recorded lecture: HTML\n+Recorded lecture: Character Encodings\n+Tutorials\n+Lab sessions\n---\nDisplay an understanding of common security concerns in web applications.\n-Project work\n-Written examination\n+Recorded lecture: Cookies and Sessions\n+Recorded lecture: Designing Account Systems\n+Recorded lecture: Web Security\n+Tutorials\n+Lab sessions\n---\nDisplay an ability to construct web pages using HTML5, CSS, and CSS frameworks.\n-Project work\n-Written examination\n+Recorded lecture: HTML\n+Lecture: CSS\n+Tutorials\n+Lab sessions\n---\nDisplay an ability to program in JavaScript.\n-Project work\n-Written examination\n+Recorded lecture: JavaScript\n+Recorded lecture: Asynchronous Programming in JavaScript\n+Tutorials\n+Lab sessions\n---\nDisplay an ability to construct web pages using Node.js.\n-Project work\n-Written examination\n+Recorded lecture: Using Shells\n+Recorded lecture: Node.js\n+Recorded lecture: npm\n+Recorded lecture: Express Basics\n+Recorded lecture: Web Applications in Express\n+Recorded lecture: Handlebars\n+Tutorials\n+Lab sessions\n---\nDisplay an ability to construct database-backed web applications.\n-Project work\n-Written examination\n+Lecture: Database\n+Recorded lecture: Using SQLite in Node.js\n+Tutorials\n+Lab sessions\n" }),
    _cache[46] || (_cache[46] = createStaticVNode('<h2 id="learning-activities" tabindex="-1"><a class="header-anchor" href="#learning-activities" aria-hidden="true">#</a> Learning Activities</h2><p>Here are short introduction to the learning activities offered in the course.</p><h3 id="recorded-lectures" tabindex="-1"><a class="header-anchor" href="#recorded-lectures" aria-hidden="true">#</a> Recorded Lectures</h3><p>In the beginning of most weeks you will be encouraged to view some recorded lectures. These will be quite theoretical and will teach new you things you can use when building a website.</p><h3 id="tutorials" tabindex="-1"><a class="header-anchor" href="#tutorials" aria-hidden="true">#</a> Tutorials</h3><p>Some weeks there will be a tutorial session where the teacher will show you how to use what has been taught in the recorded lectures in practice. you can think of these as traditional lectures given on campus, but with no lecture slides and mostly coding.</p><h3 id="lectures" tabindex="-1"><a class="header-anchor" href="#lectures" aria-hidden="true">#</a> Lectures</h3><p>In the course there will be a few traditional lectures given in a lecture hall on campus.</p><h3 id="seminars" tabindex="-1"><a class="header-anchor" href="#seminars" aria-hidden="true">#</a> Seminars</h3>', 9)),
    createBaseVNode("p", null, [
      _cache[12] || (_cache[12] = createTextVNode("To help you write a proper project report, there will be a 1 hour lecture on academic writing, and then a 1 hour seminar you can attend to become even better at academic writing. All students can't attend the seminar at the same time, so it is given at two different times, and you may attend one of them. To distribute you, join the ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[11] || (_cache[11] = createTextVNode("Seminar Group")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[13] || (_cache[13] = createTextVNode(" on Canvas corresponding to the time you want to attend."))
    ]),
    _cache[47] || (_cache[47] = createBaseVNode(
      "h3",
      {
        id: "lab-sessions",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#lab-sessions",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Lab Sessions")
      ],
      -1
      /* HOISTED */
    )),
    _cache[48] || (_cache[48] = createBaseVNode(
      "p",
      null,
      "Each week you may attend a 4 hours lab session. At the lab session you may ask the teacher there for help with your exercises and project work.",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[15] || (_cache[15] = createTextVNode("There are 5 different lab sessions each week, but you may only sign up for one of them. To distribute you, join one of the ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[14] || (_cache[14] = createTextVNode("Lab Groups")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[16] || (_cache[16] = createTextVNode(" on Canvas. First come, first served."))
    ]),
    _cache[49] || (_cache[49] = createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Attending more lab sessions</p><p>You may attend the other lab sessions if there is room for it, but the teacher there must of course prioritize helping the students that have signed up for that lab session.</p></div><h2 id="examination-tests" tabindex="-1"><a class="header-anchor" href="#examination-tests" aria-hidden="true">#</a> Examination Tests</h2><p>The course contains two examination tests.</p><h3 id="_1-written-examination" tabindex="-1"><a class="header-anchor" href="#_1-written-examination" aria-hidden="true">#</a> 1. Written Examination</h3>', 4)),
    createBaseVNode("p", null, [
      _cache[18] || (_cache[18] = createTextVNode("2 credits, graded U, 3, 4, and 5. More information is available on the ")),
      createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/written-examination/" }, {
        default: withCtx(() => _cache[17] || (_cache[17] = [
          createTextVNode("Written Examination")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[19] || (_cache[19] = createTextVNode(" page."))
    ]),
    _cache[50] || (_cache[50] = createBaseVNode(
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
      _cache[21] || (_cache[21] = createTextVNode("5.5 credits, graded U, 3, 4 and 5. More information is available on the ")),
      createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/project-work/" }, {
        default: withCtx(() => _cache[20] || (_cache[20] = [
          createTextVNode("Project Work")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[22] || (_cache[22] = createTextVNode(" page."))
    ]),
    _cache[51] || (_cache[51] = createStaticVNode('<h3 id="final-grade" tabindex="-1"><a class="header-anchor" href="#final-grade" aria-hidden="true">#</a> Final Grade</h3><p>To receive a final grade on the course you need to pass both examination tests (<code>Written Examination</code> and <code>Project Work</code>). The final grade will be based on the lowest grade of the <code>Written Examination</code> and the <code>Project Work</code>, but these grades will also be marked as <code>weak</code> or <code>strong</code>. If one of the grades is lower than the other and has been marked as <code>strong</code>, the final grade will be the lower grade + 1. Examples:</p><ul><li>A <code>strong 3</code> and a <code>weak 4</code> gives you <code>4</code> as the final grade</li><li>A <code>weak 3</code> and a <code>strong 5</code> gives you <code>3</code> as the final grade</li></ul><p>For the <code>Written Examination</code>, 50% of max score is a strong 3, and 70% of max score is a strong 4.</p><h3 id="re-examination" tabindex="-1"><a class="header-anchor" href="#re-examination" aria-hidden="true">#</a> Re-examination</h3>', 5)),
    createVNode(_component_FigureNumber),
    _cache[52] || (_cache[52] = createTextVNode(" below shows the study and exam periods during a year. The small blue circle sectors shows when the (re-)examinations are offered in this course.")),
    createVNode(_component_AcademicYearFigure),
    _cache[53] || (_cache[53] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Re-examination for the "),
        createBaseVNode("code", null, "Written Examination"),
        createTextVNode(" is offered at the re-exam periods in January and August.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[54] || (_cache[54] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Re-examination for the "),
        createBaseVNode("code", null, "Project Work"),
        createTextVNode(" is offered at the re-exam periods in January and August. If you need to know a precise date and time in advance, email the course coordinator at "),
        createBaseVNode("code", null, "peter.larsson-green@ju.se"),
        createTextVNode(". The project work will only be graded U/3 at re-examination.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[55] || (_cache[55] = createBaseVNode(
      "p",
      null,
      "If you haven't passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run, and that you should take them according to the new instructions.",
      -1
      /* HOISTED */
    )),
    _cache[56] || (_cache[56] = createBaseVNode(
      "h2",
      {
        id: "course-literature-and-other-teaching-aids",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#course-literature-and-other-teaching-aids",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Course Literature and Other Teaching Aids")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[23] || (_cache[23] = createTextVNode("Introduction to HTTP")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[24] || (_cache[24] = createTextVNode(" by Launch School"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_4, [
          _cache[25] || (_cache[25] = createTextVNode("MarkSheet")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[26] || (_cache[26] = createTextVNode(" by Jeremy Thomas"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_5, [
          _cache[27] || (_cache[27] = createTextVNode("Eloquent JavaScript 3rd edition")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[28] || (_cache[28] = createTextVNode(" by Marijn Haverbeke"))
      ])
    ]),
    _cache[57] || (_cache[57] = createBaseVNode(
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
      _cache[30] || (_cache[30] = createTextVNode("A time plan is available on the page ")),
      createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/time-plan/" }, {
        default: withCtx(() => _cache[29] || (_cache[29] = [
          createTextVNode("Time Plan")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[31] || (_cache[31] = createTextVNode("."))
    ])
  ]);
}
const studyGuide_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "study-guide.html.vue"]]);
export {
  studyGuide_html as default
};
