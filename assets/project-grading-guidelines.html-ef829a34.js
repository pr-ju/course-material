import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-dfab54cf.js";
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
  href: "https://xkcd.com/1513/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://en.wikipedia.org/wiki/Naming_convention_(programming)",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://eng.libretexts.org/Bookshelves/Computer_Science/Book%3A_Python_for_Everybody_(Severance)/2%3A_Variables%2C_Expressions%2C_and_Statements/2.12%3A_Choosing_Mnemonic_Variable_Names",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = {
  href: "https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_GradingGuideline = resolveComponent("GradingGuideline");
  return openBlock(), createElementBlock("div", null, [
    _cache[15] || (_cache[15] = createStaticVNode('<h1 id="project-grading-guidelines" tabindex="-1"><a class="header-anchor" href="#project-grading-guidelines" aria-hidden="true">#</a> Project Grading Guidelines</h1><p>This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades. For example, to be able to get <code>Grade 5</code>, you also need to follow the guidelines for <code>Grade 3</code> and <code>Grade 4</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>This page does only contain <em>guidelines</em> for how your work will be graded. When we grade your work we&#39;ll make an assessment of your entire work, which is not limited to these guidelines, so <strong>do not use these guidelines as a checklist for a certain grade</strong>. Instead, rather see them as minimum requirements to be able to get a certain grade.</p></div><h2 id="indentation-convention" tabindex="-1"><a class="header-anchor" href="#indentation-convention" aria-hidden="true">#</a> Indentation Convention</h2>', 4)),
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
    _cache[16] || (_cache[16] = createBaseVNode(
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
      _cache[4] || (_cache[4] = createTextVNode("The conventions used for writing comments, (not) using optional curly brackets, maximum line lengths, white-spaces in the statements, etc. For more information, see ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[2] || (_cache[2] = createTextVNode("Wikipedia's article on coding style")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[5] || (_cache[5] = createTextVNode(". ")),
      createBaseVNode("a", _hoisted_3, [
        _cache[3] || (_cache[3] = createTextVNode("xkcd has a web comic about it.")),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "No coding style has been used or there exists too many places where the style has not been followed.",
      grade3: "The same coding style is mostly used, but at a few places the style has not been followed.",
      grade4: "The same coding style is consistently used in each file, although individual files (even of the same type) use different coding styles.",
      grade5: "The same coding style is consistently used across all files of the same type."
    }),
    _cache[17] || (_cache[17] = createBaseVNode(
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
      _cache[7] || (_cache[7] = createTextVNode("The convention used when naming variables, constants, functions, methods, files, etc. For more information, see ")),
      createBaseVNode("a", _hoisted_4, [
        _cache[6] || (_cache[6] = createTextVNode("Wikipedia's article on naming convention")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[8] || (_cache[8] = createTextVNode("."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "No naming convention has been used or there exists too many places where the convention has not been followed.",
      grade3: "The same naming convention is mostly used, but at a few places the convention has not been followed.",
      grade4: "The same naming convention is consistently used in each file, although individual files (even of the same type) use different naming conventions.",
      grade5: "The same naming convention is consistently used across all files of the same type."
    }),
    _cache[18] || (_cache[18] = createBaseVNode(
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
      _cache[10] || (_cache[10] = createTextVNode("The names used (on variables, functions, files, tables in the database, etc.) reflect what they represent. Optimal names are short and very descriptive. For more information, see ")),
      createBaseVNode("a", _hoisted_5, [
        _cache[9] || (_cache[9] = createTextVNode("Chapter 2.12 in Python for Everybody (Severance)")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[11] || (_cache[11] = createTextVNode("."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "Many names are not mnemonic.",
      grade3: "Many names (at least 90%) are mnemonic.",
      grade4: "Almost all names (at least 95%) are mnemonic.",
      grade5: "All names (100%) are mnemonic."
    }),
    _cache[19] || (_cache[19] = createBaseVNode(
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
      _cache[13] || (_cache[13] = createTextVNode("Avoid using ")),
      createBaseVNode("a", _hoisted_6, [
        _cache[12] || (_cache[12] = createTextVNode("magic numbers")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[14] || (_cache[14] = createTextVNode(" in the code. Does not only apply to numbers, but all values that are better put in descriptive constants."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "3 or more magic numbers exist.",
      grade3: "At most 2 magic numbers exist.",
      grade4: "At most 1 magic number exists.",
      grade5: "No magic numbers exist."
    }),
    _cache[20] || (_cache[20] = createBaseVNode(
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
    _cache[21] || (_cache[21] = createBaseVNode(
      "p",
      null,
      "Handling of various errors that can occur when the user is using the application, such as validation errors, no network connection, the device doesn't have a camera, the user doesn't grant you a permission, etc.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "Errors are not handled, or the error messages shown are confusing to the user.",
      grade3: "Handles and display error messages for at least 90% of the errors that can occur.",
      grade4: "Handles and display error messages for at least 95% of the errors that can occur.",
      grade5: "Handles and display error messages for all errors that can occur."
    }),
    _cache[22] || (_cache[22] = createBaseVNode(
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
    _cache[23] || (_cache[23] = createBaseVNode(
      "p",
      null,
      "The logical placement and usage of components (buttons, input fields, etc.), the support for different screen sizes, how intuitive it is to use the application, etc.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "-",
      grade3: "The user understands how to use the application without external instructions.",
      grade4: "-",
      grade5: "-"
    }),
    _cache[24] || (_cache[24] = createBaseVNode(
      "h2",
      {
        id: "fundamental-application-components",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#fundamental-application-components",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Fundamental application components")
      ],
      -1
      /* HOISTED */
    )),
    _cache[25] || (_cache[25] = createBaseVNode(
      "p",
      null,
      "The usage of fundamental application components.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "-",
      grade3: "Fundamental application components are used.",
      grade4: "Fundamental application components are mostly used properly, such as code belonging in a service is written in a service.",
      grade5: "Fundamental application components are used properly, including the communication between them (for example no global variables)."
    }),
    _cache[26] || (_cache[26] = createBaseVNode(
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
    _cache[27] || (_cache[27] = createBaseVNode(
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
    _cache[28] || (_cache[28] = createBaseVNode(
      "h2",
      {
        id: "extra-functionalities",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#extra-functionalities",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Extra Functionalities")
      ],
      -1
      /* HOISTED */
    )),
    _cache[29] || (_cache[29] = createBaseVNode(
      "p",
      null,
      "Implement extra functionalities listed in the table below.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "Not applicable.",
      grade3: "Implement extra functionalities worth at least 3 points in total.",
      grade4: "Implement extra functionalities worth at least 7 points in total.",
      grade5: "Implement extra functionalities worth at least 11 points in total."
    }),
    _cache[30] || (_cache[30] = createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You may not get all the points for the functionality you implement. You need to implement the functionality in a good way to get all the points for that functionality.</p></div><table><thead><tr><th>Points</th><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Multiple languages</td><td> Full support for at least two languages everywhere (English + one more): <ul><li>No strings shown to the user hardcoded in your Kotlin/Java code (use string resources).</li><li>No strings shown to the user hardcoded in your XML code (use string resources).</li><li>Text entered by the users will of course only be in one language.</li></ul></td></tr><tr><td>1</td><td>Runtime permissions</td><td>On newer versions of Android, ask for the permissions you need at runtime (when you need them). If you don&#39;t get them, deal with it in a good way (for example, if you don&#39;t get the accurate location permission, you can ask the user to enter the city name or latitude and longitude manually).</td></tr><tr><td>4</td><td>Runtime configuration changes</td><td> Handle runtime configuration changes in a good way throughout the entire application, such as: <ul><li>HTTP requests are not re-sent.</li><li>Bluetooth connections are maintained.</li><li>Results of long running operations are cached.</li></ul> I.e. use ViewModels. </td></tr><tr><td>1</td><td>Widget</td><td>Create a widget the user can use from the launcher. Too simple widgets (such as only &quot;click on the widget to start an activity&quot;) are not accepted.</td></tr><tr><td>2</td><td>Foreground service</td><td>Make use of a foreground service in a suitable way (important background computations, geofences, Bluetooth connections, etc.).</td></tr><tr><td>3</td><td>Re-using fragments</td><td>Re-use none-elementary fragments you have created, such as one fragment showing a list of items, another one showing a single item, and then show one fragment at a time on a small screen and show both side-by-side on a large screen.</td></tr><tr><td>1</td><td>Third-party authentication</td><td>Let users login with their account from another company, such as Google or Facebook. This is of course in addition to ordinary login with username and password, or similar.</td></tr><tr><td>1</td><td>Loading indicators</td><td>When the application starts a long running operation/waits for something, show a loading indicator of some kind reflecting this. Remove the loading indicator afterwards.</td></tr><tr><td>2</td><td>Alarm Scheduling</td><td>Schedule alarms/jobs that notifies the user at certain times, for example 15 minutes before a meeting starts. If the meeting is cancelled or the time for the meeting is changed, the scheduled alarms of course need to be deleted or updated too. Structure your solution well, so there&#39;s no need to copy-paste similar code if you for example want to create new meetings at multiple different places in your application.</td></tr><tr><td>1</td><td>Push Notifications</td><td>Automatically send a push notification to a user&#39;s device (for example using <a href="https://firebase.google.com/docs/cloud-messaging" target="_blank">Firebase Cloud Messaging</a>) when there is something the user needs to be notified about ASAP, such as new event created nearby, new message sent to the user, an event the user has signed up for is cancelled, etc.).<br><br><b>Note:</b> Push Notifications are not the same thing as ordinary <a href="https://developer.android.com/guide/topics/ui/notifiers/notifications">Notifications</a> in Android; Push Notifications are &quot;pushed&quot; to the device from a server.</td></tr><tr><td>1</td><td>Different type of accounts</td><td>Support different type of accounts, such as guest accounts, ordinary accounts, admin accounts, etc. Users should be able to do different things in the app depending on what type of account they are signed in to. For example, an ordinary user might only be able to create data belonging to her own account, while an admin can create data belonging to another account (acting as if she is signed in to another account).<br><br><b>Note:</b> Simply hiding/showing a few GUI components depending on the account type (such as admin accounts have a link to an admin activity ordinary users can&#39;t access) is not enough.</td></tr><tr><td>0.5</td><td>Creating QR Codes</td><td>The app can create different QR codes that can be used by the app itself or another app.</td></tr><tr><td>0.5</td><td>Reading QR Codes</td><td>The app uses the camera on the Android device (either directly or indirectly) to read and react to QR codes.</td></tr><tr><td>1</td><td>Uploading and downloading images (or any type of files)</td><td>The user can select an existing image or create a new one (for example through the Camera app), which then is uploaded to a server of some kind (for example <a target="_blank" href="https://firebase.google.com/docs/storage">Cloud Storage for Firebase</a>. The images can also be downloaded and shown in the app. (just using the server to store files like this does not fulfill the base requirement <em>the application you create must make use of at least one other device</em>).</td></tr><tr><td>3</td><td>Using 2 other type of devices</td><td>The base requirement <em>the application you create must make use of at least one other device</em> is fulfilled twice, for example the app uses Bluetooth to communicate with one type of device (for example another Android device), and a REST API or FireStore to communicate with a server. For full score, it&#39;s very important that the communication with both device types are implemented in a good way, including dealing with errors (showing error messages to the user and give users the ability to recover from errors), and that the communication is not &quot;minimal&quot; (for example all 4 <a target="_blank" href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a> operations are implemented when using the server).</td></tr><tr><td>1</td><td>Periodical updates</td><td>Periodically update something in the background, such as fetching new data from a server each night, and also enable the user to trigger updates manually through the GUI in the app. Structure the code good, so the logic performing the update isn&#39;t duplicated.</td></tr><tr><td>?</td><td>Own suggestions</td><td>Come up with your own suggestions of extra functionality. Describe the functionality and email the examiner for approval at <a href="mailto:Peter.Larsson-Green@ju.se">Peter.Larsson-Green@ju.se</a>).</td></tr></tbody></table>', 2))
  ]);
}
const projectGradingGuidelines_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "project-grading-guidelines.html.vue"]]);
export {
  projectGradingGuidelines_html as default
};
