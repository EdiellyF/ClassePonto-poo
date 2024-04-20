# Plano Cartesiano e Cálculo de Distância

Este projeto utiliza JavaScript e a biblioteca Chart.js para desenhar um plano cartesiano e calcular a distância entre dois pontos, tanto em 2D quanto em 3D.

## Como Funciona

Existem duas classes principais neste projeto:

- `Ponto`: Representa um ponto no espaço 2D.
- `Ponto3d`: Representa um ponto no espaço 3D.

A função `desenharPlanoCartesiano` utiliza o Chart.js para desenhar o plano cartesiano e os pontos.

### Cálculo de Distância em 2D

O evento de clique no botão 'calcular' extrai os valores dos campos de entrada HTML, cria objetos `Ponto`, calcula a distância entre eles e exibe o resultado no console e na página.

### Cálculo de Distância em 3D

O evento de clique no botão 'calcularZ' faz o mesmo que o anterior, mas para pontos em 3D.

## Como Usar

1. Clone o repositório: `git clone`
2. Abra o arquivo `index.html` em seu navegador.
3. Preencha os campos de entrada com as coordenadas dos pontos desejados.
4. Clique no botão 'Calcular' para calcular a distância em 2D ou no botão 'Calcular Z' para calcular a distância em 3D.

## Pré-requisitos

- Navegador da web moderno com suporte a JavaScript.
- Conexão com a internet para carregar a biblioteca Chart.js (se não estiver baixada localmente).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests com melhorias, correções de bugs ou novos recursos.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

