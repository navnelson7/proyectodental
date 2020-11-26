import React, { Fragment } from "react";
import styled from "styled-components";

function SearchTable() {
  return (
    <Fragment>
      <StyleSearch>
        {/* INPUT SEARCH */}
        <div className="center">
          <div className="search-wrapper" id="searchLine">
            <input className="search-input" type="text" placeholder="Buscar" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="feather feather-search"
              viewBox="0 0 24 24"
            >
              <defs />
              <circle cx={11} cy={11} r={8} />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
          <select name="Filtro" className="select-filter">
            <option value="">Nombre</option>
            <option value="">Genero</option>
            <option value="">Correo</option>
            <option value="">Dirección</option>
          </select>
        </div>
      </StyleSearch>
    </Fragment>
  );
}

export default SearchTable;

const StyleSearch = styled.div`
  /*INPUT SEARCH*/

  .search-wrapper {
    border-radius: 4px;
    background-color: #fff;
    padding-right: 12px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
      0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-input {
    border: none;
    outline: none;
    height: 100%;
    padding: 0 12px;
    font-size: 16px;
    width: 500px;
  }

  .select-filter {
    width: 100px;
    height: 40px;
    font-size: 14px;
    border: 0;
    outline: 0;
    background: white;
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
      0 24px 20px -24px rgba(71, 82, 107, 0.1);
  }
`;
