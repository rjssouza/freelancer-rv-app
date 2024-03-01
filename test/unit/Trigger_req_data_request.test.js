const { bootstrapDatabase, functionMocks, getDatabase } = require('../init');

const REQ_DATA_REQUESTS = 'req_data_requests_legacy';

const dataRequest = {
  _id: {
    _data:
      '8265006067000000012B022C0100296E5A10045EB498A951764075AE4EDC3531151F4546645F6964006465006067EF23957FE27FAA300004',
  },
  operationType: 'insert',
  clusterTime: {
    $timestamp: {
      t: 1694523495,
      i: 1,
    },
  },
  wallTime: '2023-09-12T12:58:15.514Z',
  fullDocument: {},
  ns: {
    db: 'mdm-dev',
    coll: REQ_DATA_REQUESTS,
  },
  documentKey: {
    _id: '65006067ef23957fe27faa30',
  },
};

async function getDataRequest() {
  const coll = await getDatabase(REQ_DATA_REQUESTS);
  const result = coll.findOne();

  return result;
}

async function registerDataRequests() {
  const coll = await getDatabase(REQ_DATA_REQUESTS);
  await coll.insertOne({
    topic: 'billing_request',
    content: {
      status: 'success',
      _id: '65006067c9de4d65f03a425e',
    },
  });
}

beforeAll(async () => {
  await registerDataRequests();
  dataRequest.fullDocument = await getDataRequest();
});

const fnDescription = (action) => {
  it('Deve atualizar a data requests', async () => {
    const handler = jest.fn(action);
    await handler(dataRequest);
    const result = await getDataRequest();

    expect(result.status).toBe('done');
  });

  it('Deve chamar a Trigger_Process_req_data_requests', async () => {
    const triggerProcessReqDataRequests = functionMocks.mockBasicFunctions(
      'Trigger_Process_req_data_requests',
    );
    const handler = jest.fn(action);
    await handler(dataRequest);
    expect(triggerProcessReqDataRequests).toHaveBeenCalledTimes(1);
  });
};

// npm test -- ./test/unit/Trigger_req_data_request.test.js
bootstrapDatabase('Trigger_req_data_request', fnDescription, dataRequest);
