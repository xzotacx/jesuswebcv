import React from "react";

import { SubTitle, SectionTitle } from "../../components";
import { SectionContainer } from "../styles";

function AboutMePage({ id, content }) {
  const { history, whatIDo, attitudes, interests } = content;

  return (
    <SectionContainer id={id}>
      <SectionTitle>{content.title}</SectionTitle>
      <div>
        <p>{history.p_1}</p>
        <p>{history.p_2}</p>
      </div>
      <article>
        <header>
          <SubTitle>{whatIDo.h3_1}</SubTitle>
        </header>
        <ol>
          {whatIDo.ol_1.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ol>
      </article>
      <article>
        <header>
          <SubTitle>{attitudes.h3_1}</SubTitle>
        </header>
        <ol>
          {attitudes.ol_1.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ol>
      </article>
      <article>
        <header>
          <SubTitle>{interests.h3_1}</SubTitle>
        </header>
        <p>{interests.p_1}</p>
      </article>
    </SectionContainer>
  );
}

export default AboutMePage;
