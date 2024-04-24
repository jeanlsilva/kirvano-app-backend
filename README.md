# Kirvano App - Backend

## Overview

Este é o repositório do backend do projeto realizado como desafio técnico para a vaga de Desenvolvedor Full Stack na Kirvano. 

### Escopo do projeto

Este projeto consiste em uma API que recebe dados de um cartão de crédito e precisa validar seu número, tal como sua data de expiração, e retornar uma resposta de sucesso ou erro. A validação do cartão se faz necessária para que seja possível finalizar o pedido de um produto.

### Funcionalidades

Além da funcionalidade de validação dos dados do cartão de crédito, esta API também salva os dados de endereço e lista todos os endereços salvos para que seja possível reutilizá-los no front-end. De semelhante modo, os dados do cartão de crédito utilizados no checkout também são salvos e disponibilizados em lista para que possam ser utilizados novamente. 

Os endereços são salvos no banco de dados através de uma rota POST como a primeira etapa do processo. A verificação se o endereço já existe ou não é realizada no front-end. Já no caso do cartão de crédito, a API verifica se foi fornecido no corpo da requsição do checkout o atributo `card_id`, caso positivo, será utilizado o cartão existente, caso contrário será fornecido um objeto `card` contendo todos os dados do novo cartão para ser salvo no banco.

## Informações Técnicas

### Rotas

- `/checkout` (POST) - finaliza o pedido
- `/card` (POST) - salva um novo cartão
- `/card` (GET) - lista todos os cartões salvos
- `/address` (POST) - salva um novo endereço
- `/address` (GET) - lista todos os endereços salvos

### Arquitetura

Para o desenvolvimento da API, foi utilizada uma arquitetura de separação de camadas seguindo o design pattern `Factory Method`

- `main`: possui o núcleo da aplicação, arquivos de configuração, adaptadores, factories e middlewares;
- `usecases`: possui a definição das funcionalidades, repositórios, erros, etc;
- `presentation`: camada de apresentação que faz a ponte entre a API e os clients que a utilizam;
- `external`: integração com bibliotecas externas - nesse caso específico com o Prisma

### Banco de dados

Como mencionado anteriormente, a API persiste as informações da aplicação no banco de dados. Na versão atual, a aplicação conta com as seguintes tabelas:

- `order`
- `address`
- `card`

O banco de dados utilizado para este projeto foi o PostgreSQL, com conjunto com o Prisma para fazer a integração entre as duas pontas (banco e API).

### Tecnologias Utilizadas

O projeto foi desenvolvido utilizando Node.js na versão 20.12.2 em conjunto com o framework Express.js na versão 4.19.2. Todo o código foi escrito com Typescript.

### Instalação e execução local do projeto

Para executar a API localmente, é necessário ter o Node.js instalado (versão 20+) além do NPM (versão 10+). Também é necessário instalar o Postgres https://www.postgresql.org/download/.

Após instalado o Postgres, abra o pgAdmin e inicialize um novo servidor (Object -> Register -> Server). 
Na aba `General`, defina um nome de sua preferência. 
Na aba `Connection`, insira no campo `Host name/address` o seguinte valor: `localhost`
No campo `Port` estará por padrão o valor `5342` que é a porta padrão em que o postgres roda. A não ser que você já tenha algum serviço rodando nessa porta, não é necessário alterar.
Os campos `Maintenance Database` e `Username` estarão por padrão como `postgres`, não é necessário alterar.
No campo `Password` insira a senha que você configurou durante a instalação do Postgres.
Clique em `Salvar`. O servidor deve aparecer na lista do lado esquerdo da tela. Clique nele com o botão direito do mouse e selecione `Create`->`Database`. Defina um nome para o banco de dados.

Após criado o banco, está na hora de configurá-lo na aplicação. Crie um arquivo `.env` na raiz do projeto e adicione a variável de ambiente `DATABASE_URL` com o seguinte valor:

`postgresql://{username}:{password}@localhost:5432/{db_name}?schema=public`

Substitua as palavras entre as chaves pelos valores que você definiu.

Em seguida, abra o terminal no diretório do projeto e execute o seguinte comando:
`npm run db:migrate:dev`

Isso deve gerar todas as migrations no seu banco local deixando-o sincronizado com o Schema do Prisma. Depois disso é só iniciar a aplicação através do comando `npm run start-dev`. Caso você vir no terminal a mensagem `Server Running...`, deu tudo certo!