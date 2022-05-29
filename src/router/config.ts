const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
  path: ["/projects"],
  exact: true,
  component: "Projects",
  },
  {
  path: ["/research"],
  exact: true,
  component: "Research",
  },
  {
  path: ["/about"],
  exact: true,
  component: "About",
  }
];

export default routes;
