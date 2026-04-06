// Diagnósticos detalhados por área e nível (0-3)
const DIAGNOSTICOS = {
  "VENDAS": {
    0: {
      positivos: [
        "Existe um esforço comercial em andamento, mesmo que informal",
        "A empresa consegue fechar vendas e gerar receita"
      ],
      atencao: [
        "Ausência total de processo de vendas estruturado",
        "Não há registro de oportunidades e pipeline",
        "Vendas dependem 100% do fundador ou vendedor estrela",
        "Impossível prever receita dos próximos meses"
      ],
      acoes: [
        "Criar planilha básica de pipeline com 4-6 etapas claras",
        "Registrar 100% das oportunidades comerciais em andamento",
        "Definir meta mensal de vendas e acompanhar semanalmente",
        "Implementar reunião semanal de vendas de 30 minutos"
      ]
    },
    1: {
      positivos: [
        "Já existe um processo básico de vendas",
        "Algumas oportunidades são registradas",
        "Vendedor conhece o funil de vendas"
      ],
      atencao: [
        "Processo de vendas não é seguido por todos",
        "Registros incompletos e informações dispersas",
        "Falta previsibilidade na geração de receita",
        "Dependência ainda alta de pessoas específicas"
      ],
      acoes: [
        "Padronizar etapas do funil (lead → oportunidade → proposta → negociação → fechamento)",
        "Obrigar registro de 100% das oportunidades no CRM ou planilha",
        "Criar script de qualificação (BANT: Budget, Authority, Need, Timing)",
        "Treinar toda equipe no processo comercial padrão"
      ]
    },
    2: {
      positivos: [
        "Processo de vendas documentado e seguido",
        "Pipeline é atualizado regularmente",
        "Métricas comerciais são acompanhadas",
        "Previsibilidade de receita em 30-60 dias"
      ],
      atencao: [
        "Falta otimização contínua do processo",
        "Taxa de conversão pode melhorar",
        "Ciclo de vendas ainda não está otimizado"
      ],
      acoes: [
        "Implementar análise semanal de taxa de conversão por etapa",
        "Criar playbook de vendas com melhores práticas",
        "Estabelecer metas individuais e coletivas claras",
        "Iniciar testes A/B em abordagens comerciais"
      ]
    },
    3: {
      positivos: [
        "Processo comercial altamente otimizado",
        "Métricas avançadas (CAC, LTV, taxa de conversão por etapa)",
        "Previsibilidade de receita trimestral",
        "Equipe comercial bem treinada e autônoma",
        "Cultura de melhoria contínua implementada"
      ],
      atencao: [
        "Manter o nível de excelência conquistado",
        "Não acomodar com os resultados atuais"
      ],
      acoes: [
        "Implementar sales enablement avançado",
        "Criar programa de mentoria interna",
        "Expandir para novos segmentos ou regiões",
        "Desenvolver inteligência comercial (BI) em tempo real"
      ]
    }
  },

  "MARKETING": {
    0: {
      positivos: [
        "A empresa já possui algum reconhecimento no mercado",
        "Vendas ocorrem através de indicações"
      ],
      atencao: [
        "Ausência total de estratégia de marketing",
        "Não há geração ativa de leads",
        "Marca desconhecida fora do círculo próximo",
        "Crescimento limitado à rede de contatos"
      ],
      acoes: [
        "Definir ICP (Ideal Customer Profile) em 1 página",
        "Criar proposta de valor clara e diferenciada",
        "Escolher 1 canal principal (LinkedIn, Google Ads ou indicações estruturadas)",
        "Estabelecer presença básica digital (site, redes sociais)"
      ]
    },
    1: {
      positivos: [
        "Presença digital básica estabelecida",
        "Alguma tentativa de gerar leads",
        "Materiais de comunicação existem"
      ],
      atencao: [
        "Ações de marketing desorganizadas e pontuais",
        "Falta consistência na comunicação",
        "ROI de marketing desconhecido",
        "Geração de leads irregular"
      ],
      acoes: [
        "Criar calendário de conteúdo de 90 dias",
        "Definir meta mensal de leads qualificados",
        "Implementar tracking básico (Google Analytics, pixels)",
        "Estabelecer frequência mínima de publicações"
      ]
    },
    2: {
      positivos: [
        "Estratégia de marketing documentada",
        "Geração regular de leads qualificados",
        "ROI de marketing é medido",
        "Presença digital consolidada"
      ],
      atencao: [
        "Falta otimização avançada de campanhas",
        "Branding pode ser fortalecido",
        "Automação de marketing ainda limitada"
      ],
      acoes: [
        "Implementar CRM marketing (automação)",
        "Criar funil de nutrição de leads",
        "Desenvolver conteúdo rico (ebooks, webinars)",
        "Otimizar SEO e estratégia de conteúdo"
      ]
    },
    3: {
      positivos: [
        "Marketing opera como máquina de geração de demanda",
        "Múltiplos canais funcionando em sinergia",
        "Marca forte e reconhecida no mercado",
        "ROI detalhado por canal e campanha",
        "Automação avançada implementada"
      ],
      atencao: [
        "Manter inovação constante",
        "Não perder proximidade com o cliente"
      ],
      acoes: [
        "Expandir para novos canais e formatos",
        "Implementar marketing baseado em dados (AI)",
        "Criar programa de advocacy com clientes",
        "Desenvolver thought leadership no setor"
      ]
    }
  },

  "COMPRAS": {
    0: {
      positivos: [
        "A empresa consegue adquirir o necessário para operar",
        "Relacionamento informal com alguns fornecedores"
      ],
      atencao: [
        "Compras 100% reativas e emergenciais",
        "Desconhecimento de custos reais",
        "Falta de negociação estruturada",
        "Ruptura frequente de estoque"
      ],
      acoes: [
        "Mapear 20 principais itens comprados mensalmente",
        "Cadastrar mínimo 2 fornecedores por item crítico",
        "Implementar planilha de controle de estoque mínimo",
        "Definir responsável por compras (mesmo que parcial)"
      ]
    },
    1: {
      positivos: [
        "Controle básico de estoque existe",
        "Principais fornecedores cadastrados",
        "Algumas compras planejadas"
      ],
      atencao: [
        "Processo de compras ainda informal",
        "Falta aprovação estruturada",
        "Negociação limitada",
        "Estoque mal dimensionado"
      ],
      acoes: [
        "Criar política de alçadas de aprovação",
        "Implementar ponto de pedido para itens críticos",
        "Negociar contratos com top 5 fornecedores",
        "Estabelecer processo de cotação (mínimo 3 fornecedores)"
      ]
    },
    2: {
      positivos: [
        "Processo de compras documentado e seguido",
        "Estoque controlado e otimizado",
        "Contratos negociados com fornecedores",
        "Custo de compras conhecido e controlado"
      ],
      atencao: [
        "Falta gestão estratégica de fornecedores",
        "Oportunidades de redução de custos não exploradas",
        "Previsão de demanda pode melhorar"
      ],
      acoes: [
        "Implementar gestão de categorias (category management)",
        "Criar scorecard de fornecedores",
        "Desenvolver previsão de demanda integrada",
        "Buscar parcerias estratégicas com fornecedores-chave"
      ]
    },
    3: {
      positivos: [
        "Gestão de compras e supply chain de excelência",
        "Parcerias estratégicas consolidadas",
        "Estoque otimizado (giro ideal)",
        "Previsibilidade de custos e demanda",
        "Sistema integrado (ERP) funcionando"
      ],
      atencao: [
        "Manter relacionamento próximo com fornecedores",
        "Não acomodar com redução de custos"
      ],
      acoes: [
        "Implementar compras colaborativas",
        "Desenvolver fornecedores (desenvolvimento de parceiros)",
        "Utilizar analytics para otimização contínua",
        "Explorar inovação em supply chain (blockchain, IoT)"
      ]
    }
  },

  "OPERAÇÕES": {
    0: {
      positivos: [
        "A empresa consegue entregar produtos/serviços",
        "Conhecimento operacional existe (na cabeça das pessoas)"
      ],
      atencao: [
        "Zero documentação de processos",
        "Retrabalho constante e alta variação na qualidade",
        "Dependência total de pessoas específicas",
        "Impossível escalar operação"
      ],
      acoes: [
        "Escolher 1 processo crítico para documentar primeiro",
        "Criar checklist simples (passo a passo)",
        "Implementar reunião diária de 10 minutos (stand-up)",
        "Começar a medir retrabalho e defeitos por 30 dias"
      ]
    },
    1: {
      positivos: [
        "Alguns processos documentados",
        "Checklists existem para atividades principais",
        "Equipe segue processos básicos"
      ],
      atencao: [
        "Documentação incompleta e desatualizada",
        "Processos não são padronizados",
        "Falta medição sistemática de qualidade",
        "Melhorias não são implementadas"
      ],
      acoes: [
        "Documentar top 5 processos críticos",
        "Criar indicadores operacionais (KPIs): prazo, qualidade, custo",
        "Implementar gestão visual (quadros, dashboards)",
        "Treinar equipe em processos padrão"
      ]
    },
    2: {
      positivos: [
        "Processos documentados e padronizados",
        "KPIs operacionais medidos regularmente",
        "Equipe treinada e seguindo padrões",
        "Qualidade controlada e retrabalho baixo"
      ],
      atencao: [
        "Falta cultura de melhoria contínua",
        "Processos ainda podem ser otimizados",
        "Automação limitada"
      ],
      acoes: [
        "Implementar programa de melhoria contínua (Kaizen)",
        "Automatizar processos manuais repetitivos",
        "Criar sistema de sugestões da equipe",
        "Desenvolver programa de treinamento contínuo"
      ]
    },
    3: {
      positivos: [
        "Excelência operacional consolidada",
        "Processos otimizados e automatizados",
        "Cultura Kaizen implementada",
        "Zero defeito e tempo de ciclo mínimo",
        "Equipe altamente capacitada e autônoma"
      ],
      atencao: [
        "Manter foco na melhoria contínua",
        "Não criar burocracia excessiva"
      ],
      acoes: [
        "Implementar Lean Six Sigma avançado",
        "Desenvolver centros de excelência operacional",
        "Buscar certificações de qualidade (ISO, etc)",
        "Compartilhar melhores práticas com o mercado"
      ]
    }
  },

  "RH": {
    0: {
      positivos: [
        "Empresa consegue contratar quando necessário",
        "Pessoas trabalham e entregam resultados"
      ],
      atencao: [
        "Gestão de pessoas inexistente",
        "Contratações por urgência, sem critério",
        "Turnover alto e desconhecido",
        "Clima organizacional ruim",
        "Ausência de onboarding e treinamento"
      ],
      acoes: [
        "Definir 1 responsável por gestão de pessoas",
        "Documentar descrição dos 5 principais cargos",
        "Começar a medir turnover e absenteísmo",
        "Criar processo básico de admissão (onboarding de 1 semana)"
      ]
    },
    1: {
      positivos: [
        "Responsável por RH definido",
        "Processos básicos de admissão e demissão",
        "Descrições de cargo existem"
      ],
      atencao: [
        "Processos de RH ainda informais",
        "Falta desenvolvimento de pessoas",
        "Avaliação de desempenho inexistente",
        "Retenção de talentos baixa"
      ],
      acoes: [
        "Implementar processo estruturado de recrutamento e seleção",
        "Criar programa de onboarding de 30 dias",
        "Estabelecer reuniões 1:1 mensais",
        "Definir plano de carreira básico para funções-chave"
      ]
    },
    2: {
      positivos: [
        "Processos de RH estruturados e documentados",
        "Avaliação de desempenho regular",
        "Programa de treinamento estabelecido",
        "Turnover controlado e baixo",
        "Clima organizacional positivo"
      ],
      atencao: [
        "Falta gestão estratégica de talentos",
        "Sucessão não planejada",
        "Cultura organizacional pode ser mais forte"
      ],
      acoes: [
        "Implementar gestão de talentos (9-box)",
        "Criar plano de sucessão para posições críticas",
        "Desenvolver programa de liderança",
        "Fortalecer cultura e valores organizacionais"
      ]
    },
    3: {
      positivos: [
        "RH estratégico e business partner",
        "Gestão de talentos de excelência",
        "Cultura forte e engajamento alto",
        "Plano de sucessão robusto",
        "Employer branding consolidado"
      ],
      atencao: [
        "Manter inovação em práticas de RH",
        "Não perder humanização dos processos"
      ],
      acoes: [
        "Implementar people analytics avançado",
        "Criar programas de diversidade e inclusão",
        "Desenvolver universidade corporativa",
        "Tornar-se referência em gestão de pessoas no setor"
      ]
    }
  },

  "FINANCEIRO": {
    0: {
      positivos: [
        "Empresa está operando e gerando receita",
        "Contas básicas são pagas"
      ],
      atencao: [
        "Finanças completamente misturadas (PF e PJ)",
        "Desconhecimento de lucratividade real",
        "Ausência de controle de fluxo de caixa",
        "Decisões financeiras no 'feeling'",
        "Risco alto de insolvência"
      ],
      acoes: [
        "Abrir conta PJ separada IMEDIATAMENTE",
        "Definir pró-labore fixo mensal",
        "Criar planilha de fluxo de caixa semanal",
        "Calcular custo real de top 3 produtos/serviços"
      ]
    },
    1: {
      positivos: [
        "Contas PF e PJ separadas",
        "Controle básico de entrada e saída",
        "Pró-labore definido"
      ],
      atencao: [
        "Controles financeiros ainda básicos",
        "Falta DRE e Balanço",
        "Precificação sem base em custos reais",
        "Inadimplência mal controlada"
      ],
      acoes: [
        "Implementar DRE mensal (receita - custos - despesas)",
        "Criar controle rigoroso de contas a pagar e receber",
        "Revisar precificação baseada em margem de contribuição",
        "Estabelecer política de crédito e cobrança"
      ]
    },
    2: {
      positivos: [
        "DRE e fluxo de caixa mensais",
        "Precificação baseada em custos",
        "Inadimplência controlada",
        "Gestão financeira profissional",
        "Reserva de emergência constituída"
      ],
      atencao: [
        "Falta planejamento financeiro de longo prazo",
        "Gestão tributária pode ser otimizada",
        "Métricas financeiras avançadas ausentes"
      ],
      acoes: [
        "Implementar budget anual e forecast trimestral",
        "Otimizar carga tributária (planejamento fiscal)",
        "Desenvolver análise de viabilidade de projetos (ROI, payback)",
        "Criar dashboard financeiro gerencial"
      ]
    },
    3: {
      positivos: [
        "Gestão financeira de excelência",
        "Planejamento estratégico financeiro robusto",
        "Métricas avançadas (EBITDA, ROIC, FCL)",
        "Estrutura de capital otimizada",
        "Valuation da empresa conhecido"
      ],
      atencao: [
        "Manter disciplina financeira",
        "Não criar complexidade excessiva"
      ],
      acoes: [
        "Implementar FP&A avançado",
        "Desenvolver modelagem financeira para cenários",
        "Preparar empresa para captação de investimento",
        "Criar programa de educação financeira para líderes"
      ]
    }
  }
};
