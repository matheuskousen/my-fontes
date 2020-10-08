import Link from "next/link";
import { useState } from "react";
import DataFonts from "../Database";
import { Container, Content } from "./styles";

const Header = ({ searchs }) => {
  const [isSearch, setisSearch] = useState("");

  function searching() {
    setisSearch(isSearch);
  }
  return (
    <Container>
      <Content>
        <h1 className="primary-title">my favorite typographies</h1>

        <div className="options">
          <button>
            <Link href="/[fontes]/" as={"home"} scroll={false} shallow={true}>
              <a>Home</a>
            </Link>
          </button>
          <button>
            <Link
              href="/[fontes]"
              as={"/Sans Serif"}
              scroll={false}
              shallow={true}
            >
              <a> Sans Serif</a>
            </Link>
          </button>
          <button>
            <Link href="/[fontes]" as={"/Serif"} scroll={false} shallow={true}>
              <a>Serif</a>
            </Link>
          </button>
          <button>Mono</button>
          <button>Cursive</button>
        </div>

        <div className="search">
          <input
            type="text"
            value={isSearch}
            onChange={(e) => setisSearch(e.target.value)}
          />
          <button onClick={searching}>
            <img src="/assets/icons/search.svg" alt="icon search button" />
          </button>
        </div>

        {isSearch &&
          DataFonts.filter((search) =>
            search.name.toLowerCase().includes(isSearch.toLowerCase())
          ).map((element) => (
            <div className="results" key={element.id}>
              <Link
                href={`/results/${element.name}`}
                scroll={true}
                shallow={true}
              >
                <a>{element.name}</a>
              </Link>
            </div>
          ))}
      </Content>
    </Container>
  );
};

export default Header;
