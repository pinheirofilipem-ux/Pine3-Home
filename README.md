# Pine3 Home

Uma app para o Home Assistant com vários painéis para a casa, e uma página leve para os ecrãs de parede.

*One Home Assistant app with several dashboards for the house, and a light page for wall screens. English below.*

## O que faz

- **Painel no Home Assistant** (barra lateral, *Pine3 Home*): é o próprio painel, no estilo escolhido. O ⚙ abre as definições em ecrã inteiro, como no Pine3 View:
  - **Aparência**, com pré-visualização ao vivo: estilo, tema e dock;
  - **Face ambiente**;
  - **Casa**: avisos do IPMA;
  - **Ecrãs e painéis**: emparelhar, escolher o painel de cada ecrã, criar e renomear painéis;
  - **Sistema**.
- **Página para ecrãs** em `http://<home-assistant>:8123/pine3/ecra`: não carrega o frontend do Home Assistant, por isso é rápida em tablets modestos como o Samsung Galaxy Tab A7.
- **Emparelhar sem palavra-passe**:
  1. O ecrã mostra um código de 6 algarismos e um QR.
  2. Um administrador escreve o código em ⚙ → Ecrãs e painéis, ou lê o QR com o telemóvel.
  3. O ecrã recebe um token próprio, de um utilizador sem permissões de administrador que só funciona na rede local (*Pine3 Home · Ecrãs*).
  4. Remover o ecrã revoga o token.

## Instalar

1. HACS → Integrações → ⋮ → Repositórios personalizados → `https://github.com/pinheirofilipem-ux/Pine3-Home` (Integração).
2. Instala **Pine3 Home** e reinicia o Home Assistant.
3. Definições → Dispositivos e serviços → Adicionar integração → **Pine3 Home**.
4. No tablet, abre `/pine3/ecra` (por exemplo no Pine3 Wallpanel) e emparelha.

## Estado

| Fase | O quê |
|---|---|
| 0 | Integração, emparelhamento, gestão de ecrãs e painéis, página do ecrã |
| 1 | Estilo **Vidro** (inspirado no GlassHome), widgets com arte viva, dock à esquerda ou em baixo, temas |
| 2 | Vistas Clima, Segurança e Cenas, gráficos de 24 h nos sensores, avisos do IPMA |
| 3 | Edição da grelha no ecrã: ordem, tamanhos, esconder e adicionar |
| 4 | Face ambiente e ponte com o Pine3 Wallpanel (movimento, ecrã, brilho) |
| 5 | Estilo **Bento**: blocos de cor, pílulas no topo, vista Divisões |
| 6 | Estilo **Moldura**: a casa como uma imagem, deslizar entre vistas, painel claro por cima |
| 7 | Estilo **Editorial**: página de revista, índice em palavras, a casa numa frase |
| 8 | Estilo **Instrumento**: consola com teclas, roda do clima, faders e interruptores |
| 9+ | Os restantes estilos: Órbita, Carteira, Lente |

## Desenvolvimento

O frontend (TypeScript + Lit + Vite) está em `frontend/` e compila para `custom_components/pine3_home/frontend/`. O resultado da compilação também vai no repositório, porque o HACS instala a pasta tal como está.

```bash
cd frontend && npm ci && npm run build
```

Testes do Python:

```bash
pip install -r requirements_test.txt && pytest
```

---

## English

Pine3 Home adds a **Pine3 Home** panel to the sidebar. Use it to pair wall screens, assign each one a dashboard, and manage dashboards: style, and a dock on the left or at the bottom.

Wall screens open `/pine3/ecra`, a light page that doesn't load Home Assistant's frontend. Pairing works like this:

1. The screen shows a 6-digit code and a QR.
2. An admin enters the code in the panel.
3. The screen receives its own long-lived token, belonging to a non-admin, local-only user.
4. Removing the screen revokes the token.

Install through HACS as a custom repository (category: Integration), restart, then add the **Pine3 Home** integration.
