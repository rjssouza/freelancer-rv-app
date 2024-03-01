const _ = require('lodash');
const { main, getDatabase } = require('../init');

const fs = require('fs');

// relative path to the file
const filePath = '../CertidaoResidenteNaoHabitual.pdf';

// reusable arrow function to encode file data to base64 encoded string
const convertBase64 = (path) => {
  // read binary data from file
  const bitmap = fs.readFileSync(path);
  // convert the binary data to base64 encoded string
  return bitmap.toString('base64');
};

main(async () => {
  const certidao = convertBase64(filePath);
  const dbColaboradores = await getDatabase('colaboradores');
  const colaborador = {
    nomeCompleto: 'Robson Jesus de Souza',
    dataNascimento: new Date(),
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
      certidao: certidao
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

  await dbColaboradores.findOneAndUpdate(
    { nomeCompleto: "Robson Jesus de Souza" },
    { $set: colaborador },
    { upsert: true, returnDocument: 'after', returnNewDocument: true }
  );
});
