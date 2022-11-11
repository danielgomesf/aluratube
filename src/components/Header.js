import styled from "styled-components";
import config from "../../config.json";

const StyledHeader = styled.div`
    section img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;

const StyledBanner = styled.img`
    width: 100%;
    height: 400px;
`; 

export default function Header(props) {
    return (
        <StyledHeader>
            <StyledBanner src={props.banner} />
            <section className="user-info">
                <img src={`https://github.com/${props.githubPhoto}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}