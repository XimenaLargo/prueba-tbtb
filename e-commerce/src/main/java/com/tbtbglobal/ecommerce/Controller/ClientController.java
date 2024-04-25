package com.tbtbglobal.ecommerce.Controller;

import com.tbtbglobal.ecommerce.Model.Client;
import com.tbtbglobal.ecommerce.Service.Impl.ClientServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/clients")
@RequiredArgsConstructor
public class ClientController {

    private final ClientServiceImpl clientService;

    @PostMapping
    public ResponseEntity<String> saveClient(@RequestBody Client client){
        return ResponseEntity.ok(clientService.createClient(client));
    }

    @GetMapping
    public ResponseEntity<List<Client>> listClients(){
        return ResponseEntity.ok(clientService.getAllClients());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Client>> findClientById(@PathVariable Integer id){
        return ResponseEntity.ok(clientService.getClientById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Optional<Client>> updateClient(@PathVariable Integer id, @RequestBody Client client){
        return ResponseEntity.ok(clientService.updateClient(id,client));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteClient (@PathVariable Integer id){
        return ResponseEntity.ok(clientService.deleteClient(id));
    }
}
