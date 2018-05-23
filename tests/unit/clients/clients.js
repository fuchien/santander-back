const ClientsServices = require('../../../src/services/clients/clients.service')

describe('Controllers: Clients', () => {
  describe('Get all Clients: getAllClients()', () => {
    it('should return a list of clients', () => {
      const Clients = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        clientName: 'Harry Potter',
        age: '25',
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z',
      }];

      td.when(Clients.findAll()).thenResolve(expectedResponse);
      const clientsServices = new ClientsServices(Clients);

      clientsServices.getAllClients()
        .then(response => expect(response.data).to.be.eql(expectedResponse))
    });
    it('should return a list of clients ERROR', () => {
      const Clients = {
        findAll: td.function(),
      };
      td.when(Clients.findAll()).thenReject(undefined);
      const clientsServices = new ClientsServices(Clients);

      clientsServices.getAllClients()
        .catch(err => expect(err).to.be.undefined)
    });
  });

  describe('POST client: postClient()', () => {
    it('should save a client', () => {
      const Clients = {
        create: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        clientName: 'Harry Potter',
        age: '25',
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z',
      }];

      const requestedResponse = {
        id: 1,
        clientName: 'Harry Potter',
        age: '25'
      };

      td.when(Clients.create(requestedResponse)).thenResolve(expectedResponse);
      const clientsServices = new ClientsServices(Clients);

      clientsServices.postClient(requestedResponse)
        .then(response => expect(response.data).to.be.eql(expectedResponse))
    });
    it('should save a client', () => {
      const Clients = {
        create: td.function(),
      };

      const requestedResponse = {
        id: 1,
        clientName: 'Harry Potter',
        age: '25'
      };

      td.when(Clients.create(requestedResponse)).thenReject(undefined);
      const clientsServices = new ClientsServices(Clients);

      clientsServices.postClient(requestedResponse)
        .catch(err => expect(err).to.be.undefined)
    });
  });

  describe('Get client by name: getClientByName()', () => {
    it('should return a client searched by Name', () => {
      const Clients = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        clientName: 'Harry Potter',
        age: '25',
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z',
      }];

      td.when(Clients.findAll({where : { clientName : { $like : `%Harry%` }}})).thenResolve(expectedResponse);
      const clientsServices = new ClientsServices(Clients);

      clientsServices.getClientByName(`Harry`)
        .then(response => {
          expect(response.data).to.be.eql(expectedResponse)
        })
    });
    it('should return a client searched by Name', () => {
      const Clients = {
        findAll: td.function(),
      };

      td.when(Clients.findAll({where : { clientName : { $like : `%Harry%` }}})).thenReject(undefined);
      const clientsServices = new ClientsServices(Clients);

      clientsServices.getClientByName(`Harry`)
        .catch(err => expect(err).to.be.undefined)
    });
  })
});