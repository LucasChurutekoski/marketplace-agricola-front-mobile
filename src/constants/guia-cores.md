# 🎨 Guia de Cores - AgroMarket

## Paleta Principal

### 🟢 Verde Agricultura - Primary (#2D7A3E)

**Uso: 30-40% do design**

- ✅ Botões de ação principal
- ✅ Navegação ativa
- ✅ Cabeçalhos importantes
- ✅ Preços e valores monetários
- ✅ Ícones de sucesso

**Exemplos:**

```
- Botão "Publicar Anúncio"
- Botão "Anunciar" na navegação inferior
- Header do app
- Preço dos produtos (R$ XX,XX)
- Background de badges e categorias selecionadas
```

---

### ⚪ Branco/Cinza Claro - Background & Cards

**Uso: 40-50% do design**

#### Background (#FAFAF8)

- Fundo geral do aplicativo
- Áreas de respiro visual

#### Card (#FFFFFF - Branco puro)

- Cards de produtos
- Formulários
- Caixas de conteúdo
- Seções destacadas

#### Muted (#F5F5F5 - Cinza clarinho)

- Backgrounds de áreas secundárias
- Placeholders visuais
- Estados vazios

---

### 🌿 Verde Claro - Secondary (#E8F5E9)

**Uso: 10-15% do design**

- ✅ Badges de categoria
- ✅ Áreas de destaque suave
- ✅ Backgrounds informativos
- ✅ Seções sobre o produtor

**Exemplos:**

```
- Badge "Hortaliças", "Frutas", etc.
- Background da seção "Sobre" do produtor
- Áreas de informação com borda verde
```

---

### 🟡 Amarelo Cereais - Accent (#F5A623)

**Uso: 5-10% do design (usar com moderação)**

- ⚠️ Alertas importantes (não críticos)
- ⭐ Elementos de destaque especial
- 🏷️ Promoções ou novidades

**Quando usar:**

- Badges de "Novo produto"
- Descontos ou promoções
- Chamadas especiais (use raramente para manter impacto)

**Nota:** Atualmente não está sendo usado no design, reserve para futuras features especiais.

---

### ⚫ Preto/Cinza - Textos

**Uso: Todo texto do aplicativo**

#### Foreground (#2D2D2D - Preto suave)

- Textos principais
- Títulos
- Labels importantes

#### Muted Foreground (#757575 - Cinza médio)

- Textos secundários
- Informações complementares
- Ícones secundários
- Placeholders

---

### 🔴 Vermelho - Destructive (#DD)

**Uso: < 5% do design**

- ❌ Botões de excluir/cancelar
- ⚠️ Mensagens de erro
- 🚫 Alertas críticos

**Usar APENAS para ações destrutivas ou erros.**

---

### 📏 Bordas - Border (#E0E0E0)

**Uso: Separação visual**

- Bordas de cards
- Separadores de seções
- Contornos de inputs
- Divisórias sutis

---

## 📊 Proporção Ideal de Uso

```
🟢 Verde Primary:        ████████░░ 35%
⚪ Branco/Cinza:         █████████░ 45%
🌿 Verde Secondary:      ███░░░░░░░ 12%
⚫ Textos:               ██░░░░░░░░ 6%
🔴 Vermelho/Amarelo:     █░░░░░░░░░ 2%
```

---

## ✅ Regras de Ouro

### DO (Faça):

1. **Verde escuro (#2D7A3E)** para TODAS as ações principais
2. **Branco (#FFFFFF)** para cards e conteúdo
3. **Verde claro (#E8F5E9)** para informações suaves
4. **Cinza (#757575)** para textos secundários
5. Sempre use texto **branco sobre verde** e **preto sobre branco**

### DON'T (Não faça):

1. ❌ NÃO misture verde primary com amarelo accent na mesma área
2. ❌ NÃO use vermelho para ações positivas
3. ❌ NÃO use amarelo em excesso (perde o destaque)
4. ❌ NÃO use texto cinza claro em fundo cinza claro
5. ❌ NÃO crie gradientes complexos com mais de 2 cores

---

## 🎯 Uso por Componente

### Botões Principais

- Background: `bg-primary` (#2D7A3E)
- Texto: `text-primary-foreground` (branco)
- Hover/Active: adicionar sombra

### Botões Secundários

- Background: `bg-card` (branco)
- Borda: `border-2 border-primary`
- Texto: `text-primary`

### Cards de Produto

- Background: `bg-card` (branco)
- Borda: `border border-border` (#E0E0E0)
- Preço: `text-primary` (verde)

### Inputs

- Background: `bg-card` (branco)
- Borda normal: `border-2 border-border` (#E0E0E0)
- Borda focus: `border-primary` (#2D7A3E)

### Navegação Inferior

- Background: `bg-white`
- Item ativo: `bg-primary text-primary-foreground`
- Item inativo: `text-muted-foreground`

---

## 🌈 Paleta Completa (valores hexadecimais)

```css
Background:        #FAFAF8  (Cinza clarinho)
Foreground:        #2D2D2D  (Preto suave)
Card:              #FFFFFF  (Branco puro)
Primary:           #2D7A3E  (Verde agricultura) ⭐
Secondary:         #E8F5E9  (Verde clarinho)
Muted:             #F5F5F5  (Cinza bem claro)
Muted-foreground:  #757575  (Cinza médio)
Accent:            #F5A623  (Amarelo cereais) ⚠️ Usar com moderação
Destructive:       #d4183d  (Vermelho)
Border:            #E0E0E0  (Cinza borda)
```

---

## 💡 Dicas de Acessibilidade

1. **Contraste mínimo:** 4.5:1 para textos normais
2. **Verde escuro + Branco:** ✅ Excelente contraste
3. **Cinza médio + Branco:** ✅ Bom contraste
4. **Amarelo + Branco:** ⚠️ Evite, baixo contraste
5. Sempre teste com simuladores de daltonismo

---

**Resumo para Agricultores:**

- 🟢 Verde = "Avançar", "Confirmar", "Ação"
- ⚪ Branco = Conteúdo limpo e claro
- 🌿 Verde claro = Informação suave
- 🔴 Vermelho = "Cuidado", "Excluir"