import DataFonts from "../../components/Database";
import { useRouter } from "next/router";
import { Container } from "../../style/styleresults";
import Link from "next/link";
export default function Searchs() {
  const router = useRouter();
  const { searchs } = router.query;
  return (
    <>
      {searchs &&
        DataFonts.filter((sr) => sr.name == searchs).map((element) => (
          <Container className="page" key={element.id}>
            <div className="hero">
              <div className="container">
                <h1> {element.name} </h1>{" "}
                <Link href="/home">
                  <a> BACK </a>{" "}
                </Link>{" "}
                <a href={element.donwload} download={element.name}>
                  | Download | {element.name}{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="results-thumb">
              <img src={element.thumbnail} alt={element.name} />{" "}
            </div>{" "}
          </Container>
        ))}{" "}
    </>
  );
}
