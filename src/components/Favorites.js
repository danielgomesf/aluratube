import styled from "styled-components";

const StyledFavorites = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;
    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }
    section {
        width: 100%;
        padding: 0;
        overflow: hidden;
        padding: 16px;
    }
    div {
        width: calc(100vw - 16px * 4);
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
        grid-auto-flow: column;
        grid-auto-columns: minmax(200px,1fr);
        justify-items: center;
      a {
        span {
            padding-top: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
      }
    }
`;

export default function Favorites(props) {
    const channels = Object.keys(props.favorites);

    return (
        <StyledFavorites>
            {channels.map((channel) => {
                const canais = props.favorites[channel]
                return (
                    <section>
                        <h2>{channel}</h2>
                        <div>
                            {canais.map((favorite) => {
                                return (
                                    <a href={favorite.url}>
                                        <img src={favorite.thumb} />
                                        <span>@{favorite.name}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>)
            })}
        </StyledFavorites>
    )
}