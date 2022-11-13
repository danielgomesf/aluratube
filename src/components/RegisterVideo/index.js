import { StyledRegisterVideo } from "./styles";
import React from "react";

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
    const formCadastro = useForm({
        initialValues: { titulo: "", url: ""},
    });
    const [ formVisivel, setFormVisivel ] = React.useState(false);

    function getVideoThumbnail(url) { 
        let imgThumb = url.split('v=');
        let source = `https://img.youtube.com/vi/${imgThumb[1]}/hqdefault.jpg`
        if (source) {
            return (
                <img src={source} /> 
            );
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
                        <button type="submit">Cadastrar</button>
                        {getVideoThumbnail(formCadastro.values.url)} 
                    </div>
                </form>
            ) : false}
        </StyledRegisterVideo>
    );
}
