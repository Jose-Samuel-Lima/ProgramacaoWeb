function carregarTabela(
    dados,
    id = "dadosDiv",
    cabecalhos = [],
    propriedades = []
) {

    const div = document.getElementById(id);


    if (!div) {
        console.error("Elemento não encontrado:", id);
        return;
    }


    const cabecalhoHtml = cabecalhos
        .map(cabecalho => `<th>${cabecalho}</th>`)
        .join("");


    const linhasHtml = dados
        .map(item => {

            const colunas = propriedades
                .map(propriedade => {

                    const valor = propriedade
                        .split(".")
                        .reduce(
                            (objeto, chave) =>
                                objeto?.[chave],
                            item
                        );

                    return `<td>${valor ?? ""}</td>`;
                })
                .join("");


            return `<tr>${colunas}</tr>`;
        })
        .join("\n");


    div.innerHTML = `
        <table>
            <thead>
                <tr>
                    ${cabecalhoHtml}
                </tr>
            </thead>

            <tbody>
                ${linhasHtml}
            </tbody>
        </table>
    `;
}

