export default function Cover1({ content }: any) {
  if (!content) return <></>;
  return (
    <section id="cover-1" className="container template">
      <h1>This is the plugin cover section</h1>
    </section>
  );
}
