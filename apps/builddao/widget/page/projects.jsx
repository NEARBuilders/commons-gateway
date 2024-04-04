const { extractValidNearAddresses } = VM.require(
  "buildbox.near/widget/utils.projects-sdk",
) || {
  extractValidNearAddresses: () => {},
};
const { Button } = VM.require("${config_account}/widget/components") || {
  Button: () => <></>,
};

const { ProjectCard } = VM.require(
  "${config_account}/widget/components.project.Card",
) || {
  ProjectCard: () => <></>,
};

const flattenObject = (obj, app) => {
  let paths = [];

  Object.keys(obj).forEach((key) => {
    const path = Object.keys(obj[key][app]["project"])?.[0];
    const convertedStr = path.replace(/\.(?=(?!near\b))/g, "/");
    paths.push(convertedStr);
  });

  return paths;
};

// devs.near/project/name-of-the-project
const fetchProjects = (app, type) => {
  const keys = Social.keys(`*/${app}/${type}/*`, "final", { order: "desc" });
  if (!keys) {
    return "Loading...";
  }
  let flattenedKeys = flattenObject(keys, app);
  const projects = Social.get(["megha19.near/project/notifications"], "final");
  // check if projects is singular (since we have to update the return format for parsing)
  const isSingular = flattenedKeys.length === 1;
  if (isSingular) {
    const [name, project, projectName] = flattenedKeys?.[0]
      ?.split("/")
      .slice(0, 3);
    return {
      [name]: {
        [project]: {
          [projectName]: projects,
        },
      },
    };
  }
  return projects;
};

const app = props.app || "testing122.near";
const type = props.type || "project";

const data = fetchProjects(app, type);

if (!data) {
  return "Loading...";
}

const processData = useCallback(
  (data) => {
    const accounts = Object.entries(data);
    const allItems = accounts
      .map((account) => {
        const accountId = account[0];
        return Object.entries(account[1][type]).map((kv) => {
          console.log("kv", account);
          const metadata = JSON.parse(kv[1]);
          return {
            accountId,
            type: type,
            title: metadata.title,
            metadata,
            tags: metadata.tags || [],
            collaborators: metadata.contributors,
            projectID: kv[0],
          };
        });
      })
      .flat();

    return allItems;
  },
  [type],
);

const projects = processData(data);

if (!projects) {
  return "";
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const [filters, setFilters] = useState({
  title: "",
});
const [showFilterModal, setShowFilterModal] = useState(false);
const [showCreateModal, setShowCreateModal] = useState(false);

const toggleFilterModal = () => {
  setShowFilterModal((prev) => !prev);
};
const toggleCreateModal = () => {
  setShowCreateModal((prev) => !prev);
};

const filteredProjects = useMemo(() => {
  let filtered = projects;
  if (filters.title !== "") {
    filtered = filtered.filter((project) =>
      project.title.toLowerCase().includes(filters.title ?? "".toLowerCase()),
    );
  }

  if (filters.teamSize !== "") {
    filtered = filtered.filter((project) => {
      switch (filters.teamSize) {
        case "1-10":
          return project.collaborators.length <= 10;
        case "10-50":
          return (
            project.collaborators.length <= 50 &&
            project.collaborators.length >= 10
          );
        case "50-100":
          return (
            project.collaborators.length <= 100 &&
            project.collaborators.length >= 50
          );
        case "100+":
          return project.collaborators.length > 100;
        default:
          return true;
      }
    });
  }

  if (filters.tags.length > 0) {
    filtered = filtered.filter((project) =>
      filters.tags.every((tag) => project.tags.includes(tag)),
    );
  }
  return filtered;
}, [filters, projects]);

const tagFilters = useMemo(() => {
  let tags = projects.map((project) => project.tags).flat();
  tags = [...new Set(tags)];
  return tags;
}, [projects]);

return (
  <Wrapper
    className="container-xl mx-auto"
    style={{ margin: "24px 0" }}
    data-bs-theme="dark"
  >
    <Widget
      src="${config_account}/widget/components.modals.FilterProjects"
      loading=""
      props={{
        showModal: showFilterModal,
        toggleModal: toggleFilterModal,
        filters: filters,
        setFilters: setFilters,
        tagFilters,
      }}
    />
    <Widget
      src="buildhub.near/widget/components.modals.CreateProject"
      loading=""
      props={{
        showModal: showCreateModal,
        toggleModal: toggleCreateModal,
        filters: filters,
        setFilters: setFilters,
        tagFilters,
      }}
    />
    <div className="my-3 d-flex align-items-center justify-content-between">
      <h2 style={{ color: "var(--text-color, #fff)", fontSize: "18px" }}>
        Projects
      </h2>
      <Button variant="primary" onClick={() => setShowCreateModal(true)}>
        Create Project
      </Button>
    </div>
    <div className="form-group d-flex gap-4 align-items-center justify-content-between">
      <div className="input-group">
        <div className="input-group-text">
          <i className="bi bi-search"></i>
        </div>
        <input
          className="form-control"
          style={{ borderLeft: "none" }}
          placeholder="Search by project ID or name"
          value={filters.title}
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
        />
      </div>
      <Button
        className="d-flex align-items-center"
        style={{ gap: 10, padding: "10px 26px" }}
        onClick={() => setShowFilterModal(true)}
      >
        Filter <i className="bi bi-sliders"></i>
      </Button>
    </div>
    <Container>
      {filteredProjects.length === 0 && (
        <p className="fw-bold text-white">No Projects Found</p>
      )}
      {filteredProjects.map((project) => (
        <ProjectCard project={project} app={app} type={type} />
      ))}
    </Container>
  </Wrapper>
);
