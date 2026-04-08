/**
 * GCR - Google Apps Script para receber dados do HTML
 *
 * INSTALAÇÃO:
 * 1. Crie uma planilha no Google Sheets: "GCR Diagnóstico Integrado"
 * 2. Abra a planilha → Extensions → Apps Script
 * 3. Cole este código
 * 4. Clique em "Deploy" → "New deployment"
 * 5. Tipo: "Web app"
 * 6. Execute como: "Me"
 * 7. Acesso: "Anyone" (qualquer pessoa)
 * 8. Deploy → Copie a URL
 * 9. Cole a URL no arquivo HTML (variável SCRIPT_URL)
 */

function doPost(e) {
  try {
    // Pegar dados do POST
    const dados = JSON.parse(e.postData.contents);

    // Se for ação de próximo passo
    if (dados.acao === 'proximoPasso') {
      return salvarProximoPasso(dados);
    }

    // Abrir a planilha (use o nome da sua planilha)
    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    let aba = planilha.getSheetByName('Respostas');

    // Se a aba não existir, criar
    if (!aba) {
      aba = planilha.insertSheet('Respostas');

      // Criar cabeçalhos
      aba.getRange('A1:M1').setValues([[
        'Data/Hora',
        'Nome',
        'Empresa',
        'E-mail',
        'WhatsApp',
        'Vendas',
        'Marketing',
        'Compras',
        'Operações',
        'RH/Pessoas',
        'Financeiro',
        'Média',
        'Status'
      ]]);

      // Formatar cabeçalhos
      aba.getRange('A1:M1').setFontWeight('bold')
        .setBackground('#05091A')
        .setFontColor('#FFFFFF');

      aba.setFrozenRows(1);
      aba.autoResizeColumns(1, 13);
    }

    // Preparar dados para inserir
    const timestamp = new Date(dados.timestamp);
    const vendas = dados.vendas;
    const marketing = dados.marketing;
    const compras = dados.compras;
    const operacoes = dados.operacoes;
    const rh = dados.rh;
    const financeiro = dados.financeiro;
    const media = ((vendas + marketing + compras + operacoes + rh + financeiro) / 6).toFixed(2);

    // Definir status baseado na média
    let status = '';
    if (media < 1.0) status = 'INICIAL';
    else if (media < 2.0) status = 'DESENVOLVIMENTO';
    else if (media < 2.5) status = 'INTERMEDIÁRIO';
    else status = 'AVANÇADO';

    // Inserir nova linha
    aba.appendRow([
      timestamp,
      dados.nome,
      dados.empresa,
      dados.email,
      dados.whatsapp,
      vendas,
      marketing,
      compras,
      operacoes,
      rh,
      financeiro,
      media,
      status
    ]);

    // Criar ou atualizar aba de médias
    criarAbaDeMedias(planilha);

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Dados salvos com sucesso!'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (erro) {
    Logger.log('Erro: ' + erro.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: erro.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function salvarProximoPasso(dados) {
  try {
    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    let aba = planilha.getSheetByName('Intenção de Compra');

    // Se a aba não existir, criar
    if (!aba) {
      aba = planilha.insertSheet('Intenção de Compra');

      // Criar cabeçalhos
      aba.getRange('A1:F1').setValues([[
        'Data/Hora',
        'Nome',
        'Empresa',
        'E-mail',
        'Próximo Passo',
        'Status Lead'
      ]]);

      // Formatar cabeçalhos
      aba.getRange('A1:F1').setFontWeight('bold')
        .setBackground('#05091A')
        .setFontColor('#FFFFFF');

      aba.setFrozenRows(1);
      aba.autoResizeColumns(1, 6);
    }

    // Preparar dados
    const timestamp = new Date(dados.timestamp);
    const proximoPasso = dados.proximoPasso;

    // Definir status do lead
    let statusLead = '';
    if (proximoPasso === 'Contratar consultoria especializada') {
      statusLead = '🔥 QUENTE';
    } else if (proximoPasso === 'Buscar orientação para implementar sozinho') {
      statusLead = '🟡 MORNO';
    } else if (proximoPasso === 'Vou continuar como está') {
      statusLead = '❄️ FRIO';
    }

    // Inserir nova linha
    aba.appendRow([
      timestamp,
      dados.nome,
      dados.empresa,
      dados.email,
      proximoPasso,
      statusLead
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Próximo passo salvo com sucesso!'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (erro) {
    Logger.log('Erro ao salvar próximo passo: ' + erro.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: erro.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function criarAbaDeMedias(planilha) {
  let abaMedias = planilha.getSheetByName('Médias do Grupo');

  if (!abaMedias) {
    abaMedias = planilha.insertSheet('Médias do Grupo');
  } else {
    abaMedias.clear();
  }

  // Cabeçalhos
  abaMedias.getRange('A1').setValue('Área');
  abaMedias.getRange('B1').setValue('Média');
  abaMedias.getRange('A1:B1').setFontWeight('bold')
    .setBackground('#05091A')
    .setFontColor('#FFFFFF');

  const areas = ['VENDAS', 'MARKETING', 'COMPRAS', 'OPERAÇÕES', 'RH / PESSOAS', 'FINANCEIRO'];
  const colunas = ['F', 'G', 'H', 'I', 'J', 'K']; // Colunas dos valores na aba Respostas (F=Vendas, G=Marketing, etc.)

  for (let i = 0; i < areas.length; i++) {
    const linha = i + 2;
    abaMedias.getRange('A' + linha).setValue(areas[i]);

    // Fórmula para calcular média
    const formula = '=IFERROR(AVERAGE(Respostas!' + colunas[i] + '2:' + colunas[i] + '999), 0)';
    abaMedias.getRange('B' + linha).setValue(formula);
  }

  // Formatar
  abaMedias.getRange('B2:B7').setNumberFormat('0.00');
  abaMedias.autoResizeColumns(1, 2);
}

/**
 * Função para criar gráfico radar
 * Execute depois de ter pelo menos 1 resposta
 */
function criarGraficoRadar() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  const aba = planilha.getSheetByName('Médias do Grupo');

  if (!aba) {
    Logger.log('Erro: Aba "Médias do Grupo" não encontrada');
    return;
  }

  // Remover gráfico antigo se existir
  const graficos = aba.getCharts();
  graficos.forEach(g => aba.removeChart(g));

  // Criar novo gráfico radar
  const chart = aba.newChart()
    .setChartType(Charts.ChartType.RADAR)
    .addRange(aba.getRange('A2:B7'))
    .setPosition(4, 4, 0, 0)
    .setOption('title', 'Diagnóstico de Maturidade - Média do Grupo')
    .setOption('legend', {position: 'none'})
    .setOption('vAxis', {minValue: 0, maxValue: 3})
    .setOption('width', 500)
    .setOption('height', 400)
    .build();

  aba.insertChart(chart);

  Logger.log('Gráfico radar criado com sucesso!');
}

// Função de teste (opcional)
function testar() {
  const dadosTeste = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        nome: 'João Teste',
        empresa: 'Empresa Teste Ltda',
        email: 'joao@teste.com',
        whatsapp: '(11) 99999-9999',
        vendas: 2,
        marketing: 1,
        compras: 1,
        operacoes: 2,
        rh: 1,
        financeiro: 2
      })
    }
  };

  doPost(dadosTeste);
  Logger.log('Teste concluído! Verifique a planilha.');
}
