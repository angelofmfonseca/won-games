import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import axios from "axios";

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/React-avancado/repos")
      .then((res) => setRows(res.data))
      .catch((e) => strapi.notification.error(`Ops...Github API error...${e}`));
  }, []);

  const headers = [
    { name: "Name", value: "name" },
    { name: "Description", value: "description" },
    { name: "Url", value: "html_url" },
  ];

  return (
    <Wrapper>
      <Header
        title={{ label: "React Avançado Repositories" }}
        content="React Avançado course list of repositories."
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

export default memo(HomePage);
