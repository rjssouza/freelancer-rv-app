const { bootstrapDatabase } = require('../init');

const RESULT = 'OK';

const body = undefined;
const response = undefined;
const headers = {
  'X-Cluster-Client-Ip': ['94.60.180.79'],
  'User-Agent': ['PostmanRuntime/7.32.1'],
  'Cache-Control': ['no-cache'],
  'X-Request-Id': ['7b4e076c-873e-4f27-8944-a056839bc168'],
  'X-Forwarded-For': ['94.60.180.79'],
  'X-Envoy-External-Address': ['94.60.180.79'],
  'Postman-Token': ['d3ca11ed-005d-41cb-a847-c1f6458ab293'],
  'Accept-Encoding': ['gzip, deflate, br'],
  'X-Forwarded-Client-Cert': [
    'By=spiffe://xgen-prod/ns/baas-prod/sa/baas-main;Hash=c68c5aa61293af7317ce95a81111deb355d7f6acdfabeb775e95a468d14f947a;Subject=',
  ],
  Traceparent: ['00-c51f47649c6be2b995c9e2e81de36bd1-ec38dafa432fc9b5-00'],
  Accept: ['*/*'],
  'X-Forwarded-Proto': ['https'],
};
let query = {
  to: '2023-09-30',
  from: '2023-01-01',
  qt: 1,
  ic: 'PT9905172299925636EX',
  st: 'surplus',
  ut: 'electricity',
};

const fnDescription = (action) => {
  it('Teste geração de novos dados', async () => {
    query = {
      to: '2023-09-30',
      from: '2023-01-01',
      qt: 1,
      ic: 'PT9905172299925636EX',
      st: 'surplus',
      ut: 'electricity',
    };

    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveReturned();
    expect(result.OK).toEqual(RESULT);
  });

  it('Todos os dias valor positivo', async () => {
    query = {
      to: '2023-09-30',
      from: '2023-01-01',
      qt: 1,
      ic: 'PT9905173429066620EX',
      st: 'surplus',
      ut: 'electricity',
      operationSelection: 'positivo',
    };

    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveReturned();
    expect(result.OK).toEqual(RESULT);
  });

  it('Todos os dias com valor a 0', async () => {
    query = {
      to: '2023-09-30',
      from: '2023-01-01',
      qt: 1,
      ic: 'PT9905142913760673EX',
      st: 'surplus',
      ut: 'electricity',
      operationSelection: 'zero',
    };

    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveReturned();
    expect(result.OK).toEqual(RESULT);
  });

  it('Alguns dias (entre 2 a 3 dias) com valor a 0 e os restantes com valores maiores que 0', async () => {
    query = {
      to: '2023-09-30',
      from: '2023-01-01',
      qt: 1,
      ic: 'PT9905174351177624EX',
      st: 'surplus',
      ut: 'electricity',
      operationSelection: 'random-zero',
    };

    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveReturned();
    expect(result.OK).toEqual(RESULT);
  });

  it('Alguns dias (entre 2 a 3 dias) com valor negativo e os restantes com valores positivos', async () => {
    query = {
      to: '2023-09-30',
      from: '2023-01-01',
      qt: 1,
      ic: 'PT9905167805990285EX',
      st: 'surplus',
      ut: 'electricity',
      operationSelection: 'random-negativo',
    };

    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveReturned();
    expect(result.OK).toEqual(RESULT);
  });

  it('Todos os dias com valor negativo', async () => {
    query = {
      to: '2023-09-30',
      from: '2023-01-01',
      qt: 1,
      ic: 'PT9905171107350102EX',
      st: 'surplus',
      ut: 'electricity',
      operationSelection: 'negativo',
    };

    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveReturned();
    expect(result.OK).toEqual(RESULT);
  });

  it('Um dia sem quantidade', async () => {
    query = {
      to: '2023-09-30',
      from: '2023-01-01',
      qt: 1,
      ic: 'PT9905172142859623EX',
      st: 'surplus',
      ut: 'electricity',
      operationSelection: 'random-vazio',
    };

    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveReturned();
    expect(result.OK).toEqual(RESULT);
  });

  it('Alterar valores de quantidades (todos positivos)', async () => {
    query = {
      to: '2023-09-30',
      from: '2023-01-01',
      qt: 1,
      ic: 'PT9905172299925636EX',
      st: 'surplus',
      ut: 'electricity',
      operationSelection: 'positivo',
    };

    const handler = jest.fn(action);
    const result = await handler({ query, headers, body }, response);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveReturned();
    expect(result.OK).toEqual(RESULT);
  });
};

// npm test -- ./test/unit/Http_Create_Measure_Dummy.test.js
bootstrapDatabase(
  'Http_Create_Measure_Dummy',
  fnDescription,
  { query, headers, body },
  response,
);
