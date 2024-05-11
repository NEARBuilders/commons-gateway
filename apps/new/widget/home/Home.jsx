const { Hero } = VM.require("/new/widget/home.Hero") || {
  Hero: () => <></>,
};

return (
  <div>
    <Hero />
  </div>
);
