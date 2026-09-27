
/*
 * Função genérica para criar tabelas HTML.
 *
 * dados:
 *   array de objetos que será exibido
 *
 * id:
 *   ID do elemento HTML onde a tabela será colocada
 *
 * cabecalhos:
 *   nomes das colunas
 *
 * propriedades:
 *   propriedades dos objetos que serão exibidas
 */

function carregarTabela(
    dados,
    id = "dadosDiv",
    cabecalhos = [],
    propriedades = []
) {

    // Localiza o elemento HTML
    const div = document.getElementById(id);


    // Verifica se o elemento existe
    if (!div) {
        console.error("Elemento não encontrado:", id);
        return;
    }


    // Cria os cabeçalhos
    const cabecalhoHtml = cabecalhos
        .map(cabecalho => `<th>${cabecalho}</th>`)
        .join("");


    // Cria as linhas
    const linhasHtml = dados
        .map(item => {

            const colunas = propriedades
                .map(propriedade => {

                    // Permite propriedades simples ou aninhadas
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


    // Monta a tabela
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

