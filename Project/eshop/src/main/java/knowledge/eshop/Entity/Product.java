package knowledge.eshop.Entity;

import javax.persistence.*;


@Entity
@Table(name = "product")
public class Product {

    @Id
    @Column(name = "product_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long PR_ID ;

    @Column(name = "product_name")
    private String product_name;

    @Column(name = "produc_desc")
    private String product_desc;

    @Column(name = "category")
    private Long category;

    @Column(name = "product_value")
    private Integer product_value;

    @Column(name = "product_capacity")
    private Integer product_capacity;

    protected Product(){}

    public Product(String product_name, int product_value, int product_capacity, String description,Long category){
        this.product_desc = description;
        this.product_capacity = product_capacity;
        this.product_name = product_name;
        this.product_value = product_value;
        this.category = category;
    }

    public Long getCategory() {

        return category;
    }

    public void setCategory(Long category) {
        this.category = category;
    }

    public void setDescription(String description) {
        this.product_desc = description;
    }

    public String getDescription() {
        return product_desc;
    }

    public Long getPR_ID() {
        return PR_ID;
    }

    public void setPR_ID(Long product_ID) {
        this.PR_ID = product_ID;
    }

    public Integer getPR_Capacity() {
        return product_capacity;
    }

    public void setPR_Capacity(int product_capacity) {
        this.product_capacity = product_capacity;
    }

    public String getPR_Name() {
        return product_name;
    }

    public void setPR_Name(String product_name) {
        this.product_name = product_name;
    }

    public int getPR_Value() {
        return product_value;
    }

    public void setPR_Value(int product_value) {
        this.product_value = product_value;
    }
}
