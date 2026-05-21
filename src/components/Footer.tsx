import styled from "styled-components";

export const Footer = () => {
    return (
        <>
            <Container></Container>
            <Container3>
                <Text>© 2026 Weronika Ciężak</Text>
                <Container2>
                    <Icon
                        title="Open GitHub"
                        as="a"
                        href={`https://github.com/weronikaciezak`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github fa-s"></i>
                    </Icon>

                    <Icon
                        title="Open LinkedIn"
                        as="a"
                        href={`https://www.linkedin.com/in/weronika-ci%C4%99%C5%BCak-1554b8359/`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin fa-s"></i>
                    </Icon>

                    <Icon title="Email me"
                          as="a"
                          href={`mailto:weronikaciezak@wp.pl`}>
                        <i className={`fa-solid fa-s fa-envelope`}></i>
                    </Icon>
                </Container2>
            </Container3>
        </>
    )
}

const Container = styled.div`
    padding-top: var(--margin-xxxl);
    border-bottom: 1px solid color-mix(in srgb, var(--text-color) 20%, transparent);
`;

const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

const Container3 = styled.div`
    display: flex;
    padding-top: 0.6rem;
    padding-bottom: 1.5rem;
    flex-direction: row;
    justify-content: space-between;
`;

const Text = styled.div`
    font-size: 0.7rem;
`;

const Icon = styled.div`
    cursor: pointer;
    color: var(--text-color);
`;