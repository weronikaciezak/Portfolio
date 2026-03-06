import styled from "styled-components";
import {
    SiCplusplus,
    SiDocker,
    SiJenkins,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSpringboot
} from "@icons-pack/react-simple-icons";

export const SkillsSection = () => {
    return(
        <Container>
            <Tile>
                <SiCplusplus color="#00599C" size={50} />
                <div>C++</div>
            </Tile>
            <Tile>
                <SiPython color="#00599C" size={50} />
                <div>Python</div>
            </Tile>
            <Tile>
                <SiReact color="#00599C" size={50} />
                <div>React</div>
            </Tile>
            <Tile>
                <SiDocker color="#00599C" size={50} />
                <div>Docker</div>
            </Tile>
            <Tile>
                <SiJenkins color="#00599C" size={50} />
                <div>Jenkins</div>
            </Tile>
            <Tile>
                <SiSpringboot color="#00599C" size={50} />
                <div>Spring Boot</div>
            </Tile>
            <Tile>
                <SiPostgresql color="#00599C" size={50} />
                <div>PostgresSQL</div>
            </Tile>
        </Container>
    )
}

const Tile = styled.div`
    width: 120px;
    height: 100px;
    //background-color: #f0f0f0;
    //border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
`;


const Container = styled.div`
    //display: flex;
    //flex-wrap: wrap;
    ////gap: '10px';
    //justify-content: space-around;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px; 
    justify-items: center; /* Środkuje kafelki w ich własnych komórkach */
`;

