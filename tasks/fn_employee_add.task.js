const _ = require('lodash');
const { main } = require('../init');
const fnEmployeeSave = require('../functions/fn_employee_save');

main(async () => {
  const colaborador = {
    nomeCompleto: 'Robson Jesus de Souza',
    dataNascimento: new Date('1992-06-08'),
    documento: {
      nif: 314842535,
      niss: 12167098952,
      tituloResidencia: 'Q622R7565',
      passaporte: 'GE997137'
    },
    endereco: {
      distrito: 'Aveiro',
      concelho: 'Aveiro',
      freguesia: 'Glória e Vera Cruz',
      rua: 'Rua Zé Augusto',
      numero: 7,
      complemento: '1.7 A',
      codigoPostal: '3800-111'
    },
    residenteNaoHabitual: {
      dataEmissao: new Date(),
      numeroPedido: 'IRNH000086480',
    },
    contrato: {
      dataInicio: new Date(),
      valorHora: 180,
      posicao: 'Desenvolvedor Senior'
    },
    contato: {
      emailPessoal: 'robsonjesus908@gmail.com',
      emailInterno: 'robson.souza.ext@apside.com',
      telefone: '+351910355998'
    }
  };

  await fnEmployeeSave({
    query: null, headers: null, body: {
      text: () => JSON.stringify(colaborador)
    }
  }, null);
});
