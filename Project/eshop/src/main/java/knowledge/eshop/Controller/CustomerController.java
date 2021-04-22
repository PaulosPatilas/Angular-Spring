package knowledge.eshop.Controller;

import knowledge.eshop.Entity.Customer;
import knowledge.eshop.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

    @Autowired
    private CustomerRepository repository;

    @GetMapping("/customers")
    public Iterable<Customer> getCustomers() {
        return (Iterable<Customer>) repository.findAll();
    }

    @PostMapping("/addcustomer")
    public Customer addUser(@RequestBody Customer cust) {
        return repository.save(cust);
    }

    @PutMapping("/updatecust/{id}/{name}/{email}")
    public void updateCustomer(@PathVariable("id") Long id, @PathVariable("name") String name, @PathVariable("email") String email){
        if(name == "undefined"){
           Customer customer = repository.CustById(id);
            name = customer.getName();
        }
        if(email == "undefined"){
            Customer customer = repository.CustById(id);
            email = customer.getEmail();
        }
         repository.updateCustomer(name,email,id);
    }

    @DeleteMapping  ("/customers/{id}")
    public void delete(@PathVariable("id") Long id){
          repository.deleteById(id);
    }
}
