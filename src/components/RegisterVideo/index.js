import { StyledRegisterVideo } from "./styles";
import React from "react";
import { videoService } from "../../services/videoService";

//Custom Hook
function useForm(formProps) {
    const [values, setValues] = React.useState(formProps.initialValues);

    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            //console.log(value);
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const service = videoService();
    const formCadastro = useForm({
        initialValues: { titulo: "", url: ""},
    });
    const [ formVisivel, setFormVisivel ] = React.useState(false);

    function getVideoThumbnail(url) { 
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var imgThumb = url.match(regExp);
        if (imgThumb && imgThumb[7].length == 11) {
            return `https://img.youtube.com/vi/${imgThumb[7]}/hqdefault.jpg`;
        } else {
            return false;
        }
    };

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel ? (
                <form
                    onSubmit={(evento) => {
                        evento.preventDefault();

                        service.insertVideo({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getVideoThumbnail(formCadastro.values.url),
                            playlist: formCadastro.values.playlist
                        });

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                    <div>
                        <button
                            type="button"
                            className="close-modal"
                            onClick={() => setFormVisivel(false)}
                        >
                            X
                        </button>
                        <input
                            placeholder="Título do vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                            required
                        />
                        <input
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                            required
                        />
                        <input
                            placeholder="Playlist"
                            name="playlist"
                            value={formCadastro.values.playlist}
                            onChange={formCadastro.handleChange}
                            required
                        />
                        <button type="submit">Cadastrar</button>
                        {getVideoThumbnail(formCadastro.values.url) ? (
                            <img src={getVideoThumbnail(formCadastro.values.url)} />
                        ) : false} 
                    </div>
                </form>
            ) : false}
        </StyledRegisterVideo>
    );
}
