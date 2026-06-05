# 💖 Nossa História de Amor

Este é um projeto especial (e apaixonante) de um site romântico, interativo e altamente personalizável. Foi construído para celebrar relacionamentos, reviver memórias incríveis e surpreender quem você ama de um jeito criativo e tecnológico! 

Ideal para presentear em **aniversários de namoro/casamento**, **Dia dos Namorados**, **pedidos especiais** ou apenas para arrancar um sorriso sincero em uma terça-feira qualquer. 🥰

---

## ✨ Funcionalidades Exclusivas

O site não é apenas uma página estática, ele é repleto de seções interativas, animações fluidas e muito carinho em cada detalhe:

- **📸 Hero Interativo:** Uma tela inicial deslumbrante com partículas (corações flutuantes) que seguem o cursor e uma frase de impacto apaixonante.
- **⏱️ Cronômetro do Amor:** Mostra com exatidão matemática há quanto tempo vocês estão juntos (contando anos, meses, dias, horas, minutos e segundos).
- **⏳ Linha do Tempo (Nosso Caminho):** Uma jornada visual pelos marcos mais importantes da história de vocês (O primeiro beijo, a primeira viagem juntos, o pedido, etc).
- **💌 Cartas "Abra Quando...":** Pequenas cartas virtuais escritas especialmente para momentos específicos da vida a dois (Ex: "Abra quando estiver com saudade", "Abra quando tivermos nossa primeira briga").
- **🎲 Gerador de Encontros (Vale-Date):** Acabou a criatividade para o final de semana? Aperte o botão e o site sorteia uma ideia de date aleatória (e incrível) para vocês.
- **✨ Grade de Motivos:** Um layout no estilo *Bento-Grid* super elegante que revela os motivos detalhados pelos quais você ama a pessoa.
- **🖼️ Mosaico de Memórias:** Uma galeria de fotos imersiva com as melhores imagens de vocês, acompanhada de animações suaves ao descer a página.
- **🎵 Trilha Sonora Flutuante:** Player de música fixo no rodapé. Suporta tanto integração nativa com playlists do Spotify, quanto arquivos normais de áudio. Tudo para embalar a leitura com a "música de vocês".

---

## 🛠️ Tecnologias Envolvidas

Nós misturamos amor com tecnologia de ponta:

- **[React](https://react.dev/)** + **[Vite](https://vitejs.dev/)**: Para uma interface ultra-rápida e moderna.
- **[TypeScript](https://www.typescriptlang.org/)**: Porque o amor pode ser imprevisível, mas o código não deve ser.
- **[Tailwind CSS](https://tailwindcss.com/)**: Estilização mágica e totalmente responsiva (lindo no PC e no celular).
- **[Framer Motion](https://www.framer.com/motion/)**: O ingrediente secreto para as animações fluidas e emocionantes de entrada, scroll e interações.
- **[Lucide React](https://lucide.dev/)**: Ícones elegantes para dar aquele charme a mais.

---

## ⚙️ Como Personalizar com a História de Vocês

Esqueça códigos complicados. O projeto foi estruturado para que **qualquer pessoa** consiga colocar sua própria história nele em poucos minutos!

TODO o conteúdo dinâmico (nomes, textos, datas, bilhetes, links de fotos e músicas) está centralizado em um único arquivo: **`src/config.ts`**. 

Abra esse arquivo no seu editor favorito e seja criativo:
- `couple`: Qual o nome do casal apaixonado?
- `startDate`: Quando tudo começou? O tempo voa, nós calculamos para você.
- `timeline`: A linha do tempo do relacionamento. Adicione quantos eventos quiser!
- `letters`: Escreva as famosas cartas "Abra quando..." no seu estilo.
- `photos`: Substitua os links pela URL das fotos do casal.
- `spotifyTrackId` ou `musicUrl`: Escolha a trilha sonora perfeita que tocará no fundo.

---

## 🚀 Instalando e Rodando Localmente

Para testar no seu computador e ajustar os detalhes para que fique perfeito:

1. **Clone esse repositório na sua máquina:**
   ```bash
   git clone https://github.com/seu-usuario/nosso-amor.git
   cd nosso-amor
   ```

2. **Instale os preparativos mágicos (dependências):**
   ```bash
   npm install
   ```
   *(ou `yarn install` se preferir)*

3. **Inicie a magia de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Contemple a obra:**
   Abra no seu navegador o endereço `http://localhost:3000` (ou a porta indicada no terminal) e veja a mágica acontecer!

---

## 📦 Colocando no Ar (Deploy rápido)

Se você quer mandar o link para o seu amor, a forma mais fácil é pela [Vercel](https://vercel.com/) ou [Netlify](https://netlify.com/).

### Caso utilize imagens automáticas (Pexels) e Integração de API
*Nota: este projeto possui um backend miniatura para buscar imagens do Pexels ocultando chaves.*

1. No seu painel da Vercel, acesse as configurações do projeto (**Settings** > **Environment Variables**).
2. Cadastre a variável: `PEXELS_API_KEY` e coloque a sua chave do Pexels.
3. Se estiver usando o Gemini (opcional, caso tenha feito extensões de IA no projeto): cadastre a `GEMINI_API_KEY`.
4. Faça um *Redeploy* e seu site estará no ar e perfeitamente seguro!

Para gerar os arquivos minificados caso queira hospedar em outro lugar tradicional:
```bash
npm run build
```
*(Tudo que você precisará estará lindamente agrupado na pasta `dist/`)*

---

💖 Feito com carinho para inspirar mais amor pelo mundo. Fique à vontade para clonar, alterar o quanto quiser, hospedar e fazer o dia de alguém espetacular!