// type: "every.near/type/app", // this app cna have a view, every.near/wigget/app.view
const config = {
  param: "tab", // router param
  routes: {
    home: {
      default: true, // default route
      path: "buildhub.near/widget/page.home", // page to render
      blockHeight: "final", // blockHeight to render at it
      init: {
        name: "Home"
        // initial props to pass to page
      },
    },
    feed: {
      path: "buildhub.near/widget/page.feed",
      blockHeight: "final",
      init: {
        name: "Feed"
      },
    },
    resources: {
      path: "buildhub.near/widget/page.resources",
      blockHeight: "final",
      init: {
        name: "Resources"
      },
    },
  },
};

const { App } = VM.require("devs.near/widget/App") || {
  App: () => <></>,
};

const Theme = styled.div`
  --stroke-color: rgba(255, 255, 255, 0.2);
  --bg-1: #0b0c14;
  --bg-1-hover: #17181c;
  --bg-1-hover-transparent: rgba(23, 24, 28, 0);
  --bg-2: #23242b;
  --label-color: #fff;
  --font-color: #fff;
  --font-muted-color: #cdd0d5;
  --black: #000;
  --system-red: #fd2a5c;
  --yellow: #ffaf51;

  --compose-bg: #23242b;

  --post-bg: #23242b;
  --post-bg-hover: #1d1f25;
  --post-bg-transparent: rgba(23, 24, 28, 0);

  --button-primary-bg: #ffaf51;
  --button-outline-bg: transparent;
  --button-default-bg: #23242b;

  --button-primary-color: #000;
  --button-outline-color: #cdd0d5;
  --button-default-color: #cdd0d5;

  --button-primary-hover-bg: #e49b48;
  --button-outline-hover-bg: rgba(255, 255, 255, 0.2);
  --button-default-hover-bg: #17181c;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

return (
  <Theme>
    <App
      {...props} // what else might it need?
      debug={false}
      defaultPage="home"
      config={config}
      basePath={context.widgetSrc ?? "buildhub.near/widget/app"} // TODO: context from VM or custom component for Link
      Template={({ children, navigate, Outlet, ...p }) => {
        // we MUST pass "children" here, I wonder why?

        // This should just be Template
        const { AppLayout } = VM.require(
          "every.near/widget/template.app" // choose your template, although this one is standard
        ) || { AppLayout: () => <></> };

        return (
          <AppLayout
            Header={({ page }) => {
              return (
                <Widget
                  src={"buildhub.near/widget/components.navigation.header"}
                  props={{ page, routes: config.routes, navigate, ...props }}
                  loading={<div style={{ height: "100%", width: "100%" }} />}
                />
              );
            }}
            Footer={() => <></>}
            {...p}
          >
            {/* // Outlet is helpful if you want to provide functions to the child */}
            <Outlet {...p} />
          </AppLayout>
        );
      }}
    />
  </Theme>
);
