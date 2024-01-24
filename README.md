Para o backend utilizei o Express.js, e para o frontend o Next.js
Apesar da autenticação por JWT ter sido implementada no backend, não pude implementar a pagina de login no frontend em tempo hábil, assim como a conteinerização do projeto.

> Na pasta backend, existe um arquivo ```.env.example``` que é utilizado para definir uma porta para a aplicação e uma chave jwt. Porém, para demonstração o arquivo ```.env``` não é estritamente necessário, pois existem valores padrão definidos caso não estejam presentes nas variáveis de ambiente

Para executar o projeto siga esstes passos:

1. clonar este repositório
3. abrir a pasta do projeto no vscode
4. Iniciar o backend:
  > (o servidor backend estará disponivel no localhost porta 3003)
```bash
cd backend

npm install

npm run init

npm run dev
```

6. Iniciar o frontend:
 > (o servidor frontend estará disponivel no localhost porta 3000)
```bash
cd frontend

npm install

npm run dev
```
