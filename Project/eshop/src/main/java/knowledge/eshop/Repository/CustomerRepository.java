package knowledge.eshop.Repository;

import knowledge.eshop.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {


    @Query(value = "SELECT c FROM Customer c")
    List<Customer> getAllCustomers();

    @Modifying
    @Transactional
    @Query(value = "UPDATE Customer cust SET cust.name = :name , cust.email = :email where cust.id = :id")
    void updateCustomer(@Param("name") String name, @Param("email") String email, @Param("id") Long id);

    @Query("SELECT c from Customer c where c.id = :id")
    Customer CustById(@Param("id") Long id);
}

