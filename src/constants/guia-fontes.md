# 📝 Guia de Tamanhos de Fonte - AgroMarket

## Princípio Base
**Tamanho base:** 16px (1rem)  
**Filosofia:** Fontes grandes e legíveis para agricultores com baixa familiaridade digital

---

## 📏 Escala de Tamanhos

### 🔤 Títulos (Headings)

#### H1 - Títulos Principais (32px / 2rem)
```css
font-size: 2rem (32px)
font-weight: 500 (medium)
line-height: 1.3
```

**Quando usar:**
- ✅ Nome do produto na página de detalhes
- ✅ Nome do agricultor no perfil
- ✅ Títulos de páginas principais

**Exemplos:**
```
"Tomate Orgânico"
"João Silva"
"Anunciar Produto"
```

---

#### H2 - Subtítulos Importantes (24px / 1.5rem)
```css
font-size: 1.5rem (24px)
font-weight: 500 (medium)
line-height: 1.4
```

**Quando usar:**
- ✅ Boas-vindas "Bem-vindo! 🌱"
- ✅ Seções principais de conteúdo
- ✅ Títulos de áreas importantes

**Exemplos:**
```
"Bem-vindo!"
"Produtos"
"AgroMarket"
```

---

#### H3 - Títulos de Seção (20px / 1.25rem)
```css
font-size: 1.25rem (20px)
font-weight: 500 (medium)
line-height: 1.4
```

**Quando usar:**
- ✅ "Categorias"
- ✅ "Descrição"
- ✅ "Sobre"
- ✅ "Produtor"
- ✅ Títulos de cards/seções

**Exemplos:**
```
"Categorias"
"Todos os produtos"
"Descrição"
```

---

#### H4 - Subtítulos Menores (18px / 1.1rem)
```css
font-size: 1.1rem (18px)
font-weight: 500 (medium)
line-height: 1.4
```

**Quando usar:**
- ✅ Nomes dentro de cards
- ✅ Subtítulos secundários
- ✅ Labels importantes

---

### 💰 Preços (Tamanho Especial)

#### Preço Grande - Destaque Principal (48px / 3rem)
```css
font-size: 3rem (48px)
font-weight: 600 (semibold)
color: var(--primary)
```

**Quando usar:**
- ✅ Preço principal na página de detalhes do produto

**Exemplo:**
```
R$ 8,50
```

---

#### Preço Médio - Cards de Produto (30px / 1.875rem)
```css
font-size: 1.875rem (30px)
font-weight: 600 (semibold)
color: var(--primary)
```

**Quando usar:**
- ✅ Preço nos cards de listagem de produtos

**Exemplo:**
```
R$ 8,50
```

---

### 📱 Textos Gerais

#### Texto Grande - Inputs e Botões (18px / 1.125rem)
```css
font-size: 1.125rem (18px)
font-weight: 400 (normal) para inputs
font-weight: 500 (medium) para botões
line-height: 1.5
```

**Quando usar:**
- ✅ Texto de inputs e textareas
- ✅ Texto de botões principais
- ✅ Busca e campos de formulário
- ✅ Mensagens importantes

---

#### Texto Médio - Corpo do Texto (16px / 1rem)
```css
font-size: 1rem (16px)
font-weight: 400 (normal)
line-height: 1.5
```

**Quando usar:**
- ✅ Descrições de produtos
- ✅ Textos informativos gerais
- ✅ Parágrafos de conteúdo
- ✅ Labels de formulário

---

#### Texto Base para Botões Secundários (16px / 1rem)
```css
font-size: 1rem (16px)
font-weight: 500 (medium)
line-height: 1.5
```

**Quando usar:**
- ✅ Botões de categorias
- ✅ Texto de navegação inferior
- ✅ Botões secundários

---

#### Texto Pequeno - Informações Secundárias (14px / 0.875rem)
```css
font-size: 0.875rem (14px)
font-weight: 400 (normal)
line-height: 1.5
color: var(--muted-foreground)
```

**Quando usar:**
- ✅ Localização do agricultor
- ✅ Informações complementares
- ✅ Badges pequenos
- ✅ Descrições curtas abaixo de títulos
- ✅ Unidades de medida secundárias

**Exemplos:**
```
"Do campo para você"
"São Paulo, SP"
"Texto de navegação"
```

---

## 🎯 Uso por Componente

### Header (Cabeçalho)
```
Logo/Título:        h2 (24px)
Slogan:             text-sm (14px)
```

### Navegação Inferior
```
Ícones:             w-7 h-7 (28px)
Labels:             text-sm (14px)
```

### Card de Produto
```
Nome:               h3 (20px)
Preço:              text-3xl (30px)
Unidade:            text-lg (18px)
Localização:        text-sm (14px)
```

