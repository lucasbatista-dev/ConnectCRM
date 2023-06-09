## **CONNECT CRM**

## Descrição

Um projeto backend desenvolvido para gerenciar clientes e os seus respectivos contatos. Tudo a partir de uma rota autenticada com login e registro

## Como utilizar

Após baixar o repositório, crie o arquivo **.env** na raiz do projeto e siga o modelo que esta disponivel no arquivo **.env.example**. Lembre-se de criar um banco de dados postgres e adiciona-lo ao arquivo .env


Agora abra o terminal dentro da raiz do projeto e rode o seguinte comando:
```bash
$ yarn install
```
## Comando para gerar o banco de dados e persistir localmente
```bash
$ npx prisma migrate dev```

## Iniciando o servidor

```bash
$ yarn start
```

## Testando as rotas:

Pode-se testar a partir da documentação no próprio navegador ou a partir do programa insomnia, importando o arquivo **connectcrm_insomnia.json** que esta na raiz do projeto.

**IMPORTANTE** Fazer as requisições em ordem no insomnia para ir populando as variaveis de ambiente que estão automatizando o ambiente.


