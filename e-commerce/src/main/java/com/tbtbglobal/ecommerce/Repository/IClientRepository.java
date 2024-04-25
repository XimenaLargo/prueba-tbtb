package com.tbtbglobal.ecommerce.Repository;

import com.tbtbglobal.ecommerce.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClientRepository extends JpaRepository<Client , Integer> {
}
