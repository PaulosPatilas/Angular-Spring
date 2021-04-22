package knowledge.eshop.Controller;

import knowledge.eshop.Entity.Product;
import knowledge.eshop.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    public ProductRepository repository;

    @GetMapping("/products")
    public List<Product> getProducts(){
        return  (List<Product>) repository.getAllProds();
    }

   @GetMapping("/products/{Category}")
    public  List<Product> getCategoryProducts(@PathVariable("Category") Long Category){
        return (List<Product>) repository.findByCateg(Category);
    }

    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable("id") Long id){
            return repository.findId(id);
    }

//    @PutMapping("/updproduct/{id}")
//    public void updCapacity(@PathVariable("id") Long id){
//        Product prod = repository.findId(id);
//        Integer capacity = prod.getPR_Capacity();
//        repository.updCapacity(id , capacity);
//    }
}
