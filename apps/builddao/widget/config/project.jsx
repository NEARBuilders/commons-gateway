return {
  type: "app",
  routes: {
    overview: {
      path: "buildhub.near/widget/components.project.page.Overview",
      blockHeight: "final",
      init: {},
    },
    discussion: {
      path: "buildhub.near/widget/components.project.page.Discussion",
      blockHeight: "final",
      init: {

      }, 
      hide: true
    },
    task: {
      path: "buildhub.near/widget/components.project.page.Task",
      blockHeight: "final",
      init: {

      },
      hide: true
    },
    code: {
      path: "buildhub.near/widget/components.project.page.Code",
      blockHeight: "final",
      init: {},
    },
    roadmap: {
      path: "buildhub.near/widget/components.project.page.Roadmap",
      blockHeight: "final",
      init: {},
    },
  },
};
