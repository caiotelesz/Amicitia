import CardBlog from "../../components/CardBlog";
import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeader";
import "./index.scss";

export default function blog() {
  return(
    <section className="section-blog">
      <CardHeader />

      <div className="container-blog">
        <CardBlog />
      </div>

      <CardFooter />
    </section>
  );
}