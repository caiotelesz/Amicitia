
import CardHeader from "../../components/CardHeader";
import CardFooter from "../../components/CardFooter";
import PreviewBlog from "../../components/PreviewBlog";

import "./index.scss";

export default function ultimosBlogs() {
  return (
    <section className="section-ultimosBlogs">
      <CardHeader />

      <div className="container-ultimosBlogs">
      <h1>Últimos blogs</h1>
        <div className="blog-grid">
          <PreviewBlog />
          <PreviewBlog />
          <PreviewBlog />
          <PreviewBlog />
          <PreviewBlog />
          <PreviewBlog />
          <PreviewBlog />
          <PreviewBlog />
          <PreviewBlog />
        </div>

      </div>

      <CardFooter />
    </section>
  );
}