## 🚭 NoPodFirebase

> Aplicativo desenvolvido com **Expo** e **Firebase** para ajudar usuários a monitorarem e reduzirem o uso do cigarro eletrônico, com recursos como registro de resistências e exercícios de respiração.

---

### 📲 Funcionalidades

<small>

- 🔐 **Cadastro e login** via Firebase Authentication
- 📅 Tela de **monitoramento semanal** com os dias da semana e a última resistência registrada
- 🧘 Tela de **respiração guiada** com círculo animado que infla e esvazia
- ☁️ Integração com **Firebase Firestore** para salvar dados do usuário

</small>

---

### ⚙️ Tecnologias Utilizadas

<small>

- 🧠 **React Native** com **Expo**
- 🔥 **Firebase** (Auth + Firestore)
- ⚛️ **React Hooks**
- 🌐 **Expo Go** para execução no celular

</small>

---

<small>

### 🧪 Como Executar Localmente

1. 📦 Clone o repositório:

```bash
git clone https://github.com/kaoan-eduardo/NoPodFirebase.git
cd NoPodFirebase
```

2. 📥 Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. 🔧 Configure o Firebase:

- Crie um projeto no Firebase Console

- Ative o Authentication (email/senha)

- Ative e configure o Firestore

- Adicione o arquivo de configuração ao projeto (normalmente firebaseConfig)

4. 🚀 Inicie com o Expo:
```bash
npx expo start
```

</small>

### 🧭 Navegação no App

<small>

- 🔑 Autenticação
Login e cadastro com email e senha

- 📆 Tela de Semana
Visualização dos dias da semana com status da última resistência

- 🧘‍♂️ Tela de Respiração
Círculo animado que infla e desinfla para controlar o ritmo da respiração

### 🤝 Contribuindo

Contribuições são muito bem-vindas!

1. 🍴 Faça um fork deste repositório

2. 📥 Clone seu fork:

```bash
git clone https://github.com/seu-usuario/NoPodFirebase.git
```

3. 🛠️ Crie uma nova branch:
```bash
git checkout -b minha-feature
```

4. 💾 Faça suas modificações e commit:
```bash
git commit -m "Adiciona nova funcionalidade de respiração"
```
5. 📤 Envie para o GitHub:
```bash
git push origin minha-feature
```
6.📬 Abra um Pull Request explicando suas mudanças

</small>

---

### 🧱 Possíveis Melhorias Futuras

<small>

- 📊 Gráfico de progresso do usuário ao longo da semana

- 🔔 Notificações push para lembrar o exercício de respiração

- 📈 Histórico detalhado do uso do vape

- 📝 Exportação de relatórios

</small>

Feito com 💙 por [Kaoan](https://github.com/kaoan-eduardo)
