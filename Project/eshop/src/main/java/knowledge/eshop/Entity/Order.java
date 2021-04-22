package knowledge.eshop.Entity;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Order")
public class Order {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long Id;




}
