import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://en.wikipedia.org/wiki/Indentation_style",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://en.wikipedia.org/wiki/Naming_convention_(programming)",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://eng.libretexts.org/Bookshelves/Computer_Science/Book%3A_Python_for_Everybody_(Severance)/2%3A_Variables%2C_Expressions%2C_and_Statements/2.12%3A_Choosing_Mnemonic_Variable_Names",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_GradingGuideline = resolveComponent("GradingGuideline");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[17] || (_cache[17] = createStaticVNode('<h1 id="project-grading-guidelines" tabindex="-1"><a class="header-anchor" href="#project-grading-guidelines" aria-hidden="true">#</a> Project Grading Guidelines</h1><p>This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades (for example, to be able to get <code>Grade 5</code>, you also need to follow the guidelines for <code>Grade 3</code> and <code>Grade 4</code>).</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>This page does only contain <em>guidelines</em> for how your work will be graded. When we grade your work we&#39;ll make an assessment of your entire work, which is not limited to these guidelines, so <strong>do not use these guidelines as a checklist for a certain grade</strong>. Instead, rather see them as minimum requirements to be able to get a certain grade.</p></div><h2 id="indentation-convention" tabindex="-1"><a class="header-anchor" href="#indentation-convention" aria-hidden="true">#</a> Indentation Convention</h2>', 4)),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("The convention used for indenting code (such as 2 spaces, 4 spaces, a tab, etc.). For more information, see ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("Wikipedia's article on indentation style")),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "No indentation convention has been used or there exists too many places where the convention has not been followed.",
      grade3: "The same indentation convention is mostly used, but at a few places the convention has not been followed.",
      grade4: "Each file correctly use an indentation convention, but different conventions are used in different files, and there's no consistency in when to use which one.",
      grade5: "The same indentation convention is consistently used across all files of the same type."
    }),
    _cache[18] || (_cache[18] = createBaseVNode(
      "h2",
      {
        id: "coding-style",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#coding-style",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Coding Style")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode("The conventions used for writing comments, (not) using optional curly brackets, maximum line lengths, white-spaces in the statements, etc. For more information, see ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[2] || (_cache[2] = createTextVNode("Wikipedia's article on coding style")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[4] || (_cache[4] = createTextVNode("."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "No coding style has been used or there exists too many places where the style has not been followed.",
      grade3: "The same coding style is mostly used, but at a few places the style has not been followed.",
      grade4: "The same coding style is consistently used in each file, although individual files (even of the same type) use different coding styles.",
      grade5: "The same coding style is consistently used across all files of the same type."
    }),
    _cache[19] || (_cache[19] = createBaseVNode(
      "h2",
      {
        id: "naming-convention",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#naming-convention",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Naming Convention")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[6] || (_cache[6] = createTextVNode("The convention used when naming variables, constants, functions, methods, files, etc. For more information, see ")),
      createBaseVNode("a", _hoisted_3, [
        _cache[5] || (_cache[5] = createTextVNode("Wikipedia's article on naming convention")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[7] || (_cache[7] = createTextVNode("."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "No naming convention has been used or there exists too many places where the convention has not been followed.",
      grade3: "The same naming convention is mostly used, but at a few places the convention has not been followed.",
      grade4: "The same naming convention is consistently used in each file, although individual files (even of the same type) use different naming conventions.",
      grade5: "The same naming convention is consistently used across all files of the same type."
    }),
    _cache[20] || (_cache[20] = createBaseVNode(
      "h2",
      {
        id: "mnemonic-names",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#mnemonic-names",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Mnemonic names")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[9] || (_cache[9] = createTextVNode("The names used (on variables, functions, files, tables in the database, etc.) reflect what they represent. Optimal names are short and very descriptive. For more information, see ")),
      createBaseVNode("a", _hoisted_4, [
        _cache[8] || (_cache[8] = createTextVNode("Chapter 2.12 in Python for Everybody (Severance)")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[10] || (_cache[10] = createTextVNode("."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "Many names are not mnemonic.",
      grade3: "Many names (at least 90%) are mnemonic.",
      grade4: "Almost all names (at least 95%) are mnemonic.",
      grade5: "All names (100%) are mnemonic."
    }),
    _cache[21] || (_cache[21] = createBaseVNode(
      "h2",
      {
        id: "magic-numbers",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#magic-numbers",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Magic Numbers")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[12] || (_cache[12] = createTextVNode("Avoid using ")),
      createBaseVNode("a", _hoisted_5, [
        _cache[11] || (_cache[11] = createTextVNode("magic numbers")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[13] || (_cache[13] = createTextVNode(" in the code. Does not only apply to numbers, but all values that are better put in descriptive constants."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "3 or more magic numbers exist.",
      grade3: "At most 2 magic numbers exist.",
      grade4: "At most 1 magic number exists.",
      grade5: "No magic numbers exist."
    }),
    _cache[22] || (_cache[22] = createBaseVNode(
      "h2",
      {
        id: "resources",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#resources",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Resources")
      ],
      -1
      /* HOISTED */
    )),
    _cache[23] || (_cache[23] = createBaseVNode(
      "p",
      null,
      "The quality of the resources on the platform.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "It is not possible to apply CRUD operations on at least accounts + 1 other type of resource stored in a relational database.",
      grade3: "The resources are validated so the database does not contain resources in bad state (such as an account with an empty username).",
      grade4: "The resources are not 'minimal', but 'rich'. For example, if a resource represents an account, it does not only consist of a username and a password, but also of more relevant information that make sense (email, city, date of birth, date signing up, whatever...).",
      grade5: "Not applicable."
    }),
    _cache[24] || (_cache[24] = createBaseVNode(
      "h2",
      {
        id: "database-design",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#database-design",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Database Design")
      ],
      -1
      /* HOISTED */
    )),
    _cache[25] || (_cache[25] = createBaseVNode(
      "p",
      null,
      "The quality of the design of the database.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "The design is inappropriate, for example storing all resources in the same table.",
      grade3: "Primary keys are properly used.",
      grade4: "Constraints (such as unique constraints and foreign key constraints) are used correctly where suitable.",
      grade5: "Data is stored using appropriate data types (especially important for booleans and dates/unix timestamps)."
    }),
    _cache[26] || (_cache[26] = createBaseVNode(
      "h2",
      {
        id: "rest-api-design",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#rest-api-design",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" REST API Design")
      ],
      -1
      /* HOISTED */
    )),
    _cache[27] || (_cache[27] = createBaseVNode(
      "p",
      null,
      "The quality of the design of the database.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "Not possible to apply CRUD operations on at least accounts + 1 other type of resource.",
      grade3: "Possible to apply CRUD operations on at least accounts + 1 other type of resource.",
      grade4: "Methods and URIs are properly used.",
      grade5: "The report fully describes the design of the REST API, including which methods, URIs, headers, body, etc. that can be used, and what the possible responses (status code, headers, body, etc.) are."
    }),
    _cache[28] || (_cache[28] = createBaseVNode(
      "h2",
      {
        id: "error-handling",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#error-handling",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Error Handling")
      ],
      -1
      /* HOISTED */
    )),
    _cache[29] || (_cache[29] = createBaseVNode(
      "p",
      null,
      "Handling of various errors that can occur when the user is using your platform, including validation errors and database errors (both on the fronend and the backend).",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "Errors are not handled or the error messages are confusing to the user (remember: users are not programmers).",
      grade3: "Handles and display error messages for at least 90% of the errors that can occur.",
      grade4: "Handles and display error messages for at least 95% of the errors that can occur.",
      grade5: "Handles and display error messages for all errors that can occur."
    }),
    _cache[30] || (_cache[30] = createBaseVNode(
      "h2",
      {
        id: "graphical-user-interface",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#graphical-user-interface",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Graphical User Interface")
      ],
      -1
      /* HOISTED */
    )),
    _cache[31] || (_cache[31] = createBaseVNode(
      "p",
      null,
      "The logical placement and usage of components (menus, sub-menus, pagination, forms, buttons, etc.), the support for different screen sizes (small smartphones, medium tablets, large desktop screens, etc.), the support for different input methods (touch screen, mouse, keyboard, etc.), etc.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "The frontend contains components users don't understand how to use/can't use.",
      grade3: "The placement of components is logical and users understand how to use them on a desktop computer.",
      grade4: "The frontend do to some extent have support for smartphones (for example having support for just the screen size or just the input method).",
      grade5: "The frontend have very good support for both smartphones and desktop computers."
    }),
    _cache[32] || (_cache[32] = createBaseVNode(
      "h2",
      {
        id: "security",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#security",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Security")
      ],
      -1
      /* HOISTED */
    )),
    _cache[33] || (_cache[33] = createBaseVNode(
      "p",
      null,
      "Vulnerabilities such as SQL injections, not checking authorization, storing password in plain text, improper implemented authentication, etc.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "3 or more security vulnerabilities exist.",
      grade3: "At most 2 security vulnerabilities exist.",
      grade4: "At most 1 security vulnerability exists.",
      grade5: "No security vulnerability exists."
    }),
    _cache[34] || (_cache[34] = createBaseVNode(
      "h2",
      {
        id: "report",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#report",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Report")
      ],
      -1
      /* HOISTED */
    )),
    _cache[35] || (_cache[35] = createBaseVNode(
      "p",
      null,
      "The quality of the report.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "The reader does not get a good understanding of what the project is about (the problem and the solution) nor how the solution works/will be used/has been implemented.",
      grade3: "The readers gets a good understanding of what the project is about and how the solution works/will be used/has been implemented. Figures are used, they have been numbered and given descriptive captions, and they are referred to from the main text using their figure numbers. The text does not contain obvious spelling mistake nor incomprehensible sentences.",
      grade4: "Chapters and sub-chapters are properly used to give the report a good structure. The reader can easily find the specific information she's looking for in the expected chapter/sub-chapter.",
      grade5: "Everything with the report is great."
    }),
    _cache[36] || (_cache[36] = createBaseVNode(
      "h2",
      {
        id: "optional-tasks",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#optional-tasks",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Optional Tasks")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[15] || (_cache[15] = createTextVNode("Complete ")),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/project-instructions.html#part-10-grade-4-and-5" }, {
        default: withCtx(() => _cache[14] || (_cache[14] = [
          createTextVNode("the optional tasks described in the Project Instructions")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[16] || (_cache[16] = createTextVNode("."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "Not applicable.",
      grade3: "No extra tasks need to be completed.",
      grade4: "The extra tasks SDK and Supporting Multiple Data Formats needs to be completed.",
      grade5: "The extra task Third-Party Authentication needs to be completed."
    })
  ]);
}
const projectGradingGuidelines_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "project-grading-guidelines.html.vue"]]);
export {
  projectGradingGuidelines_html as default
};
