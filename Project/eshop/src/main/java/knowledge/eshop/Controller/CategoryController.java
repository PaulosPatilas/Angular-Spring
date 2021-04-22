package knowledge.eshop.Controller;


import knowledge.eshop.Entity.Category;
import knowledge.eshop.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

    @Autowired
    public CategoryRepository repository;

    @GetMapping("/categories")
    public List<Category> getCategories(){ return (List<Category>) repository.findAll();}
}
