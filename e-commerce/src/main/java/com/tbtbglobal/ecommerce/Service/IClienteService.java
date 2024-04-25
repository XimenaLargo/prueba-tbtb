package com.tbtbglobal.ecommerce.Service;

import com.tbtbglobal.ecommerce.Model.Client;

import java.util.List;
import java.util.Optional;

public interface IClienteService {

    String createClient (Client client);

    List<Client> getAllClients();

    Optional<Client> getClientById (Integer id);

    Optional<Client> updateClient(Integer id, Client client);

    String deleteClient(Integer id);
}
