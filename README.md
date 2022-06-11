# NLW Return Backend

Um projeto de um popup para enviar feedback do usuário.

## Documentação da API

#### Retorna todos os itens

```http
  POST /feedback
```

| Parâmetro    | Tipo     | Descrição                                               |
| :----------- | :------- | :------------------------------------------------------ |
| `type`       | `string` | **Obrigatório**. O tipo do feedback: BUG / IDEA / OTHER |
| `comment`    | `string` | **Obrigatório**. Comentário do feedback                 |
| `screenshot` | `string` | **Opcional**. Imagem PNG em base64                      |

#### Salva o feedback e envia um email

## Tecnologias

- Typescript;
- Node;
- Express;
- Prisma;
- Jest.

## Funcionalidades

- Salvamento de dados;
- Envio de email.

## Aprendizados

- O indispensável princípios do SOLID na prática;
- Testes automatizados com Jest;
- Envio de emails testes com Nodejs;
- Prisma;
- Melhores práticas para o desenvolvimento de APIS legíveis e escaláveis.

## Stack utilizada

**Front-end:** React, TailwindCSS

**Back-end:** Node, Express

**Mobile:** React Native

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL`
`MAILTRAP_USER`
`MAILTRAP_PASS`

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

## Etiquetas

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

[![LinkedIn](https://img.shields.io/static/v1?label=Visite%20meu&message=LinkedIn&color=blue)](https://www.linkedin.com/in/josé-maycon-19a217190/)
