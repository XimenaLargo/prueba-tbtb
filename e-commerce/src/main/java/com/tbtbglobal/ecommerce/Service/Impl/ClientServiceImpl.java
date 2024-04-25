package com.tbtbglobal.ecommerce.Service.Impl;

import com.tbtbglobal.ecommerce.Model.Client;
import com.tbtbglobal.ecommerce.Repository.IClientRepository;
import com.tbtbglobal.ecommerce.Service.IClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements IClienteService {

    private final IClientRepository clientRepository;

    @Override
    public String createClient(Client client) {

        try {
            clientRepository.save(client);
        }
        catch (Exception e){
            return "No se pudo crear el cliente error: "+e.getMessage();
        }

        return "Se ha creado un nuevo cliente";
    }

    @Override
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @Override
    public Optional<Client> getClientById(Integer id) {
        return clientRepository.findById(id);
    }

    @Override
    public Optional<Client> updateClient(Integer id, Client client) {

        Optional<Client> searchedClient = clientRepository.findById(id);

        if (searchedClient.isPresent()){
            searchedClient.get().setName(client.getName());
            searchedClient.get().setLastName(client.getLastName());
            searchedClient.get().setPhone(client.getPhone());
            clientRepository.save(searchedClient.get());
        }
        return searchedClient;
    }

    @Override
    public String deleteClient(Integer id) {
        try {
            clientRepository.deleteById(id);
        }
        catch (Exception exception){
            return "No se pudo eliminar el cliente, error: " + exception.getMessage();
        }
        return "Se ha eliminado al cliente exitosamente";
    }
}
