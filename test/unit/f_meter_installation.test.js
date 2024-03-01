const { bootstrapDatabase, functionMocks } = require('../init');
const fMeterInstallation = require('../../functions/f_meter_installation');

const meterInfo = {
  meter_info: {
    meter_brand: '282',
    serial_number: '000002301150775',
    reading_date: { $date: '2023-09-08T17:50:00.000Z' },
    measurement_unit: 'kWh',
    measurement_type: 'real',
    measurement_reason: 'initial',
  },
};
const installation = {
  installation_code: 'PT0002000080277736MB',
  installation_info: {
    potency: '',
    tar: '',
    cycle: '',
    geographic_information: '',
    profile: '',
    estimative_method: '',
    grms: '',
    service_type: 'electricity',
    utility_type: 'electricity',
  },
};
let id = '';

beforeAll(async () => {
  const result = await fMeterInstallation(meterInfo, installation);
  id = result.toString();
});

const fnDescription = (action) => {
  it('Meter já existe', async () => {
    const fGetDatabase = functionMocks.f_get_database();
    const handler = jest.fn(action);
    const result = await handler(meterInfo, installation);
    const meterId = result.toString();
    expect(meterId).toBe(id);
    expect(fGetDatabase).toHaveBeenCalledTimes(1);
  });

  it('Cadastro novo meter', async () => {
    const meterInfoInexistente = {
      meter_info: {
        meter_brand: '281',
        serial_number: '000002301150548',
        reading_date: { $date: '2023-09-08T17:50:00.000Z' },
        measurement_unit: 'kWh',
        measurement_type: 'real',
        measurement_reason: 'initial',
      },
    };
    const installationInexistente = {
      installation_code: 'PT9905173429066620EX',
      installation_info: {
        potency: '',
        tar: '',
        cycle: '',
        geographic_information: '',
        profile: '',
        estimative_method: '',
        grms: '',
        service_type: 'electricity',
        utility_type: 'electricity',
      },
    };
    const fGetDatabase = functionMocks.f_get_database();
    const handler = jest.fn(action);
    const result = await handler(meterInfoInexistente, installationInexistente);
    const meterId = result.toString();
    expect(meterId).not.toBe(id);
    expect(fGetDatabase).toHaveBeenCalledTimes(4);
  });
};

// npm test -- ./test/unit/f_meter_installation.test.js
bootstrapDatabase(
  'f_meter_installation',
  fnDescription,
  meterInfo,
  installation,
);
