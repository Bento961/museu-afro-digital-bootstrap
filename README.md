# 🏛️ Museu Digital da Memória Afro-Brasileira

Este projeto consiste no desenvolvimento de um site responsivo, elegante e acessível, focado na preservação, valorização e divulgação da história e cultura afro-brasileira. O trabalho foi desenvolvido como projeto autoral para avaliação da disciplina de Desenvolvimento Web.

🔗 **Acesse o repositório:** [github.com/Bento961/museu-afro-digital-bootstrap](https://github.com/Bento961/museu-afro-digital-bootstrap)

---

## 🎯 Objetivo

Criar uma aplicação web autoral que materialize os conceitos de *"Repatriamento Digital"* e *"Doação Digital"* discutidos por Livio Sansone, utilizando tecnologias modernas de Front-end para apoiar a implementação e o papel social da **Lei Federal nº 10.639/2003** nas escolas e na sociedade.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 (Semântico):** Estruturação limpa baseada nos padrões W3C (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- **Bootstrap 4.6:** Grid System responsivo, Navbar com colapso, Carousel, Cards, Tabelas de acervo e Utilitários.
- **CSS3 Personalizado (`css/style.css`):** Estilização autoral, paleta de cores dedicada, sombras, arredondamentos e ajustes visuais de responsividade.
- **JavaScript / jQuery:** Temporização do carrossel e validação interativa do formulário de colaboração.
- **HTML5 Media Player:** Player nativo para exibição de documentários em vídeo sobre o patrimônio imaterial (`<video>`).
- **SEO & Mídias:** Metadados estruturados de busca e arquivo de indexação `sitemap.xml`.

---

## ✨ Funcionalidades & Destaques

- **Design Responsivo:** Layout adaptável para smartphones, tablets e desktops (`container-fluid`, `col-md-*`).
- **Carrossel Interativo:** Exposição visual em destaque na página inicial com controles de navegação.
- **Catalogação do Acervo:** Tabela estruturada com o inventário de itens históricos (Imprensa Negra, Samba de Roda, Irmandade da Boa Morte).
- **Mídia Integrada:** Player de vídeo nativo exibindo o documentário oficial do IPHAN sobre o Samba de Roda do Recôncavo Baiano.
- **Formulário de Colaboração:** Validação em tempo real via JavaScript para envio de sugestões e doação digital de acervos.

---

## 📚 Referência Teórica

O conteúdo conceitual e a estrutura do museu foram fundamentados na legislação e no artigo:
- **Lei Federal nº 10.639/2003** (Obrigatoriedade do ensino da História e Cultura Afro-Brasileira).
- *The Dilemmas of Digital Patrimonialization: The Digital Museum of African and Afro-Brazilian Memory* — Livio Sansone (2013).
- **Museu Afro Digital (UFBA):** Referência em patrimônio imaterial e repositório digital.

---

## 📁 Estrutura de Arquivos

```text
museu-afro-digital-bootstrap/
│
├── index.html            # Página Inicial (Navbar, Carousel, Cards de Destaque, Footer)
├── sobre.html            # Contextualização (Lei nº 10.639/03, Artigo Sansone e Museu UFBA)
├── acervo.html           # Galeria do acervo histórico e Documentário IPHAN
├── contato.html          # Formulário de colaboração e doação digital com validação JS
│
├── css/
│   └── style.css         # Estilos customizados e regras de responsividade
│
├── bootstrap/
│   ├── css/              # Framework Bootstrap CSS
│   └── js/               # Framework Bootstrap JS
│
├── javascript/
│   ├── jquery.js         # Biblioteca jQuery
│   └── script.js         # Temporização do carrossel e validação de formulário
│
├── img/                  # Imagens do acervo e vídeo do IPHAN
│   └── samba-de-roda.mp4 # Documentário IPHAN
│
├── sitemap.xml           # Estrutura XML para indexação SEO
└── README.md             # Documentação técnica do repositório
```

👤 Autor
Felipe de Souza Bento

🏫 Instituição: IFSP — Instituto Federal de São Paulo (Campus Capivari)

🎓 Curso: Pós-Graduação em Desenvolvimento de Sistemas Web e Dispositivos Móveis

Este projeto é uma atividade acadêmica sem fins lucrativos.
