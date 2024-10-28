import React from "react";
import ReactDOM from "react-dom";
import GridLayout from "react-grid-layout";
import styled from "styled-components";

const layout = [
    { i: "Sorcerer", x: 0, y: 0, w: 1, h: 1 },
    { i: "Knight", x: 1, y: 0, w: 1, h: 1 },
    { i: "Cleric", x: 2, y: 0, w: 1, h: 1 },
    { i: "Herald", x: 3, y: 0, w: 1, h: 1 },
    { i: "Pyromancer", x: 4, y: 0, w: 1, h: 1 },
    { i: "Assassin", x: 5, y: 0, w: 1, h: 1 },
    { i: "Deprived", x: 6, y: 0, w: 1, h: 1 },
  ];


  
  const GridItemWrapper = styled.div`
    background: #f5f5f5;
  `;
  
  const GridItemContent = styled.div`
    padding: 8px;
  `;
  
  const Root = styled.div`
    padding: 16px;
  `;
  
  export default function ChooseCharacter() {
    return (
      <Root>
        <h2>Choose Your Character</h2>
        <GridLayout layout={layout} cols={7} maxRows={1} rowHeight={200} width={1000}>
          <GridItemWrapper key="Sorcerer">
            <GridItemContent>Sorcerer</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="Knight">
            <GridItemContent>Knight</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="Cleric">
            <GridItemContent>Cleric</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="Herald">
            <GridItemContent>Herald</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="Pyromancer">
            <GridItemContent>Pyromancer</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="Assassin">
            <GridItemContent>Assassin</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="Deprived">
            <GridItemContent>Deprived</GridItemContent>
          </GridItemWrapper>
        </GridLayout>
        <GridLayout cols={1} rowHeight={200} width={200}>

        </GridLayout>
      </Root>
    );
  };