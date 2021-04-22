package knowledge.eshop.Repository;

import knowledge.eshop.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT p FROM Product p")
    List<Product>getAllProds();

    @Query(value = "select p from Product p where p.category = :category")
    List<Product> findByCateg(@Param("category") Long category);

    @Query(value = "select p from Product p where p.PR_ID= :id")
    Product findId(@Param("id")Long id);

//    @Modifying
//    @Transactional
//    @Query(value = "UPDATE Product p SET p.PR_Capacity = :capacity - 1 where p.PR_ID= :id")
//    Product updCapacity(@Param("id") Long id, Integer capacity);
}
