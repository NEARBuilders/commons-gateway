const { page, tab, type, app, ...passProps } = props;

const { routes } = VM.require("buildhub.near/widget/config.project") ?? {
  routes: {},
};

const { ProjectLayout } = VM.require(
  "buildhub.near/widget/template.ProjectLayout"
) || {
  ProjectLayout: () => <></>,
};

// const { Router } = VM.require("devs.near/widget/Router") || {
//   Router: () => <></>,
// };

const { id } = props;
const extractNearAddress = (id) => {
  const parts = id.split("/");
  if (parts.length > 0) {
    return parts[0];
  }
  return "";
};

if (!id)
  return (
    <div className="text-center fw-bold text-white my-4">
      Invalid project ID
    </div>
  );
const accountId = extractNearAddress(id);

const data = Social.get(id + "/**", "final");

if (!id || !data) {
  return "Loading...";
}

if (!page) page = Object.keys(routes)[0] || "home";

const Root = styled.div``;

function Router({ active, routes }) {
  // this may be converted to a module at devs.near/widget/Router
  const routeParts = active.split(".");

  let currentRoute = routes;
  let src = "";
  let defaultProps = {};

  for (let part of routeParts) {
    if (currentRoute[part]) {
      currentRoute = currentRoute[part];
      src = currentRoute.path;

      if (currentRoute.init) {
        defaultProps = { ...defaultProps, ...currentRoute.init };
      }
    } else {
      // Handle 404 or default case for unknown routes
      return (
        <p className="text-center fw-bold text-white my-4">404 Not Found</p>
      );
    }
  }

  return (
    <div key={active}>
      <Widget
        src={src}
        props={{
          currentPath: `/buildhub.near/widget/app?page=${page}&tab=${tab}`,
          page: tab,
          ...passProps,
          ...defaultProps,
        }}
      />
    </div>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

function transformKeys(obj) {
  obj.tags = obj.tracks;
  delete obj.tracks;

  obj.contributors = obj.teammates;
  delete obj.teammates;

  return obj;
}

const project = transformKeys(JSON.parse(data[""]));

const profile = Social.getr(`${accountId}/profile`, "final");

const [selectedTab, setSelectedTab] = useState("overview");

const selectTabHandler = (tab) => {
  setSelectedTab(tab);
};

return (
  <Root>
    <Container>
      <ProjectLayout
        profile={profile}
        accountId={accountId}
        page={page}
        routes={routes}
        currentTab={selectedTab}
        setCurrentTab={selectTabHandler}
        project={project}
        id={id}
        {...props}
      >
        <Content>
          <Router active={page} routes={routes} />
        </Content>
      </ProjectLayout>
    </Container>
  </Root>
);
