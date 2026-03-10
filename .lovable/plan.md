

## Arquivos necessários para recriar a página de Câmeras

Para recriar a página de câmeras exatamente igual, você precisa enviar **7 arquivos principais**:

### Arquivos da página e componentes

| # | Arquivo | Função |
|---|---------|--------|
| 1 | `src/pages/Cameras.tsx` | Página principal com SEO, structured data e layout |
| 2 | `src/components/cameras/CameraHero.tsx` | Hero/banner principal |
| 3 | `src/components/cameras/CameraBenefits.tsx` | Seção de benefícios e indicadores de confiança |
| 4 | `src/components/cameras/CameraAuthority.tsx` | Barra de prova social (1.500+ imóveis) |
| 5 | `src/components/cameras/CameraProcess.tsx` | Seção "Como Funciona" em 4 passos |
| 6 | `src/components/cameras/CameraLeadForm.tsx` | Formulário de captação de leads (WhatsApp) |
| 7 | `src/components/cameras/CameraFinalCTA.tsx` | CTA final com garantias |

### Arquivos compartilhados (já devem existir no projeto destino)

Estes arquivos são usados pela página mas são compartilhados com outras páginas, então o projeto destino provavelmente já os tem:

- `src/components/Navbar.tsx` — Menu de navegação
- `src/components/Footer.tsx` — Rodapé
- `src/components/WhatsAppButton.tsx` — Botão flutuante do WhatsApp
- `src/components/LoadingSkeletons.tsx` — Skeletons de loading
- `src/components/OptimizedImage.tsx` — Componente de imagem otimizada
- `src/index.css` — Estilos globais (gradients, glass effects, utilities)
- `src/assets/banker-logo.png` e `src/assets/camera-cctv-hero.jpg` — Imagens

### Arquivos adicionais da página (não contados nos 7)

- `src/components/cameras/CameraSegments.tsx` — Segmentos residencial/comercial
- `src/components/cameras/CameraTestimonials.tsx` — Depoimentos de clientes
- `src/components/cameras/CameraFAQ.tsx` — Perguntas frequentes

### Rota necessária

No `App.tsx` do projeto destino, adicionar:
```
<Route path="/cameras" element={<Cameras />} />
```

### Resumo

Se precisar priorizar apenas **7 arquivos**, envie os da primeira tabela. Os componentes `CameraSegments`, `CameraTestimonials` e `CameraFAQ` podem ser recriados depois com base no padrão dos demais.

