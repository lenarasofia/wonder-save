# 

# **Modelo de Especificação e Desenvolvimento de Projeto de TI**

Abaixo está o texto estruturado do **Documento de Especificação de Projeto (DEP)** para uso imediato em documentações de projetos de software, jogos ou infraestrutura de TI:

# **Documento de Especificação de Projeto (DEP)**

**Projeto:** Wonder Save  
**Código / ID:** PRJ-2026-001  
**Autor / Tech Lead:  Lenara e Emilly**  
**Gerente de Projetos:** Vinícius   
**Data:** 12/08/2026 | **Versão:** v1.0 | **Status:** Em Aprovação

## **1\. Visão Geral e Objetivos do Projeto**

### **1.1. Contexto e Problema**

*Atualmente a violência contra as mulheres vem crescendo disparadamente nos últimos anos.*

### **1.2. Objetivos**

* **Objetivo Geral:** Desenvolver um site sobre como a violência contra a mulher afeta a sociedade.   
* **Objetivos Específicos:**  Mostrar os tipos de violência e como lidar com essas situações.  
  1. Reduzir em 25% o tempo de resposta do processo de criação do site.  
  2. Suportar 200 usuários concorrentes com estabilidade.

### **1.3. Escopo do Projeto**

| Dentro do Escopo (In Scope) | Fora do Escopo (Out of Scope) |
| :---- | :---- |
| • Módulo de Autenticação e Perfil de Usuário | • Vendas. |
| •Direitos das mulheres | • Não substituir serviços policiais ou de resgate imediato. |
|  O que fazer em casos de violência? | • Atendimento psicológico |
| Fazer uma página de como a violência afeta a sociedade |  |

## **2\. Requisitos do Sistema**

### **2.1. Requisitos Funcionais (RF)**

| ID | Funcionalidade | Descrição / Regra de Negócio | Prioridade |
| :---- | :---- | :---- | :---- |
| **RF-001** | Autenticação Segura | Login via e-mail/senha e OAuth2 com verificação em duas etapas (2FA). | **Alta** |
| **RF-002** | Gestão de Perfil | Atualização de dados cadastrais, avatar e preferências. | **Média** |
| **RF-003** | Processamento de Pedidos | Validação de estoque em tempo real antes de autorizar a transação. | **Alta** |
| **RF-004** | Exportação de Dados | Emissão de relatórios gerenciais nos formatos CSV e XLSX. | **Baixa** |

### **2.2. Requisitos Não-Funcionais (RNF)**

| ID | Categoria | Métrica / Critério de Aceite |
| :---- | :---- | :---- |
| **RNF-001** | Desempenho | A API deve responder em tempo inferior a 200ms para 95% das requisições. |
| **RNF-002** | Segurança | Criptografia TLS 1.3 em trânsito e armazenamento com algoritmo BCrypt/Argon2. Compliance LGPD. |
| **RNF-003** | Disponibilidade | Disponibilidade mínima de 99.9% (High Availability) com failover automático. |

## **3\. Arquitetura Técnica e Stack Tecnológica**

Plaintext  
\+-----------------------------------------------------------------------+  
|                         ARQUITETURA DE SOLUÇÃO                        |  
\+-----------------------------------------------------------------------+  
| \[Frontend Web\]     \-\> React.js / Next.js \+ Tailwind CSS               |  
| \[Backend API\]      \-\> Node.js (TypeScript) / Python (FastAPI)         |  
| \[Database Primary\] \-\> MySQL 8.4 (Relacional)                      |  
| \[Cache & Queue\]    \-\> Redis (Sessões e Filas Assíncronas)            |  
| \[Cloud / Infra\]    \-\> GitHub Pages / Local XAMPP, Laragon           |  
| \[CI/CD Pipeline\]   \-\> GitHub Actions / Docker Containerization        |  
\+-----------------------------------------------------------------------+

## **4\. Metodologia de Desenvolvimento (Kanban / Agile)**

O projeto utilizará fluxo contínuo com limites de trabalho em progresso (WIP Limits):

> 1. **Backlog:** Histórias mapeadas e priorizadas.  
> 2. **Ready for Dev:** Histórias refinadas com critérios de aceite definidos.  
> 3. **In Progress (WIP Max: 3):** Desenvolvimento ativo.  
> 4. **Code Review (WIP Max: 2):** Peer review obrigatório.  
> 5. **QA / Testes:** Validação de aceitação e testes automatizados.  
> 6. **Done:** Deploy em produção via pipeline de CI/CD.

## **5\. Matriz de Riscos**

| Risco Identificado | Impacto | Probabilidade | Plano de Mitigação |
| :---- | :---- | :---- | :---- |
| Atraso na API do fornecedor externo | Alto | Média | Criar servidores mock para desenvolvimento paralelo. |
| Gargalo de performance no banco de dados | Médio | Média | Implementar camada de cache com Redis e rotinas de indexação. |
| Vulnerabilidades em dependências | Alto | Baixa | Integrar Snyk / Dependabot no pipeline de CI/CD. |

## **6\. Aprovadores do Documento**

* **\[Nome do Tech Lead\]** — *Lenara e Emilly*  
* **\[Nome do Product Owner\]** — *Vinicíus Lima*