# CRUD Cliente

O CRUD Cliente é um projeto realizado em `Next.js`, com o banco de dados `Firebase`. O seu objetivo é realizar o cadastro, alteração e exclusão de clientes de uma base de dados.

![screenshot](screenshot.gif?raw=true "screenshot")

## Funcionalidade do projeto

O projeto é um SPA (Single Page Application) com uma tabela mostrando os clientes cadastrados no banco de dados `Firebase` criado e configurado. Ao alterar ou inserir um novo cliente, a página muda e apresenta um formulário para que tais mudanças ou inserções sejam realizadas e salvas no banco de dados.

## Tecnologias e dependências

-   [Next.js 12.2.2](https://nextjs.org)
-   [Firebase 9.9.0](https://firebase.google.com)
-   [Tailwind 3.1.6](https://tailwindcss.com)

## Técnicas abordadas

-   Boas práticas na criação de componentes
-   Criação de classe e interface
-   Variáveis locais com `.env`
-   React Hooks
    -   `customHook`
    -   `useState`
    -   `useEffect`
-   Configuração do Firebase
-   Operações com Firebase:
    -   Adicionar
    -   Alterar
    -   Remover
    -   Obter todos os dados

###

# Instalação

-   Primeiramente, clone este repositório e instale as suas dependencias utilizando o seguinte comando:

```sh
$ npm install
```

-   É necessário configurar o banco de dados Firebase e obter os seus dados de conexão:

    1.  Crie uma conta no [Firebase](https://firebase.google.com) (caso não possua), e vá para a página do [console](https://console.firebase.google.com)
    2.  Adicione um novo projeto, com o nome que preferir
    3.  Vá até as Configurações do projeto e copie a `apiKey`, `authDomain` e `projectId`

-   Com esses dados em mãos, crie um arquivo na raíz do projeto com o nome `.env.local` e insira o seguinte em seu conteúdo:

```
NEXT_PUBLIC_FIREBASE_API_KEY = apiKey
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = authDomain
NEXT_PUBLIC_FIREBASE_PROJECT_ID = projectId
```

-   Basta substituir `apiKey`, `authDomain` e `projectId` pelos valores obtidos nas configurações do projeto no Firebase.

# Execução

Execute a aplicação com o comando `npm run dev`, ele irá iniciar o programa em [localhost:3000](http://localhost:3000)

```sh
$ npm run dev
```