### Página de Detalhes
```
Nome do Produto:    h1 text-3xl (48px no mobile)
Categoria Badge:    text-sm (14px)
Preço:              text-4xl (48px)
Unidade:            text-xl (20px)
Descrição título:   h3 text-xl (20px)
Descrição texto:    text-base (16px)
```

### Formulário (Adicionar Produto)
```
Título da página:   h1 text-3xl (48px)
Subtítulo:          text-base (16px)
Labels:             text-lg (18px)
Inputs:             text-lg (18px)
Botões principais:  text-lg (18px)
```

### Botões
```
Principais:         text-lg font-medium (18px)
Secundários:        text-base font-medium (16px)
Pequenos:           text-sm font-medium (14px)
```

### Badges
```
Categoria:          text-sm font-medium (14px)
Informação:         text-base (16px)
```

---

## 📊 Hierarquia Visual

```
H1 (32px)           ████████████████ Título principal
Preço Grande (48px) ████████████████ Destaque máximo
H2 (24px)           ████████████ Subtítulos
Preço Card (30px)   ████████████ Preço destaque
H3 (20px)           ██████████ Seções
Text-lg (18px)      ████████ Inputs/Botões
Text-base (16px)    ██████ Corpo
Text-sm (14px)      ████ Secundário
```

---

## ✅ Classes Tailwind Utilizadas

```css
text-sm      →  14px  (0.875rem)
text-base    →  16px  (1rem)
text-lg      →  18px  (1.125rem)
text-xl      →  20px  (1.25rem)
text-2xl     →  24px  (1.5rem)
text-3xl     →  30px  (1.875rem)
text-4xl     →  36px  (2.25rem)

/* Pesos de fonte */
font-normal    →  400
font-medium    →  500
font-semibold  →  600
```

---

## 🎨 Combinações Recomendadas

### Para Preços
```tsx
<span className="text-primary text-3xl font-semibold">
  R$ 8,50
</span>
<span className="text-muted-foreground text-lg">
  / kg
</span>
```

### Para Títulos de Seção
```tsx
<h3 className="mb-3 text-xl">
  Categorias
</h3>
```

### Para Botões Principais
```tsx
<button className="px-8 py-5 text-lg font-medium">
  Publicar Anúncio
</button>
```

### Para Informações Secundárias
```tsx
<span className="text-muted-foreground text-sm">
  São Paulo, SP
</span>
```

---

## ✅ Regras de Ouro

### DO (Faça):
1. ✅ Use **H1 (32px)** apenas UMA vez por página
2. ✅ Preços SEMPRE em **verde primary** e **destaque (30-48px)**
3. ✅ Botões principais em **text-lg (18px)** mínimo
4. ✅ Inputs em **text-lg (18px)** para fácil leitura
5. ✅ Mantenha line-height entre 1.3-1.5 para legibilidade
6. ✅ Textos secundários em **text-sm (14px)** com cor muted

### DON'T (Não faça):
1. ❌ NÃO use fontes menores que 14px em mobile
2. ❌ NÃO misture muitos tamanhos em uma área pequena
3. ❌ NÃO use font-weight abaixo de 400 (normal)
4. ❌ NÃO deixe line-height muito apertado (< 1.2)
5. ❌ NÃO use preços em tamanho pequeno (mínimo 30px)
6. ❌ NÃO abuse de text-4xl ou maiores (reservar para destaques)

---

## 💡 Dicas de Acessibilidade

1. **Tamanho mínimo legível:** 14px (0.875rem)
2. **Tamanho ideal para leitura:** 16px (1rem)
3. **Botões:** Altura mínima de 48px para toque fácil
4. **Contraste:** Manter sempre adequado com o fundo
5. **Line-height:** 1.5 para textos longos, 1.3 para títulos
6. **Espaçamento:** Sempre adicionar margin/padding generoso

---

## 🎯 Tabela Rápida de Referência

| Elemento | Tamanho | Peso | Uso |
|----------|---------|------|-----|
| **H1** | 32px (2rem) | 500 | Título principal da página |
| **H2** | 24px (1.5rem) | 500 | Boas-vindas, logo |
| **H3** | 20px (1.25rem) | 500 | Seções (Categorias, Sobre) |
| **Preço Destaque** | 48px (3rem) | 600 | Página de detalhes |
| **Preço Card** | 30px (1.875rem) | 600 | Cards de listagem |
| **Botões** | 18px (1.125rem) | 500 | Ações principais |
| **Inputs** | 18px (1.125rem) | 400 | Campos de formulário |
| **Corpo** | 16px (1rem) | 400 | Descrições, textos |
| **Secundário** | 14px (0.875rem) | 400 | Info complementar |

---

**Resumo para Agricultores:**
- 📱 Tudo é GRANDE e LEGÍVEL
- 💰 Preços em DESTAQUE máximo
- 🔘 Botões com texto CLARO e GRANDE
- 📝 Formulários com letras FÁCEIS de ler
