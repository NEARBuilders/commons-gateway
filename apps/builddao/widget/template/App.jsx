const { children, navigate, Outlet, ...p } = props;

const { AppLayout } = VM.require(
  "every.near/widget/template.app" // choose your template, although this one is standard
) || { AppLayout: () => <></> };

return (
  <AppLayout
    Header={({ page }) => {
      return (
        <Widget
          src={`${ownerId}/widget/Components.Nav`}
          props={{ ownerId, page, routes, navigate, ...props }}
          loading={<div style={{ height: "100%", width: "100%" }} />}
        />
      );
    }}
    Footer={() => <></>}
    {...p}
  >
    {/* // Outlet is helpful if you want to provide functions to the child */}
    <Outlet page={page} {...p} />
  </AppLayout>
);