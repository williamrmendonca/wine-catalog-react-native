<h1 align="center">
  Nome do Projeto
</h1>

<h4 align="center">
  Descricao simplificada
</h4>


## UI Design da Aplicação

Aplicação desenvolvida com base no UI Figma [link](https://www.figma.com/file/).


## Funcionamento

- **telas**: breve descricao.
- **funcionalidades**: breve descricao.


## Tecnologias

-  **[React Native](https://reactnative.dev/)** - Crie aplicativos nativos para Android e iOS usando React. React Native combina as melhores partes do desenvolvimento nativo com React, a melhor biblioteca JavaScript da classe para construir interfaces de usuário.
-  **[Expo](https://expo.io/)** - permite desenvolver aplicações mobile com React Native e com o Javascript como linguagem de programação. Além de trazer as facilidades proporcionadas pelo Expo, através desse ambiente também é possível realizar o "eject" das pastas nativas (Android e iOS), permitindo uma maior autonomia para realizar customizações nativas.
- **[TypeScript](https://reactnative.dev/docs/typescript)**: o TypeScript foi utilizado com o intuito de adicionar tipagem aos componentes da aplicação, de modo a facilitar a manutenção, aumentar a produtividade (IntelliSense) e evitar erros.
- **[Expo Vector Icons](https://docs.expo.dev/guides/icons/)**: ao utilizar o Expo, é possível usufruir do Expo Vector Icons, uma coleção que reuni várias bibliotecas de ícones. Para essa aplicação foi utilizado o MaterialIcons, que apresentava todos os ícones desejados para a aplicação.
- **[Expo Font e Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/)**: possibilitou utilizar as fontes Chivo e Overpass do Google para personalizar a tipografia da aplicação.
- **[Lottie for React Native](https://github.com/lottie-react-native/lottie-react-native)**: Lottie é uma biblioteca móvel para Android e iOS que analisa animações Adobe After Effects exportadas como JSON com bodymovin e as renderiza nativamente no celular.
- **[App Loading](https://docs.expo.dev/versions/latest/sdk/app-loading/)**: recurso utilizado para manter a aplicação na tela de splash enquanto as fonts são carregadas.
- **[React Navigation 6.x](https://reactnavigation.org/)**: essa biblioteca foi utilizada com o intuito de criar a navegação e rotas da aplicação.
- **[Styled Components](https://styled-components.com/)**: biblioteca de estilização baseada em CSS. Ela foi utilizada devido à flexibilidade e dinamismo que oferece, possibilitando utilizar propriedades com base em estados.
- **[React Native Responsive Font Size](https://www.npmjs.com/package/react-native-responsive-fontsize)**: a partir dessa biblioteca foi possível utilizar a função RFValeu, que faz o tratamento do valor inserido, possibilitando trabalhar com diferentes proporções.
- **[Axios](https://github.com/axios/axios)**: essa biblioteca foi utilizada para lidar com requisição HTTP com a API.
- **[Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: Anime com mais facilidade do que nunca. Complexidade reduzida de dezenas para apenas alguns métodos. Desempenho nativo e animações precisas. Declare suas animações em JS, mas execute-as no encadeamento nativo! A API oferece novos níveis de precisão e controle detalhado de suas animações.
- **[Moti](https://moti.fyi/)**: baseado na biblioteca Reanimated v2, o Moti permite criar animações para React Native.
- **[React Native Testing Library](https://github.com/callstack/react-native-testing-library)**: biblioteca de testes que faz o uso do Jest, uma das bibliotecas mais utilizadas para testes em ambiente Java Script.


## Instruções

Para clonar e executar essa aplicação, execute os seguintes comandos:

```bash
# Clonar o repositório
$ git clone https://github.com/williamrmendonca/boilerplate-react-native-expo.git MyProject

# Acessar a pasta do projeto
$ cd MyProject

# Installar as dependências
$ yarn

# Executar o projeto com o Expo
$ expo start

# Executar o teste
$ yarn test


# Se desejar ter acesso as pastas nativas (ios e android)
$ expo eject
```

