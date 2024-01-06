# Blog App

Este é um aplicativo de blog simples construído com React e Material-UI.

## Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados em seu sistema.

1. Clone o repositório:

   ```bash
   git clone https://github.com/Edson1206/blog-app.git

2. Navegue até o diretório do projeto:

   ```bash
   cd blog-app

3. Instale as dependências:

    ```bash
    npm install

4. Inicie a aplicação:

    ```bash
    npm start

## Funcionalidades:

- Visualize uma lista de postagens de blog.
- Realize buscas por título ou conteúdo das postagens.
- Cada postagem exibe um título, corpo resumido e um botão para ler mais.
- Paginação disponível para navegar entre as postagens.

## Estrutura do Projeto

- src/api.jsx: Função para chamar a API JSONPlaceholder.
- src/Home.jsx: Componente principal da aplicação.
- src/PostDetail.jsx: Pagina que exibe detalhes da postagem selecionada
- src/PostCard.jsx: Componente que representa um card de postagem.
- src/Pagination.jsx: Componente de paginação.

## Personalização

A aplicação foi estilizada através do [Material UI](https://mui.com/material-ui/getting-started/) e foi feita de forma que ela ficasse responsiva em desktop e smartphones.

## Avaliação do Código

Este projeto foi estruturado com a intenção de ser claro, modular e fácil manutenção. A seguir estão algumas considerações sobre a organização do código, clareza da estrutura de componentes e qualidade do estilo:

### Organização do Código

O código está organizado de forma modular, com componentes claramente separados em arquivos individuais. A divisão em componentes como `PostCard`, `Pagination` e `api` facilita a manutenção e expansão do código.

### Clareza da Estrutura de Componentes

A estrutura de componentes é clara e segue as melhores práticas do React. Cada componente tem uma responsabilidade específica, o que facilita a compreensão do papel de cada parte do código. A utilização de vários componentes do Material-UI também contribui para a clareza e organização.

### Qualidade do Estilo

O estilo é aplicado de forma coesa e utiliza as funcionalidades do Material-UI para garantir uma aparência consistente. A utilização do sistema de grades, paleta de cores e sombras contribui para uma experiência visual agradável. A escolha de estilos responsivos também melhora a experiência do usuário em diferentes dispositivos.

Se você tiver sugestões de melhorias ou encontrar áreas que possam ser aprimoradas, sinta-se à vontade para abrir uma [issue](https://github.com/Edson1206/blog-app/issues) ou enviar um pull request. A colaboração é bem-vinda!
