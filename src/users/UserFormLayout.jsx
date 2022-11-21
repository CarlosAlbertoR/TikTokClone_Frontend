import styled from "styled-components";
import {
  CenteredContainer,
  SmallContainer as SmallContainerTemplate,
  Title,
} from "../theme";

let SmallContainer = styled(SmallContainerTemplate)`
  text-align: center;
`;

let Header = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.dims.margin.normal};
`;

let UserFormLayout = (props) => {
  return (
    <CenteredContainer>
      <SmallContainer>
        <Header>
          <img src="/logo.svg" alt="App logo" height="120" />
          <div>
            <Title>TikTok</Title>
          </div>
        </Header>
        {props.children}
      </SmallContainer>
    </CenteredContainer>
  );
};

export default UserFormLayout;
