# greenacesso

# Teste técnico - Roberto Pimenta

# Linkedin: https://www.linkedin.com/in/roberto-pimenta-54a41056/

# Rodando o projeto

    1. Clone o projeto
    2. Rode o comando para subir os containers da aplicação (banco de dados e api) através do docker-compose
    comando: 'docker compose up -d --build'
    OBS: certifique-se de estar com a versão atualizada do docker no seu computador
    OBS2: as portas utilizadas na aplicação são 3306 para o banco mysql e 3001 para a api, certifique-se que as mesmas não estão sendo utilizadas
    3. Acesse o container, os comandos serão executados dentro dele
    comando: docker exec -it api bash
    4. Instale as dependências
    comando: npm i
    5. Start a aplicação
    comando: npm run dev
    OBS: esse script já cria o banco, as tabelas e popula as tabelas lotes e lotes_financeiro

# Arquivos

    No diretório 'arquivos' existem 2 arquivos, import_boletos_sindico.csv, utilizado para importar os boletos através da rota /import, e o arquivo fake_pdf.pdf, para ser desmembrado em arquivos pdf distintos, página por página, através da rota /import-pdf.

# Rotas

    Na raiz do projeto existe um arquivo Insomnia_Green.json, com a exportação das rotas do insomnia.

    1. Listar boletos em json - localhost:3001/boletos
    2. Listar boletos em PDF - localhost:3001/boletos?relatorio=1
    3. Importar o arquivo csv para o banco de dados - localhost:3001/import
    4. Lê arquivo PDF e divide em páginas - localhost:3001/import-pdf

# Uploads

    Na rota import-pdf, os arquivos desmembrados serão armazenados no diretório:
    /public/uploads/boletos
