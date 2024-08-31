import { useForm } from 'react-hook-form';

const Formulario = () => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);
    ;

    return (
        <>
            <h2>Cadastro de livros</h2>
            <form id='form-livros' onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="campo-titulo">Digite o título do livro</label>
                    <input type="text" id="campo-titulo" {...register('titulo')} />
                </fieldset>
                <fieldset>
                    <label htmlFor="campo-autor">Digite o autor do livro</label>
                    <input type="text" id="campo-autor" {...register('autor')} />
                </fieldset>
                <fieldset>
                    <label htmlFor="campo-ano">Digite o ano de publicação do livro</label>
                    <input type="year" id="campo-ano" {...register('ano')} />
                </fieldset>
                <fieldset>
                    <label htmlFor="campo-genero">Digite o gênero do livro</label>
                    <input type="text" id="campo-genero" {...register('genero')} />
                </fieldset>
                <fieldset>
                    <label htmlFor="campo-isbn">Digite o isbn</label>
                    <input type="text" id="campo-isbn" {...register('isbn')} />
                </fieldset>
                <input type="submit" value="cadastrar" />
            </form>
        </>
    );
};

export default Formulario