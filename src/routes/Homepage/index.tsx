import * as React from "react";
import { Link } from "react-router-dom";

import { getData } from "../../lib/api";
import useHttp from "../../hooks/use-http";

import Loading from "../../components/UI/Loading";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/Filter";
import styles from "../../styles/homepage.module.scss";

const Homepage = () => {
  let { sendRequest, status, data, error } = useHttp(getData, true);
  const [input, setInput] = React.useState("");
  const [filter, setFilter] = React.useState("");

  React.useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className={styles.centered}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <p className={styles.focused}>{error}</p>;
  }

  return (
    <>
      <section className={styles["inputs-wrapper"]}>
        <SearchBar
          onChange={(event) => setInput(event.currentTarget.value)}
          value={input}
        />
        <Filter
          onChange={(event: React.FormEvent<HTMLSelectElement>): void =>
            setFilter(event.currentTarget.value)
          }
          value={filter}
        >
          {[
            "Filter by Region",
            "Africa",
            "Americas",
            "Asia",
            "Europe",
            "Oceania",
          ].map((x, index) => (
            <option key={index} value={x}>
              {x}
            </option>
          ))}
        </Filter>
      </section>
      <section className={styles["all-countries-wrapper"]}>
        {data.length > 0 ? (
          data.map((item: any, idx: number) => (
            <article className={styles.cards} key={idx} id={item.id}>
              <div>
                <img src={item.flags.svg} alt={item.name.official} />
                <h2>{item.name.official}</h2>
                <p>
                  Population:{" "}
                  <span>
                    {item.population === 0
                      ? "No one lives here!"
                      : item.population}
                  </span>
                </p>
                <p>
                  Capital:{" "}
                  <span>
                    {!item.capital ? item.name.official : item.capital}
                  </span>
                </p>
              </div>

              <Link to={`/detailed-card/${item.name.official}`}>View more</Link>
            </article>
          ))
        ) : (
          <p
            className={styles.focused}
          >{`Your search ${input} did not match any country.`}</p>
        )}
      </section>
    </>
  );
};

export default Homepage;
