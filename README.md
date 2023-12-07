# API de CEPS

Uma API de ceps brasileiros podendo consultar qualquer CEP nacional

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

```
Docker >= 24.0.6
Nodejs >= 21.3.0
```

### 🔧 Instalação

Crie o seu arquivo dot baseado no arquivo de exemplo

```
./.env.example
```

Com o seu docker rodando, execute o docker para subir a instância do mysql

```
docker-compose up -d
```

Após o container subir execute o node

```
npm run start
```

Após isso o projeto deve estar no ar, por padrão está subindo em localhost na porta 4000

## ⚙️ Executando os testes

Para rodar os testes, basta em outro terminal executar

```
npm run test
```

---
⌨️ com ❤️ por [Fabio Soares](https://github.com/fabiosooarees) 😊