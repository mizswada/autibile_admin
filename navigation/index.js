export default [
  {
    child: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: "ic:outline-dashboard",
        child: [],
      },
    ],
  },
  {
    header: "Apps & Pages",
    description: "Wonderful apps",
    child: [
      {
        title: "Pages",
        icon: "ic:outline-insert-drive-file",
        child: [
          {
            title: "Authentication",
            child: [
              {
                title: "Login V1",
                path: "/auth/login-v1",
              },
              {
                title: "Login V2",
                path: "/auth/login-v2",
              },
              {
                title: "Register V1",
                path: "/auth/register-v1",
              },
              {
                title: "Register V2",
                path: "/auth/register-v2",
              },
              {
                title: "Forgot Password V1",
                path: "/auth/forgot-password-v1",
              },
              {
                title: "Forgot Password V2",
                path: "/auth/forgot-password-v2",
              },
              {
                title: "Reset Password V1",
                path: "/auth/reset-password-v1",
              },
              {
                title: "Reset Password V2",
                path: "/auth/reset-password-v2",
              },
            ],
          },
          {
            title: "Error 404",
            path: "/error/404",
          },
          {
            title: "Error 500",
            path: "/error/500",
          },
        ],
      },

      {
        title: "User Management",
        icon: "ic:outline-person",
        child: [
      {
        title: "Parents Management",
        icon: "ic:outline-person",
        child: [
          {
            title: "Parents",
            path: "/userManagement/parent/parents",
          },
          {
            title: "Manage Child",
            path: "/userManagement/parent/manageChild",
          },
        ],
      },
          {
            title: "Doctors",
            path: "/userManagement/doctor",
          },
          {
            title: "Therapists",
            path: "/userManagement/therapist",
          },
          {
            title: "Users Approval",
            path: "/userManagement/userApproval",
          },
          {
            title: "Profile Edit",
            path: "/userManagement/profileEdit",
          },
        ],
      },

      {
        title: "Appointment Management",
        icon: "ic:outline-calendar-today",
        child: [
          {
            title: "New Appointment",
            path: "/appointmentManagement/newAppointment",
          },
          {
            title: "Scheduled Appointment",
            path: "/appointmentManagement/scheduledAppointment",
          },
        ],
      },
      {
        title: "Systems Logs",
        icon: "ic:outline-history",
        path: "/systemLogs",
      },

       {
        title: "Reports",
        icon: "ic:outline-pie-chart",
        path: "/reports",
      },

      {
        title: "Manage Autism Centre",
        icon:"ic:outline-home",
        path: "/autismCentre",
      },

       {
        title: "Manage Questionnaire",
        icon: "ic:outline-question-answer",
        path: "/questionnaire",
      },

      {
        title: "Manage FAQ",
        icon: "ic:outline-question-answer",
        path: "/faq",
      },

      {
        title: "Tech Support",
        icon: "ic:outline-headset-mic",
        path: "/technicalSupport",
      },
      {
        title: "Community Support",
        icon: "ic:outline-headset-mic",
        child: [
          {
            title: "Posts Management",
            path: "/communitySupport/postManagement",
          },
          {
            title: "Reported Posts",
            path: "/communitySupport/reportedContent",
          },
        ],
      },
       {
        title: "Therapy & Activities Management",
        icon: "ic:outline-emoji-people",
        path: "/therapyAndActivity",
      },
    ],
  },
  {
    header: "UI Elements",
    description: "Component for the ui",
    child: [
      {
        title: "Typography",
        path: "/ui/typography",
        icon: "ic:outline-alternate-email",
      },
      {
        title: "Colors",
        path: "/ui/colors",
        icon: "ic:outline-water-drop",
      },
      {
        title: "Icon",
        icon: "ic:outline-flag-circle",
        child: [
          {
            title: "Nuxt Icons",
            path: "/ui/icon/nuxt-icon",
          },
        ],
      },
      {
        title: "Component",
        icon: "ic:outline-settings-input-component",
        child: [
          {
            title: "Alert",
            path: "/ui/component/alert",
          },
          {
            title: "Badges",
            path: "/ui/component/badges",
          },
          {
            title: "Buttons",
            path: "/ui/component/buttons",
          },
          {
            title: "Card",
            path: "/ui/component/card",
          },
          {
            title: "Calendar",
            path: "/ui/component/calendar",
          },
          {
            title: "Carousel",
            path: "/ui/component/carousel",
          },
          {
            title: "Collapse",
            path: "/ui/component/collapse",
          },
          {
            title: "Dropdown",
            path: "/ui/component/dropdown",
          },
          {
            title: "Modal",
            path: "/ui/component/modal",
          },
          {
            title: "Tab",
            path: "/ui/component/tab",
          },
          {
            title: "Progress",
            path: "/ui/component/progress",
          },
        ],
      },
      {
        title: "Chart",
        icon: "ic:outline-pie-chart",
        child: [
          {
            title: "Apex Chart",
            path: "/ui/chart/apex-chart",
          },
          {
            title: "Chartjs",
            path: "/ui/chart/chartjs",
          },
        ],
      },
    ],
  },
  {
    header: "Forms & Tables",
    description: "Form and table component",
    child: [
      {
        title: "Form",
        icon: "ic:outline-menu-book",
        child: [
          {
            title: "Element",
            child: [
              {
                title: "Input",
                path: "/form/element/input",
              },
              {
                title: "Input Group",
                path: "/form/element/input-group",
              },
              {
                title: "Input Mask",
                path: "/form/element/input-mask",
              },
              {
                title: "Textarea",
                path: "/form/element/textarea",
              },
              {
                title: "Number",
                path: "/form/element/number",
              },
              {
                title: "Password",
                path: "/form/element/password",
              },
              {
                title: "Date & Time",
                path: "/form/element/date-time",
              },
              {
                title: "Radio",
                path: "/form/element/radio",
              },
              {
                title: "Checkbox",
                path: "/form/element/checkbox",
              },
              {
                title: "Select",
                path: "/form/element/select",
              },
              {
                title: "File",
                path: "/form/element/file",
              },
              {
                title: "Custom",
                path: "/form/element/custom",
              },
              {
                title: "VCalendar",
                path: "/form/element/vcalendar",
              },
              {
                title: "Vue Select",
                path: "/form/element/vue-select",
              },
              {
                title: "Vue Quill",
                path: "/form/element/vue-quill",
              },
            ],
          },
          {
            title: "Wizard",
            path: "/form/wizard",
          },
        ],
      },
      {
        title: "Table",
        icon: "ic:outline-grid-on",
        child: [
          {
            title: "Basic",
            path: "/table/basic",
          },
          {
            title: "Advanced",
            path: "/table/advanced",
          },
        ],
      },
    ],
  },
];
