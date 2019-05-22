import React from "react";
import styled from "styled-components";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import CoinImage from "../Shared/CoinImage";

const SpotlightName = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 25px;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) => (
        <Tile>
          <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
          <CoinImage spotlight coin={coinList[currentFavorite]} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
