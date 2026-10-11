# Estér Coelho Advocacia — site

Site institucional e landing pages da Estér Coelho Advocacia (Direito Médico e da Saúde).
HTML, CSS e JavaScript puro, sem build. Basta copiar os arquivos para o servidor.

## Páginas

| Caminho | Público |
|---|---|
| `/` | Institucional |
| `/plano-de-saude-negou/` | Pacientes: negativa de cirurgia, exame ou medicamento |
| `/terapias-tea-plano-de-saude/` | Famílias: terapias para autismo (TEA) |
| `/reajuste-plano-de-saude/` | Pacientes: reajuste abusivo |
| `/defesa-medica/` | Médicos e dentistas: CRM/CRO e erro médico |
| `/equiparacao-hospitalar/` | Clínicas: redução de IRPJ/CSLL |
| `/politica-de-privacidade.html` | LGPD |

Estilos compartilhados em `assets/css/style.css` e scripts em `assets/js/main.js`.
Cada botão de WhatsApp envia um evento `whatsapp_click` para o `dataLayer` (com `data-cta` identificando o botão), pronto para GTM/GA4.

## Antes de publicar no domínio definitivo

- Trocar `OAB/SC 123` pelo número real da OAB.
- Trocar `https://estercoelho.akaistudio.com.br` pelo domínio final (canonical, og:image, sitemap.xml e robots.txt).

## Deploy (VPS)

Arquivos em `/var/www/estercoelho`, servidos pelo Nginx.
