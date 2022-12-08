import { Wrapper, Title, List, Item } from "./styled";

const Skills = ({ title, skills }) => (
  <Wrapper>
    <Title>{title}</Title>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </Wrapper>
);

export default Skills;
